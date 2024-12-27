const cartItems = document.querySelectorAll(".cart-item");

cartItems.forEach((item) => {
    const priceElement = item.querySelector(".unit-price");
    const quantityElement = item.querySelector(".quantity");
    const plusBtn = item.querySelector(".fa-plus-circle");
    const minusBtn = item.querySelector(".fa-minus-circle");
    const trashBtn = item.querySelector(".fa-trash-alt");
    const likeBtn = item.querySelector(".fa-heart")

    let quantity = parseInt(quantityElement.textContent);
    let price = parseInt(priceElement.textContent.replace(" $", ""));

    const plusTotal = () => {
        const totalAmount = document.querySelector('.total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total + price
    }

    const minusTotal = () => {
        const totalAmount = document.querySelector('.total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - price
    }

    plusBtn.addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
        plusTotal()
    })

    minusBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity -= 1;
            quantityElement.textContent = quantity;
            minusTotal()
        }
    })

    trashBtn.addEventListener('click', () => {
        const itemTotal = price * quantity;
        const totalAmount = document.querySelector(".total-amount");
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - itemTotal;
        item.remove();
    })

    likeBtn.addEventListener('click', () => {
        const likeStyles = likeBtn.getAttribute('class');
        if(likeStyles.includes('fas')){
            likeBtn.setAttribute('class', 'fa-regular fa-heart')
        } else {
            likeBtn.setAttribute('class', 'fas fa-heart')
        }
    })


})