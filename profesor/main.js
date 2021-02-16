


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




//Funcion declarada
// function saludar(){
//     return `Miguel Angel`;
// }
// console.log(saludar());



// Funciones expresiva
// let fn1 = function edad(){
//     return 23;
// }
// console.log(fn1());



// Funcion anonima
// const profesor = function(){
//     return true;
// }
// console.log(profesor());


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



// Clausuras o encasulados
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


const lista = (function(){
    let data = [];
    return function(callbacks){
        let Eliminar = function(nombre){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }
        let Buscar = function(nombre){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }
        let Guardar = function(nombre){
            data.push(nombre);
            console.log(data);
        }
        eval(callbacks);
    }
})()

lista(`Guardar("Miguel");`);
lista(`Guardar("Diana");`);
lista(`Guardar("wilmer");`);
lista(`Guardar("Adrian");`);
lista(`Guardar("Lozada");`);

lista(`Eliminar("Adrian");`);
lista(`Eliminar("Diana");`);

lista(`Buscar("m");`);


