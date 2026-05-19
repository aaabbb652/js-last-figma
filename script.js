
let data = [];
let products = [];
let carts = document.querySelector(".carts-show") 
let cart = document.querySelector(".carts-list")


let basket = JSON.parse(localStorage.getItem('myBasket')) || [];

async function getData() {
    try {
        const response = await fetch("http://localhost:3000/product");

        if (!response.ok) {
            throw new Error("Malumot olishda hatolik" + response.status);
        }
        products = await response.json();
        renderProducts(products);
    }
    catch (error) {
        console.error("Xatolik yuz berdi :", error)
    }
}

const renderProducts = (data) => {
    cart.innerHTML = ""
    data.forEach((product, index) => {
        cart.innerHTML += `
        <li class="list_item">
            <img class="cart-img" src="${product.img}" alt="${product.title}" />
            <h2 class="title">${product.title}</h2>
            <span class="price">${product.price}</span>
            <!-- Tugmaga onclick hodisasi beramiz va unga mahsulotning indeksini uzatamiz -->
            <button class="cart-btn" onclick="addToBasket(${index})">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </li>`;
    });
}


function addBasket(index) {
    const selProduct = products[index];

    basket.push(selProduct);

    localStorage.setItem('myBasket', JSON.stringify(basket));


}

getData();













