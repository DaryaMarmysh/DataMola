var arr1 = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArray(arr) {
    var max_sum = Number.MIN_VALUE;
    var current_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            current_sum += arr[j];
            if (current_sum > max_sum) {
                max_sum = current_sum
            }
        }
        current_sum = 0;
    }
    return max_sum;
}
console.log(`${arr1} max sum ${maxSubArray(arr1)}`)