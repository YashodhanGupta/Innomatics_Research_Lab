//1. ATM Withdrawal System


function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }

    if (amount > balance) {
        return "Insufficient Funds";
    }

    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }

    return `Withdrawal Successful: $${amount} has been withdrawn. Remaining Balance: $${balance - amount}`;
}

function handleWithdrawal() {
    // Get input values
    const balance = parseFloat(document.getElementById('balance').value);
    const amount = parseFloat(document.getElementById('amount').value);

    const pin = document.getElementById('pin').value;
    const enteredPin = document.getElementById('enteredPin').value;

    // Call atmWithdrawal function and display result
    const result = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById('result').textContent = result;
}

//2. Online Shopping Discount & Free Shipping

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    // Apply discount based on order amount
    if (orderAmount > 1000) {
        discount = orderAmount * 0.20; // 20% discount for orders above $1000
    } else if (orderAmount >= 500) {
        discount = orderAmount * 0.10; // 10% discount for orders between $500 and $1000
    }

    // Apply free shipping or express shipping based on order amount
    if (orderAmount > 50) {
        shipping = 0; // Free shipping for orders above $50
    } else {
        shipping = 10; // Express shipping ($10) for orders below $50
    }

    // Calculate final amount after discount and shipping charges
    const finalAmount = orderAmount - discount + shipping;

    return finalAmount;
}

function calculateAndDisplayFinalAmount() {
    const orderAmount = parseFloat(document.getElementById('orderAmount').value);

    // Validate the input
    if (isNaN(orderAmount) || orderAmount <= 0) {
        alert("Please enter a valid order amount.");
        return;
    }

    // Call the function to calculate final amount
    const finalAmount = calculateFinalAmount(orderAmount);

    // Display the final amount
    document.getElementById('finalAmount').textContent = `Final Amount to Pay: $${finalAmount.toFixed(2)}`;
}

//3. Student Grading System with Extra Credit

function calculateGrade(marks, attendance) {
    // Check if attendance is above 90%, if yes, add 5 extra marks
    if (attendance > 90) {
        marks += 5;
    }

    // Determine the grade based on the marks
    let grade = '';
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

function displayGrade() {
    const marks = parseFloat(document.getElementById('marks').value);
    const attendance = parseFloat(document.getElementById('attendance').value);

    // Validate input
    if (isNaN(marks) || isNaN(attendance) || marks < 0 || attendance < 0 || attendance > 100) {
        alert("Please enter valid marks and attendance.");
        return;
    }

    // Get the grade and display it
    const grade = calculateGrade(marks, attendance);
    document.getElementById('finalGrade').textContent = `Final Grade: ${grade}`;
}

// 4. Smart Traffic Light System

function trafficLightControl(density) {
    let greenLightDuration;

    if (density === 'Heavy Traffic') {
        greenLightDuration = 60; // Green light stays on for 60 seconds in heavy traffic
    } else if (density === 'Moderate Traffic') {
        greenLightDuration = 40; // Green light stays on for 40 seconds in moderate traffic
    } else if (density === 'Light Traffic') {
        greenLightDuration = 20; // Green light stays on for 20 seconds in light traffic
    } else {
        return "Invalid traffic density"; // In case of an invalid input
    }

    return `Green light stays on for ${greenLightDuration} seconds`;
}

function displayGreenLightDuration() {
    const density = document.getElementById('density').value;

    // Call trafficLightControl function to get the duration
    const result = trafficLightControl(density);

    // Display the result
    document.getElementById('result').textContent = result;
}

// 5.  Movie Ticket Pricing with Time and Age Discount

function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let discount = 0;

    // Check if it's a matinee show (before 5 PM)
    if (showTime < 17) {
        discount += 0.20; // 20% discount for matinee shows
    }

    // Check for senior citizen discount (above 60)
    if (age > 60) {
        discount += 0.30; // 30% discount for senior citizens
    }

    // Check for children discount (below 12)
    if (age < 12) {
        discount += 0.40; // 40% discount for children
    }

    // Calculate the final ticket price
    const finalPrice = standardPrice - (standardPrice * discount);

    return `The final ticket price is $${finalPrice.toFixed(2)}`;
}

function displayTicketPrice() {
    const age = parseInt(document.getElementById('age').value);
    const showTime = parseInt(document.getElementById('showTime').value);

    // Call the function to calculate ticket price
    const result = calculateTicketPrice(age, showTime);

    // Display the result
    document.getElementById('result').textContent = result;
}

// 6. Job Application Filter

function isEligibleForJob(age, experience, qualification) {
    // Check if the candidate meets all the conditions
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "Eligible for the job";
    } else {
        return "Not eligible for the job";
    }
}

function displayEligibility() {
    // Get user input
    const age = parseInt(document.getElementById('age').value);
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = document.getElementById('qualification').value;

    // Call the function to check eligibility
    const result = isEligibleForJob(age, experience, qualification);

    // Display the result
    document.getElementById('result').textContent = result;
}

