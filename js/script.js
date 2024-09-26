const main = document.querySelector("main");
const numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");

setInterval(() => {
	changeTheme();
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

// 시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr >= 13) {
		am.classList.remove("on");
		pm.classList.add("on");
		//13시가 넘어설때 12를 뺀 값을 다시 hr변수에 재할당
		hr = hr - 12;
	} else {
		pm.classList.remove("on");
		am.classList.add("on");
	}
	return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
	// 전달받은 첫번째 인수값이 숫자면 앞에 "0"붙여 출력 그렇지 않으면 그냥 값 출력
	num = num < 10 ? "0" + num : num;
	// 각 span배열에서 두번쨰 인수로 전달받은 index번째 요소에 위에서 가공한 num값을 출력
	numbers[index].innerText = num;
}

// 시간에 따른 테마 변경 함수
function changeTheme() {
	const hr = new Date().getHours();

	const themeData = [
		{ className: "morning", period: [5, 11] },
		{ className: "afternoon", period: [11, 16] },
		{ className: "evening", period: [16, 20] },
		{ className: "night", period: [20, 5] }
	];

	main.className = "";

	themeData.forEach(data => {
		if (data.className != "night") {
			if (hr >= data.period[0] && hr < data.period[1]) main.classList.add(data.className);
		} else {
			if (hr >= data.period[0] || hr < data.period[1]) main.classList.add(data.className);
		}
	});

	// if (hr >= 5 && hr < 11) main.classList.add("morning");
	// if (hr >= 11 && hr < 16) main.classList.add("afternoon");
	// if (hr >= 16 && hr < 20) main.classList.add("evening");
	// if (hr >= 20 || hr < 5) main.classList.add("night");
}

//미션 - changeTheme함수 안쪽에 특정 정보값을 배열로 분리한 뒤, 조건식 부분을 반복문 처리해보기
