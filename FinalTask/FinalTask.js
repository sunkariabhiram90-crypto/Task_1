let products = [];
let cart = [];

const productContainer =
document.getElementById("productContainer");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const cartCount =
document.getElementById("cartCount");

const loading =
document.getElementById("loading");

const cartSidebar =
document.getElementById("cartSidebar");


// Sidebar

document
.getElementById("openCart")
.addEventListener("click",()=>{

    cartSidebar.classList.add("active");

});

document
.getElementById("closeCart")
.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

});


// Fetch API

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {

    products = data;

    console.log("Products Loaded");

    console.table(products);

    displayProducts(products);

    showStatistics(products);

})

.catch(error => {

    console.error(error);

})

.finally(() => {

    loading.innerText =
    "✅ Products Loaded Successfully";

    setTimeout(() => {

        loading.style.display="none";

    },2000);

});


// Display Products

function displayProducts(data){

    productContainer.innerHTML="";

    data.forEach(product=>{

        productContainer.innerHTML += `
        
        <div class="product">

            <img src="${product.image}">

            <div class="product-content">

                <h3>${product.title}</h3>

                <p class="price">
                    $${product.price}
                </p>

                <p>${product.category}</p>

                <p class="rating">
                    ⭐ ${product.rating.rate}
                </p>

                <button
                class="add-btn"
                onclick="addToCart(${product.id})">

                Add To Cart

                </button>

            </div>

        </div>

        `;
    });

}


// Search + Category Filter

searchInput.addEventListener("keyup",filterProducts);

categoryFilter.addEventListener("change",filterProducts);

function filterProducts(){

    let searchText =
    searchInput.value.toLowerCase();

    let category =
    categoryFilter.value;

    let filtered =
    products.filter(product=>{

        let searchMatch =
        product.title
        .toLowerCase()
        .includes(searchText);

        let categoryMatch =
        category==="all" ||
        product.category===category;

        return searchMatch &&
               categoryMatch;
    });

    displayProducts(filtered);

    console.log("Filtered",filtered);
}


// Cart

function addToCart(id){

    let existing =
    cart.find(item=>item.id===id);

    if(existing){

        existing.qty++;

    }else{

        let product =
        products.find(p=>p.id===id);

        cart.push({
            ...product,
            qty:1
        });
    }

    updateCart();
}

function increaseQty(id){

    let item =
    cart.find(item=>item.id===id);

    item.qty++;

    updateCart();
}

function decreaseQty(id){

    let item =
    cart.find(item=>item.id===id);

    item.qty--;

    if(item.qty<=0){

        cart =
        cart.filter(
        item=>item.id!==id
        );
    }

    updateCart();
}

function updateCart(){

    let cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML="";

    let totalQty=0;
    let totalPrice=0;

    cart.forEach(item=>{

        totalQty += item.qty;

        totalPrice +=
        item.qty * item.price;

        cartItems.innerHTML += `
        
        <div class="cart-item">

            <h4>${item.title}</h4>

            <p>$${item.price}</p>

            <div class="qty-box">

                <button
                onclick="decreaseQty(${item.id})">
                -
                </button>

                <span>${item.qty}</span>

                <button
                onclick="increaseQty(${item.id})">
                +
                </button>

            </div>

            <p>
            Subtotal :
            $
            ${(item.qty*item.price)
            .toFixed(2)}
            </p>

        </div>

        `;
    });

    cartCount.innerText = totalQty;

    document
    .getElementById("cartTotal")
    .innerText =
    totalPrice.toFixed(2);

    console.clear();

    console.table(
        cart.map(item=>({

            Product:item.title,

            Quantity:item.qty,

            Price:item.price,

            Total:
            (item.qty*item.price)
            .toFixed(2)

        }))
    );

    console.log(
        "Total Cart Value : $",
        totalPrice.toFixed(2)
    );
}


// Statistics

function showStatistics(data){

    document
    .getElementById("totalProducts")
    .innerText =
    data.length;

    let total =
    data.reduce(
    (sum,p)=>sum+p.price,
    0
    );

    document
    .getElementById("avgPrice")
    .innerText =
    "$"+(total/data.length)
    .toFixed(2);

    let highest =
    [...data]
    .sort((a,b)=>b.price-a.price)[0];

    let lowest =
    [...data]
    .sort((a,b)=>a.price-b.price)[0];

    document
    .getElementById("highestPrice")
    .innerText =
    "$"+highest.price;

    document
    .getElementById("lowestPrice")
    .innerText =
    "$"+lowest.price;
}