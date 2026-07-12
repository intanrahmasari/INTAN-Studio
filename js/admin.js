// ======================================
// ADMIN DASHBOARD
// ======================================

// Data
const products = JSON.parse(localStorage.getItem("products")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

// ======================================
// DASHBOARD STATISTICS
// ======================================

document.getElementById("totalProducts").textContent = 20;
document.getElementById("totalCustomers").textContent = users.length;
document.getElementById("totalOrders").textContent = orders.length;

let revenue = 0;

orders.forEach(function(order){

    revenue += order.total;

});

document.getElementById("totalRevenue").textContent =
    "Rp " + revenue.toLocaleString("id-ID");

// ======================================
// RECENT ORDERS
// ======================================

const recentOrders = document.getElementById("recentOrders");

if(recentOrders){

    if(orders.length === 0){

        recentOrders.innerHTML = `

        <tr>

            <td colspan="5" class="text-center text-muted">

                No orders yet.

            </td>

        </tr>

        `;

    }

    else{

        [...orders].reverse().forEach(function(order){

            recentOrders.innerHTML += `

            <tr>

                <td>

                    ${order.id}

                </td>

                <td>

                    ${order.customer}

                </td>

                <td>

                    ${order.date}

                </td>

                <td>

                    Rp ${order.total.toLocaleString("id-ID")}

                </td>

                <td>

                    <span class="badge bg-success">

                        ${order.status}

                    </span>

                </td>

            </tr>

            `;

        });

    }

}

// ======================================
// CUSTOMER LIST
// ======================================

const customerTable = document.getElementById("customerTable");

if(customerTable){

    if(users.length === 0){

        customerTable.innerHTML = `

        <tr>

            <td colspan="2" class="text-center text-muted">

                No customers yet.

            </td>

        </tr>

        `;

    }

    else{

        users.forEach(function(user){

            customerTable.innerHTML += `

            <tr>

                <td>

                    ${user.fullname}

                </td>

                <td>

                    ${user.email}

                </td>

            </tr>

            `;

        });

    }

}

// ======================================
// PRODUCT MANAGEMENT
// ======================================

const productTable = document.getElementById("productTable");

if (productTable) {

    productTable.innerHTML = `

    <tr>

        <td>

            <img src="assets/tshirt-1.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Essential Oversized Tee - White</td>

        <td>T-Shirt</td>

        <td>Rp 129.000</td>

        <td>105</td>

    </tr>

    <tr>

        <td>

            <img src="assets/tshirt-2.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Essential Oversized Tee - Black</td>

        <td>T-Shirt</td>

        <td>Rp 129.000</td>

        <td>120</td>

    </tr>

    <tr>

        <td>

            <img src="assets/tshirt-3.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Signature Graphic Tee</td>

        <td>T-Shirt</td>

        <td>Rp 149.000</td>

        <td>70</td>

    </tr>

    <tr>

        <td>

            <img src="assets/tshirt-4.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Stripe Relax Tee</td>

        <td>T-Shirt</td>

        <td>Rp 159.000</td>

        <td>55</td>

    </tr>

    <tr>

        <td>

            <img src="assets/tshirt-5.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Basic Everyday Tee</td>

        <td>T-Shirt</td>

        <td>Rp 139.000</td>

        <td>92</td>

    </tr>

    <tr>

        <td>

            <img src="assets/hoodie-1.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Essential Hoodie Black</td>

        <td>Hoodie</td>

        <td>Rp 249.000</td>

        <td>67</td>

    </tr>

    <tr>

        <td>

            <img src="assets/hoodie-2.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Essential Hoodie Grey</td>

        <td>Hoodie</td>

        <td>Rp 249.000</td>

        <td>53</td>

    </tr>

    <tr>

        <td>

            <img src="assets/hoodie-3.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Zip Hoodie Cream</td>

        <td>Hoodie</td>

        <td>Rp 259.000</td>

        <td>39</td>

    </tr>

    <tr>

        <td>

            <img src="assets/hoodie-4.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Vintage Washed Hoodie</td>

        <td>Hoodie</td>

        <td>Rp 269.000</td>

        <td>28</td>

    </tr>

    <tr>

        <td>

            <img src="assets/hoodie-5.jpg"
                 width="60"
                 class="rounded">

        </td>

        <td>Minimal Logo Hoodie</td>

        <td>Hoodie</td>

        <td>Rp 259.000</td>

        <td>32</td>

    </tr>

    `;
}

productTable.innerHTML += `

<tr>

    <td>

        <img
            src="assets/bottom-1.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Cargo Utility Pants

    </td>

    <td>

        Bottom

    </td>

    <td>

        Rp 269.000

    </td>

    <td>

        45

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/bottom-2.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Wide Leg Jeans

    </td>

    <td>

        Bottom

    </td>

    <td>

        Rp 299.000

    </td>

    <td>

        61

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/bottom-3.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Straight Fit Jeans

    </td>

    <td>

        Bottom

    </td>

    <td>

        Rp 289.000

    </td>

    <td>

        82

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/bottom-4.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Relax Chino Pants

    </td>

    <td>

        Bottom

    </td>

    <td>

        Rp 249.000

    </td>

    <td>

        54

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/bottom-5.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Everyday Jogger Pants

    </td>

    <td>

        Bottom

    </td>

    <td>

        Rp 229.000

    </td>

    <td>

        71

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/accessory-1.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Canvas Tote Bag

    </td>

    <td>

        Accessories

    </td>

    <td>

        Rp 119.000

    </td>

    <td>

        69

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/accessory-2.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Classic Baseball Cap

    </td>

    <td>

        Accessories

    </td>

    <td>

        Rp 99.000

    </td>

    <td>

        37

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/accessory-3.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Minimal Leather Wallet

    </td>

    <td>

        Accessories

    </td>

    <td>

        Rp 189.000

    </td>

    <td>

        42

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/accessory-4.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Casual Canvas Belt

    </td>

    <td>

        Accessories

    </td>

    <td>

        Rp 139.000

    </td>

    <td>

        28

    </td>

</tr>

<tr>

    <td>

        <img
            src="assets/accessory-5.jpg"
            width="60"
            class="rounded">

    </td>

    <td>

        Beaded Bracelet

    </td>

    <td>

        Accessories

    </td>

    <td>

        Rp 89.000

    </td>

    <td>

        57

    </td>

</tr>

`;

// ======================================
// LOGOUT
// ======================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout = confirm(

            "Are you sure you want to logout?"

        );

        if (!confirmLogout) {

            return;

        }

        localStorage.removeItem("currentUser");
        localStorage.removeItem("userRole");

        alert("Logout successful!");

        window.location.href = "login.html";

    });

}