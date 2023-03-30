let sliderModal = document.querySelector('.slider__modal')
let overly = document.querySelector('.overly')
let closeBtn = document.querySelector('.close-btn')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')
let slides = document.querySelectorAll('.slider-inner .slide')
let slidesInner = document.querySelector('.slider-inner')
let slidesLink = document.querySelector('.slide-link')
let slidesParent = document.querySelectorAll('#slide-parent')

function removeHidden(){
	sliderModal.classList.remove('hidden')
	overly.classList.remove('hidden')

}
function addHidden(){
	sliderModal.classList.add('hidden')
	overly.classList.add('hidden')
	burgerMenu.classList.toggle('ham-burger')	
}

tabContent.forEach((item) => {
	item.addEventListener('click', removeHidden)
})
overly.addEventListener('click', addHidden)
closeBtn.addEventListener('click', addHidden)

//slider Counter
let slideCount = 0

slidePrev.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length -1
	}else{
		slideCount--
	}
	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})

slideNext.addEventListener('click', () => {
	if (slideCount < slides.length - 1) {
		slideCount++
	} else {
		slideCount = 0
	}
	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})

