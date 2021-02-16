

// var variabel_global = "Miguel Angel";
// function saludar(){
//     console.log(variabel_global);
//     saludar2();
//     function saludar2(){
//         var variabel_global = "wilmer";
//         console.log(variabel_global);
//     }
// }
// saludar();

// Funcion declarada
// function saludar(){
//     return `Miguel Blanco`;
// }

// console.log(saludar());

// ****************************
// Funcion Expresiva
// let edades = function edad(){
//     return 23;
// }
// console.log(edades());

// ****************************
// Funcion Anonima
// const profesor = function(){
//     return true;
// }

// console.log(profesor());

// *****************************
// const fnA = function(arg1) {
//     return `Hola funcion A ${arg1}`;
// }

// const fnB = function(callbacks, arg1) {
//     return callbacks(arg1)+"\n Hola funcion B";
// }

// console.log(fnB(fnA, "MiguelB"));


//Callbacks
// const fnA = function(arg1){
//     return `Hola desde la funcion A ${arg1}`;
// }
// const fnError = function(){
//     return "Error al momento de entrar al callbacks";
// }
// const fnB = function(callbacks, arg1){
//     parar:
//     do{
//         const cont = ~~(Math.trunc(Math.random() * 5));
//         if(cont == 1){
//             console.log(callbacks(arg1)+"\nHola desde la funcion B");
//             break parar;
//         }else{
//             console.log(fnError());
//             continue parar; 
//         }
//     }while(true)
// }
// fnB(fnA,"Miguel");


// const fnP = function(callbacks, callbacksError){
//     callbacks();
//     callbacksError();
//     return `Funcion Principal`;
// }
// console.log(fnP(
//         function(){
//             console.log(`Hola soy el callbacks`);
//         },
//         function(){
//             console.log(`Hola soy el callbacksError`);  
//         }
//     )
// );

// Funcion autoejecutada
// (function(nombre, edad){
//     console.log(`Hola soy ${nombre} y mi edad es ${edad}`);
// })("Miguel", 23);



const incre = (function (){
    let num = 0;
    return function(){
        num++;
        return num;
    }
})();

do{
    let cont = incre();
    console.log(cont);
    if(cont>=10){
        break;
    }
}while(true)
































































































