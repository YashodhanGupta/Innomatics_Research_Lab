let selectedMembership = '';

function highlightCard(cardId) {
    // Remove 'selected' class from all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    // Add 'selected' class to the clicked card
    const selectedCard = document.getElementById(cardId);
    selectedCard.classList.add('selected');

    // Set selected membership
    selectedMembership = cardId;

    // Show the options div
    document.getElementById('options').style.display = 'block';
}

function calculateTotal() {
    // Get values from form
    const coffeeType = document.getElementById('coffeeType').value;
    const coffeeSize = document.getElementById('coffeeSize').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const whippedCream = document.getElementById('whippedCream').checked;
    const extraShot = document.getElementById('extraShot').checked;

    const Chocolate_Shavings = document.getElementById('Chocolate Shavings').checked;
    const Caramel_Drizzle = document.getElementById('Caramel Drizzle').checked;

    const syrup = document.getElementById('syrup').checked;
    const promoCode = document.getElementById('promo').value;

    let price = 0;
    if (coffeeType === 'Lattee') {
        price = 3.00;
    } else if (coffeeType === 'Espresso') {
        price = 2.50;
    } else if (coffeeType === 'Mocha') {
        price = 3.50;
    } else if (coffeeType === 'Americano') {
        price = 4.50;
    } else if (coffeeType === 'Cappuccino') {
        price = 4.00;
    } else if (coffeeType === 'Macchiato') {
        price = 3.15;
    } else if (coffeeType === 'Iced Coffee') {
        price = 4.10;
    }

    if (coffeeSize === 'Medium') price += 1.00;
    if (coffeeSize === 'Large') price += 2.00;
    if (whippedCream) price += 0.75;
    if (extraShot) price += 1.00;
    if (syrup) price += 0.50;

    if (Chocolate_Shavings) price += 0.10;
    if (Caramel_Drizzle) price += 0.60;

    const subtotal = price * quantity; // Subtotal calculation: price * quantity

    let discount = 0;
    let tax = 0;

    // Apply membership-specific discount and tax based on the subtotal
    if (selectedMembership === 'goldCard') {
        discount = subtotal * 0.10; // 10% discount for Gold members
        tax = subtotal * 0.05; // 5% tax for Gold members
    } else if (selectedMembership === 'silverCard') {
        discount = subtotal * 0.05; // 5% discount for Silver members
        tax = subtotal * 0.10; // 10% tax for Silver members
    } else {
        tax = subtotal * 0.15; // 15% tax for Regular members
    }

    // Total before tax and discount
    let totalPrice = (subtotal + tax - discount); // Apply tax and discount to subtotal

    // Apply promo code
    if (promoCode === 'DISCOUNT10') totalPrice *= 0.9; // Apply promo code if valid

    // Display the summary
    document.getElementById('summaryCoffeeType').textContent = coffeeType;
    document.getElementById('summaryCoffeeSize').textContent = coffeeSize;
    document.getElementById('summaryQuantity').textContent = quantity;
    document.getElementById('summaryWhippedCream').textContent = whippedCream ? 'Yes' : 'No';
    
    document.getElementById('summaryCaramelDrizzle').textContent = Caramel_Drizzle ? 'Yes' : 'No';
    document.getElementById('summaryChocolateShavings').textContent = Chocolate_Shavings ? 'Yes' : 'No';
    

    document.getElementById('summaryExtraShot').textContent = extraShot ? 'Yes' : 'No';
    document.getElementById('summarySyrup').textContent = syrup ? 'Yes' : 'No';
    document.getElementById('summaryPromoCode').textContent = promoCode ? promoCode : 'None';
    document.getElementById('summarySubTotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summaryTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summaryDiscount').textContent = `$${discount.toFixed(2)}`;
    document.getElementById('summaryTotalPrice').textContent = `$${totalPrice.toFixed(2)}`;

    document.getElementById('orderSummary').style.display = 'block';
}


function downloadInvoice() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set background image
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'; // Background image URL

    img.onload = function () {
        doc.addImage(img, 'JPEG', 0, 0, 210, 297); // Adds image to the PDF (A4 size)

        // Add heading and style the title
        doc.setFont('helvetica', 'bold'); 
        doc.setFontSize(22);
        doc.text('Yasho Brews', 105, 10, null, null, 'center');
        doc.setTextColor(255, 0, 0); // Red color for heading
        doc.text('Coffee Order Receipt', 105, 30, null, null, 'center'); // Centered heading

        // Reset text styles for order details
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0); // Black color

        let yPosition = 50; // Initial Y position for text

        function addDetail(label, value) {
            doc.setFont('helvetica', 'bold'); // Bold label
            doc.text(`${label}:`, 60, yPosition);

            doc.setFont('helvetica', 'normal'); // Normal value
            doc.text(value, 110, yPosition);

            yPosition += 10; // Move Y position down for next line
        }

        addDetail('Coffee Type', document.getElementById('summaryCoffeeType').textContent);
        addDetail('Coffee Size', document.getElementById('summaryCoffeeSize').textContent);
        addDetail('Quantity', document.getElementById('summaryQuantity').textContent);
        addDetail('Whipped Cream', document.getElementById('summaryWhippedCream').textContent);
        addDetail('Extra Shot', document.getElementById('summaryExtraShot').textContent);

        addDetail('Chocolate Shavings', document.getElementById('summaryChocolateShavings').textContent);
        addDetail('Caramel Drizzle', document.getElementById('summaryCaramelDrizzle').textContent);

        addDetail('Syrup', document.getElementById('summarySyrup').textContent);
        addDetail('Promo Code', document.getElementById('summaryPromoCode').textContent);
        addDetail('Sub Total', document.getElementById('summarySubTotal').textContent);
        addDetail('Tax', document.getElementById('summaryTax').textContent);
        addDetail('Discount', document.getElementById('summaryDiscount').textContent);
        addDetail('Total Price', document.getElementById('summaryTotalPrice').textContent);

        // Thank You Message
        yPosition += 60;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0,0,0); 
        doc.text('Thank You for Visiting Us!', 105, yPosition, null, null, 'center');

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        yPosition += 20;
        doc.text('Your presence brightens our day, and we appreciate your support.', 105, yPosition, null, null, 'center');

        yPosition += 10;
        doc.text('We hope to welcome you again soon.', 105, yPosition, null, null, 'center');

        yPosition += 10;
        doc.text('Until then, take care and keep shining!', 105, yPosition, null, null, 'center');

        // Save the PDF
        doc.save('receipt.pdf');
    };
}

