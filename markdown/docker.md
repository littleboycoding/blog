---
title: มาทำให้การ Development & Deploy ง่ายขึ้นด้วย Docker กัน 🐋
date: 3/10/2020
image: https://miro.medium.com/max/3172/0*Xe45dm0Cpl_oAHWa.png
imageAlt: รูปปกจาก http://km.li.mahidol.ac.th/wp-content/uploads/2018/12/docker-cloud-twitter-card.png
---

หลาย ๆ คนน่าจะรู้จักการ Virtualization กันมาแล้ว เช่นการจำลองระบบปฏิบัติการ Windows, Linux, Android มาเพื่อทดสอบระบบ หรือรัน Service แยก ซึ่งการจำลองระบบมาทั้งหมดมาเพียงเพื่อรัน Service ตัวเดียวนั้นเป็นการใช้ทรัพยากรที่เยอะมาก และการตั้งค่า การติดตั้งระบบนั้นเป็นกระบวนการที่ยุ่งยากในการจัดการสำหรับ Developer อย่างเรามาก

## **Docker** นั้นเกิดมาเพื่อแก้ปัญหาเหล่านี้ !

# ยังไงกัน ?

Docker คือการ Containerization โดยไอเดียจะคล้าย ๆ กับการ Virtualization หรือการจำลองระบบ แต่เป็นเพียงการจำลองเฉพาะส่วนที่จำเป็นในรันเซอร์วิสหรือแอพลิเคชั่นเรา

![Containerization vs Virtualization จาก https://www.electronicdesign.com/technologies/dev-tools/article/21801722/whats-the-difference-between-containers-and-virtual-machines](https://miro.medium.com/max/595/1*tvJzbXoDrpLLI6-vSTrxPw.png)

[สามารถอ่านต่อเชิงลึกเกี่ยวกับ Containerization vs Virtualization จากที่นี่](https://medium.com/@krishsoftware1991/containerization-and-virtualization-7ac59b788268) เขียนเรียบเรียงไว้ดีมาก ❤

# ส่วนประกอบสำคัญของ Docker

![Docker component ภาพจาก https://medium.com/platformer-blog/practical-guide-on-writing-a-dockerfile-for-your-application-89376f88b3b5](https://miro.medium.com/max/2520/0*D4DUZT7y-JD2qyWP.png)

## Dockerfile 🐋

เป็นไฟล์ที่จะกำหนดโครงสร้างของ Images ที่เรากำลังจะสร้าง เช่น สภาพแวดล้อม (ระบบปฏิบัติการ หรือจะดึงจาก Template บน Registry ก็ทำได้ง่าย ๆ) การ Copy ไฟล์ และการรัน CMD โดยอัติโนมัติ

## Images 💾

เป็นเทมเพลตที่ประกอบไปด้วยสภาพแวดล้อมและไฟล์แอพพลิเคชั่นที่ตั้งค่าไว้แล้วภายใน ซึ่งสร้างขึ้นตาม Dockerfile ที่เราเขียน ซึ่งสามารถนำไปรันเป็น Container ได้ทันที

## Container 📦

เป็นเลเยอร์ที่นำเอา Images มารัน ซึ่งสภาพแวดล้อม การกำหนดค่า และแอพพลิเคชั่นทุกอย่างจะเหมือนกับตอน Development ช่วยลดภาระการตั้งค่าระบบบนเซิร์ฟเวอร์

# ตัวอย่างซักหน่อย !

ในตัวอย่างเราจะสร้างเว็บเซิร์ฟเวอร์ที่จะตอบกลับมาว่า Hello, World แบบง่าย ๆ ด้วย Nodejs, Express และ Deploy บน Docker

**ต้องติดตั้ง Docker บนคอมพิวเตอร์เราก่อนนะ วิธีการสามารถดูได้จากเว็บไซต์หลักเลย [Docker.com](https://docker.com)**

init โปรเจคแล้วติดตั้ง express ด้วย

```bash
$ npm init -y
$ npm install --save express
```

สร้างไฟล์ index.js

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello, World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});
```

เพิ่ม start ใน scripts package.json

```json
"scripts": {
    "start": "node index.js"
}
```

ลองรันดู **npm start**

![Docker hello !](/docker-hello.png)

โอเคผ่าน ! 🎉 ต่อไปเราจะทำการสร้างไฟล์ Dockerfile และ build images ขึ้นมา

สร้างไฟล์ Dockerfile

```docker
FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV PORT=8080
CMD [ "npm", "start" ]
```

- FROM คือ images ต้นแบบที่เราจะใช้ (ซึ่งหากไม่มีใน local ก็จะไปดึงจาก Docker Hub โดยอัติโนมัติ)
- WORKDIR คือโฟลเดอร์ที่เรากำลังจะ operation เหมือนกับการ cd เข้าไปยังโฟลเดอร์หนึ่ง
- COPY คือการ COPY ไฟล์จากเครื่องเราไปใส่ไว้ใน images
- RUN รันคำสั่ง
- ENV คือการกำหนดค่า enviroment variable
- CMD คือการรันคำสั่ง รูปแบบ exec

จะเห็นได้ว่ากระบวนการก็เหมือนกับการไล่เรียงการรันทีละ Command คือการ COPY และ INSTALL และ RUN

หากเรา build ตอนนี้การ COPY จะทำการคัดลอกไฟล์ทั้งหมดมา ซึ่งเราไม่ต้องการโฟลเดอร์ node_modules มาด้วย เราจึงต้องสร้างไฟล์ .dockerignore มาเพื่อกำหนดไฟล์ที่ไม่ต้องการคัดลอกได้ (คล้ายกับ .gitignore)

สร้างไฟล์ .dockerignore

```.dockerignore
node_modules
```

ทุกอย่าง Set แล้ว เริ่ม build ด้วย

```bash
$ docker build -t docker-example-world-example .
```

คำสั่งด้านบนจะสั่งให้ Docker สร้าง Images ตามไฟล์ Dockerfile ที่อยู่ในโฟลเดอร์ปัจจุบัน

ถึงขั้นตอนสุดท้ายแล้ว คือรัน Container

```bash
$ docker run --rm -p 8080:8080 docker-example-world-example
```

![Docker running container](/docker-hello.png)

## อะไรคือ -p 8080:8080 ❓

มันคือการ expose port จาก container สู่ localhost หากไม่กำหนดจะไม่สามารถเข้าถึงได้จาก localhost

![Container !](https://media.giphy.com/media/6AFldi5xJQYIo/giphy.gif)

# สรุป 🗞

เราได้เรียนรู้ว่า Docker คืออะไรแล้วจะใช้งานมันอย่างไร เห็นได้ว่า Docker จะทำให้กระบวนการ Deploy นั้นง่ายขึ้นมากมายหลายกอง เพียงแค่สร้าง Images แล้วนำไปรัน ไม่ต้องกังวลเรื่องสภาพแวดล้อมและแพคเกจที่ไม่ตรงกันอีกต่อไป

---

### แหล่งค้นคว้า/อ้างอิง

- [Docker's website](https://docker.com)
- [DockerHub](https://hub.docker.com/)
- [Demo code](https://github.com/littleboycoding/docker-example-hello-world)
