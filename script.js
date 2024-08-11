function calculateCost() {
    const weight = parseFloat(document.getElementById('weight').value);
    const cost = parseFloat(document.getElementById('cost').value);

    if (!isNaN(weight) && !isNaN(cost)) {
        const totalCost = weight * cost;
        document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('totalCost').textContent = 'Please enter valid numbers.';
    }
}
