function findSum(arr,i,sum) {

    if(i==0) {
        return sum;
    }
    sum+=arr[i-1];
    return findSum(arr,i-1,sum);
}

const arr = [1, 2, 3, 4, 5];
console.log(findSum(arr, arr.length, 0));
