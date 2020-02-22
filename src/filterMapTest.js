// Method find the square root of only integer values in the array .........
function  findSqlureRootOfInteger(myarray) {
    return myarray.filter(value => Number.isInteger(value) && value>0)
        .map(value => value*value) ;

}

var myArray = [12,-4,2,0,8,11,3,-77,-1] ;
console.log(findSqlureRootOfInteger(myArray));

