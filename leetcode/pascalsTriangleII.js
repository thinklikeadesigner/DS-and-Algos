var getItem = function(row, j) {
    if (j < 0 || j >= row.length)
    {return 0}

return row[j];
}

var getRow = function(rowIndex) {
    var row = [1];

    for (var i = 0; i < rowIndex; i++) {
        var newRow = new Array(i + 1);


        for (var j = 0; j <= i + 1; j++)
{        var digit = getItem(row, j-1) + getItem(row, j);
newRow[j] = digit;


}
row = newRow;
console.log(row)
}
 return row
    

}

getRow(10)

/*
pascal's triangle

[ 1, 1 ]
[ 1, 2, 1 ]
[ 1, 3, 3, 1 ]
[ 1, 4, 6, 4, 1 ]
[ 1, 5, 10, 10, 5, 1 ]

*/