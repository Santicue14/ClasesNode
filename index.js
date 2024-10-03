
/*const alumno = require('./alumno.json')
console.log(`Hola ${alumno.apellido} desde node`)

filter(n=>n%3==0): (Busca los elementos q cumplan la condicion)
-Consulta
-No altera la lista
-Retorna otra lista

find(n=>n%3==0): (Busca el primer elemento q cumpla la condicion)
-Consulta
-No altera la lista
-Retorna el primer valor
-Sino devuelve undefined

map(n=>n*n): (Devuelve una lista con la misma cantidad de elementos pero modificada)
-Consulta
-No altera la lista

some(n=>n%3==0): (pregunta si hay algun elemento q cumpla la condicion)
-consulta
-no altera la lista
-true/false

every(n=>n%3==0): (pregunta si todos cumplen una condicion)
-Devuelve true/false

includes(objeto): (pregunta si está ese objeto)
-Retorna True/False

forEach(x => console
log(x)): (recibe las indicaciones para cada elemento en la lista)
-Metodo de indicacion
-No transforma la lista

push(objeto):agrega un objeto a la lista en el ultimo lugar
-Hace mutar la lista
-Es de indicacion

pop(): (borra el ultimo elemento de la lista)
-Es de indicacion

splice(indice,cantidadaborrar): (borra los elementos desde ese indice)
-Es de indicacion

reduce((a,b)=>a+b,0) inicializo en  0 al valor A y en b tomo el primer valor de la lista


EXPRESION TERNARIA
booleano?True:False
Ejemplo:
3>4?"Si":"No" 


*/

class Maquina{

    #diasDeProduccion = [43,18,49,62,33,39]

    consultarDiasDeProduccion() {
        console.log(this.#diasDeProduccion)
        return this.#diasDeProduccion
    }
    registrarDiaDeProduccion(valor){
        this.#diasDeProduccion.push(valor)
    }
    algunDiaSeProdujo(cantidad){
        var seProdujoONo = this.#diasDeProduccion.includes(cantidad)
        console.log(seProdujoONo ? `Se produjo esa cantidad ${cantidad}` : 'No se produjo esa cantidad')
    }
    maximoValorDeProduccion(){
        var maximoDeProduccion = 0
        maximoDeProduccion = Math.max(...this.#diasDeProduccion,0)
        console.log(maximoDeProduccion)
    }
    valoresDeProduccionPares(){
        var valoresPares = this.#diasDeProduccion.filter(dia => dia%2 == 0)
        console.log(valoresPares)
    }
    produccionEsAcotada(n1,n2){
        var valoresAcotados = this.#diasDeProduccion.map(dia => n1<=dia && dia<=n2)
        console.log(valoresAcotados)
    }
    produccionesSumando(n){
        var valoresSumados = this.#diasDeProduccion.map(dia => dia+n)
        console.log(valoresSumados)
    }
    totalProducido(){
        var total = this.#diasDeProduccion.reduce((a,b)=> a+b,0)
        console.log(total)
    }
    ultimoValorDeProduccion(){
        var ultimoValor = this.#diasDeProduccion[this.#diasDeProduccion.length - 1]
        console.log(ultimoValor)
    }
    cantidadProduccionesMayorALaPrimera(){
        var primerDia = this.#diasDeProduccion[0]
        var diasSuperados = this.#diasDeProduccion.filter(dia => dia>primerDia)
        console.log(diasSuperados)
    }
}


const miMaquina = new Maquina()
miMaquina.cantidadProduccionesMayorALaPrimera()
