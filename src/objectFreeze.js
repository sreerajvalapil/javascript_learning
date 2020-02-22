const calculator1 = {
    "PI" :3.18,
    "model":"seagate" ,
    "proce" :1200
}

console.log(" Calculator value .. :" + JSON.stringify(calculator1)) ;
calculator1.PI = 9.12;
console.log(" Calculator value After update .. :" + JSON.stringify(calculator1)) ;
Object.freeze(calculator1) ;
calculator1.PI = 23.16 ;
console.log(" Calculator value After freeze .. :" + JSON.stringify(calculator1)) ;