//7. 7. E-commerce Coupon Redemption

function applyCoupon(orderAmount, couponCode) {
    // Check if the coupon is valid and apply the discount accordingly
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        // 10% discount for orders above $500
        return orderAmount * 0.9; // Applying 10% discount
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        // Free shipping for orders above $200
        return orderAmount; // No change in price, just free shipping
    } else {
        // Invalid coupon or conditions not met
        return orderAmount; // No discount or free shipping applied
    }
}

function displayFinalPrice() {
    // Get the input values
    const orderAmount = parseFloat(document.getElementById('orderAmount').value);
    const couponCode = document.getElementById('couponCode').value;

    // Call the applyCoupon function and get the final price
    const finalPrice = applyCoupon(orderAmount, couponCode);

    // Display the final price
    document.getElementById('finalPrice').textContent = "Final Price: $" + finalPrice.toFixed(2);
}
 //8. 8. Fitness Membership Plan

 function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    // Define the possible plans
    const basicPlan = 20;
    const premiumPlan = 50;
    const vipPlan = 80;

    // Check based on user input and suggest the best plan
    if (planType === "Basic") {
        if (wantsTrainer) {
            return "For a Personal Trainer, we suggest upgrading to the Premium Plan ($50/month).";
        }
        if (wantsDietPlan) {
            return "For a Diet Plan, we suggest upgrading to the VIP Plan ($80/month).";
        }
        return `You can choose the Basic Plan for $${basicPlan}/month.`;
    } else if (planType === "Premium") {
        if (wantsDietPlan) {
            return "For a Diet Plan, we suggest upgrading to the VIP Plan ($80/month).";
        }
        return `You can choose the Premium Plan for $${premiumPlan}/month.`;
    } else if (planType === "VIP") {
        return `You can choose the VIP Plan for $${vipPlan}/month, which includes Gym, Personal Trainer, and a Diet Plan.`;
    } else {
        return "Invalid plan type. Please choose from Basic, Premium, or VIP.";
    }
}

function displaySuggestedPlan() {
    // Get user input values
    const planType = document.getElementById('planType').value;
    const wantsTrainer = document.getElementById('wantsTrainer').checked;
    const wantsDietPlan = document.getElementById('wantsDietPlan').checked;

    // Call choosePlan function and get the suggestion
    const suggestion = choosePlan(planType, wantsTrainer, wantsDietPlan);

    // Display the suggested plan
    document.getElementById('suggestion').textContent = suggestion;
}
 
// 9. Electricity Bill Calculation with Peak Hours

function calculateElectricityBill(units, timeOfDay) {
    let rate = 0;

    // Check if it's peak hour (8 PM - 8 AM)
    const isPeakHour = (timeOfDay >= 20 || timeOfDay < 8);

    // Determine the rate based on the consumption during normal hours
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    // Calculate the total cost
    let totalBill = units * rate;

    // Apply extra 10% charge for peak hours
    if (isPeakHour) {
        totalBill *= 1.10; // Add 10% extra charge for peak hours
    }

    return totalBill;
}

function displayBill() {
    // Get user input values
    const units = parseFloat(document.getElementById('units').value);
    const timeOfDay = parseInt(document.getElementById('timeOfDay').value);

    // Call calculateElectricityBill function and get the total bill
    const totalBill = calculateElectricityBill(units, timeOfDay);

    // Display the bill amount
    document.getElementById('totalBill').textContent = `Total Bill: $${totalBill.toFixed(2)}`;
}

// 10. Flight Ticket Booking System

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300; // Base fare for the flight
    let totalFare = baseFare; // Start with base fare

    // Class charges
    if (classType === 'Business') {
        totalFare += 200; // Business class charge
    } else if (classType === 'First') {
        totalFare += 500; // First class charge
    }

    // Luggage charges (if weight exceeds 20kg)
    if (luggageWeight > 20) {
        const extraWeight = luggageWeight - 20;
        totalFare += Math.ceil(extraWeight / 10) * 50; // $50 per 10kg extra
    }

    // Discounts (Apply only one discount, not both)
    if (isStudent) {
        totalFare -= totalFare * 0.15; // 15% discount for students
    } else if (isSenior) {
        totalFare -= totalFare * 0.10; // 10% discount for seniors
    }

    return totalFare.toFixed(2); // Return the total fare, rounded to 2 decimal places
}

function displayFare() {
    // Get user input values
    const classType = document.getElementById('classType').value;
    const luggageWeight = parseFloat(document.getElementById('luggageWeight').value);
    const isStudent = document.getElementById('isStudent').checked;
    const isSenior = document.getElementById('isSenior').checked;

    // Call calculateFlightFare function and get the total fare
    const totalFare = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);

    // Display the final fare
    document.getElementById('finalFare').textContent = `Final Fare: $${totalFare}`;
}

