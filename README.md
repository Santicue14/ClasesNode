# Clases Node.js

## Clase 1: Registro de Producción de una Máquina

### Descripción:
Se nos pide modelar el registro de producción de una máquina. Debe registrarse la cantidad de piezas producidas por la máquina en cada día desde que se puso en operación.

### Consultas que debe responder el registro:

- **algunDiaSeProdujo(cantidad)**: Indica si el registro incluye al menos un día en el que se produjo, exactamente, la cantidad indicada de piezas.
- **maximoValorDeProduccion()**: El valor más alto de producción diaria incluido en el registro.
- **valoresDeProduccionPares()**: Los valores pares incluidos, en el mismo orden en que aparecen en el registro.
- **produccionEsAcotada(n1, n2)**: Indica si en cada día de que se tiene registro, la producción se encuentra entre los valores indicados.
- **produccionesSuperioresA(cuanto)**: Los valores de producción que superan el valor indicado, en el mismo orden en que aparecen en el registro.
- **produccionesSumando(n)**: La serie que resulta de sumar el valor indicado a cada valor de producción diaria incluido en el registro.
- **totalProducido()**: El total de piezas producidas por la máquina, de acuerdo a la información incluida en el registro.
- **ultimoValorDeProduccion()**: El último valor registrado.
- **cantidadProduccionesMayorALaPrimera()**: La cantidad de valores de producción diaria que superan a la producción indicada para el primer día de operación.

A modo de ejemplo, se indica qué debe responder el registro de producción a varios mensajes, si incluye la producción de seis días con valores 43, 18, 49, 62, 33, 39.

---

### Métodos de Array en JavaScript:

#### `filter(n => n % 3 == 0)`
- Consulta
- No altera la lista
- Retorna otra lista con los elementos que cumplen la condición

#### `find(n => n % 3 == 0)`
- Consulta
- No altera la lista
- Retorna el primer valor que cumple la condición o `undefined` si no encuentra ninguno

#### `map(n => n * n)`
- Consulta
- No altera la lista
- Devuelve una lista con la misma cantidad de elementos pero modificada

#### `some(n => n % 3 == 0)`
- Consulta
- No altera la lista
- Retorna `true` o `false` según si algún elemento cumple la condición

#### `every(n => n % 3 == 0)`
- Consulta
- Devuelve `true` o `false` según si todos los elementos cumplen la condición

#### `includes(objeto)`
- Consulta
- Retorna `true` o `false` si el objeto está en la lista

#### `forEach(x => console.log(x))`
- Método de indicación
- No transforma la lista
- Ejecuta una acción por cada elemento

#### `push(objeto)`
- Indicación
- Agrega un objeto al final de la lista
- Modifica la lista

#### `pop()`
- Indicación
- Elimina el último elemento de la lista
- Modifica la lista

#### `splice(indice, cantidadABorrar)`
- Indicación
- Elimina elementos desde el índice indicado
- Modifica la lista

#### `reduce((a, b) => a + b, 0)`
- Consulta
- Acumula los valores de la lista
- `a` es el acumulador, `b` es el valor actual

---

### Expresión Ternaria:
- **Sintaxis:** `condición ? valorSiTrue : valorSiFalse`
- **Ejemplo:** `3 > 4 ? "Sí" : "No"`

---

### Instalación de Dependencia de Desarrollo:

- **nodemon**: Permite reiniciar automáticamente el servidor cuando hay cambios.  
  Comando:  
  ```bash
  npm install nodemon -D
