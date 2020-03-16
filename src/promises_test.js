let sreePromise = new Promise((resolve,reject) => {
    let error =  false ; 
    let result  = 1+2+3+5 ;
    if(result >0) {
        resolve(result,"successfully completed");       
    } else {        
        error = true ; 
        reject("failure","There is an error occured ") ;
    }
    
}) ;

// Happy scenario
sreePromise.then((result,status) => {
    console.log("THEN .. The result is ... : " +result) ;
    console.log("THEN ...The status is ... : " +status) ;
}).catch((staus,message) => {
    console.log("ERROR ...The staus is .... :" + staus) ;
    console.log("ERROR ...The messege is .... :" + message) ;
}); 