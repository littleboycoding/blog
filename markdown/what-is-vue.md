Vue.js ดีมั้ย มาลองเล่นดูกัน 🎉
3/5/2020
![รูปปก Vue.js](https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png)

เมื่อไม่นานมานี้ ได้โอกาสไปลองเล่น Vue.js (ซึ่งมันก็คือ MVC เหมือนกับ React, Angular นั่นแหละ) ก็เลยอยากจะมาเล่าประสบการณ์ใช้งานว่าเป็นยังไง 😁

## Vue.js คืออะไร
Vue.js คือ MVC ที่ทำงานเป็นตัวควบคุมเลเยอร์ในการแสดงผล ทำให้การออกแบบและเขียน UI/UX แบบมี Interactivity, Logic เยอะ ๆ นั้นง่ายขึ้น

ให้นึกภาพว่า หากต้องการสร้างหน้า Interface ที่มีการแสดงหลาย ๆ สถานะต่างกันออกไปขึ้นอยู่กับข้อมูลหรือสถานะ (state,props), เปลี่ยนแปลงข้อมูลเฉพาะส่วนที่มีการอัพเดธข้อมูลโดยไม่ต้องรีเฟรชเพจ (reactivity) ถ้าจะเขียนด้วย JavaScript เพียว ๆ คงจะเป็นงานที่ซับซ้อนมากแน่ ๆ 😱

สรุปแล้ว MVC (Vue.js, React, Angular) นั้นช่วยให้เว็บไซต์มีความเร็วสูง เพราะเว็บไซต์ไม่ต้องมีการรีเฟรชเพจเมื่อมีการ Interact เกิดขึ้น ให้ความรู้สึกเหมือนกับ Native App สร้างประสบการณ์การใช้งานที่ดีกับผู้ใช้งาน เพราะฉะนั้นมาลองใช้ Vue.js กันเถอะ 🎉

## ทำไมต้อง Vue.js
Vue.js ใช้งานง่ายที่สุดในหมู่ MVC ทุกตัว ด้วยความที่ Concept ของ Vue.js นั้นคือ Seperation of Concerns หมายความว่า Vue.js นั้นจะแบ่งคอนเซปต์ในแต่ละส่วนประกอบของการพัฒนาเว็บไซต์อย่างชัดเจน เมื่อเทียบกับ React และ Angular ทำให้ Vue.js เป็นมิตรกับนักพัฒนาเว็บไซต์ที่ไม่เคยใช้ MVC มาก่อน

ยกตัวอย่างเช่น React จะใช้ JSX เป็นรูปแบบในการเขียน (ถึงแม้จะเขียนด้วย JS แบบเพียว ๆ ก็ได้เถอะ แต่ไม่แนะนำ) จากนั้นใช้ transpiler อย่าง babel ในการแปลงให้กลับมาเป็น syntax ปกติ ไหนจะ CSS Modules ที่จะเปลี่ยนวิธีการเพิ่ม CSS แปลกจากวิถีดั้งเดิมอีก

Vue.js ใช้กระบวนการพัฒนาแบบเดิมทุกอย่าง เพียงแนบไฟล์สคริป เขียน HTML, JavaScript, CSS ตามปกติ ก็ได้แล้ว 😍

ส่วน Performance Vue.js นั้นก็ไม่ได้น้อยไปกว่า React เลย ⚡

*อ้างอิงจาก https://stefankrause.net/js-frameworks-benchmark8/table.html*

## Getting Start
**ผมขอถือว่าผู้อ่านพอจะมีความรู้ Html, JavaScript, CSS มาแล้วนะครับ หากยังไม่มี แนะนำให้ลองไปศึกษาดูก่อนครับ 🤓**

