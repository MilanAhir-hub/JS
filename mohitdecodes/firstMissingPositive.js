function firstMissingPositiveNumber(arr){
    let number = 1;

    for(let element of arr){
        if(element === number){
            number++;
        }
    }

    return number;

}

let arr = [-1, -2, 0, 1, 2, 4, 5]
console.log(firstMissingPositiveNumber(arr))