// =====================================
// AMBIL DATA CART
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// =====================================
// FORMAT HARGA
// =====================================

function formatPrice(price) {

    return "Rp" + price.toLocaleString("id-ID");

}

// =====================================
// TAMPILKAN CART
// =====================================

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `

        <div class="text-center py-5">

            <i class="bi bi-cart-x fs-1 text-secondary"></i>

            <h4 class="mt-3">
                Your cart is empty
            </h4>

            <p class="text-muted">
                Let's start shopping!
            </p>

            <a href="products.html"
               class="btn btn-dark">

                Shop Now

            </a>

        </div>

        `;

        cartTotal.textContent = "Rp0";

        return;

    }

    cart.forEach((item, index) => {

        const subtotal = item.price * item.quantity;

        total += subtotal;

        cartItems.innerHTML += `

        <div class="card border-0 shadow-sm mb-4">

            <div class="card-body">

                <div class="row align-items-center">

                    <!-- Product Image -->
                    <div class="col-lg-2 col-md-3 col-4 text-center">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="img-fluid rounded"
                            style="
                                width:150px;
                                height:150px;
                                object-fit:contain;
                            ">

                    </div>

                    <!-- Product Info -->
                    <div class="col-lg-7 col-md-6 col-8">

                        <h5 class="fw-bold mb-2">

                            ${item.name}

                        </h5>

                        <p class="text-muted mb-1">

                            Price :
                            ${formatPrice(item.price)}

                        </p>

                        <p class="text-muted mb-1">

                            Size :
                            ${item.size}

                        </p>

                        <p class="text-muted mb-2">

                            Quantity :
                            ${item.quantity}

                        </p>

                        <h6 class="fw-bold">

                            ${formatPrice(subtotal)}

                        </h6>

                    </div>

                    <!-- Remove Button -->
                    <div class="col-lg-3 col-md-3 text-md-end text-center mt-3 mt-md-0">

                        <button
                            class="btn btn-outline-danger"
                            onclick="removeItem(${index})">

                            <i class="bi bi-trash"></i>

                            Remove

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    cartTotal.textContent = formatPrice(total);

}

// =====================================
// HAPUS PRODUK
// =====================================

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// =====================================

displayCart();