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
                    img: '../img/cafe1.jpg',
                    name: 'Café Moka Casero',
                    isAvailable: true,
                    size: 10,
                    price: 200,
                    ingredients: '2 tazas de leche de vaca, 1/4 tablillas de chocolate, azúcar (al gusto), 1 pizca de sal, canela en polvo (al gusto), 1 cucharada de café soluble.',
                },
                {
                    img: '../img/cafe2.jpg',
                    name: 'Café Espresso',
                    isAvailable: false,
                    size: 10,
                    price: 150,
                    ingredients: '7g de café molido fino, 1 taza de agua, preferente de alta calidad (no de grifo).',
                },
                {
                    img: '../img/cafe3.jpg',
                    name: 'Café Latte',
                    isAvailable: true,
                    size: 10,
                    price: 300,
                    ingredients: '1/2 tazas de leche (fría), 1/2 tazas de agua (caliente), 2 cucharadas de café soluble, 1/2 tazas de leche (caliente), suficiente de canela (para decorar).',
                },
                {
                    img: '../img/cafe4.jpg',
                    name: 'Galletas de Avena',
                    isAvailable: false,
                    size: 5 + ' Galletas',
                    price: 100,
                    ingredients: '2 plátanos maduros, 50 gramos de uvas pasas, 150 gramos de copos de avena, 50 gramos de chips de chocolate negro.',
                },
                {
                    img: '../img/cafe5.jpg',
                    name: 'Empanadas de Manzana',
                    isAvailable: true,
                    size: 3 + ' Empanadas',
                    price: 150,
                    ingredients: '2 tazas de harina, 1 taza con agua, 1 taza con jugo de limón, 1 cucharadita de sal, ¼ taza de azúcar en polvo, ¼ taza de azúcar morena, 500gr de manzanas, 2/3 tazas de mantequilla fría, Crema de leche, Nuez moscada, Queso Cheddar.',
                },
                {
                    img: '../img/cafe6.jpg',
                    name: 'Smoothie de Chocolate',
                    isAvailable: true,
                    size: 1,
                    price: 150,
                    ingredients: '2 tazas de leche, 2 cucharadas de chocolate en polvo, 2 cucharadas de mantequilla, 100 gr. de chocolate negro, 1 bola de helado de chocolate, 1 taza de hielo',
                },
            ],
            toSearch: '',
            maximum: 300,
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
                        wishlist.wishlist.push({ img: drink.img, name: drink.name, price: drink.price });
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
            appear: true
        },
        computed: {
            total: function () {
                var total = 0;
                for (wish of this.wishlist) {
                    total = total + wish.price;
                }
                return total;
            }
        }
    });