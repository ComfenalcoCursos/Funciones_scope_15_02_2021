// var variabel_global = "Bucaramanga";
// function saludar(){
//     console.log(variabel_global);
//     saludar2();
//     function saludar2(){
//         var variabel_global = "Mundo";
//         console.log(variabel_global);
//     }
// }
// saludar();



//Funcion declarada
// function saludar(){
//     return `Hola mundo 2020`;
// }
// console.log(saludar());


// Funciones expresiva
// let fn1 = function edad(){
//     return 2403;
// }
// console.log(fn1());


// Funcion anonima
// const estudiante = function(){
//     return true;
// }
// console.log(estudiante());

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
// fnB(fnA,"Willmer");

// const fnP = function(callbacks, callbacksError){
//     callbacks();
//     callbacksError();
//     return `Funcion Principal`;
// }
// console.log(fnP(
//         function(){
//             console.log(`Hola callbacks`);
//         },
//         function(){
//             console.log(`Hola callbacksError`);  
//         }
//     )
// );

// Funcion autoejecutada
// (function(nombre, edad){
//     console.log(`Soy ${nombre} y tengo ${edad} años`);
// })("Emmanuel", 33);

/*
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
*/

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
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
// const lista = (function(){
//     let data = [];
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


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
    return function(arg=null, nombre=null, tipo=null){
        if(tipo=="Eliminar"){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }else if(tipo=="Buscar"){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }else{
            data.push(arg);
            return data;
        }
    }
})()

console.log(lista("Miguel"));
console.log(lista("Diana"));
console.log(lista("wilmer"));
console.log(lista("Adrian"));
console.log(lista("Lozada"));


// lista(null, "wilmer", "Eliminar");

// lista(null, "Diana", "Eliminar");

lista(null, "m", "Buscar");
nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nombre// // 

nom// // 

// // 

// // 

// // 

// // 

//     let data = [];
//     return function (arg){
//     let data.push(arg);
//         return data;data = [id=null];
//     let data.push(arg);
//       ()
, 
// console.log(linstance=nullof("Miguel"));
// console.log(linstanceof("Diana"));


const lista = (function () {
    let data = [];
    return function (arg){
        data.push(arg);
        return data;
    }
    })()

console.log(linstanceof("Miguel"));
console.log(linstanceof("Diana"));


console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian"));// console.log(linstanceof("Willmer"));
// console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Adrian));
console.log(linstanceof("Willmer"));
console.log(linstanceof("Diana"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("D"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));
  let data.push(arg);
console.log(linstanceof("Miguel"));
console.log(linstanceof("Miguel"));  let data.push(arg);
console.log(linstanceof("Miguel"));
  let data.push(arg);
console.log(linstanceof("Miguel"));
  let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);
    console.log(linstanceof("Miguel"));
      let data.push(arg);

    console.log(linstanceof("Miguel"))  let data.push(arg);

    console.log(linstanceof(""))  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);

    console.log(lista)  let data.push(arg);
        let data.push(arg);
        return data;data = [];
    let data.push(arg);
        return data;data = [];
    let data.push(arg);
        return data;data = [];
    let data.push(arg);
        return data;data = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retUint8Arradata = [];
    let data.push(arg);
        returdata = [];
    let data.push(arg);
        retdata = [];
    let data.push(arg);
        retURIErdata = [];
    let data.push(arg);
        returdata = [];
    let data.push(arg);
        rettudata = [];
    let data.push(arg);
        data = [];
    return function (arg){
    let data.push(arg)data = [];
    return function (arg){
    let data.pushdata = [];
    return function (arg){
    let data.data = [];
    return function (arg){
    let data = [];
    return function (arg){
    let data = [];
    return function (arg) {
    let data = [];
    return function () {
    let data = [];
    return function () {
    let data = [];
    return function () {
    let data = [];
    return function () {
    let data = []
    return function () {
    let da
    return function () {
        
    return function () {
        
    return function () {
        
    return function () {
        
    return function (params) {
        
    return function name(params) {
        
    return function name(params) {
        
    return function params) {
        
    return function name(params) {
        
    }
    return fun
    let 
    let d
    let 
    let 
    le
    // 
// 

// 
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
// 
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
funfunction name(params) {
    
}
// 
()// 
// //Clista = ausuras
const l
}
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
// 
()// 
// //Clista = ausuras
const l
()// 
// //Clista = ausuras
const l
()// 
// //Clista = ausuras
const l
()// 
// //Clista = ausuras
const l
()// 
// //Clista = ausuras
const l
()// 
// //Clista = ausuras
const l
const l
const l
const l
const l
const l


// const letras = (function (){
    let con = "";
    return function(){
        con += "hola como estas";
        return con;
        
    }
})();

console.log(letras());
console.log(letras());
console.log(letras());
console.log(letras());//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clausuras
//Clau



// const incre = (function (){
// const incre = (function (){
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

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }

//     }



// }while(true)





































































































// Funcion autoejecutada
// (function(nombre, edad){
//     console.log(`Hola soy ${nombre} y mi edad es ${edad}`);
// })("Miguel", 23);//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );

//     )
// );





