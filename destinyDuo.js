
const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
};


function calculateNumerologyNumber(name) {
    let sum = 0;
    name = name.trim().toLowerCase().replace(/\s+/g, '');

    for (let char of name) {
        if (letterToNumber[char]) {
            sum += letterToNumber[char];
        }
    }

    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
}


function calculateCompatibility(event) {
    event.preventDefault(); 

    
    let name1 = document.getElementById('nameInput1').value;
    let name2 = document.getElementById('nameInput2').value;

    
    let number1 = calculateNumerologyNumber(name1);
    let number2 = calculateNumerologyNumber(name2);

    
    let compatibility = Math.abs(number1 - number2) * 11; 

    
    if (compatibility > 100) {
        compatibility = 100;
    }

    
    displayResult(compatibility, name1, name2);
}


function displayResult(compatibility, name1, name2) {
    let resultContainer = document.getElementById('result');
    
    
    let message = '';
    if (compatibility >= 90) {
        message = `
            <p>Woah! You two are practically destined to be together. It's like cosmic glue!</p>
            <p>Who needs Cupid when you have numerology?</p>
            <p>Get ready to conquer the world, one romantic adventure at a time!</p>
            <p>Your energy together could power a small galaxy. Proceed with caution!</p>
            <p>Did we just discover your power couple status? Looks like it!</p>
        `;
    } else if (compatibility >= 70) {
        message = `
            <p>Not bad! You two are a solid match. Definitely worth a try, maybe some popcorn for the date?</p>
            <p>Your vibe is strong, but don't expect a fairy tale... yet!</p>
            <p>It’s a promising start, just don’t forget to laugh at each other’s jokes.</p>
            <p>We can see potential here... as long as you both know how to share fries.</p>
            <p>You might just be the couple everyone is rooting for, after all!</p>
        `;
    } else if (compatibility >= 50) {
        message = `
            <p>Well, it’s a start! There’s potential... But, uh, maybe work on those conversation skills!</p>
            <p>Can you both agree on what to eat? That’s the real test.</p>
            <p>It’s not a disaster, but it’s no rom-com either.</p>
            <p>You’re like coffee and donuts—interesting, but not everyone’s cup of tea.</p>
            <p>Keep working on your team chemistry, maybe try matching socks?</p>
        `;
    } else if (compatibility >= 30) {
        message = `
            <p>Hmm... Looks like you’re on different wavelengths. Maybe stick to just being friends for now?</p>
            <p>Your connection is like a Wi-Fi signal in a basement—spotty, at best.</p>
            <p>Maybe try chatting over some pizza and see where it goes?</p>
            <p>Not exactly the love story of the century, but hey, at least you’re not strangers!</p>
            <p>Good thing you're friends, because this is mostly just a numbers game!</p>
        `;
    } else {
        message = `
            <p>Oof! Looks like the stars have other plans. Time to work on those communication skills... and possibly send a few more memes!</p>
            <p>Your numerology is a little out of sync. Maybe a group project instead?</p>
            <p>It’s a low compatibility, but don’t worry—everyone has room to grow!</p>
            <p>Maybe the stars are just busy... or they’re laughing at this match!</p>
            <p>But hey, at least you're not totally doomed. Try again with better vibes!</p>
        `;
    }

    
    resultContainer.innerHTML = `
        <h3>Your Compatibility:</h3>
        <p><strong>${name1}</strong> & <strong>${name2}</strong> have a <span class="number">${compatibility}%</span> compatibility!</p>
        ${message}
        <p>Based on numerology, your connection could be written in the stars... or maybe in the space between your texts! 🌌</p>
    `;
}
