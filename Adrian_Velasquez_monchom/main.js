// var variabel_global = "Adrian Velasquez";
// function saludar(){
//     console.log(variabel_global);
//     saludar2();
//     function saludar2(){
//         var variabel_global = "Pedro";
//         console.log(variabel_global);
//     }
// }
// saludar();

//Funcion declarada
// function saludar(){

//      return "Adrian Velasquez";

// }

// console.log(saludar());

// //Funciones expresivas
// let edades = function edad() {

//        return 50;
// }

// console.log(edades());

// //Funcion anonima
// const profesor = function(){

//     return 50;
// }

// console.log(profesor);



// const fnA = function(arg1){

//     return 50;
// }


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

//Funciones autoajecutadas
// (function(nombre, edad){
//     console.log(`Hola soy ${nombre} y mi edad es ${edad}`);
// })("Miguel", 23);

//Clusula o encapsulados
// const incre = (function (){
//     let num = 0;
//     return function(){
//         num++;
//         return num;
//     }
// })();

// do{
//     let cont = incre();
//     console.log(cont);
//     if(cont>=10){
//         break;
//     }
// }while(true)

// hasta aqui autoejecutables


// let lista = ["miguel",23,true]
// const incre = (function (info){
//     let num = -1;
//     let cade = ["Hola soy", "mi edad es", "soy un profesor"];
//     return function(){
//         num++;
//         return cade[num]+" "+info[num];
//     }
// })(lista);

// console.log(incre());
// console.log(incre());
// console.log(incre());


// const letras = (function (){
//     let con = "";
//     return function(){
//         con += "hola como estas";
//         return con;
        
//     }
// })();

// console.log(letras());
// console.log(letras());
// console.log(letras());
// console.log(letras());



// Busqueda


// const lista = (function(){
//     let data = [];
//     return function(arg=null, nombre=null, tipo=null){
//         if(tipo=="Eliminar"){
//             let id = data.findIndex(data => data==nombre);
//             data.splice(id,1);
//             console.log(data);
//         }else if(tipo=="Buscar"){
//             let busqueda = data.filter(function(letras){
//                 return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
//             });
//             console.log(busqueda);
//         }else{
//             data.push(arg);
//             return data;
//         }
//     }
// })()

// console.log(lista("Miguel"));
// console.log(lista("Diana"));
// console.log(lista("wilmer"));
// console.log(lista("Adrian"));
// console.log(lista("Lozada"));


// // lista(null, "wilmer", "Eliminar");

// // lista(null, "Diana", "Eliminar");

// lista(null, "m", "Buscar");


// Otro buscar

// const lista = (function(){
//     let data = [];
//     return function(callbacks){
//         let Eliminar = function(nombre){
//             let id = data.findIndex(data => data==nombre);
//             data.splice(id,1);
//             console.log(data);
//         }
//         let Buscar = function(nombre){
//             let busqueda = data.filter(function(letras){
//                 return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
//             });
//             console.log(busqueda);
//         }
//         let Guardar = function(nombre){
//             data.push(nombre);
//             console.log(data);
//         }
//         eval(callbacks);
//     }
    
// })()
// let opc = {};
// lista(opc.tipo = `Guardar("Miguel");`);
// lista(opc.tipo = `Guardar("Diana");`);
// lista(opc.tipo = `Guardar("wilmer");`);
// lista(opc.tipo = `Guardar("Adrian");`);
// lista(opc.tipo = `Guardar("Lozada");`);

// lista(opc.tipo = `Eliminar("Adrian");`);
// lista(opc.tipo = `Eliminar("Diana");`);

// lista(opc.tipo = `Buscar("m");`);





