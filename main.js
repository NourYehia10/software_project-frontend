function validateForm(weight, height) {
    if (!weight || !height) {
        showResult("Please fill in all fields", true);
        return false;
    }
    if (weight <= 0 || height <= 0) {
        showResult("Please enter positive values", true);
        return false;
    }
    return true;
}

function showResult(message, isError = false) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = message;
    resultDiv.style.background = isError 
        ? "linear-gradient(135deg, #ff6b6b, #ee5a6f)" 
        : "linear-gradient(135deg, #f5f7fa, #c3cfe2)";
    resultDiv.style.color = isError ? "white" : "#333";
    resultDiv.style.display = "block";
}

async function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!validateForm(weight, height)) return;

    const button = event.target;
    const originalText = button.innerText;
    button.innerText = "Calculating...";
    button.disabled = true;

    try {
        const res = await fetch("http://localhost:3000/api/bmi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weight, height })
        });

        const data = await res.json();
        
        let message = `Your BMI: ${data.bmi.toFixed(2)}`;
        if (data.bmi < 18.5) message += " (Underweight)";
        else if (data.bmi < 25) message += " (Normal Weight) ✓";
        else if (data.bmi < 30) message += " (Overweight)";
        else message += " (Obese)";
        
        showResult(message);
    } catch (error) {
        showResult("Error calculating BMI. Please try again.", true);
    } finally {
        button.innerText = originalText;
        button.disabled = false;
    }
}

async function calculateCalories() {
    const weight = parseFloat(document.getElementById("cWeight").value);
    const height = parseFloat(document.getElementById("cHeight").value);
    const age = parseFloat(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);

    if (!validateForm(weight, height) || !age) {
        showResult("Please fill in all fields", true);
        return;
    }

    const button = event.target;
    const originalText = button.innerText;
    button.innerText = "Calculating...";
    button.disabled = true;

    try {
        const res = await fetch("http://localhost:3000/api/calories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weight, height, age, activity })
        });

        const data = await res.json();
        showResult(`Your Daily Calorie Requirement: ${Math.round(data.calories)} kcal`);
    } catch (error) {
        showResult("Error calculating calories. Please try again.", true);
    } finally {
        button.innerText = originalText;
        button.disabled = false;
    }
}

async function sendMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("response").innerText = "Please fill in all fields";
        document.getElementById("response").style.display = "block";
        return;
    }

    const button = event.target;
    const originalText = button.innerText;
    button.innerText = "Sending...";
    button.disabled = true;

    try {
        const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (res.ok) {
            document.getElementById("response").innerText = "✓ Message sent successfully! We'll get back to you soon.";
            document.getElementById("response").style.background = "linear-gradient(135deg, #84fab0, #8fd3f4)";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        } else {
            document.getElementById("response").innerText = "Error sending message. Please try again.";
        }
    } catch (error) {
        document.getElementById("response").innerText = "Error sending message. Please try again.";
    } finally {
        document.getElementById("response").style.display = "block";
        button.innerText = originalText;
        button.disabled = false;
    }
}
