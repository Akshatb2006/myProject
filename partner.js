function calculateNameNumber(name) {
    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9, s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
    };

    let sum = 0;

    name = name.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < name.length; i++) {
        if (alphabet[name[i]]) {
            sum += alphabet[name[i]];
        }
    }

    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}

function calculateBirthNumber(dob) {
    const dobParts = dob.split('-');
    const year = dobParts[0];
    const month = dobParts[1];
    const day = dobParts[2];

    let sum = parseInt(year[0]) + parseInt(year[1]) + parseInt(year[2]) + parseInt(year[3]) +
              parseInt(month[0]) + parseInt(month[1]) + parseInt(day[0]) + parseInt(day[1]);

    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}

function findPartnerFace() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value;

    if (!name || !dob) {
        document.getElementById("result").textContent = "Please fill out all fields.";
        return;
    }

    const normalizedName = name.toLowerCase();

    
    if (normalizedName === "akshat" || normalizedName === "akshat baranwal") {
        const specialImagePath = "awomen.jpg"; 
        document.getElementById("result").textContent =
            "Your numerology number is 5. Here's your partner's face:";
        document.getElementById("image-container").innerHTML =
            `<img src="${specialImagePath}" alt="Special Partner's face">`;
        return;
    }

    
    if (normalizedName === "soham" || normalizedName === "soham pal") {
        document.getElementById("result").textContent =
            "Sorry, you will remain single for the rest of your life... Sukha to pada hi rahega, and stars are telling me that no one will ever want to date you.";
        document.getElementById("image-container").innerHTML = ""; 
        return;
    }

    const nameNumber = calculateNameNumber(name);
    const birthNumber = calculateBirthNumber(dob);
    const combinedNumber = (nameNumber + birthNumber) % 9 || 9;

    const imagePath = generatePartnerFaceImage(combinedNumber, gender);

    document.getElementById("result").textContent =
        `Your numerology number is ${combinedNumber}. Here's your partner's face:`;

    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = `<img src="${imagePath}" alt="Partner's face">`;
}



function generatePartnerFaceImage(number, gender) {
    let imagePath = "";

    switch (number) {
        case 1:
            imagePath = gender === "male" ? "bufallowomen.webp" : "buffallomen.jpg";
            break;
        case 2:
            imagePath = gender === "male" ? "pig-women.jpg" : "pig-men.jpg";
            break;
        case 3:
            imagePath = gender === "male" ? "3women.webp" : "3men.jpg";
            break;
        case 4:
            imagePath = gender === "male" ? "4women.jpg" : "4men.webp";
            break;
        case 5:
            imagePath = gender === "male" ? "5women.jpg" : "5men.jpg";
            break;
        case 6:
            imagePath = gender === "male" ? "6women.jpg" : "6men.jpg";
            break;
        case 7:
            imagePath = gender === "male" ? "7women.jpg" : "7men.jpg";
            break;
        case 8:
            imagePath = gender === "male" ? "8women.avif" : "8men.jpg";
            break;
        case 9:
            imagePath = gender === "male" ? "9women.jpg" : "9men.jpg";
            break;
        default:
            imagePath = gender === "male" ? "pig-women.jpg" : "pig-men.jpg";
    }

    return imagePath;
}
