document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category and exercise recommendation
    let category = '';
    let exerciseRecommendation = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Strength training (e.g., weightlifting)</li>
                <li>Yoga or Pilates for flexibility</li>
                <li>Swimming or cycling for cardiovascular health</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Running or jogging</li>
                <li>Team sports (e.g., soccer, basketball)</li>
                <li>High-intensity interval training (HIIT)</li>
            </ul>
        `;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Walking or brisk walking</li>
                <li>Low-impact aerobics</li>
                <li>Cycling or swimming</li>
            </ul>
        `;
    } else {
        category = 'Obesity';
        exerciseRecommendation = `
            <strong>Recommended Exercises:</strong>
            <ul>
                <li>Walking (start with short distances)</li>
                <li>Water aerobics (low impact)</li>
                <li>Stretching or light yoga</li>
            </ul>
        `;
    }

    // Display result and exercise recommendation
    const resultDiv = document.getElementById('result');
    const exerciseDiv = document.getElementById('exerciseRecommendation');
    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong>. This is considered <strong>${category}</strong>.`;
    exerciseDiv.innerHTML = exerciseRecommendation;
});