Guide นี้จะอธิบายหลักการทำงานเบื้องต้นที่จะพอให้เห็นวิธีการใช้งานโดยรวม หากต้องการศึกษาอย่างจริงจัง แนะนำ [เว็บไซต์หลัก](https://vuejs.org) เลยครับ Documentation ทำออกมาได้ดีมากๆ 📖

มาเริ่มกันเลยดีกว่า ไปยัง [Installation - Vue.js](https://vuejs.org/v2/guide/installation.html) สำหรับไฟล์สคริป ซึ่งในกรณึศึกษาเราจะใช้ CDN แบบเวอร์ชั่นล่าสุด
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

สร้างไฟล์ index.html ขึ้นมาโดยแนปสคริปที่พึ่งได้มาไปด้วย โครงสร้างก็จะประมาณนี้
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Vue Learning<title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<span>ตรงนี้เราจะให้มันแสดงข้อความตาม Data ที่เรากำหนดไว้ด้วย Vue.js</span>
		<div>
	</body>
</html>
```

ได้เวลาเพิ่ม JavaScript เพื่อใช้งาน Vue.js
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Vue Learning<title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<span>Welcome to {{title}}</span>
		<div>
	</body>
	<script>
		const vm = new Vue({
			el: "#app",
			data: {
				title: "Vue Learning"
			}
		})
	</script>
</html>
```

ผลลัพท์ก็ประมาณนี้ 🎉

<iframe width="100%" height="300" src="//jsfiddle.net/littleboycoding/3pjq865v/1/embedded/result,js,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

เราทำอะไรไปบ้าง
- ในตอนนี้เราได้สร้าง Instance ของ Vue ขึ้นมา
- เราให้ Vue ไปควบคุม div ที่มีไอดี app ("#" หมายถึง id และ "." หมายถึง class)
- เรากำหนดข้อมูลขึ้นมา (data) ที่มีชื่อว่า title มีค่าเท่ากับ "Vue Learning"
- ในส่วนของ html ให้สังเกตที่ {{title}} ตรงนี้เราเรียกว่า template ซึ่งหมายถึงการดึงค่าที่มีชื่อว่า title จาก Vue ที่เรากำหนดไว้มาใช้

#### มาลองเพิ่ม event กันดีกว่า ⌨

ใน Vue.js จะมี attribute พิเศษเราเรียกว่า directive ซึ่งจะนำหน้าด้วย v: ตามด้วยชื่อคำสั่ง ยกตัวอย่างเช่น v:on, v:for, v:if, v:bind และอีกหลายๆคำสั่ง

ในตอนนี้เราจะใช้ v:on เพื่อสร้าง event handler เมื่อมี event เกิดขึ้น เช่นเมื่อมีการคลิ๊ก มีการนำเมาส์มาชี้ และอื่นๆ

เราจะมาลองสร้างเกม Cookie Clicker 🍪 แบบราคาถูกกัน (Cookie Cliker เป็นเกมแนวที่คลิ๊กเพื่อสะสมจำนวนคุ๊กกี้ไปเรื่อยๆ)

เปลี่ยนโครงสร้าง HTML เล็กน้อย เพื่อแสดงถึงจำนวนคุ๊กกี้ที่มีปัจจุบัน

```html
<div id="app">
	<span>Cookie: {{cookies}}</span>
<div>
```

เพื่ม cookies ลงไปใน data, จากนั้นเราจะทำการเพิ่มของใหม่ เราเรียกว่า methods 🖱
```javascript
let vm = new Vue({
	el: "#app",
	data: {
		cookies: 0
	},
	methods: {
		clicked() {
			this.cookies += 1
		}
	}
})
```

จะเห็นได้ว่า เราได้สร้าง event handler ชื่อว่า clicked ขึ้นมา ซึ่งจะทำการบวกจำนวนคุ๊กกี้ที่มีปัจจุบันไปทีละ 1, แต่ในตอนนี้ยังคงทำอะไรไม่ได้ เพราะเรายังไม่ได้สร้างปุ่มที่ไว้ใช้สำหรับการคลิ๊กเพื่อเพิ่มคุ๊กกี้ 🍪

ได้เวลาเพิ่มปุ่ม ที่เมื่อคลิ๊กจะทำการ call ไปที่ฟังก์ชั่น clicked ที่เราได้สร้างไว้โดยใช้ v:on ซึ่ง syntax จะมีลักษณะประมาณนี้

```html
<div id="app">
	<span>Cookie: {{cookies}}</span> <button v-on:click='clicked'>Click me</button>
</div>
```

ในตอนนี้เกมเราก็สามารถเล่นได้แล้ว Hooray !!! 🎉🎉🎉

<iframe width="100%" height="300" src="//jsfiddle.net/littleboycoding/7jqg8k5v/1/embedded/result,js,html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## สรุป
Vue.js ทำให้การเขียน UI/UX แบบมี Logic นั้นเป็นเรื่องที่ง่าย และสนุกมากๆ 😆 จำนวนโค้ดที่เขียนไปไม่ได้เยอะอะไรเลย เมื่อเทียบกับ Library ตัวอื่นๆ

จริงๆแล้ว Vue.js ยังมีความสามารถอีกมากมายเช่น directive v:if ที่ทำให้เราสามารถ render แบบ logical ได้ง่ายๆ โดยไม่ต้องมาทำการสร้าง if-else statement

Vue.js นั้นไม่ได้ Backed โดยบริษัทขนาดใหญ่ เหมือนกับ React (Facebook), Angular(Google) ทำให้ความ Popularity ให้ช่วงเริ่มต้นสู้ตัวอื่นไม่ได้ แต่ในตอนนี้ Vue.js ได้กลายเป็น MVC ที่มีการกดดาวเยอะนำกว่าใครไปแล้ว ⭐ [Vue.js repos](https://github.com/vuejs/vue)

---

แหล่งข้อมูล
- [React](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)
