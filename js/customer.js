// =====================================
// CUSTOMER DASHBOARD
// =====================================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));


// ===============================
// CHECK LOGIN
// ===============================

if (!currentUser) {

    window.location.href = "login.html";

}


// ===============================
// SHOW CUSTOMER DATA
// ===============================

const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");

if (customerName) {

    customerName.textContent = currentUser.fullname;

}

if (customerEmail) {

    customerEmail.textContent = currentUser.email;

}

// ===============================
// PROFILE CONTENT
// ===============================

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (profileName) {

    profileName.textContent = currentUser.fullname;

}

if (profileEmail) {

    profileEmail.textContent = currentUser.email;

}

// ===============================
// LOGOUT
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("currentUser");
        localStorage.removeItem("userRole");

        alert("You have logged out successfully.");

        window.location.href = "login.html";

    });

}

// =====================================
// MY ORDERS
// =====================================

const myOrders = document.getElementById("myOrders");

if (myOrders) {

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const customerOrders = orders.filter(function (order) {

        return order.email === currentUser.email;

    });

    if (customerOrders.length === 0) {

        myOrders.innerHTML = `

        <tr>

            <td colspan="4" class="text-center text-muted">

                You don't have any orders yet.

            </td>

        </tr>

        `;

    }

    else {

        customerOrders.reverse().forEach(function (order) {

            myOrders.innerHTML += `

            <tr>

                <td>

                    ${order.id}

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

                <td>

                    <button
                        class="btn btn-sm btn-dark"
                        onclick="viewOrder('${order.id}')">

                        View Details

                    </button>

                </td>
                
            </tr>

            `;

        });

    }

}

// ===============================
// DASHBOARD MENU
// ===============================

const dashboardContent = document.getElementById("dashboardContent");

const profileMenu = document.getElementById("profileMenu");

const ordersMenu = document.getElementById("ordersMenu");


// ===============================
// SHOW PROFILE
// ===============================

if (profileMenu) {

    profileMenu.addEventListener("click", function () {

        profileMenu.classList.remove("btn-outline-dark");
        profileMenu.classList.add("btn-dark");

        ordersMenu.classList.remove("btn-dark");
        ordersMenu.classList.add("btn-outline-dark");

        dashboardContent.innerHTML = `

        <div class="card-body p-4">

            <h3 class="fw-bold">

                My Profile

            </h3>

            <hr>

            <div class="row">

                <div class="col-md-6">

                    <label class="fw-semibold">

                        Full Name

                    </label>

                    <p>

                        ${currentUser.fullname}

                    </p>

                </div>

                <div class="col-md-6">

                    <label class="fw-semibold">

                        Email

                    </label>

                    <p>

                        ${currentUser.email}

                    </p>

                </div>

            </div>

            <div class="alert alert-light border mt-4">

                Welcome back to
                <strong>INTAN Studio</strong>.

            </div>

        </div>

        `;

    });

}


// ===============================
// SHOW MY ORDERS
// ===============================

if (ordersMenu) {

    ordersMenu.addEventListener("click", function () {

        // Active Button
        ordersMenu.classList.remove("btn-outline-dark");
        ordersMenu.classList.add("btn-dark");

        profileMenu.classList.remove("btn-dark");
        profileMenu.classList.add("btn-outline-dark");

        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        const customerOrders = orders.filter(function (order) {

            return order.email === currentUser.email;

        });

        let tableRows = "";

        // ===============================
        // NO ORDER
        // ===============================

        if (customerOrders.length === 0) {

            tableRows = `

            <tr>

                <td colspan="5" class="text-center text-muted">

                    You don't have any orders yet.

                </td>

            </tr>

            `;

        }

        // ===============================
        // SHOW ORDERS
        // ===============================

        else {

            customerOrders.reverse().forEach(function (order) {

                tableRows += `

                <tr>

                    <td>

                        ${order.id}

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

                    <td>

                        <button
                            class="btn btn-dark btn-sm"
                            onclick="viewOrder('${order.id}')">

                            View Details

                        </button>

                    </td>

                </tr>

                `;

            });

        }

        // ===============================
        // DASHBOARD CONTENT
        // ===============================

        dashboardContent.innerHTML = `

        <div class="card-body p-4">

            <h3 class="fw-bold">

                My Orders

            </h3>

            <hr>

            <div class="table-responsive">

                <table class="table table-hover align-middle">

                    <thead class="table-dark">

                        <tr>

                            <th>Order ID</th>

                            <th>Date</th>

                            <th>Total</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        ${tableRows}

                    </tbody>

                </table>

            </div>

        </div>

        `;

    });

}

// =====================================
// VIEW ORDER DETAIL
// =====================================

function viewOrder(orderId) {

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const order = orders.find(o => o.id === orderId);

    if (!order) return;

    let html = "";

    order.items.forEach(item => {

        html += `

        <div class="border rounded p-3 mb-3">

            <div class="row align-items-center">

                <div class="col-3">

                    <img
                        src="${item.image}"
                        class="img-fluid rounded">

                </div>

                <div class="col-9">

                    <h5>

                        ${item.name}

                    </h5>

                    <p class="mb-1">

                        Size : ${item.size}

                    </p>

                    <p class="mb-1">

                        Quantity : ${item.quantity}

                    </p>

                    <strong>

                        Rp ${item.price.toLocaleString("id-ID")}

                    </strong>

                </div>

            </div>

        </div>

        `;

    });

    html += `

    <hr>

    <div class="text-end">

        <h4>

            Total :
            Rp ${order.total.toLocaleString("id-ID")}

        </h4>

    </div>

    `;

    document.getElementById("orderDetailBody").innerHTML = html;

    const modal = new bootstrap.Modal(

        document.getElementById("orderModal")

    );

    modal.show();

}