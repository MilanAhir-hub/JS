function countEvenOdd(arr){

    let odd = 0;
        let even = 0;

    for(let element of arr){
        if(element%2 === 0){
            even++;
        }else{
            odd++;
        }

        
    }

    return {odd, even}
}

let arr = [1,2,3,4,5,6]

console.log(countEvenOdd(arr))