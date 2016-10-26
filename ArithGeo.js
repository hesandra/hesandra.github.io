function ArithGeo(arr) {
    var subDiff = arr[1] - arr[0];
    var divDiff = arr[1] / arr[0];
    for (var i = arr.length - 1; i <= arr.length; i--) {
        if (arr[i] - arr[i - 1] === subDiff) {
            return "Arithmetic"
        }
        if (arr[i] / arr[i - 1] === divDiff) {
            return "Geometric"
        } else return "-1"
    }
}
ArithGeo();