let Random_Word = [
    "cat",
    "dog",
    "apples",
    "bananas",
    "soda",
    "science",
    "engineering",
    "nike",
    "java",
    "javascript",
    "subway",
    "monster",
    "angle",
    "degree",
    "cool",
    "hot",
    "pineapple",
    "buffalo",
    "zebra",
    "mexico",
    "computer",
    "headphones",
    "water",
    "colorado",
    "appa",
    "yellow",
    "fish",
    "pencil",
    "music",
    "queen",
    "excellent",
    "rabbit",
    "snake",
    "penquin",
];

function randomWord() {
    return Random_Word[
        Math.floor(Math.random() * Random_Word.length)
    ];
}

export{randomWord};