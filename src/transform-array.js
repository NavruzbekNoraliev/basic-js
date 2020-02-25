module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error();
    if (arr.length == 0) return arr;
    let finalArray = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == '--discard-next') {
            (i < arr.length - 1) ? i++ : '';
        } else if (arr[i] == '--discard-prev') {
            finalArray.length > 0 ? finalArray.pop() : '';
        } else if (arr[i] == '--double-next') {
            (i < arr.length - 1) ?finalArray.push(arr[i + 1]) : '';
        } else if (arr[i] == '--double-prev') {
            i>0 ? finalArray.push(arr[i - 1]) : '';
        } else {
            finalArray.push(arr[i])
        }
    }
    return finalArray
};
