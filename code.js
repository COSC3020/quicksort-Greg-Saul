//used chat gpt to help with some debugging and to generate test arrays because I didnt want to manually make them
//the answer that it gave me for debugging was that I was forgetting a return statement


function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    return ++i;
}

function quicksort(arr) {
    if(arr.length <= 1){
        return arr
    }
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
    while (stack.length > 0) {
        let high = stack.pop();
        let low = stack.pop();
        if (low < high) {
            let pivot = partition(arr, low, high);
            if(pivot - 1 > low){
                stack.push(low);
                stack.push(pivot - 1);
            }
            if(pivot + 1 < high){
                stack.push(pivot + 1);
                stack.push(high);
            }
            
        }
    }
    return arr
}


function swap(a,i,j){
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}

// let arr = [ 83, 92, 44, 78, 30, 56, 79, 90, 35, 87, 9, 88, 62, 75, 61, 11, 19, 81, 71, 53 ]
// let arr = [ 4, 3, 5, 2, 1, 3, 2, 3 ];
// let arr = [8,7,6,5,4,3,2,1] 
// let arr = [0,0]
// quicksort(arr); 

// console.log(arr)
