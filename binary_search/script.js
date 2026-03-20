function binarySearch(arr, target){
    let left = 0
    let right = arr.length-1
    while (left <= right) {
        let mid = (left + right) >> 1
        let guess = arr[mid]
        if(guess == target){
            return mid
        }
        if(target > guess){
            // se descarta la mitad a la izquierda si el target es mayor
            left = mid+1
        }else{
            // se descarta la mitad a la derecha si el target es menor
            right = mid-1
        }
    }
    return null
}

let number = [1, 2, 3, 4, 5, 6, 7,8,9,10,12,13]

let result = binarySearch(number, 13)
console.log(result);