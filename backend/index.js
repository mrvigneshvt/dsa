



//Fibbo

/*
function fibbo(n){
    let arr = [0,1]
    for(i=2;i<n;i++){
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    console.log(arr)
}

fibbo(9)
*/



// FACTORIAL

/*
function fact(n){
    let arr = []
    for(i=1;i<=n;i++){
        arr.push(i)
    }
    console.log(arr.reduce((product, element) => product * element, 1))
    
}

fact(0)
*/

// PRIME NUMBERS = >
/*
function prime(n){
    if(n<2){
        return console.log(`${n} is not a Prime Number`)
    }
    for(i=2;i<n;i++){
        if(n%i === 0){
            return console.log(`${n} is not a Prime Number`)
        }else{
            return console.log(`${n} is a Prime Number`)
        }
    }

}prime(51661811565)*/


//POWER OF 2
/*
function powerof2(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}

console.log(powerof2(1))
console.log(powerof2(2))
console.log(powerof2(5))
console.log(powerof2(6))
*/

// RECURSIVE FIBBO

/*
let arr = [0,1]

function add(){

    while(arr.length < 10){
        arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2]
        console.log(arr)
    }

    if(arr.length = 10){
        return console.log(`Finished`)
    }else{
    add()
    }
}

add()
*/

// RECURSIVE FACTORIAL

/*
function recFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recFactorial(n - 1)
}

console.log(recFactorial(5))
console.log(recFactorial(10))
console.log(recFactorial(15))
*/

// LINEAR SEARCH

/*
function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5,2,4,5,10], 10))
console.log(linearSearch([-4,8,5,9,1],8))
console.log(linearSearch([-8,7,0,3,1],10))
*/

// BINARY SEARCH
/*
function binSear(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
         else if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else if(target > arr[middleIndex]){
            leftIndex = middleIndex + 1
        }
    }

}

console.log(binSear([-1 , 0, 2, 6, 8],6))
console.log(binSear([-1 , 0, 2, 6, 8],0))
console.log(binSear([-1 , 0, 2, 6, 8],-1))
*/

// RECURSIVE BINARY SEARCH

/*function recBin(arr,target){

    let low = 0;
    let high = arr.length - 1
    let middle = Math.floor((low + high)/2)

     search(arr,target,low,high,middle);
}

function search(arr,target,middle){
    if(target === arr[middle]){
        return middle
    }
    if(target < arr[middle]){
        return search(arr,target,middle-1)
    }
    if(target > arr[middle]){
        middle = middle + 1
    }
    
}

console.log(recBin([-1 , 0, 2, 6, 8],6))
console.log(recBin([-1 , 0, 2, 6, 8],0))
console.log(recBin([-1 , 0, 2, 6, 8],-1))*/

// REC BIN SEARCH
/*
function recBin(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let middle = Math.floor((low + high) / 2);
   // console.log(middle)
    return search(arr, target, low, high, middle);
}

function search(arr,target,low,high,middle){
    if(middle < low){
        return 'Not found!'
    }else if(middle > high){
        return 'Not found!'
    }

    if(arr[middle]==target){
        return middle
    }

    if(arr[middle] < target){
        return search(arr,target,low,high,middle+1)
    }

    if(arr[middle] > target){
        return search(arr,target,low,high,middle-1)
    }

}*/
/*
function Bin(arr,target){
    let low = 0;
    let high = arr.length - 1

    while(low <= high){

        let middle = Math.floor((low+high)/2)
        if(target === arr[middle]){
            return middle
        }
        if(target < arr[middle]){
            high = middle -1;
        }
        if(target > arr[middle]){
            low = middle + 1
        }
    }

    return 'Not found!'
}
console.log(Bin([-1, 0, 2, 6, 8], 2)); 
console.log(Bin([-1, 0, 2, 6, 8], 8)); 
console.log(Bin([-1, 0, 2, 6, 8], 10)); 
*/


// SORTING ALGO

// BUBBLE SORT (my way)
/*
function bubbleSort(arr){
    let swapped = true

    do{
        swapped = false
        for(let i=0; i<arr.length -1; i++){
            if(arr[i+1] < arr[i]){
             let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}

const arr = [ -8, -9, -5, -2, 0, 9, 5]
bubbleSort(arr)
console.log(arr)
console.log(`hello`)

function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;
    let middle;
    while(low <= high){
         middle = Math.floor((low + high)/2)
        if(arr[middle] === target){
            return middle
        }
        if(arr[middle]<target){
            low = middle +1
        }else if(arr[middle]>target){
            high = middle - 1
        }
    }
}

console.log(binarySearch(arr,9))
*/




