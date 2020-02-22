function findCapital(value) {
    var countryCapitalObj = {
        "india":"New Delhi",
        "USA":"Washington",
        "Sweden":"Stockholm",
        "Denmark":"Copenhagen"
    }
    return countryCapitalObj[value];
}
console.log("The capital of India is :" +findCapital('india'));
console.log("The capital of USA is :" +findCapital('USA')) ;
console.log("The capital of Sweden is :" +findCapital('Sweden')) ;

var p = undefined || 10 ;
console.log("The value of p is : " + p) ;