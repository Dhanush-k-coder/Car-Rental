document.getElementById("bookingForm").addEventListener("input", function() {
    let car = document.getElementById("car");
    let duration = document.getElementById("duration").value;
    let rentalType = document.getElementById("rentalType").value;
    
    let pricePerUnit = rentalType === "daily" ? 
        car.options[car.selectedIndex]?.dataset.daily : 
        car.options[car.selectedIndex]?.dataset.hourly;

    if (duration && pricePerUnit) {
        let totalFee = duration * pricePerUnit;
        document.getElementById("fee").textContent = totalFee;
    }
});



// File Upload Handling
document.getElementById("aadhaar").addEventListener("change", function() {
    validateFile(this, "aadhaar-name");
});
document.getElementById("license").addEventListener("change", function() {
    validateFile(this, "license-name");
});

function validateFile(input, displayId) {
    let file = input.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            alert("File size should not exceed 2MB.");
            input.value = ""; // Reset file input
        } else {
            document.getElementById(displayId).textContent = "Uploaded: " + file.name;
        }
    }
}

// Booking Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let car = document.getElementById("car").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let duration = document.getElementById("duration").value;
    let fee = document.getElementById("fee").textContent;
    let aadhaar = document.getElementById("aadhaar").files.length > 0;
    let license = document.getElementById("license").files.length > 0;

    if (name && email && car && date && time && duration && aadhaar && license) {
        document.getElementById("message").textContent = 
            `Booking confirmed for ${name}. Car: ${car}, Date: ${date}, Time: ${time}, Duration: ${duration} hrs. Total Fee: ₹${fee}`;
        this.reset();
        document.getElementById("fee").textContent = "0";
        document.getElementById("aadhaar-name").textContent = "";
        document.getElementById("license-name").textContent = "";
    } else {
        document.getElementById("message").textContent = "Please fill all fields and upload documents.";
    }
});
