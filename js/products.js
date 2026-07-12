// =====================================
// INTAN STUDIO - PRODUCT DATA
// =====================================

const products = [

    // =====================
    // T-SHIRT
    // =====================

    {
        id: 1,
        name: "Essential Oversized Tee - White",
        category: "T-Shirt",
        price: 129000,
        rating: 4.9,
        image: "assets/tshirt-1.jpg",
        description: "Premium oversized white t-shirt made from soft cotton. Comfortable for everyday wear."
    },

    {
        id: 2,
        name: "Essential Oversized Tee - Black",
        category: "T-Shirt",
        price: 129000,
        rating: 4.8,
        image: "assets/tshirt-2.jpg",
        description: "Classic black oversized tee with a minimalist design. Easy to match with any outfit."
    },

    {
        id: 3,
        name: "Signature Graphic Tee",
        category: "T-Shirt",
        price: 149000,
        rating: 4.8,
        image: "assets/tshirt-3.jpg",
        description: "Modern graphic tee with premium printing and relaxed fit."
    },

    {
        id: 4,
        name: "Stripe Relax Tee",
        category: "T-Shirt",
        price: 159000,
        rating: 4.7,
        image: "assets/tshirt-4.jpg",
        description: "Casual striped t-shirt perfect for daily activities."
    },

    {
        id: 5,
        name: "Basic Everyday Tee",
        category: "T-Shirt",
        price: 139000,
        rating: 4.8,
        image: "assets/tshirt-5.jpg",
        description: "Simple everyday t-shirt with breathable cotton fabric."
    },

    // =====================
    // HOODIE
    // =====================

    {
        id: 6,
        name: "Essential Hoodie Black",
        category: "Hoodie",
        price: 249000,
        rating: 4.9,
        image: "assets/hoodie-1.jpg",
        description: "Warm black hoodie with premium fleece material."
    },

    {
        id: 7,
        name: "Essential Hoodie Grey",
        category: "Hoodie",
        price: 249000,
        rating: 4.8,
        image: "assets/hoodie-2.jpg",
        description: "Minimalist grey hoodie for a casual modern look."
    },

    {
        id: 8,
        name: "Zip Hoodie Cream",
        category: "Hoodie",
        price: 259000,
        rating: 4.8,
        image: "assets/hoodie-3.jpg",
        description: "Cream zip hoodie with soft fabric and premium zipper."
    },

    {
        id: 9,
        name: "Vintage Washed Hoodie",
        category: "Hoodie",
        price: 269000,
        rating: 4.9,
        image: "assets/hoodie-4.jpg",
        description: "Vintage style hoodie with washed effect."
    },

    {
        id: 10,
        name: "Minimal Logo Hoodie",
        category: "Hoodie",
        price: 259000,
        rating: 4.8,
        image: "assets/hoodie-5.jpg",
        description: "Minimal logo hoodie suitable for everyday outfit."
    },

    // =====================
    // BOTTOM
    // =====================

    {
        id: 11,
        name: "Cargo Utility Pants",
        category: "Bottom",
        price: 269000,
        rating: 4.8,
        image: "assets/bottom-1.jpg",
        description: "Utility cargo pants with multiple functional pockets."
    },

    {
        id: 12,
        name: "Wide Leg Jeans",
        category: "Bottom",
        price: 299000,
        rating: 4.9,
        image: "assets/bottom-2.jpg",
        description: "Comfortable wide leg jeans for modern fashion."
    },

    {
        id: 13,
        name: "Straight Fit Jeans",
        category: "Bottom",
        price: 289000,
        rating: 4.8,
        image: "assets/bottom-3.jpg",
        description: "Classic straight fit denim jeans."
    },

    {
        id: 14,
        name: "Relax Chino Pants",
        category: "Bottom",
        price: 249000,
        rating: 4.7,
        image: "assets/bottom-4.jpg",
        description: "Relax fit chino pants for smart casual style."
    },

    {
        id: 15,
        name: "Everyday Jogger Pants",
        category: "Bottom",
        price: 229000,
        rating: 4.8,
        image: "assets/bottom-5.jpg",
        description: "Comfortable jogger pants for daily activities."
    },

    // =====================
    // ACCESSORIES
    // =====================

    {
        id: 16,
        name: "Canvas Tote Bag",
        category: "Accessories",
        price: 119000,
        rating: 4.8,
        image: "assets/accessory-1.jpg",
        description: "Stylish canvas tote bag with large capacity."
    },

    {
        id: 17,
        name: "Classic Baseball Cap",
        category: "Accessories",
        price: 99000,
        rating: 4.7,
        image: "assets/accessory-2.jpg",
        description: "Minimal baseball cap for daily wear."
    },

    {
        id: 18,
        name: "Minimal Leather Wallet",
        category: "Accessories",
        price: 189000,
        rating: 4.9,
        image: "assets/accessory-3.jpg",
        description: "Premium leather wallet with elegant design."
    },

    {
        id: 19,
        name: "Casual Canvas Belt",
        category: "Accessories",
        price: 139000,
        rating: 4.7,
        image: "assets/accessory-4.jpg",
        description: "Durable canvas belt for casual outfits."
    },

    {
        id: 20,
        name: "Beaded Bracelet",
        category: "Accessories",
        price: 89000,
        rating: 4.8,
        image: "assets/accessory-5.jpg",
        description: "Minimal beaded bracelet suitable for daily fashion."
    }

];

