import wordList from './wordList.json';

function WordsGenerator(options) {
    function WordsGenerator() {
        if (options && options.maxLength > 1) {
            return generateWordWithMaxLength();
        } else {
            return generateRandomWord();
        }
    }

    function generateWordWithMaxLength() {
        let rightSize = false;
        let wordUsed;
        while (!rightSize) {
            wordUsed = generateRandomWord();
            if (wordUsed.length <= options.maxLength) {
                rightSize = true;
            }
        }
        return wordUsed;
    }

    function generateRandomWord() {
        return wordList[randInt()];
    }

    function randInt(min = 1, max = wordList.length) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // No arguments = generate one word
    if (typeof options === 'undefined') {
        return WordsGenerator();
    }

    // Just a number = return that many words
    if (typeof options === 'number') {
        options = {
            wordsPerString: options
        };
    }

    // not a number = one word par string
    if (typeof options.wordsPerString !== 'number') {
        options.wordsPerString = 1;
    }
    options.wordsPerString = Math.abs(options.wordsPerString);

    //not a function = returns the raw word
    if (typeof options.formatter !== 'function') {
        options.formatter = word => word;
    }

    //not a string = separator is a space
    if (typeof options.separator !== 'string') {
        options.separator = ' ';
    }

    const results = [];
    let token = '';
    let relativeIndex = 0;

    for (let i = 0; i < options.wordsPerString; i++) {
        if (relativeIndex === options.wordsPerString - 1) {
            token += options.formatter(WordsGenerator(), relativeIndex);
        } else {
            token += options.formatter(WordsGenerator(), relativeIndex) + options.separator;
        }
        relativeIndex++;

        //Validate if next String
        if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = '';
            relativeIndex = 0;
        }
    }

    if (typeof options.join === 'string') {
        return results.join(options.join);
    }

    return results;

}

WordsGenerator.wordList = wordList;
export default WordsGenerator;