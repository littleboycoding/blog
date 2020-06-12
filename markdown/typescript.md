---
title: TypeScript คืออะไร ทำไมใครๆก็ใช้กัน 📖
date: 13/6/2020
image: https://miro.medium.com/max/2800/0*jc54paE6vtPGpoKy.png
imageAlt: TypeScript thumbnail
---

บางคนอาจเคยเห็นหรือเคยได้ยิน TypeScript มากันบ้างแล้ว แต่ก็ไม่รู้ว่าจริงๆมันคืออะไรกันแน่ เกี่ยวข้องอะไรกับ JavaScript แล้วมันจะมาช่วยอะไรเราได้ ในบล็อกนี้เราจะมาหาคำตอบกัน 🤓

บล็อกนี้ส่วนมากจะเกริ่นนำเบื้องต้นว่า TypeScript คืออะไร หากต้องการเรียนเชิงลึกเพื่อนำไปใช้จริงแนะนำให้อ่านได้จาก [typescript.org](https://www.typescriptlang.org/) เลยครับผม 💻

TypeScript นั้นจริงๆแล้วก็คือภาษา JavaScript นั้นแหละ แต่จะบอกว่า 100% ก็คงไม่ใช่

**แล้ว TypeScript มันคืออะไรกันล่ะ ?**

TypeScript คือเลเยอร์ที่ทับอยู่บน JavaScript เพื่อเพิ่มความสามารถให้กับ JavaScript อีกที ซึ่งจะช่วยให้กระบวนการพัฒนานั้นดีขึ้น สนุกขึ้น และเป็นระบบมากขึ้น !

### ยังไง 😕

จริงๆแล้ว TypeScript มีหลายความสามารถนะ แต่ความสามารถหลักที่เป็นแรงจูงใจให้สร้าง TypeScript ขึ้นมาก็คือ Type-Checking

Type-Checking คือความสามารถในการตรวจทานความถูกต้องของประเภทค่าตัวแปรต่างๆ

**พิจารณาโค้ดต่อไปนี้**

ฟังก์ชั่นนี้จะทำการลบเลข จากเลขสองเลขที่รับเข้ามา (a, b)

```javascript
function minus(a, b) {
	return a - b;
}

console.log(minus("5", 6)); //NaN
```

จะเกิดอะไรขึ้นถ้ารันโค้ดจากด้านบน ? คำตอบคือ _NaN_ (Not a Number) !

ทำไมกันล่ะ เพราะว่าพารามิเตอร์ a ที่เราส่งเข้าไปไม่ใช่ตัวเลข (สังเกตว่ามีการใส่ Quote เข้าไป ทำให้กลายเป็น String)

แน่นอนว่า Error นี้จะไม่แสดงตอนที่เรากำลังเขียนอยู่แน่นอน แต่จะมาขึ้นตอน Runtime หรือตอนที่เรากำลังรันอยู่นั่นเอง ทำให้แทนที่จะแก้ตั้งแต่ตอนกำลังเขียนต้องมาลองรันทดสอบก่อนจึงเจอบั๊กแล้วค่อยทำการแก้ไข

TypeScript นั้นเข้ามาเพื่อแก้ไขปัญหาเหล่านี้ !

**พิจารณาโค้ดต่อไปนี้**

ฟังก์ชั่นทำงานเดียวกันกับด้านบน + TypeScript

```javascript
function minus(a: number, b: number) {
	return a - b;
}

console.log(minus("5", 6)); //"5" is not number
```

ให้สังเกตที่ตัวพารามิเตอร์ (a: number, b: number) คือ Type annotations หมายความว่าพารามิเตอร์ a และ b สามารถรับได้เฉพาะตัวเลขเท่านั้น

ทำให้ทีนี้หากเราใช้ Text Editor หรือ IDE อย่างเช่น [Visual Studio Code](https://code.visualstudio.com) ที่รองรับ TypeScript Error ก็จะแจ้งที่บรรทัดที่ 5 ทันที เพื่อให้ทราบว่าค่าที่ส่งเข้าไปในฟังก์ชั่น minus นั้นไม่ถูกต้อง 😁

### ความสามารถอื่นๆ ✏️

-   **Transpile** - TypeScript นั้นยังช่วยให้เราเขียน JavaScript ทุกเวอร์ชั่นได้โดยไม่ต้องกลัวเรื่องการ Support เพราะ TypeScript เมื่อถูก compile แล้วนั้น จะ transpile ไปยังสภาพแวดล้อมที่รองรับเพียง ES3 ก็ยังได้

-   **Auto-Completion**, **Hinting** - TypeScript เพิ่มความสามารถในการ Auto-Completion, อธิบายประเภทค่าที่รองรับ ทำให้การนำโค้ดหลายๆตัวมาประกอบกันนั้นเข้าใจได้โดยง่าย (โดยเฉพาะโค้ดที่เราไม่ได้เขียนขึ้นเอง อย่างเช่น Library)

-   **Refactoring** - ช่วยให้การ Refactor โค้ดนั้นมีความสามารถมากกว่าแค่การ Rename ค่าตัวแปรตัวใดตัวแปรนึง ในไฟล์ ๆ เดียว

![WOW !](https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif)

## "มันทำงานยังไง และ Syntax แปลกๆแบบนี้มันจะรันได้หรอ ? 🤔"

ถูกต้อง ! Syntax แบบนี้ไม่ใช่ Syntax JavaScript ที่ถูกต้องแน่นอน และไม่สามารถรันได้โดยตรง จำเป็นต้อง compile สะก่อน (ให้อารมณ์เหมือนเขียนภาษา c อยู่เลยแฮะ)

TypeScript มีแพคเกจติดตั้งมาให้ที่ชื่อว่า tsc ซึ่งมีหน้าที่ใช้ในการ compile ไฟล์นามสกุล .ts ให้กลายเป็น .js จากนั้นจึงจะสามารถนำไปรันได้อย่างปกติ

![ภาพจาก https://capuanodanilo.com/2019/06/11/how-to-configure-node-js-and-typescript-into-your-environment-to-develop-powerapps-component-frameworks-pcf/](https://crm365site.files.wordpress.com/2019/06/1.png)

เช่นจากไฟล์ main.ts

```typescript
let name: string;
let age: number;
```

นำไปคอมไพล์ด้วย tsc (tsc main.ts) จะได้

```javascript
let name;
let age;
```

ทีนี้ก็ได้ไฟล์ JavaScript ที่สามารถนำไปรันได้แล้ว ! Hooray 🎉

---

### Keep in Mind 🧠

ถ้าสังเกตจากผลลัพท์ที่ได้จากการ compile ด้านบน จะสังเกตได้ว่า type annotation นั้นได้หายไปแล้ว มันหมายความว่า type-checking นั้นจะมีผลแค่ในระหว่างการพัฒนาเท่านั้น แต่ไม่มีผลในตอน Runtime แต่อย่างใด

## สรุป

TypeScript คือส่วนเสริมของ JavaScript ที่เพิ่มความสามารถในกระบวนการพัฒนา ซึ่งหลักๆเลยก็คือ Statically typing และยังมีความสามารถอีกหลายๆอย่าง ซึ่งในท้ายที่สุดก็ต้องถูกแปลงกลับมาเป็น JavaScript อยู่ดี

**ถามว่าสมควรใช้ TypeScript ในตอนไหน** สำหรับผมคงคิดว่าเป็นตอนที่กำลังพัฒนาโครงการใหญ่ๆ หรือมีสมาชิกทีมหลายคน เพราะหากเป็นเพียงโปรเจคเล็กๆ จะเป็นภาระให้เขียนเพิ่มแทนโดยไม่จำเป็น (เนื่องจากความสัมพันธ์ภายในโค้ดจะน้อย) 🤓

---

แหล่งข้อมูล

-   [TypeScript](https://www.typescriptlang.org/)
-   [Visual Studio Code](https://code.visualstudio.com/)
