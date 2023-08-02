const {Mascota} = require('./modelos/mascotas')

function ejemploArreglos() {
    //prueba de funcionalidad
    //console.log("hola")

    //arreglos
    const numeros = [9793, 9704, 3379]
    const mensaje = "hola como estan?"
    //arreglo mixto
    const Cosas =["hola", 100, false, new Date(), "hacer muffins"]

    //arreglo de objetos

    let listadoMascotas = [
        {
            id: 1,
            nombre: "kenai",
            raza: "pitbul",
            Responsable: "Jose"
        },
        {
            id: 2,
            nombre: "atena",
            raza: "gran danes",
            Responsable: "Pedro"
        },
        {
            id: 3,
            nombre: "rocky",
            raza: "dogerman",
            Responsable: "Hector"
        }
    ]
    //indice 0
    console.log(numeros[2])
    console.log(mensaje[1])
    console.log(Cosas[1])
    console.log(listadoMascotas)
    console.log(listadoMascotas[1])

    //adicionar datos a un arreglo
    numeros.push(9987)
    console.log("Datos actualizados: ",numeros)

    //agregar un objeto a un arreglo
    const nuevaMascota = {
        id: 4,
        nombre: "Sakura",
        raza: "chiguagua",
        Responsable: "German"
    }
    listadoMascotas.push(nuevaMascota)
    //o
    listadoMascotas.push({
        id: 5,
        nombre: "hades",
        raza: "pitbul",
        Responsable: "Sandra"
    })
    console.log("listado de mascotas actualizado", listadoMascotas)

    //funciones
    const buscarMascotaPorID = (mascota) => mascota.id === 1

    //funcion definida dentro del find
    const mascotaEncontrada = listadoMascotas.find((mascota)=> mascota.id === 2)

    //funcion utilizando una funcion definida en otra parte
    const mascotaEncontrada2 = listadoMascotas.find(buscarMascotaPorID)

    console.log("Dato de mascota obtenido ", mascotaEncontrada)
    console.log("Dato de la segunda mascota obtenido ", mascotaEncontrada2)

    //Devolver un arreglo de un objeto
    console.log(listadoMascotas.filter((mascota)=> mascota.id === 2));

    //modificar o Shallow copy (copia superficial)
    const mascotaModificar = listadoMascotas.find((mascota)=> mascota.id ===2)
    mascotaModificar.raza = "aguacatero"

    console.log("lista actualizada", listadoMascotas);

    //elimiar
    listadoMascotas = listadoMascotas.filter((mascota)=> mascota.id !== 2)
    console.log("lista sin la segunda mascota", listadoMascotas)

    //clases
    const mascota1 = new Mascota("champion", "labrador","macho", "Secreto")
    const mascota2 = new Mascota("horus", "Pitbul", "macho","Secreto")
    const mascota3 = new Mascota("flifli", "conejo", "hembra","Secreto")

    let nuevosIngresos = [mascota1, mascota2]

    nuevosIngresos.push(mascota3)

    console.log(nuevosIngresos)

}

module.exports = {ejemploArreglos}