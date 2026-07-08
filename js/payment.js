// =====================================
// GET CART DATA
// =====================================

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const paymentItems = document.getElementById("payment-items");

const paymentSubtotal = document.getElementById("payment-subtotal");

const paymentTotal = document.getElementById("payment-total");

// =====================================
// FORMAT PRICE
// =====================================

function formatPrice(price) {

    return "Rp" + price.toLocaleString("id-ID");

}

// =====================================
// DISPLAY ORDER SUMMARY
// =====================================

let total = 0;

if (cart.length === 0) {

    paymentItems.innerHTML = `

        <div class="text-center py-4">

            <p class="text-muted">

                Your cart is empty.

            </p>

        </div>

    `;

} else {

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;

        total += subtotal;

        paymentItems.innerHTML += `

<div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">

    <div class="d-flex align-items-center">

        <img
        src="${item.image}"
        alt="${item.name}"
        class="rounded border me-3"
        style="
            width:70px;
            height:70px;
            object-fit:cover;
            flex-shrink:0;
            background:#fff;
            padding:4px;
        ">

        <div>

            <h6 class="fw-bold mb-1">

                ${item.name}

            </h6>

            <small class="text-muted">

                Size : ${item.size}

                <br>

                Quantity : ${item.quantity}

            </small>

        </div>

    </div>

    <strong>

        ${formatPrice(subtotal)}

    </strong>

</div>

`;

    });

}

paymentSubtotal.textContent = formatPrice(total);

paymentTotal.textContent = formatPrice(total);

// =====================================
// PAY NOW
// =====================================

const payNowButton = document.getElementById("pay-now");

payNowButton.addEventListener("click", function () {

    const fullName = document.getElementById("customer-name").value.trim();

    const phone = document.getElementById("customer-phone").value.trim();

    const email = document.getElementById("customer-email").value.trim();

    const address = document.getElementById("customer-address").value.trim();

    // Validasi form
    if (
        fullName === "" ||
        phone === "" ||
        email === "" ||
        address === ""
    ) {

        alert("Please complete all billing information.");

        return;

    }

    // Simpan data customer
    const customer = {

        fullName,
        phone,
        email,
        address

    };

    localStorage.setItem(
        "customer",
        JSON.stringify(customer)
    );

    // Kosongkan cart setelah pembayaran
    localStorage.removeItem("cart");

    // Pindah ke halaman sukses
    window.location.href = "payment-success.html";

});