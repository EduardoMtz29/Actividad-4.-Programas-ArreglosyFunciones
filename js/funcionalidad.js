document.getElementById('temas').addEventListener("change", temaSeleccionado);

//Función para inicializar variables y limpiar articulos, y mostrar cajas
function temaSeleccionado() {
    document.getElementById("numero").value = null;
    document.getElementById("color").value = null;
    document.getElementById("resultado").innerHTML = "¡Resultados! <br>";
    document.getElementById("resultado2").innerHTML = "¡Resultados! <br>";

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

function mostrarCajas() {
    var numero = parseInt(document.getElementById("numero").value);
    var color = document.getElementById("color").value;
    var borde = document.getElementById("borde").value;
    for (i = 0; i < numero; i++) {
        var caja = document.createElement("p");
        caja.style.height = "60px";
        caja.style.width = "60px";
        caja.style.display = "inline-block";
        caja.style.margin = "15px";
        caja.style.border = color + " " + borde;
        resultado.appendChild(caja);
    }
}

function mostrarEncuesta() {
    var lugar = document.getElementById("lugar").value;
    var estudiar = document.getElementById("estudiar").value;
    var aprender = document.getElementById("aprender").value;
    var vivir = document.getElementById("vivir").value;
    var profesión = document.getElementById("profesión").value;
    datos = "¡Resultados!<br><b>¿Qué lugar te gustaría visitar algún día?</b> <br>R= " + lugar +
        "<br><b>¿Qué has querido estudiar hace tiempo?</b> <br>R= " + estudiar +
        "<br><b>¿Qué siempre has querido aprender?</b> <br>R= " + aprender +
        "<br><b>¿Dónde es tu lugar ideal para vivir?</b> <br>R= " + vivir +
        "<br><b>¿Qué profesión te gustaría ejercer?</b> <br>R= " + profesión;
    document.getElementById("resultado2").innerHTML = datos;
}

//Tarjeta
document.getElementById('tipo_tar').addEventListener("change", tipoTarSeleccionado);
document.getElementById('bcg_col').addEventListener("change", colorFondo);
document.getElementById('mostrar_tarfelH').addEventListener("click", function () { mostrarTarjetaH(); });
document.getElementById('mostrar_tarfelN').addEventListener("click", function () { mostrarTarjetaN(); });
document.getElementById('mostrar_tarfelP').addEventListener("click", function () { mostrarTarjetaP(); });

function tipoTarSeleccionado() {
    capasImg = document.getElementsByName("tar_img");
    for (i = 0; i < capasImg.length; i++) {
        capasImg[i].style.display = "none";
    }
    var imgtarjeta = document.getElementById("tipo_tar").value;
    document.getElementById(imgtarjeta).style.display = "block";
    var temaTarj = document.getElementById("tipo_tar").value;
    document.getElementById(temaTarj).style.display = "block";
}
var imgTarjeta = function (nombreFoto) {
    document.getElementById("Vista_Previa").src = "img/" + nombreFoto + ".jpg";
    let img_trj = document.getElementById("Vista_Previa_Img").innerHTML;
    localStorage.setItem('img_trj', img_trj);
}

function colorFondo() {
    var bcg_col = document.getElementById('bcg_col').value;
    document.getElementById('VistaPrevia').style.backgroundColor = bcg_col;
    localStorage.setItem('bcg_color', bcg_col);
}

function nombreEnvia() {
    var nom_e = document.getElementById('nombre_envia').value;
    var nom_e_color = document.getElementById('color_nombre_envía').value;
    document.getElementById('nombre_envia_texto').innerHTML = nom_e;
    document.getElementById('nombre_envia_texto').style.color = nom_e_color;
    document.getElementById('nombre_envia_texto').style.fontSize = "40px";
    localStorage.setItem('nom_e', nom_e);
    localStorage.setItem('nom_e_color', nom_e_color);
}
function nombreEnvia() {
    var nom_e = document.getElementById('nombre_envia').value;
    var nom_e_color = document.getElementById('color_nombre_envía').value;
    document.getElementById('nombre_envia_texto').innerHTML = nom_e;
    document.getElementById('nombre_envia_texto').style.color = nom_e_color;
    document.getElementById('nombre_envia_texto').style.fontSize = "40px";
    localStorage.setItem('nom_e', nom_e);
    localStorage.setItem('nom_e_color', nom_e_color);
}

function saludoTexto() {
    var sal_tex = document.getElementById('saludo').value;
    var sal_tex_color = document.getElementById('color_saludo').value;
    document.getElementById('saludo_texto').innerHTML = sal_tex;
    document.getElementById('saludo_texto').style.color = sal_tex_color;
    document.getElementById('saludo_texto').style.fontSize = "25px";
    localStorage.setItem('sal_tex', sal_tex);
    localStorage.setItem('sal_tex_color', sal_tex_color);
}
function cuerpoTexto() {
    var cuerpo_tex = document.getElementById('cuerpo_tex').value;
    cuerpo_tex = cuerpo_tex.replace(/\n/g, "<br/>");
    var clr_cuerpo_tex = document.getElementById('color_cuerpo_tex').value;
    document.getElementById('cuerpo_texto').innerHTML = cuerpo_tex;
    document.getElementById('cuerpo_texto').style.color = clr_cuerpo_tex;
    document.getElementById('cuerpo_texto').style.fontSize = "23px";
    localStorage.setItem('cuerpo_tex', cuerpo_tex);
    localStorage.setItem('clr_cuerpo_tex', clr_cuerpo_tex);
}
let mostrarTarjetaH = function () {
    window.open('Halloween.html');
}
let mostrarTarjetaN = function () {
    window.open('Navidena.html');
}
let mostrarTarjetaP = function () {
    window.open('Programador.html');
}

//Tarea 7
new Vue({
    el: '#survey',
    data: {
        fAnswer: '',
        timeCoding: 0,
        motivation: '',
        experience: '',
        codingLanguage: '',
        codingLanguages: [],
        showSummary: false,
        nLanguages: 0,
    },
    methods: {
        add: function () {
            this.codingLanguages.push(this.codingLanguage);
            this.codingLanguage = '';
            this.nLanguages++;
        },
        confirm: function () {
            this.showSummary = !this.showSummary;
        }
    }
});

//Tarea 8
const gim = new Vue
    ({
        el: '#stock',
        data: {
            newProductName: '',
            newProductQuantity: 0,
            newProductPrice: 0,
            products: [
                {
                    productName: 'Proteina Muscletech',
                    productQuantity: 5,
                    singlePrice: 869,
                    totalPrice: 0,
                },
                {
                    productName: 'Burst BodyPerformance',
                    productQuantity: 2,
                    singlePrice: 349,
                    totalPrice: 0,
                },
            ],
            numProducts: 2,
        },
        methods: {
            add: function () {
                if (this.newProductName && this.newProductQuantity && this.newProductPrice) {
                    this.products.push({ productName: this.newProductName, productQuantity: this.newProductQuantity, singlePrice: this.newProductPrice, totalPrice: this.totalPrice });
                    this.newProductName = '';
                    this.newProductQuantity = 0;
                    this.newProductPrice = 0;
                    this.numProducts++;
                }
            },
            recalculate: function () {
                for (product of this.products) {
                    product.totalPrice = product.productQuantity * product.singlePrice;
                }
            },
        },
        beforeMount() {
            for (product of this.products) {
                product.totalPrice = product.productQuantity * product.singlePrice;
            }
        },
        computed: {
            totalPrice: function () {
                return this.newProductQuantity * this.newProductPrice;
            },
            subtotal: function () {
                var subtotal = 0;
                for (product of this.products) {
                    subtotal += product.totalPrice;
                }
                subtotal = subtotal.toFixed(2);
                return parseFloat(subtotal);
            },
            iva: function () {
                var iva = 0;
                for (product of this.products) {
                    iva += (product.totalPrice * 0.16);
                }
                iva = iva.toFixed(2)
                return parseFloat(iva);
            },
            total: function () {
                var total = this.subtotal + this.iva;
                total = parseFloat(total).toFixed(2);
                return total;
            },
        }
    });

//Tarea 9 y 10
const cafeteria = new Vue
    ({
        el: '#content',
        data: {
            products: [
                {
                    img: '../img/Cafe_1.jpeg',
                    name: 'Explosión de manzana caliente',
                    isAvailable: true,
                    size: '1 litro',
                    price: 150,
                    ingredients: 'Sidra de manzana al vapor con sabores de manzana acaramelada y cubierta con crema batida, llovizna de caramelo y canela molida.',
                },
                {
                    img: '../img/Cafe_2.png',
                    name: 'Fogata mocha',
                    isAvailable: false,
                    size: '600 mililitros',
                    price: 180,
                    ingredients: 'Chocolate real derretido en leche al vapor y combinado con nuestro rico espresso y sabor a malvavisco tostado. Cubierto con crema batida, mini malvaviscos y chispas de chocolate.',
                },
                {
                    img: '../img/Cafe_3.jpeg',
                    name: 'Sándwich de gofres de arce',
                    isAvailable: true,
                    size: '1 pieza',
                    price: 145,
                    ingredients: 'Salchicha de pollo gouda, queso gouda y un huevo frito sin jaula intercalado entre dos waffles de arce.',
                },
                {
                    img: '../img/Cafe_4.jpeg',
                    name: 'Taza de cachorro',
                    isAvailable: true,
                    size: '400 mililitros',
                    price: 80,
                    ingredients: 'Invita a tu peludo amigo a una taza de cachorro de caribú. Alegra su día con 4 onzas de crema batida.',
                },
                {
                    img: '../img/Cafe_5.jpeg',
                    name: 'Pastel de chocolate pop',
                    isAvailable: false,
                    size: '1 pieza',
                    price: 50,
                    ingredients: 'Una rica bola de pastel de chocolate bañada en glaseado de chocolate negro y cubierta con una llovizna blanca aterciopelada.',
                },
            ],
            toSearch: '',
            maximum: 200,
            isSearching: false,
        },
        computed: {
            searchProduct: function () {
                return this.searchProductByPrice(this.searchProductByText(this.products));
            },
        },
        methods: {
            searchProductByText: function (products) {
                return products.filter(product => product.name.includes(this.toSearch));
            },
            searchProductByPrice: function (products) {
                return products.filter(product => product.price <= this.maximum);
            },
            validateSearchText: function () {
                if (this.toSearch.length > 0) {
                    this.isSearching = true;
                }
                else {
                    this.isSearching = false;
                }
            },
            addWishlist: function (nameProduct) {
                for (drink of this.products) {
                    if (drink.name == nameProduct) {
                        wishlist.wishlist.push({name: drink.name, price: drink.price });
                        wishlist.count = wishlist.wishlist.length;
                    }
                }
            },
            appear: function () {
                wishlist.appear != wishlist.appear;
            },
            notAvailableData: function (isAvailable) {
                return {
                    "notAvailable": isAvailable == false,
                }
            },
            notAvailableCard: function (isAvailable) {
                return {
                    "notAvailableCard": isAvailable == false,
                }
            }
        }
    });

const wishlist = new Vue
    ({
        el: '#wishlist',
        data: {
            wishlist: [],
            count: 0,
        },
    });

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})