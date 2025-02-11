let menuData = []; // Will store API data

// Function to Fetch Data from API
function fetchData() {
    fetch("https://api.npoint.io/490903d63bf7245629ac") // Replace with your API URL
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            menuData = data; 
            displayMenu("mobile"); 
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Function to Display Items Based on Category
function displayMenu(category) {
    const foodcards = document.getElementById("Ecards");
    let cardsHTML = "";

    let filteredData = [];
    if (category === "mobile") {
        filteredData = menuData.slice(0, 6); // First 5 items
    } else if (category === "laptop") {
        filteredData = menuData.slice(6); // Remaining items
    }

    filteredData.forEach((item) => {
        cardsHTML += `
        <div class="card">
            <img src="${item.E_image}" alt="${item.E_name}" />
            <h1>${item.E_name}</h1>
            <p>${item.E_description}</p>
            <h2>₹${item.E_price}</h2>
            <button id="add" onclick="addToCart(${item.E_id}, '${item.E_name}', ${item.E_price})">Add To Cart</button>
        </div>
        `;
    });

    foodcards.innerHTML = cardsHTML;
}

// Event Listeners for Category Clicks
document.getElementById("mobiles-link").addEventListener("click", function () {
    displayMenu("mobile"); // Display mobiles
});

document.getElementById("laptops-link").addEventListener("click", function () {
    displayMenu("laptop"); // Display laptops
});

// Fetch data when the page loads
fetchData();


const cart = [];

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const orderDisplay = document.getElementById("orderDisplay");
    const totalPrice = document.getElementById("totalPrice");
    const cartIcon = document.querySelector(".cart-icon");

    orderDisplay.innerHTML = "";

    if (cart.length === 0) {
        orderDisplay.innerHTML = "<li>Your cart is empty</li>";
        totalPrice.textContent = "₹ 0.00";
        cartIcon.setAttribute("data-count", "0");
    } else {
        let total = 0;
        let totalItems = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            totalItems += item.quantity;

            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${item.name} - $${(item.price * item.quantity).toFixed(2)} 
                <button onclick="updateItem(${item.id}, 'increase')">+ </button>
                <span> x${item.quantity} </span>
                <button onclick="updateItem(${item.id}, 'decrease')">-</button>
                <button onclick="removeItem(${item.id})">Remove</button>
            `;
            orderDisplay.appendChild(listItem);
        });

        totalPrice.textContent = `₹ ${total.toFixed(2)}`;
        cartIcon.setAttribute("data-count", totalItems);
    }
}

function removeItem(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
}

function updateItem(id, action) {
    const item = cart.find(i => i.id === id);

    if (item) {
        if (action === "increase") {
            item.quantity++;
        } else if (action === "decrease") {
            item.quantity--;
            if (item.quantity === 0) {
                const index = cart.indexOf(item);
                cart.splice(index, 1);
            }
        }
    }

    updateCartDisplay();
}

function toggleCart() {
    const sideCart = document.getElementById("sideCart");
    const Ecards = document.getElementById("Ecards");

    sideCart.classList.toggle("show");
    Ecards.classList.toggle("shifted");
}

