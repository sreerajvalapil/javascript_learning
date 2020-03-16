
var postArray = [{name : "Sweden",id:100},{name : "UK",id:200},
    {name : "Denmark",id:300},{name : "Finland",id:400}] ;



function addPost() {
   setTimeout(()=> {
       let output ;
       postArray.forEach((post) => {
        output += `<li>${post.name} - ${post.id} </li>`;
       })
       document.body.innerHTML = output ;    
    
   },500) ;        
}

//callback
/* function createPost(post,callback) {
    setTimeout(() => {
        postArray.push(post) ;
        callback() ;
    },2000)
} */
/* //callback
createPost({name:"india",id:200},addPost) ; */


// Promise Example :
function createPost() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            postArray.push({name:"Balarus",id:233});
            const err = false;
            if(!err) {
                resolve("successfulley added") ;
            } else {
                reject("rejected...")
            }
        },1000);
        
    } )
} 


// Promise Example :
/* createPost({name:"india",id:200})
.then((message) => {
    console.log(message) ;
    addPost() ;
}) */
 

 // async await 
/* function createPost() {
    setTimeout(()=> {
        postArray.push({name:"Thailand",id:300}) ;
    },2000)
} */


 async function invoke() {
 await createPost() ;
addPost() ;
}

invoke();