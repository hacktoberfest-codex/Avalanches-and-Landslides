function checkLocation() {
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);

    // Replace this with your dataset or logic for checking coordinates
    const dataset = [
        { lat: 40.7128, lon: -74.0060, name: "New York" },
        { lat: 34.0522, lon: -118.2437, name: "Los Angeles" },
        // Add more data points as needed
    ];

    let resultText = "Area out of bounds";
    for (const data of dataset) {
        if (latitude === data.lat && longitude === data.lon) {
            resultText = `Location: ${data.name}`;
            break;
        }
    }

    document.getElementById("result").textContent = resultText;
}
