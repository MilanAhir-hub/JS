let arr = [1, [2, [3, [4]]]];

function flatArray(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flatArray(item))
        }else{
            result.push(item)
        }
    }

    return result;
}

console.log(flatArray(arr))