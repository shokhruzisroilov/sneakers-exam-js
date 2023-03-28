//shoppingCart
let shoppingIcon = document.getElementById('shopping-icon')
let shoppingCart = document.getElementById('shopping-cart')
let minusCount = document.getElementById('minus-count')
let plusCount = document.getElementById('plus-count')
let count = document.getElementById('count')
let cost = document.getElementById('cost')
let total = document.getElementById('total')
let cartBtn = document.getElementById('cart-btn')
let resCount = document.getElementById('res-count')

shoppingIcon.addEventListener('click', () => {
	shoppingCart.classList.toggle('toggle')
})
// window.addEventListener('click', (e) => {
// 	if (e.target === shoppingCart){
// 		shoppingCart.classList.remove('toggle')
// 	}
// })

let oneSale = 0.5
let oneCost = 125
let sneaker = 15
let counter = 0

function shopCart () {
	count.textContent = counter
	cost.textContent = `$${counter * oneCost}.00`
	total.textContent = `$${counter * oneCost * oneSale}.00`

	cartBtn.addEventListener('click', (e) => {
		resCount.textContent = counter
		shoppingCart.innerHTML = `
	<h3>Cart</h3>
						<div class="hr__cart"></div>
						<div id='res-product' class="product">
								<img class='product-img' src="img/product-img.png" alt="product img">
								<span>
										<h4>Fall Limited Edition Sneakers</h4>
										<div class='span'>
												<p>$${oneCost} x${counter}</p>
												<b>$${counter * oneCost * oneSale}.00</b>
										</div>
								</span>
								<img class='delete-icon' src="img/delete-icon.svg" alt="delete-icon">
						</div>
						<button><p>Checkout</p></button>
	`
	})
}

plusCount.addEventListener('click', () => {
	if(counter < sneaker){
		counter += 1
	}
	shopCart()
})
minusCount.addEventListener('click', () => {
	if (counter <= sneaker && counter >0) {
		counter -= 1
	}
	shopCart()
})


