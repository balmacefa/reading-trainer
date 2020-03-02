import WordsGenerator from '../../../utils/wordGenerator/WordsGenerator';

console.log(WordsGenerator());
// army

console.log(WordsGenerator(5));
// ['army', 'beautiful', 'became', 'if', 'actually']

console.log(WordsGenerator({min: 3, max: 10}));
// ['became', 'arrow', 'article', 'therefore']

console.log(WordsGenerator({exactly: 2}));
// ['beside', 'between']

console.log(WordsGenerator({exactly: 5, join: ' '}))
// 'army beautiful became if exactly'

console.log(WordsGenerator({exactly: 5, join: ''}))
// 'armybeautifulbecameifexactly'

console.log(WordsGenerator({exactly: 5, maxLength: 4}))
// ['army', 'come', 'eye', 'five', 'fur']

console.log(WordsGenerator({exactly: 5, wordsPerString: 2}))
// ['salt practical', 'also brief', 'country muscle', 'neighborhood beyond', 'grew pig']

console.log(WordsGenerator({exactly: 5, wordsPerString: 2, separator: '-'}))
// ['equator-variety', 'salt-usually', 'importance-becoming', 'stream-several', 'goes-fight']

console.log(WordsGenerator({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word) => word.toUpperCase()
}))
// ['HAVING LOAD', 'LOST PINE', 'GAME SLOPE', 'SECRET GIANT', 'INDEED LOCATION']

console.log(WordsGenerator({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
        return index === 0
            ? word
                .slice(0, 1)
                .toUpperCase()
                .concat(word.slice(1))
            : word;
    }
}))
// ['Until smoke', 'Year strength', 'Pay knew', 'Fallen must', 'Chief arrow']
