let burgerMenu = document.querySelector('.burger-menu')
let burgerClose = document.querySelector('.burger-close')
let burger = document.querySelector('.burger')
let burgerUl = document.querySelectorAll('.burger-ul')

burger.addEventListener('click', () => {
	burgerMenu.classList.toggle('ham-burger')	
	overly.classList.remove('hidden')
})

burgerClose.addEventListener('click', () => {
	burgerMenu.classList.toggle('ham-burger')
	overly.classList.add('hidden')
})

burgerUl.forEach((item) => {
	item.addEventListener('click', () => {
		burgerMenu.classList.toggle('ham-burger')	
		overly.classList.add('hidden')
	})
})