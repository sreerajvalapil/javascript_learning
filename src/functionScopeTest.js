function hello() {
    myName = "Sreeraj" ;
    var schoolName = "IGSR" ;
    let placeName= "Askim"
    console.log("Hai Good morning ") ;
}
hello();

function updateName() {
    myName +=" Thi Valapil" ;
    schoolName +=" Gothenburg";
    schoolName = "aa" ;
    placeName +=" Sweden" ;
    console.log(myName) ;
    console.log(schoolName) ;
}
//updateName();

// In the above example the schoolName and placeName are not global scope , So they will throw error
// myName is local scope , so it does not throw error

function testScope() {
   let c = true ;
    if(c) {
        let a = 10;
        var b="sree" ;
    }
    console.log("Value of a is :" +a) ;
    console.log("Value of b is :" +b) ;
}

testScope();

// In the above example the a is block scope , It can access only in the block it defined
// Value of b is function scope and it can used in the whole function




