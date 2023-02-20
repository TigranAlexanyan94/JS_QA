const WordArray = ["name", "drink", "main", "mane", "anme", "mani"]

function groupAnagramWords(WordArray){
    let map = new Map();
    for ( let word of WordArray ){
        let ArrWords = [...word];
        ArrWords.sort();
        ArrWords = ArrWords.join('');
        if(map.has(ArrWords)){
            map.get(ArrWords).push(word);
        }else{
            map.set(ArrWords, [word])
        };
    };
    return [...map.values()];
};

// groupAnagramWords(WordArray);

module.exports = {
    groupAnagramWords,
    WordArray
}