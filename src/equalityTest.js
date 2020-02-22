


function testEquality(p) {
    console.log("..................................................The type of " + p +" is : " + typeof p);
    if(p=='10') {
        console.log("== Equal with '10' success.");
    } else {
        console.log("== Equal with '10' fails.");
    }
    if(p==10) {
        console.log("== Equal with 10 success.");
    } else {
        console.log("== Equal with 10 fails.");
    }
    if(p==='10') {
        console.log("=== Equal with '10' success.");
    } else {
        console.log("=== Equal with '10' fails.");
    }
    if(p===10) {
        console.log("=== Equal with 10 success.");
    } else {
        console.log("=== Equal with 10 fails.");
    }
}
testEquality('10');
testEquality(10);
