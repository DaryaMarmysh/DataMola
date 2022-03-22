/* eslint-disable */
var arr1 = [7, 1, 5, 3, 6, 4];
var arr2=[1,2,3,4,5];
var arr3=[7,6,4,3,1];
var arr4=[6,1,3,2,4,7];
function maxMoney(arr) {
    let money = 0
    let min_index = arr.indexOf(Math.min(...arr));
    let max_index = arr.indexOf(Math.max(...arr));
    function getIndexmin(startIndex) {
        arr = arr.slice(startIndex);
        return arr.indexOf(Math.min(...arr));
    }
    function getIndexmax(startIndex) {
        arr = arr.slice(startIndex);
        return arr.indexOf(Math.max(...arr));
    }
    if (max_index===arr.length-1)
    {
        return arr[max_index];
    }
    while (min_index < arr.length - 1) {

        money -= arr[min_index];
        money += arr[max_index]

        min_index = getIndexmin(max_index + 1);
        max_index = getIndexmax(max_index + 1);

    }
    return money;

}
console.log(`[${arr1}] money ${maxMoney(arr1)}`);
console.log(`[${arr2}] money ${maxMoney(arr2)}`);
console.log(`[${arr3}] money ${maxMoney(arr3)}`);
console.log(`[${arr4}] money ${maxMoney(arr4)}`);
