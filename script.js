const message_data = {
    // The possible blessings are in order from best to worst
    possibleBlessings: ['Great blessing', 'Blessing', 'Small blessing', 'Half blessing', 'Future blessing', 'Future small Blessing', 'Misfortune'],
    // There is no ordering for life aspects and their predictions
    possibleLifeAspects: ['Wishes', 'Lost items', 'Travel', 'Business', 'School', 'Relationships', 'Marriage', 'Childbirth', 'Health', 'Disputes'],
    possibleAspectPredictions: ['Do not be afraid of competition.', 'An exciting opportunity lies ahead of you.', 'Be true to your word.', 'Your ideas have exeptional merit.', 'Plan for many pleasures ahead.', 'It is easier to stay out than to get out.', 'Expect the unexpected.', 'Something routine will turn into an enchanting adventure.', 'Beware of any endeavors that require new clothes.', 'You will not be comfortable without your own approval.', 'You will recieve a blessing from an unexpected source.', 'Attitude is a little thing that makes a bid difference.', 'Once you make a decision the universe conspires to make it happen.', 'Nothing great will be achieved without enthusiasm.', 'Reach for joy and all else will follow.', 'There are no impossibilities.', 'It is better to take smaller steps this year.', 'Apreciate what you already have.', 'You will have better luck in the following year.', 'Do not open your door on the last day of the month.', 'Someone close to you will be blessed in this.']
};

const BlessingSelector = () => {
        let randomBlessingIndex = Math.floor(Math.random() * message_data.possibleBlessings.length);
        return message_data.possibleBlessings[randomBlessingIndex];
};

const aspectSelector = arrName => {
    if (arrName in message_data) {
        let workingArr = message_data[arrName].slice();
        let finalArr = []
        let randomItemIndex
        for (let i = 0; i < 3; i++) {
            randomItemIndex = Math.floor(Math.random() * workingArr.length);
            finalArr.push(workingArr.splice(randomItemIndex,1));
        }
        return finalArr;
    } else {
        return ['Invalid input', 'Invalid input', 'Invalid input'];
    }
}

const blessing = BlessingSelector('possibleBlessings');
const lifeAspects = aspectSelector('possibleLifeAspects');
const aspectPredictions = aspectSelector('possibleAspectPredictions');

let finalMessage = `
# ${blessing}
********************

## ${lifeAspects[0]}:
> ${aspectPredictions[0]}

## ${lifeAspects[1]}:
> ${aspectPredictions[1]}

## ${lifeAspects[2]}:
> ${aspectPredictions[2]}
`;

console.log(finalMessage);