// var variable_global = "Diana Patricia";
// function saludar() {
//     console.log(variable_global);
//     saludar2();
//     function saludar2(){
//         var variable_global = "wilmer";
//         console.log(variable_global);
//     }
// }

/** FUNCION DECLARADA **/
// function saludar(){
//     return `Diana Patricia`;
// }
// console.log(saludar());

/** FUNCION EXPRESIVA **/
// let age = function edad(){
//     return 38;
// }
// console.log(age());

/** FUNCION ANONIMA **/
// const estudiante = function(){
//     return true;
// }
// console.log(estudiante());

// const FNA = function(arg1) {
//     return `Hola desde la función A ${arg1}`;
// }

// const FNB = function(callbacks, arg1) {
//     return callbacks(arg1) + "\nHola desde la función B";    
// }
// console.log (FNA(FNB, "Diana"));


//Callbacks
// const FNA = function(arg1) {
//     return `Hola desde la función A ${arg1}`;
// }
// const fnError = function() {
//     return "Error al momento de entrar al callback";    
// }
// const FNB = function(callbacks, arg1) {
//     parar:
//     do{
//         const cont = ~~(Math.trunc(Math.random()*5));
//         if(cont == 1){
//             console.log(callbacks(arg1)+ "\nHola desde la función B");
//             break parar;
//         }
//     }while(true)
// }
// FNB(FNA,"Diana");

// const fnP = function(callbacks, callbacksError) {
//     callbacks();
//     callbacksError();
//     return `Funcion Principal`;
// }
// console.log(fnP(
//         function(){
//             console.log(`Hola soy el callbacks`);
//         },
//         function() {
//         console.log(`Hola soy el callbacksError`);
//         }
//     )
// );

/***FUNCION AUTOEJECUTADA***/
// (function(nombre,edad){
//     console.log(`Hola soy ${nombre} y mi edad es ${edad}`);
// })("Diana", 38);

// const incremento = (function() {
//     let num = 0;
//     return function(){
//         num++;
//         return num;
//     }
// })();

// console.log(incremento());

// do{
//     let cont = incremento();
//     console.log(cont);
//     if(cont>=10){
//         break;
//     }while(true)
// }

// let lista = ["Diana", 38, true]
// const increm = (function (info) {
//     let num = -1;
//     let cadena = ["Hola soy ", "mi edad es ", "soy una estudiante "];
//     return function () {
//         num++;
//         return cadena[num]+" " + info[num];
//     }
// })(lista);

// console.log(increm());
// console.log(increm());
// console.log(increm());

// const letras = (function() {
//     let conta = "";
//     return function(){
//         conta += "hola como estas";
//         return conta;
//     }
// })();
// console.log(letras());
// console.log(letras());
// console.log(letras());

// const lista = (function () {
//     let data = [];
//     return function(arg){
//         data.push(arg);
//         return data;
//     }
    
// })();
// console.log(lista("Diana"));
// console.log(lista("Wilmer"));
// console.log(lista("Diego"));
// console.log(lista("Miguel"));
// console.log(lista("Adrian"));

// const lista = (function () {
//     let data = [];
//     return function(arg, id =null){
//         if(nombre!=null){
//             let id = data.findIndex(data => data ==nombre);
//             data.splice(id,1);
//             console.log(data);
//         }else{
//             data.push(arg);
//         return data;
//         }

        
        
//     }
    
// })();
// console.log(lista("Diana"));
// console.log(lista("Wilmer"));
// console.log(lista("Diego"));
// console.log(lista("Miguel"));
// console.log(lista("Adrian"));
// lista(null, "Wilmer");
// lista(null, "Diana");

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

// lista(`Guardar("Miguel");`);
// lista(`Guardar("Diana");`);
// lista(`Guardar("wilmer");`);
// lista(`Guardar("Adrian");`);
// lista(`Guardar("Lozada");`);

// lista(`Eliminar("Adrian");`);
// lista(`Eliminar("Diana");`);

// lista(`Buscar("m");`);