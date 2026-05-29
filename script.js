
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







const fmain = document.querySelector(".main1")
const smain = document.querySelector(".main2")

const basketBtn = document.querySelector(".head-sv")

fmain.style.display = "block"
smain.style.display = "none"

basketBtn.addEventListener("click", () => {

    if (fmain.style.display == "block") {

        fmain.style.display = "none"
        smain.style.display = "block"

    } else {

        fmain.style.display = "block"
        smain.style.display = "none"

    }

})




const loginBtn = document.querySelector(".login")
const loginPage = document.querySelector(".login-page")

loginBtn.addEventListener("click", () => {

    loginPage.style.display = "flex"

})


const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", () => {

    loginPage.style.display = "none"

})








const tbody = document.querySelector("tbody")

let basket1 = JSON.parse(localStorage.getItem("myBasket")) || []

function renderBasket(){

    tbody.innerHTML = ""

    basket1.forEach((item) => {

        tbody.innerHTML += `

        <tr>

            <th scope="row" style="display:flex; align-items:center; gap:10px;">

                <img src="${item.img}" th="70">

                ${item.title}

            </th>

            <td>
                $${item.price}
            </td>

            <td class="alo">
                <div class="sanamoq">
        <button class="plus">+</button><p class="sana">0</p>
      <button class="minus">-</button>
     </div>
    </tr>
            </td>

            <td>
                $${item.price}
            </td>
             <td><button class="delete"><img src="./icons/Delete.svg" alt=""></button></td>


        </tr>

        `

    })

}

renderBasket()

const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")


plus.addEventListener("click" , () => {
    products.count + 1
})