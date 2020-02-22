var hdfcBank = {
    "ifcCpde":"HDFC100",
    "name" :"HDFC",
    "rbiRank":118,
    "mainAddress":"Koramangala , Banglaore , India"
}

console.log(hdfcBank.ifcCpde) ;
console.log("Going to update the rbiRank of hdfcBank and the value is : "+hdfcBank.rbiRank) ;
hdfcBank.rbiRank = 110 ;

// different way of accessing the object vlaue using paranthesis
console.log("The new value of rbiRank is : "+hdfcBank["rbiRank"]) ;

var cari20= {
    "discount value" :10,
    "company name" :"Hundai",
    "launch year ":2014
}

// Since the property name has space we use paranthesis for accessing the name
console.log("The company name .... : " +cari20["company name"]);

// deleting the property
delete cari20["discount value"] ;
console.log("Printing value .." + JSON.stringify(cari20)) ;
