// mobile Slider
let slidesMobile = document.querySelectorAll('.slider-mobile .slide-mobe')
let prevBtn = document.querySelector('.slide-prev-mobile')
let nextBtn = document.querySelector('.slide-next-mobile')
let slideCountMobile = 0

prevBtn.addEventListener('click', () => {
	if(slideCountMobile <= 0){
		slideCountMobile = slidesMobile.length - 1
	}else{
		slideCountMobile--
	}

	hideSlide()
	showSlide(slideCountMobile)
	console.log('prev')
})

nextBtn.addEventListener('click', () => {
	if(slideCountMobile >= slidesMobile.length - 1){
		slideCountMobile = 0
	}else{
		slideCountMobile++
	}
	
	hideSlide()
	showSlide(slideCountMobile)
})


function showSlide(i = 0){
	slidesMobile[i].classList.add('active')
}

function hideSlide(){
	slidesMobile.forEach((slide) => {
		slide.classList.remove('active')
	})
}

hideSlide()
showSlide()