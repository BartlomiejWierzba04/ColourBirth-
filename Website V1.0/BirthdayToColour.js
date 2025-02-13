async function generateColor() {
    const birthdayInput = document.getElementById('birthdayInput').value; //gets birthday from the html input box
    if (!birthdayInput) {
        alert("Please enter a valid date.");
        return;
    }

    // Convert date to DDMMYYYY format
    const date = new Date(birthdayInput);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    const birthday = `${day}${month}${year}`;

    try {
        // Generate SHA-256 hash of the birthday
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(birthday));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); 

        // Convert hash to a 24-bit integer
        const hashInt = parseInt(hashHex.slice(0, 6), 16); // Use first 6 characters for RGB

        // Extract RGB components
        let red = (hashInt >> 16) & 0xFF;
        let green = (hashInt >> 8) & 0xFF;
        let blue = hashInt & 0xFF;

        // Scale the RGB values to make the color as bright as possible
        const maxComponent = Math.max(red, green, blue);
        if (maxComponent > 0) {
            const scale = 255 / maxComponent;
            red = Math.round(red * scale);
            green = Math.round(green * scale);
            blue = Math.round(blue * scale);
        }

        // Format as hexadecimal color code
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`.toUpperCase();

        // Display the color
        const colorDisplay = document.getElementById('colorDisplay');
        colorDisplay.textContent = `Your birthday color is: ${hexColor}`;
        colorDisplay.style.backgroundColor = hexColor;
        colorDisplay.style.color = (red * 0.299 + green * 0.587 + blue * 0.114) > 150 ? '#000' : '#fff'; // Adjust text color for contrast
    } catch (error) {
        console.error("Error generating color:", error);
        alert("An error occurred while generating the color. Please try again.");
    }
}
async function generateColor() {
    const birthdayInput = document.getElementById('birthdayInput').value;
    if (!birthdayInput) {
        alert("Please enter a valid date.");
        return;
    }

    // Convert date to DDMMYYYY format
    const date = new Date(birthdayInput);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    const birthday = `${day}${month}${year}`;

    try {
        // Generate SHA-256 hash of the birthday
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(birthday));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Convert hash to a 24-bit integer
        const hashInt = parseInt(hashHex.slice(0, 6), 16); // Use first 6 characters for RGB

        // Extract RGB components
        let red = (hashInt >> 16) & 0xFF;
        let green = (hashInt >> 8) & 0xFF;
        let blue = hashInt & 0xFF;

        // Scale the RGB values to make the color as bright as possible
        const maxComponent = Math.max(red, green, blue);
        if (maxComponent > 0) {
            const scale = 255 / maxComponent;
            red = Math.round(red * scale);
            green = Math.round(green * scale);
            blue = Math.round(blue * scale);
        }

        // Format as hexadecimal color code
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`.toUpperCase();

        // Display the color
        const colorDisplay = document.getElementById('colorDisplay');
        colorDisplay.textContent = `Your birthday color is: ${hexColor}`;
        colorDisplay.style.backgroundColor = hexColor;
        colorDisplay.style.color = (red * 0.299 + green * 0.587 + blue * 0.114) > 150 ? '#000' : '#fff'; // Adjust text color for contrast
    } catch (error) {
        console.error("Error generating color:", error);
        alert("An error occurred while generating the color. Please try again.");
    }
}