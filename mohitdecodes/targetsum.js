function findPair(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[left] + arr[right];

        if(sum === target){
            return [arr[left], arr[right]];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }

    return [];
}

let arr = [1,2,3,4,5]
let target = 2;

console.log(findPair(arr, target))