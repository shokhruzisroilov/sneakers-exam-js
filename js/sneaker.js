//sneakers tab
let tabLink = document.querySelectorAll('.tab-link')
let tabContent = document.querySelectorAll('.tab')
let tabLinkParent = document.querySelector('#link-parent')

addActiveClass(0)
function removeActiveClass() {
	tabContent.forEach(item => {
		item.classList.remove('tab_active')
	})
	tabLink.forEach(item => {
		item.classList.remove('tab-link_active')
	})
}
function addActiveClass(index) {
	tabContent[index].classList.add('tab_active')
	tabLink[index].classList.add('tab-link_active')
}
tabLinkParent.addEventListener('click', (e) => {
	tabLink.forEach((link, i) => {
		if(e.target === link){
			removeActiveClass()
			addActiveClass(i)
		}
	})
})



