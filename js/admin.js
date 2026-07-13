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

if(productTable){

    const products = [

        {
            name:"Essential Oversized Tee - White",
            category:"T-Shirt",
            price:129000,
            image:"assets/tshirt-1.jpg"
        },

        {
            name:"Essential Oversized Tee - Black",
            category:"T-Shirt",
            price:129000,
            image:"assets/tshirt-2.jpg"
        },

        {
            name:"Signature Graphic Tee",
            category:"T-Shirt",
            price:149000,
            image:"assets/tshirt-3.jpg"
        },

        {
            name:"Stripe Relax Tee",
            category:"T-Shirt",
            price:159000,
            image:"assets/tshirt-4.jpg"
        },

        {
            name:"Basic Everyday Tee",
            category:"T-Shirt",
            price:139000,
            image:"assets/tshirt-5.jpg"
        },

        {
            name:"Essential Hoodie Black",
            category:"Hoodie",
            price:249000,
            image:"assets/hoodie-1.jpg"
        },

        {
            name:"Essential Hoodie Grey",
            category:"Hoodie",
            price:249000,
            image:"assets/hoodie-2.jpg"
        },

        {
            name:"Zip Hoodie Cream",
            category:"Hoodie",
            price:259000,
            image:"assets/hoodie-3.jpg"
        },

        {
            name:"Vintage Washed Hoodie",
            category:"Hoodie",
            price:269000,
            image:"assets/hoodie-4.jpg"
        },

        {
            name:"Minimal Logo Hoodie",
            category:"Hoodie",
            price:259000,
            image:"assets/hoodie-5.jpg"
        },

        {
            name:"Cargo Utility Pants",
            category:"Bottom",
            price:269000,
            image:"assets/bottom-1.jpg"
        },

        {
            name:"Wide Leg Jeans",
            category:"Bottom",
            price:299000,
            image:"assets/bottom-2.jpg"
        },

        {
            name:"Straight Fit Jeans",
            category:"Bottom",
            price:289000,
            image:"assets/bottom-3.jpg"
        },

        {
            name:"Relax Chino Pants",
            category:"Bottom",
            price:249000,
            image:"assets/bottom-4.jpg"
        },

        {
            name:"Everyday Jogger Pants",
            category:"Bottom",
            price:229000,
            image:"assets/bottom-5.jpg"
        },

        {
            name:"Canvas Tote Bag",
            category:"Accessories",
            price:119000,
            image:"assets/accessory-1.jpg"
        },

        {
            name:"Classic Baseball Cap",
            category:"Accessories",
            price:99000,
            image:"assets/accessory-2.jpg"
        },

        {
            name:"Minimal Leather Wallet",
            category:"Accessories",
            price:189000,
            image:"assets/accessory-3.jpg"
        },

        {
            name:"Casual Canvas Belt",
            category:"Accessories",
            price:139000,
            image:"assets/accessory-4.jpg"
        },

        {
            name:"Beaded Bracelet",
            category:"Accessories",
            price:89000,
            image:"assets/accessory-5.jpg"
        }

    ];

    const stocks = JSON.parse(

        localStorage.getItem("stocks")

    ) || [

        120,95,85,76,101,
        52,67,41,33,28,
        73,66,58,47,39,
        120,84,42,56,91

    ];

    products.forEach(function(product,index){

        productTable.innerHTML += `

        <tr>

            <td>

                <img
                    src="${product.image}"
                    width="60"
                    class="rounded">

            </td>

            <td>

                ${product.name}

            </td>

            <td>

                ${product.category}

            </td>

            <td>

                Rp ${product.price.toLocaleString("id-ID")}

            </td>

            <td
                id="stock${index}"
                class="fw-semibold text-center">

                ${stocks[index]}

            </td>

            <td class="text-center">

                <button
                    class="btn btn-sm btn-outline-dark"
                    onclick="decreaseStock(${index})">

                    ➖ 

                </button>

                <button
                    class="btn btn-sm btn-outline-dark ms-2"
                    onclick="increaseStock(${index})">

                    ➕

                </button>

            </td>

        </tr>

        `;

    });

}

// ======================================
// STOCK MANAGEMENT
// ======================================

const stocks = JSON.parse(

    localStorage.getItem("stocks")

) || [

    120,95,85,76,101,
    52,67,41,33,28,
    73,66,58,47,39,
    120,84,42,56,91

];

function saveStocks(){

    localStorage.setItem(

        "stocks",

        JSON.stringify(stocks)

    );

}

function increaseStock(index){

    stocks[index]++;

    document.getElementById(

        "stock" + index

    ).textContent = stocks[index];

    saveStocks();

}

function decreaseStock(index){

    if(stocks[index] <= 0){

        return;

    }

    stocks[index]--;

    document.getElementById(

        "stock" + index

    ).textContent = stocks[index];

    saveStocks();

}

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