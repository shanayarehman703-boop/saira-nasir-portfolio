// ===================== script.js =====================

// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // ADD TO CART FUNCTIONALITY
    // =============================

    let cartCount = 0;

    // Select all Add to Cart buttons
    const cartButtons = document.querySelectorAll(".product button");

    // Select cart link
    const cartLink = document.querySelector(".nav-links a:nth-child(3)");

    cartButtons.forEach((button) => {

        button.addEventListener("click", () => {

            cartCount++;

            // Update cart text
            cartLink.innerHTML = `Add to Cart 🛒 (${cartCount})`;

            // Product name
            const product =
                button.parentElement.querySelector("h3").innerText;

            alert(product + " added to cart!");
        });
    });




    // =============================
    // SEARCH FUNCTIONALITY
    // =============================

    const searchBar = document.querySelector(".search-bar");

    const products = document.querySelectorAll(".product");

    searchBar.addEventListener("keyup", () => {

        const searchText = searchBar.value.toLowerCase();

        products.forEach((product) => {

            const productName =
                product.querySelector("h3").innerText.toLowerCase();

            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });




    // =============================
    // SHOP NOW BUTTON EFFECT
    // =============================

    const shopButton = document.querySelector(".hero-content a button");

    shopButton.addEventListener("mouseover", () => {
        shopButton.style.transform = "scale(1.1)";
        shopButton.style.transition = "0.3s";
    });

    shopButton.addEventListener("mouseout", () => {
        shopButton.style.transform = "scale(1)";
    });




    // =============================
    // WELCOME MESSAGE
    // =============================

    setTimeout(() => {
        alert("Welcome to NAYA-StorEX 🛍️");
    }, 1000);




    // =============================
    // SCROLL TO TOP BUTTON
    // =============================

    const topButton = document.createElement("button");

    topButton.innerText = "↑";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.fontSize = "20px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";

    // Show button on scroll
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    // Scroll to top
    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});