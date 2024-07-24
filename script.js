const message_data = {
    // The possible blessings are in order from best to worst
    blessings: ['Great blessing', 'Blessing', 'Small blessing', 'Half blessing', 'Future blessing', 'Future small Blessing', 'Misfortune'],
    // There is no ordering for life aspects and their predictions
    lifeAspects: ['Wishes', 'Lost items', 'Travel', 'Business', 'School', 'Relationships', 'Marriage', 'Childbirth', 'Health', 'Disputes'],
    aspectPredictions: ['Do not be afraid of competition.', 'An exciting opportunity lies ahead of you.', 'Be true to your word.', 'Your ideas have exeptional merit.', 'Plan for many pleasures ahead.', 'It is easier to stay out than to get out.', 'Expect the unexpected.', 'Something routine will turn into an enchanting adventure.', 'Beware of any endeavors that require new clothes.', 'You will not be comfortable without your own approval.', 'You will recieve a blessing from an unexpected source.', 'Attitude is a little thing that makes a bid difference.', 'Once you make a decision the universe conspires to make it happen.', 'Nothing great will be achieved without enthusiasm.', 'Reach for joy and all else will follow.', 'There are no impossibilities.', 'It is better to take smaller steps this year.', 'Apreciate what you already have.', 'You will have better luck in the following year.', 'Do not open your door on the last day of the month.', 'Someone close to you will be blessed in this.']
};

const selector = listName => {
    if (listName in message_data) {
        randomItemIndex = Math.floor(Math.random() * message_data[listName].length);
        return message_data[listName][randomItemIndex]
    } else {
        return 'Invalid input'
    }
};

const blessing = selector('blessings');
const lifeAspect1 = selector('lifeAspects');
const aspectPrediction1 = selector('aspectPredictions');
const lifeAspect2 = selector('lifeAspects');
const aspectPrediction2 = selector('aspectPredictions');
const lifeAspect3 = selector('lifeAspects');
const aspectPrediction3 = selector('aspectPredictions');


let finalMessage = `
********************
# ${blessing}
********************

## ${lifeAspect1}:
> ${aspectPrediction1}

## ${lifeAspect2}:
> ${aspectPrediction2}

## ${lifeAspect3}:
> ${aspectPrediction3}
`;

console.log(finalMessage);