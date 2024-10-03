# ClasesNode
Se nos pide modelar el registro de producción de una máquina. Debe registrarse la cantidad de piezas producidas por la máquina en cada día desde que se puso en operación.

El registro debe ser capaz de responder las siguientes consultas:

**algunDiaSeProdujo(cantidad)**: indica si el registro incluye al menos un día en el que se produjo, exactamente, la cantidad indicada de piezas.
**maximoValorDeProduccion()**: el valor más alto de producción diaria incluido en el registro.
valoresDeProduccionPares(): los valores pares incluidos, en el mismo orden en que aparecen en el registro.
**produccionEsAcotada(n1,n2)**: indica si en cada día de que se tiene registro, la producción se encuentra entre los valores indicados.
produccionesSuperioresA(cuanto): los valores de producción que superan el valor indicado, en el mismo orden en que aparecen en el registro.
**produccionesSumando(n)**: la serie que resulta de sumar el valor indicado a cada valor de producción diaria incluido en el registro.
**totalProducido()**: el total de piezas producidas por la máquina, de acuerdo a la información incluida en el registro.
**ultimoValorDeProduccion()**: el último valor registrado.
**cantidadProduccionesMayorALaPrimera()**: la cantidad de valores de producción diaria que superan a la producción indicada para el primer día de operación.
`A modo de ejemplo, se indica qué debe responder el registro de producción a varios mensajes, si incluye la producción de seis días con valores 43,18,49,62,33,39.`


# filter(n=>n%3==0): (Busca los elementos q cumplan la condicion)
-Consulta
-No altera la lista
-Retorna otra lista

# find(n=>n%3==0): (Busca el primer elemento q cumpla la condicion)
-Consulta
-No altera la lista
-Retorna el primer valor
-Sino devuelve undefined

# map(n=>n*n): (Devuelve una lista con la misma cantidad de elementos pero modificada)
-Consulta
-No altera la lista

# some(n=>n%3==0): (pregunta si hay algun elemento q cumpla la condicion)
-consulta
-no altera la lista
-true/false

# every(n=>n%3==0): (pregunta si todos cumplen una condicion)
-Devuelve true/false

# includes(objeto): (pregunta si está ese objeto)
 - Retorna True/False

# forEach(x => console.log(x)): (recibe las indicaciones para cada elemento en la lista)
 - Metodo de indicacion
 - No transforma la lista

# push(objeto):agrega un objeto a la lista en el ultimo lugar
 - Hace mutar la lista
 - Es de indicacion

# pop(): (borra el ultimo elemento de la lista)
 - Es de indicacion

# splice(indice,cantidadaborrar): (borra los elementos desde ese indice)
 - Es de indicacion

# reduce((a,b)=>a+b,0) 
 - Inicializo en  0 al valor A y en b tomo el primer valor de la lista


# EXPRESION TERNARIA
- booleano?True:False
- **Ejemplo**: 3>4?"Si":"No"

# INSTALACIÓN DE DEPENDENCIA DE DESARROLLO PARA NO EJECUTAR TODO EL TIEMPO LO MISMO
**nodemon**: `npm install nodemon -D`