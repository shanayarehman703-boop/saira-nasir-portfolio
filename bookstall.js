// ================= CART =================

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const clearCart = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkoutBtn");


// Add book to cart
document.querySelectorAll(".add-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const name = button.getAttribute("data-name");
        const price = Number(button.getAttribute("data-price"));

        const existingBook = cart.find(function(book) {
            return book.name === name;
        });

        if (existingBook) {
            existingBook.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        button.innerText = "Added ✓";

        setTimeout(function() {
            button.innerText = "Add to Cart";
        }, 1000);

    });

});


// Update cart
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }

    cart.forEach(function(book, index) {

        total += book.price * book.quantity;
        count += book.quantity;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <h4>${book.name}</h4>
                <p>$${book.price.toFixed(2)} × ${book.quantity}</p>
            </div>

            <button class="remove-item" data-index="${index}">
                Remove
            </button>
        `;

        cartItems.appendChild(item);

    });

    cartCount.innerText = count;

    cartTotal.innerText =
        "$" + total.toFixed(2);


    // Remove buttons
    document.querySelectorAll(".remove-item").forEach(function(button) {

        button.addEventListener("click", function() {

            const index =
                Number(button.getAttribute("data-index"));

            cart.splice(index, 1);

            updateCart();

        });

    });

}


// ================= OPEN CART =================

cartBtn.addEventListener("click", function() {

    cartOverlay.classList.add("open");

});


// ================= CLOSE CART =================

closeCart.addEventListener("click", function() {

    cartOverlay.classList.remove("open");

});


// Close by clicking outside cart
cartOverlay.addEventListener("click", function(event) {

    if (event.target === cartOverlay) {

        cartOverlay.classList.remove("open");

    }

});


// ================= CLEAR CART =================

clearCart.addEventListener("click", function() {

    cart = [];

    updateCart();

});


// ================= CHECKOUT =================

checkoutBtn.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    let total = 0;

    cart.forEach(function(book) {

        total += book.price * book.quantity;

    });

    alert(
        "Order placed successfully!\n\n" +
        "Total: $" + total.toFixed(2)
    );

    cart = [];

    updateCart();

    cartOverlay.classList.remove("open");

});


// ================= SEARCH =================

const searchInput =
    document.getElementById("searchInput");

const books =
    document.querySelectorAll(".book-card");

const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", function() {

    const search =
        searchInput.value.toLowerCase();

    let found = 0;

    books.forEach(function(book) {

        const title =
            book.getAttribute("data-title").toLowerCase();

        if (title.includes(search)) {

            book.style.display = "";

            found++;

        } else {

            book.style.display = "none";

        }

    });

    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// ================= CATEGORY FILTER =================

const filters =
    document.querySelectorAll(".filter");


filters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        filters.forEach(function(item) {

            item.classList.remove("active");

        });

        filter.classList.add("active");

        const category =
            filter.getAttribute("data-category");

        books.forEach(function(book) {

            const bookCategory =
                book.getAttribute("data-category");

            if (
                category === "all" ||
                category === bookCategory
            ) {

                book.style.display = "";

            } else {

                book.style.display = "none";

            }

        });

    });

});