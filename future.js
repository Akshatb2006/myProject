
function calculateNameNumber(name) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let sum = 0;

    name = name.toUpperCase();

    
    for (let i = 0; i < name.length; i++) {
        if (alphabet.includes(name[i])) {
            sum += (alphabet.indexOf(name[i]) % 9) + 1;
        }
    }

    
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}

function calculateFuture() {
    const name = document.getElementById('name').value;

    if (!name) {
        document.getElementById('future-result').textContent = "Please enter your name to discover your *hilarious* future!";
        return;
    }

    const nameNumber = calculateNameNumber(name);
    let futurePrediction = '';

    switch (nameNumber) {
        case 1:
            futurePrediction = "You're going to rule the world... or at least your group chat. \n" +
                                "Expect to be the boss in every group project! \n" +
                                "Just don't get carried away with your new-found power. \n" +
                                "People will look to you for leadership... mostly for pizza orders. \n" +
                                "You might even start giving motivational speeches at brunch.";
            break;
        case 2:
            futurePrediction = "You're about to become everyone's favorite peacemaker. \n" +
                                "Expect to solve problems... like what to eat for dinner. \n" +
                                "Your future holds many harmonious moments... mostly in your music playlist. \n" +
                                "You’ll be the glue that holds your friend group together, like duct tape. \n" +
                                "People will want you around because you're just too chill to argue with.";
            break;
        case 3:
            futurePrediction = "Your future is filled with wild creativity and questionable fashion choices. \n" +
                                "Expect a spontaneous dance party to break out... and you’ll lead it. \n" +
                                "You might accidentally invent a new dance move or at least try. \n" +
                                "Artistic breakthroughs are coming, like discovering TikTok memes. \n" +
                                "But, remember, no one can stop you... not even your Wi-Fi!"+
                                "I know u still remember your ex..aur agar nhi hai then u can just stay put...well all the best for your bacheclor life!!";
            break;
        case 4:
            futurePrediction = "Your future involves spreadsheets, deadlines, and... more spreadsheets. \n" +
                                "You’re about to become the most reliable person in your group chat. \n" +
                                "You’ll work hard, but your snacks will work even harder. \n" +
                                "While others are procrastinating, you’ll already have the plan... and maybe a nap. \n" +
                                "Just don’t get lost in the never-ending to-do lists!"+
                                "Don't worry, about your future, as you will remain single ...i mean sukha pada hai!!";
            break;
        case 5:
            futurePrediction = "Buckle up! Your future is a rollercoaster of snacks, naps, and chaotic energy. \n" +
                                "You’ll soon be a professional at the art of avoiding responsibilities. \n" +
                                "Expect spontaneous trips to the fridge... and maybe the Bahamas. \n" +
                                "Change is coming, and it's probably just your playlist shuffle. \n" +
                                "Adventure will find you... or you'll find it in your couch cushions!";
            break;
        case 6:
            futurePrediction = "Your future is going to be one long group chat. \n" +
                                "Expect to be the go-to person for emotional support... and memes. \n" +
                                "You'll soon start hosting dinner parties, but no one will ever help clean. \n" +
                                "Your future holds harmony... and maybe a questionable amount of dessert. \n" +
                                "You’ll be the best at giving advice, even if it’s just about what to wear on Mondays.";
            break;
        case 7:
            futurePrediction = "Your future involves deep thoughts, late-night snacks, and maybe a nap or two. \n" +
                                "Prepare for endless introspection... and maybe a new hobby. \n" +
                                "You’ll soon find yourself philosophizing about life... while binge-watching Netflix. \n" +
                                "People will turn to you for wisdom, or just to ask about your Wi-Fi password. \n" +
                                "Spiritual growth is on the horizon, but so is pizza at 3 AM!";
            break;
        case 8:
            futurePrediction = "Success is coming your way... but only if it involves a profit. \n" +
                                "Prepare for a future full of power, riches, and a very full wallet. \n" +
                                "You might be tempted to buy something extravagant... like a personal pizza oven. \n" +
                                "People will bow down to your financial skills... especially when you spot a sale. \n" +
                                "But, hey, it's your future, spend wisely... or on fun gadgets!";
            break;
        case 9:
            futurePrediction = "Your future is filled with kindness, good vibes, and probably a lot of charity donations. \n" +
                                "You’ll find yourself helping others... and then regretting it when they ask for your Wi-Fi password. \n" +
                                "Expect to be the hero of your group, mostly when rescuing snacks from the kitchen. \n" +
                                "Your compassionate soul will lead you to greatness... or at least to the front of the line. \n" +
                                "Your future holds good karma... and maybe some free Wi-Fi!";
            break;
        default:
            futurePrediction = "Your future is as mysterious as your last-minute assignments. \n" +
                                "Expect some unexpected adventures, like finding your keys... and your motivation. \n" +
                                "Your journey ahead is full of surprises, mostly in your laundry pile. \n" +
                                "You’ll thrive in situations where no one else can find the answer... like your math homework. \n" +
                                "Stay ready for whatever comes next... even if it’s just a nap!";
            break;
    }

    document.getElementById('future-result').textContent = futurePrediction.replace(/\n/g, '\n');
}
