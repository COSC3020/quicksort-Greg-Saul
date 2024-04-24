//used chat gpt to help with some debugging and to generate test arrays because I didnt want to manually make them
//the answer that it gave me for debugging was that I was forgetting a return statement


function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            //swaps them
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    //sorts the pivot into place
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    // console.log(arr)
    return ++i;
}

function quicksort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let stack = [];
    let top = -1;
    stack[++top] = 0; //lower bound
    stack[++top] = arr.length - 1; //upper bound
    // console.log(stack[top])

    while (top >= 0) {
        // console.log(stack)
        let hi = stack[top--];
        let lo = stack[top--];

        let pivot = partition(arr, lo, hi);
        // console.log(pivot)

        if (pivot - 1 > lo) {
            stack[++top] = lo;
            stack[++top] = pivot - 1;
        }

        if (pivot + 1 < hi) {
            stack[++top] = pivot + 1;
            stack[++top] = hi;
        }
    }
    return arr;
}

    // let arr = [ 83, 92, 44, 78, 30, 56, 79, 90, 35, 87, 9, 88, 62, 75, 61, 11, 19, 81, 71, 53 ]
    // let arr = [ 4, 3, 5, 2, 1, 3, 2, 3 ];
    // let arr = [8,7,6,5,4,3,2,1] 
    // let arr = [0,0]
    // quicksort(arr); 

    // console.log(arr)
