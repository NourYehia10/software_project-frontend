async function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const res = await fetch("http://localhost:3000/api/bmi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ weight, height })
  });

  const data = await res.json();
  document.getElementById("result").innerText = "BMI = " + data.bmi;
}

async function calculateCalories() {
  const weight = document.getElementById("cWeight").value;
  const height = document.getElementById("cHeight").value;
  const age = document.getElementById("age").value;
  const activity = document.getElementById("activity").value;

  const res = await fetch("http://localhost:3000/api/calories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ weight, height, age, activity })
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    "Calories per day = " + data.calories;
}