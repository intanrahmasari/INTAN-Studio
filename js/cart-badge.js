// =====================================
// CART BADGE
// =====================================

const badge = document.getElementById("cart-count");

if (badge) {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

    });

    if (totalItems > 0) {

        badge.style.display = "inline-block";
        badge.textContent = totalItems;

    } else {

        badge.style.display = "none";

    }

}