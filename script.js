function calculateCost() {
  const weight = parseFloat(document.getElementById("weight").value);
  const weightUnit = document.getElementById("weightUnit").value;
  const cost = parseFloat(document.getElementById("cost").value);
  const costUnit = document.getElementById("costUnit").value;

  if (!isNaN(weight) && !isNaN(cost)) {
    // Convert weight to grams, ounces, or pounds based on selected unit
    let weightConverted;
    if (weightUnit === "oz") {
      weightConverted = weight * 28.3495; // 1 oz = 28.3495 g
    } else if (weightUnit === "lbs") {
      weightConverted = weight * 453.59237; // 1 lb = 453.59237 g
    } else {
      weightConverted = weight;
    }

    // Calculate cost per unit (in dollars)
    const costPerUnit = cost / weightConverted;

    // Display the result
    document.getElementById(
      "costPerUnit"
    ).textContent = `Cost per ${weightUnit}: $${costPerUnit.toFixed(4)}`;
  } else {
    document.getElementById("costPerUnit").textContent =
      "Please enter valid numbers.";
  }
}
