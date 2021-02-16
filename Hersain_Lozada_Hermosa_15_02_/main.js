//JERARQUÍAS
var var_global = "Hersain_Lozada";

function saludar(){
    console.log(var_global);
    saludar2();
    function saludar2(){
        var var_local = "Juan";
        console.log(var_global);
    }
    console.log(var_local);
}

saludar();

//Funcion declarada
function saludar3(){
    return `Hersain`
}
console.log(saludar3());

//Funcion expresiva
let edades = function edad(){
    return 44;
}
console.log(edades());

//funcion anomina
const profesor = function () {
    return = false
}
console.log(profesor());

//Callback
const funcion1 = function (arg1) {
    return `Hola desde la funcion 1`;
}

const funcion2 = function (callbacks,arg1) {
    parar:
    do{
        const cont = ~~(Math.trunc(Math.random()*5));
        if(cont==1){
            return callbacks(arg1)+`\nHola desde la función 2`;
        }else{
            console.count();
            continue parar;
        }   
    }while(true)
}

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
    
//Funcion autoejecutada
(function(nombre, edad){
    console.log(`Hola soy ${nombre} y mi edad es ${edad}`);
})("Miguel", 23);

//Clausuradas o encapsuladas
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


// let lista = ["Hersain",44,false]
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
