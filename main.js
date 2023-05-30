class Inmueble {
    constructor(tipo, precio, ubicacion) {
        this.tipo = tipo;
        this.precio = precio;
        this.ubicacion = ubicacion;
        this.vendido = false;
    }

    vender() {
        this.vendido = true;
        alert(`Éste inmueble ${this.tipo} ya está vendido`);
    }
}

const propiedades = [];


//Creo los inmuebles para vender

const inmueble1 = new Inmueble("Casa: 2 dormitorios", 200, "General Paz - Córdoba");
const inmueble2 = new Inmueble("Casa: 3 dormitorios", 350, "General Paz - Córdoba");
const inmueble3 = new Inmueble("Casa: 1 dormitorio", 150, "General Paz - Córdoba");
const inmueble4 = new Inmueble("Departamento, 2 dormitorios", 180, "General Paz - Córdoba");
const inmueble5 = new Inmueble("Departamento, 1 dormitorio", 90, "General Paz - Córdoba");
const inmueble6 = new Inmueble("Cochera, 1 vehículo", 35, "General Paz - Córdoba");

propiedades.push(inmueble1);
propiedades.push(inmueble2);
propiedades.push(inmueble3);
propiedades.push(inmueble4);
propiedades.push(inmueble5);
propiedades.push(inmueble6);

let precio = parseInt(prompt("Ingrese el precio mínimo del inmueble que está buscando."));

const encontrados = propiedades.filter((item) => item.precio >= precio);

encontrados.forEach(item => {
    alert(item.tipo + "  $" + item.precio + " Ubicación: Barrio " + item.ubicacion);
})

//Llamo a la función vender

inmueble2.vender();