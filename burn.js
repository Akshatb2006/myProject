
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


function calculateBurn() {
    const name = document.getElementById('name').value;

    if (!name) {
        document.getElementById('burn-result').textContent = "Enter your name if you dare... let's see what burns!";
        return;
    }

    const nameNumber = calculateNameNumber(name);
    let burnMessage = '';

    switch (nameNumber) {
        case 1:
            burnMessage = "Oh look, another 'leader'. Your future includes bossing people around, but hey, at least you'll be good at it... or maybe not. \n" +
                          "Your energy is so high, it might actually burn some bridges. \n" +
                          "Let’s be real, you're not a leader, you're just the loudest person in the room. \n" +
                          "Everyone follows you... but mostly because they doesn't want to hurt tou or see you crying. \n" +
                          "Relationship-wise? You’re single because you’re too busy ‘leading’ your imaginary army. \n" +
                          "If you’re mingling? Prepare to lose your ‘bossy’ charm fast. \n" +
                          "Might want to chill with the ‘I’m in charge’ act, or you'll end up single forever, even your pet’s avoiding you.";
            break;
        case 2:
            burnMessage = "You think you’re the peacemaker? Honey, you’re just avoiding drama because you can’t handle it. \n" +
                          "Your ‘calming presence’ is basically just you hiding in the corner. \n" +
                          "Let’s be honest, the only balance you’re maintaining is trying to figure out where you left your phone. \n" +
                          "Everyone’s nice to you because they know you can’t handle conflict. \n" +
                          "Relationship-wise? You’ll be single forever, unless your soulmate is a couch potato like you. \n" +
                          "Mingling? You’re the person who can’t even handle a game of truth or dare. Better stay single, trust me.";
            break;
        case 3:
            burnMessage = "Oh, you’re a social butterfly, huh? More like the butterfly that never leaves the bar. \n" +
                          "Your future is all about ‘fun’ and ‘adventures,’ but deep down, you’re just avoiding real commitment. \n" +
                          "You’re the life of the party—until the party realizes you’re the one who’ll bail at the last minute. \n" +
                          "Relationship-wise? You’re probably single because you’re too busy entertaining the world. \n" +
                          "Mingling? You're the person who thinks flirting is a hobby, not realizing no one takes you seriously.";
            break;
        case 4:
            burnMessage = "Okay, ‘Mr. Practical’ or ‘Ms. I-Need-a-Plan.’ Your future is a spreadsheet. \n" +
                          "You’re always the responsible one... until it all goes south. \n" +
                          "Your life motto? ‘If it’s not organized, it’s chaos.’ News flash: it’s still chaos, you’re just fooling yourself. \n" +
                          "Relationship-wise? You’ll be single because no one can keep up with your perfectionist standards. \n" +
                          "Mingling? You’re the person who brings a notebook to a party. Just go home already.";
            break;
        case 5:
            burnMessage = "Wow, you’re all about ‘freedom,’ huh? More like ‘I-can’t-handle-anything-else’ person. \n" +
                          "Your future? Probably involves you running away from responsibility. \n" +
                          "You’re that person who bounces between hobbies, relationships, and pizza toppings—nothing lasts. \n" +
                          "Relationship-wise? You’re probably single because you’re too busy chasing the next adventure. \n" +
                          "Mingling? You’re that person who says ‘I don’t like labels,’ but guess what, you just labeled yourself as a flake.";
            break;
        case 6:
            burnMessage = "Oh, look, it’s ‘Ms. Perfect Family’ or ‘Mr. Always-Helping.’ You’re basically the unpaid therapist. \n" +
                          "Your future is full of responsibilities, taking care of everyone else, while you forget about yourself. \n" +
                          "You’re like the mom-friend, but no one’s actually your mom. \n" +
                          "Relationship-wise? You’re probably single because you’re either smothering your partner or acting like their therapist. \n" +
                          "Mingling? You’re that person who’s ‘too caring,’ but let’s be real, it’s just because you want people to take care of you.";
            break;
        case 7:
            burnMessage = "Mysterious much? You’re the person who talks in riddles and makes everyone feel like they need a PhD just to understand you. \n" +
                          "Your future? You’ll be the lonely philosopher in the corner, pondering life... and how everyone else doesn’t ‘get it.’ \n" +
                          "You’re a deep thinker, but not so deep that you’ll find a relationship anytime soon. \n" +
                          "Relationship-wise? You’re single because no one wants to decode your cryptic love language. \n" +
                          "Mingling? You’re the person who sounds smart, but we all know you’re just Googling everything.";
            break;
        case 8:
            burnMessage = "You’re all about ‘success,’ huh? But you can’t even manage your own finances without a panic attack. \n" +
                          "Your future includes lots of money... if you stop spending it all on the next ‘big thing.’ \n" +
                          "You’re always chasing success, but you might miss it because you’re too busy with your ‘next big idea.’ \n" +
                          "Relationship-wise? You’re probably single because no one can deal with your ‘always working’ lifestyle. \n" +
                          "Mingling? You’re the person who talks about business ideas at 2 AM, and it’s giving everyone a headache.";
            break;
        case 9:
            burnMessage = "You think you're a ‘savior’? Everyone just thinks you're a drama queen. \n" +
                          "Your future? Well, it’s dramatic, to say the least. You’ll either be saving the world or burning it to the ground. \n" +
                          "You love drama more than an actual soap opera. You’re probably the person who creates chaos just to get attention. \n" +
                          "Relationship-wise? You’re probably single because no one can handle your ‘emotional rollercoaster.’ \n" +
                          "Mingling? You’re the person who makes everything about you, and yeah, it’s annoying. People are avoiding you.";
            break;
        default:
            burnMessage = "Your future is basically a dumpster fire. \n" +
                          "You're just winging it, hoping the universe will magically fix your mess. \n" +
                          "Expect more chaos than you can handle, but hey, at least it’ll be entertaining. \n" +
                          "You have potential... but mostly to crash and burn. \n" +
                          "Relationship-wise? You're single because no one can handle your chaos. \n" +
                          "Mingling? You’ll be ghosting people while pretending to have it all together.";
            break;
    }

    document.getElementById('burn-result').textContent = burnMessage.replace(/\n/g, '\n');
}
