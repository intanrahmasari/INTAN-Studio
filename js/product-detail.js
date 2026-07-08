// ================================
// AMBIL ID PRODUK DARI URL
// ================================

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));


// ================================
// CARI PRODUK BERDASARKAN ID
// ================================

const product = products.find(item => item.id === productId);


// ================================
// ELEMEN HTML
// ================================

const detailContainer = document.getElementById("product-detail");


// ================================
// FORMAT HARGA
// ================================

function formatPrice(price){

    return "Rp" + price.toLocaleString("id-ID");

}


// ================================
// TAMPILKAN DETAIL PRODUK
// ================================

if(product){

detailContainer.innerHTML = `

<div class="row align-items-center">

    <div class="col-lg-6">

        <img src="${product.image}"

        class="img-fluid rounded shadow"

        alt="${product.name}">

    </div>


    <div class="col-lg-6 mt-4 mt-lg-0">

        <span class="badge bg-dark">

            ${product.category}

        </span>

        <h2 class="fw-bold mt-3">

            ${product.name}

        </h2>

        <div class="text-warning fs-5">

            ⭐ ${product.rating}

        </div>

        <h3 class="fw-bold my-3">

            ${formatPrice(product.price)}

        </h3>

        <p class="text-muted">

            ${product.description}

        </p>

        <hr>

        <h6>

            Size

        </h6>

        <div class="mb-4">

    <button class="btn btn-outline-dark me-2 size-btn active-size">
        S
    </button>

    <button class="btn btn-outline-dark me-2 size-btn">
        M
    </button>

    <button class="btn btn-outline-dark me-2 size-btn">
        L
    </button>

    <button class="btn btn-outline-dark size-btn">
        XL
    </button>

</div>

        <div class="d-flex align-items-center mb-4">

    <button
        class="btn btn-outline-dark"
        id="minus-btn">

        -

    </button>

    <span
        id="qty"
        class="mx-4 fw-bold">

        1

    </span>

    <button
        class="btn btn-outline-dark"
        id="plus-btn">

        +

    </button>

</div>

<button
    class="btn btn-dark btn-lg"
    id="add-cart">

    <i class="bi bi-cart-plus"></i>

    Add to Cart

</button>

    </div>

</div>

`;

}

// ================================
// QUANTITY
// ================================

let quantity = 1;

const qty = document.getElementById("qty");

const plusBtn = document.getElementById("plus-btn");

const minusBtn = document.getElementById("minus-btn");

plusBtn.addEventListener("click", () => {

    quantity++;

    qty.textContent = quantity;

});

minusBtn.addEventListener("click", () => {

    if(quantity > 1){

        quantity--;

        qty.textContent = quantity;

    }

});

// ================================
// SIZE
// ================================

let selectedSize = "S";

const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {

            btn.classList.remove("active-size");

        });

        button.classList.add("active-size");

        selectedSize = button.textContent.trim();

    });

});

// ================================
// ADD TO CART
// ================================

const addCartBtn = document.getElementById("add-cart");

addCartBtn.addEventListener("click", () => {

    // Ambil data cart yang sudah ada
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Cek apakah produk sudah ada di cart
    const existingProduct = cart.find(item => {

    return item.id === product.id &&
           item.size === selectedSize;

});

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            size: selectedSize

        });

    }

    // Simpan kembali ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Tampilkan Toast Bootstrap
    const toastElement = document.getElementById("cartToast");

    if (toastElement) {

        const toast = new bootstrap.Toast(toastElement);

        toast.show();
    }

});