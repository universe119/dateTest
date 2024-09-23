// 미션1 - new Date()를 활용해서 시간,분,초를 각각 span안에 출력
// 미션2 - 현재 시간이 13시를 넘기면 em안쪽의 'am'을 pm'로 출력
const title = document.querySelector("h1");
const [em, spanHr, spanMin, spanSec] = title.children;

const now = new Date();
const hr = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
let apm = hr < 13 ? "am" : "pm";

em.innerText = apm;
spanHr.innerText = hr;
spanMin.innerText = min;
spanSec.innerText = sec;

/* 시간 실습 전
console.log("test");
  new Date() : 시간관련 인스턴스 객체를 생성해주는 생성자
  시간관련 인스턴스 객체 : 다양한 시간관련

*/
/*
const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
const now = new Date();
console.log(now);

// 년도값 반환
console.log(now.getFullYear());

// 월 반환 (0부터 영어로 순서값을 반환함)
console.log(month[now.getMonth()]);

// 일
console.log(now.getDate());

// 요일 (순서값 외국에선 일주일시작을 월요일로 봐서 1이 나옴)
console.log(days[now.getDay()]);

// 시간
console.log(now.getHours());

// 분
console.log(now.getMinutes());

// 초
console.log(now.getSeconds());

// 우리나라 시간대를 전세계 표준시를 변환해서 반환
// const gmtNow = no.toGMTString();
const gmtNow = now.toUTCString();
console.log(gmtNow);
*/
