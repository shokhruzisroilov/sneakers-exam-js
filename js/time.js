let deadline2 = '2023-04-05'

function getTimerData(dl) {
	let timer = Date.parse(dl) - Date.parse(new Date()),
		days = Math.floor(timer / (1000 * 60 * 60 * 24)),
		hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
		minutes = Math.floor((timer / (1000 * 60)) % 60),
		seconds = Math.floor((timer / 1000) % 60)

	if (timer < 0) {
		return {
			t: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
	}
	return {
		t: timer,
		days,
		hours,
		minutes,
		seconds,
	}
}

function showTimer(showDl, parentSelector) {
	let parentEl = document.querySelector(parentSelector),
		daysEl = parentEl.querySelector('.days'),
		hoursEl = parentEl.querySelector('.hours'),
		minutesEl = parentEl.querySelector('.minutes'),
		secondsEl = parentEl.querySelector('.seconds')

	let timerId = setInterval(updateTimer, 1000)

	updateTimer()

	function updateTimer() {
		let timer = getTimerData(showDl)
		daysEl.innerHTML = addZero(timer.days)
		hoursEl.innerHTML = addZero(timer.hours)
		minutesEl.innerHTML = addZero(timer.minutes)
		secondsEl.innerHTML = addZero(timer.seconds)

		if (timer.t < 0) {
			clearInterval(timerId)
		}
	}
}

function addZero(num) {
	if (num < 10) {
		return `0${num}`
	} else {
		return num
	}
}

showTimer(deadline2, '#timer')
