(function(value = "sreeraj") {
    value+=" Thi Valapil";
    console.log("The name is " + value ) ;
})() ;
// Thr above function will invoke automatically


(sum = function(a,b) {
    var result = a+b ;
    console.log("The result is ... : " +result) ;
    return result;
})();

sum(10,20) ;