// ===============================
// FORMAT HARGA
// ===============================

function formatPrice(price) {
    return "Rp" + price.toLocaleString("id-ID");
}

// ===============================
// ELEMENT PRODUCT LIST
// ===============================

const productList = document.getElementById("product-list");

// ===============================
// MENAMPILKAN PRODUK
// ===============================

function displayProducts(productArray) {

    if (!productList) return;

    productList.innerHTML = "";

    productArray.forEach((product) => {

        productList.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card product-card border-0 shadow-sm h-100">

                <img src="${product.image}"
                     class="card-img-top"
                     alt="${product.name}">

                <div class="card-body d-flex flex-column">

                    <span class="text-muted small">
                        ${product.category}
                    </span>

                    <h5 class="mt-2">
                        ${product.name}
                    </h5>

                    <div class="mb-2 text-warning">
                        ⭐ ${product.rating}
                    </div>

                    <h5 class="fw-bold mb-3">
                        ${formatPrice(product.price)}
                    </h5>

                    <a href="product-detail.html?id=${product.id}"
                       class="btn btn-dark mt-auto">
                        View Detail
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

// ===============================
// TAMPILKAN SEMUA PRODUK
// ===============================

displayProducts(products);

// ===============================
// SEARCH PRODUCT
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        const filteredProducts = products.filter(product => {

            return (
                product.name.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword)
            );

        });

        displayProducts(filteredProducts);

    });

}

// ===============================
// FILTER CATEGORY
// ===============================

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Ubah warna tombol aktif
        categoryButtons.forEach(btn => {
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-outline-dark");
        });

        this.classList.remove("btn-outline-dark");
        this.classList.add("btn-dark");

        const category = this.dataset.category;

        if (category === "All") {

            displayProducts(products);

            return;

        }

        const filteredProducts = products.filter(product => product.category === category);

        displayProducts(filteredProducts);

    });

});

// ===============================
// SORT PRODUCT
// ===============================

const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {

    sortSelect.addEventListener("change", function () {

        let sortedProducts = [...products];

        switch (this.value) {

            case "az":

                sortedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;

            case "za":

                sortedProducts.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );

                break;

            case "low":

                sortedProducts.sort((a, b) =>
                    a.price - b.price
                );

                break;

            case "high":

                sortedProducts.sort((a, b) =>
                    b.price - a.price
                );

                break;

            default:

                sortedProducts = [...products];

        }

        displayProducts(sortedProducts);

    });

}