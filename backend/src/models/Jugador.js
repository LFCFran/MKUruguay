class Jugador {
    constructor(id,nombre, contraseña, personaje, auto, esAdmin, tier) {
        this.id = id;
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.personaje = personaje;
        this.auto=auto;
        this.esAdmin=esAdmin;
        this.resultados=[];
        this.powerRanking=calcularPowerRanking(tier);
    }
    getNombre() {
        return this.nombre;
    }
    getContraseña() {
        return this.contraseña;
    }
    getPersonaje() {
        return this.personaje;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setContraseña(contraseña) {
        this.contraseña = contraseña;
    }
    setPersonaje(personaje) {
        this.personaje = personaje;
    }
}
function calcularPowerRanking(tier) {
    switch (tier) {
        case 'S':   return 100;
    }
}