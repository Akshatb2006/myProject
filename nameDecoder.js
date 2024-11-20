
const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
};

function calculateNumber(event) {
    event.preventDefault(); 
    
    let name = document.getElementById('nameInput').value.trim().toLowerCase();
    
    let sum = 0;
    for (let char of name) {
        if (letterToNumber[char]) {
            sum += letterToNumber[char];
        }
    }
    
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    displayResult(sum);
}

function displayResult(number) {
    let resultContainer = document.getElementById('result');
    let resultText = `<h3>Your Life Path Number is: <span class="number">${number}</span></h3>`;

    if (number === 1) {
        resultText += `
            <p><strong>Personality Number 1:</strong> You radiate with a dynamic and efficient energy. You appear controlled and capable. 
            You value courage and effort in the face of difficulties and these qualities show. Others can sense that you will not be pushed around.</p>
            
            <p>You should dress in a dignified and correct manner, caring for the details of your appearance. While you may spend most of your time in staid business dress or suits, bright and cheerful colors work well for you. You are fashionable, but have your own style.</p>
            
            <p>Your appearance suffers more than most people when you are overweight, because it directly contradicts the type of personality you are trying to project. Straight lines and square corners accent your physique and enhance your appearance as a leader.</p>
        `;
    }
   if (number === 2) {
    resultText += 
    `<p><strong>Personality Number 2:</strong> You appear friendly and unpretentious. You have a soft and warm exterior. Others perceive you as gentle, safe harbor. People are drawn to you because, among other reasons, you appear warm and unthreatening.</p>
    
    <p>Your dress is neat and clean. Your clothing should be comfortable, soft, and flowing. You should avoid plain and understated clothes. Make an effort to be a little more daring and exciting in your appearance. This will balance nicely with your perceptive and open personality.</p>
    
    <p>The opposite sex is attracted to your gentle and attentive nature, yet senses the passion beneath your surface. You have sex appeal. Exercise is important to your appearance and to promote the level of strength you radiate.</p></>`;
   }
   if(number === 3){
        resultText += 
    `<p><strong>Personality Number 3:</strong>Your vibration is full of life. You are uplifting, inspiring, and charming. You are a fun person to be around. Your wit and sparkling personality make you the life of a party.</p>

<p>You are attractive. Many men with a 3 Personality are very handsome; women are often strikingly beautiful.</p>`;
   }
   if(number === 4){
        resultText +=
        `<p><strong>Personality Number 4:</strong> You are a family person. You love the intimacy, consistency, and the security a family provides. You are a good provider and protector. But family members may take your efforts for granted.</p>

<p>You are a true patriot. You love your country and are an integral part of your community. Your consistency and adherence to your well-laid plans usually pays off in a comfortable and secure future.</p>`;
   }
   if(number === 5){
        resultText +=  
        `<p><strong>Personality Number 5:</strong> You are a stimulating person. You brighten social gatherings with your fresh and original ideas. Your conversation tends to be sprinkled with novelty and wit. You have a quick tongue and charisma.</p>

<p>You are probably an excellent salesman. There is a lot of nervous energy within you looking for an outlet.</p>`;
   }
   if(number === 6){
        resultText += 
        `<p><strong>Personality Number 6:</strong> You radiate understanding and compassion. People sense your warmth and fairness. For this reason, you attract many people who are in need of comfort, including the disadvantaged.

People tend to come to you to unload their burdens. You inspire confidence.

You have a fine sense of justice.

You do everything in your power to keep the harmony and are even willing to sacrifice your personal desires for the good of others. You can take this too far, however, sometimes playing the role of the martyr.

You have to guard against being taken advantage of. You are not always a very good judge of character. You tend to see the best in others. You also can become too involved in the lives of others, to your own detriment. </p>

<p>You are romantic, faithful and very protective. You are artistic. You love music, flowers and gardening. People want to relax in your presence and unburden themselves. You are the safe port in the crowd.</p>`;
   }
   if(number === 7){
        resultText += 
        `<p><strong>Personality Number 7:</strong> You seem mysterious and different. People see you as serious and studious. You are highly independent and self- sufficient. Your accept ional intelligence and wisdom are quickly noticed, people respect you.

You are not one to attract people on the basis of your warmth or compassion - though you may be loaded with both - but because of your obvious insight into life's mysteries.</p>

<p>You are often withdrawn. It is common for people to see your focus turn inside of yourself in the middle of a conversation. You have the makings of an intellectual and an aristocrat but you have to guard against arrogance and an attitude of, "I've got it all figured out".</p>`;          
   }
   if(number === 8){
        resultText += 
        `<p><strong>Personality Number 8:</strong> You appear strong and powerful. You have an impressive personality and can influence and even intimidate through sheer force. You have natural authority. Your competence and enthusiasm attract people with resources.

You radiate confidence. People defer to you because they sense your sureness and effectiveness. You also exude a kind of controlled benevolence. People sense that you are generous, once you are convinced of the worthiness of the cause.</p>          
        
        <p>You radiate a kind of raw power and able ness, which needs to be refined and enhanced by your clothing. You may even dress a bit flashy, but that will not harm you. Quality is among your highest priorities, and should reflect in your clothing.</p>`;
   }
   if(number === 9){
        resultText += 
        `<p><strong>Personality Number 9:</strong> You have an impressive and aristocratic bearing. No matter how tall you are, you appear noble and upright. You are very much in control of the image you send out to others.

Many actors, dancers, and other performers have a 9 Personality Number. You are elegant, graceful, and charismatic. Many admire you. You have the kind of stature that pulls people to you or repels them intensely. Some are jealous of you and may seek to belittle you. You may encourage this to some extent by the amount of arrogance you radiate.</p>
        
        <p>Conversely, you have a great compassion for humanity and want to dedicate yourself to improving the lot of others. You are better when dealing with the trials of the many than the trouble of a single person. You are more capable of working on the grand scale, addressing the needs of society, than on a one-to-one basis.</p>`;
   }
    resultContainer.innerHTML = resultText;
}
