function maxOccuringChar(str){
    let freq = new Map();

    for(let char of str){
        if(freq.has(char)){
            freq.set(char, freq.get(char)+1);
        }else{
            freq.set(char, 1);
        }
    }

    let maxChar = '';
    let count = 0;

    for([char, frequency] of freq.entries()){
        if(frequency>count){
            count = frequency;
            maxChar = char;
        }
    }

    return maxChar;
}

let str = "Javascript";
console.log(maxOccuringChar(str));