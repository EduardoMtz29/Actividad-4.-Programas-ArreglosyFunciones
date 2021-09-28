document.getElementById('temas').addEventListener("change", temaSeleccionado);
document.getElementById('iniciar').addEventListener("click", function () { arreglo() });
document.getElementById('calcular').addEventListener("click", function () { promedio() });

//Función para inicializar variables y limpiar articulos, y mostrar cajas
function temaSeleccionado() {
    document.getElementById("numero").value = null;
    document.getElementById("palabra").value = null;
    document.getElementById("resultado").innerHTML = "¡Resultados!";

    //getElementsByTagName convierte en arreglo porque guarda más de un elemento
    capas = document.getElementsByTagName("article");

    //Ocultar varios elementos
    for (i = 0; i < capas.length; i++) {
        capas[i].style.display = "none";
    }

    //Almacenar el dato de la opción del usuario
    var articulo = document.getElementById("temas").value;
    document.getElementById(articulo).style.display = "block";
}

function mostrarDatos() {
    var palabra = document.getElementById("palabra").value;
    var n1 = document.getElementById("numero").value;
    numInt = parseInt(n1);
    numFloat = parseFloat(n1);
    datos = "Caracter: " + palabra +
        "<br> Cadena: " + n1 +
        "<br> Entero: " + numInt +
        "<br> Decimal: " + numFloat +
        "<br> Concatenación: " + (palabra + ("-" + n1)) +
        "<br> Operación: " + (numInt + numFloat);
    document.getElementById("resultado").innerHTML = datos;
}

function si() {
    var num = parseInt(document.getElementById("n2").value);
    var r = document.getElementsByName("opcion");
    var res = null;
    for (var i = 0; i < r.lenght; i++) {
        if (r[i].checked) {
            var e = r[i].value;
        }
    }
    switch (e) {
        case 'a': var tipo = num % 2;
            if (tipo == 0) {
                res = "¡Es un número es par!";
            } else {
                res = "¡Es un número impar!";
            }
            break;
        case 'b': if (num >= 18) {
            res = "¡Sí puedes votar!";
        } else {
            res = "No puedes votar... unu";
        }
            break;
    }
    document.getElementById("resultado").innerHTML = res;
}

function factorialWhile() {
    var num = parseInt(document.getElementById("n3").value);
    var fact = num;
    fact--;
    datos = num.toString() + '!=';
    document.getElementById("etiqueta").innerHTML = datos;
    datos = num.toString();
    while (fact > 1) {
        num *= fact;
        datos += '*' + fact.toString();
        fact--;
    }
    datos += '=' + num.toString();
    document.getElementById("res").value = datos;
    document.getElementById("resultado").innerHTML = datos;
}

function primoFor() {
    var num = parseInt(document.getElementById("n4").value);
    var cant = 0;
    datos = num.toString() + ': ';
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            cant++;
        }
    }
    if (cant != 2) {
        datos += "No es primo";
    } else {
        datos += "Sí es primo";
    }
    document.getElementById("resultado").innerHTML = datos;
}

let arreglo = function () {
    let semana = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
    console.table(semana);
    let num = parseInt(document.getElementById("n5").value);
    datos = '';
    for (dia in semana) {
        datos += semana[dia] + ', '
    }
    datos += '<br>Día ' + num.toString() + '=' + semana[num - 1];
    document.getElementById("resultado").innerHTML = datos;
};

/*(function () {
    document.getElementsById("titulo").innerHTML = "Recorrido de Arreglos";
}());*/



let promedio = function () {
    let numeros = document.getElementsByClassName('numeros');
    let valores = [];
    for (i = 0; i < numeros.length; i++) {
        valores[i] = parseFloat(numeros[i].value);
        console.table(valores);
    }
    let Usuario = {
        matricula: '20001019',
        nombre: 'Eduardo',
        correo: '20001019@alumnos.utleon.edu.mx',
        domicilio: {
            calle: 'Orense',
            numero: '1214',
            colonia: 'Vibar',
            ciudad: 'León'
        }
    };
};

var uno = function () {
    document.getElementById("resultado").style.backgroundColor = "#ff0055";
}
var dos = function () {
    document.getElementById("resultado").style.backgroundColor = "#00ffff";
}
var tres = function () {
    document.getElementById("resultado").classList.add('mas');
}
var cuatro = function () {
    document.getElementById("resultado").style.backgroundColor = "transparent";
    document.getElementById("resultado").classList.remove('mas');
}

//Trabajo con Nodos
document.getElementById('reservacion').addEventListener("change", function () { mesas(); });
document.getElementById('mostrar').addEventListener("click", function () { mostrar(); });

let mesas = function () {
    let nm = document.getElementById('reservacion').value;
    let contenido = '';
    for (i = 0; i < nm; i++) {
        contenido += '<h3>Mesa: ' + (i + 1) + '</h3>' +
            '<h4> Número de Comensales</h4>' +
            'Adultos: <input type="number" name="adultos" id="adultos' + i + '" min="1" max="4"><br>' +
            'Menores: <input type="number" name="menores" id="menores' + i + '" min="1" max="3"><br><hr>'
    }
    document.getElementById("mesas").innerHTML = contenido;
}

//Uso de LocalStorage
let mostrar = function () {
    let mesas = document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa', mesas);
    let cAdultos = document.getElementsByName("adultos");
    let vAdultos = [];
    for (let i = 0; i < cAdultos.length; i++) {
        vAdultos[i] = cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }

    let cMenores = document.getElementsByName("menores");
    let vMenores = [];
    for (let i = 0; i < cMenores.length; i++) {
        vMenores[i] = cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    window.open("DatosReservacion.html");
}
