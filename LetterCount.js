function LetterCountI(str) {
    var count = 1;
    var maxCount = 0;
    var arr = str.toLowerCase().split(" ");
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        var wordArr = arr[i].split("");
        wordArr.sort();
        for (var j = 0; j < wordArr.length; j++) {
            if (wordArr[j] == wordArr[j + 1]) {
                count++;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                    count = 1;
                }
            }
        }
        newArr.push([arr[i], maxCount])
        maxCount = 0;
    }
    newArr.sort(function(a, b) {
        return b[1] - a[1]
    });
    if (newArr[0][1] === 1) {
        return "-1";
    } else {
        return newArr[0][0];
    }
}