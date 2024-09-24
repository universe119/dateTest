const screen = document.querySelector(".screen");
const [spanHr, spanMin, spanSec] = title.children;

// 1초마다 시간 출력 반복
setInterval(() => {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	em.innerText = apm;
	spanHr.innerText = hr;
	spanMin.innerText = min;
	spanSec.innerText = sec;
}, 1000);
