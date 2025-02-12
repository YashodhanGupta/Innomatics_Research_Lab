let menuData = []

function menu() {
    fetch("https://api.npoint.io/d48587410594df0f5932")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            menuData = data;
            // console.log(menuData);
            display();

        })
}
menu()

function display() {
    const foodcards = document.getElementById("foodcards");
    let cardsHTML = ""

    menuData.forEach((food) => {

        cardsHTML += `
    <div class="card">

        <img src=${food.food_image} alt=${food.food_name}/>
        <h1>${food.food_name}</h1>
        <h1>${food.food_description}</h1>
        <h1>$ ${food.food_price}</h1>
        <button id="add" onclick="addToOrder(${food.food_id})">Add To Cart</button>
    </div>
    
    
    `;



    });
    foodcards.innerHTML = cardsHTML;
}

function addToOrder(food_id) {
    // console.log("inside card");

    const item = menuData.find(food => food.food_id === food_id);
    if (item) {
        Order.addItem(item);
    }
}

const Order = {
    items: [],
    addItem: function (item) {
        const existing = this.items.find(i => i.food_id === item.food_id)
        if (existing) {
            existing.quantity++;
        }
        else {
            const newItem = { ...item, quantity: 1 }
            this.items.push(newItem);
        }


        updateOrderDisplay();
    },
    incItem: function (food_id) {
        const item = this.items.find(i => i.food_id === food_id);
        if (item) {
            item.quantity++;
            updateOrderDisplay();
        }
    },
    decItem: function (food_id) {
        const item = this.items.find(i => i.food_id === food_id);
        if (item) {
            item.quantity--;
            if (item.quantity === 0) {
                this.items = this.items.filter(i => i.food_id !== food_id);
            }
            updateOrderDisplay();
        }
    },


    calculateTotal: function () {
        let total = 0;
        this.items.forEach(item => {
            total += item.food_price * item.quantity;
        });
        return total;
    }
}


function updateOrderDisplay() {
    const orderDisplay = document.getElementById("orderDisplay");
    if (Order.items.length === 0) {
        orderDisplay.innerHTML = "<li> Your cart is empty</li>"
    }
    else {
        let orderHtml = "";
        Order.items.forEach(item => {
            orderHtml += `
            <li>
                <div class="order-item-info">
                    ${item.food_name}<br>
                    $${(item.food_price * item.quantity).toFixed(2) } (x${item.quantity})
                </div>

                <div class="order-item-buttons">
                     <button onclick="Order.incItem(${item.food_id})">+</button>
                     <button onclick="Order.decItem(${item.food_id})">-</button>
                </div>
            
            </li>
            `
        });
        orderDisplay.innerHTML = orderHtml;
    }
    document.getElementById("totalPrice").textContent = `$ ${Order.calculateTotal().toFixed(2)}`;

}