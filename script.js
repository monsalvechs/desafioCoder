let hamburguesa = "";
let relleno = "";
let costoBase = 90;
let respuesta;
let crear;
let entrada = "";
let finalizar = "";




entrada = prompt("Hola! deseas seleccionar los ingredientes de tu Hamburgesa? responde si/no").toLowerCase()



if (entrada === "no") {
    //Funcion que permite seleccionar "automaticamente" la hamburguesa al usuario.
    function getDataBurger() {
        //bucle do while 
        do {
            hamburguesa = prompt("Pedí tu hamburguesa de Carne, Pollo o Cerdo").toLowerCase()
            //condicional if para saber que dato ingresa el usuario
            if (hamburguesa === "carne" || hamburguesa === "pollo" || hamburguesa === "cerdo") {

                let conTodo = prompt("¿Con todo?").toLowerCase()

                //if anidado para saber si quiere relleno

                if (conTodo === "si") {
                    relleno = `${hamburguesa}, lechuga, tomate, queso, cebolla, pepinillos`;
                    alert(`Hamburguesa de ${relleno}: ${costoBase}$ pesos`)


                } else if (conTodo === "no") {
                    alert(`Hamburguesa de ${hamburguesa}, $ ${costoBase} pesos`)
                    break;
                } else {
                    alert("ingresa sí o no")
                    continue;
                }
                break;

            } else if (hamburguesa != "carne" || hamburguesa != "pollo" || hamburguesa != "cerdo") {
                alert(`La ${hamburguesa} no esta en el menú`);

            }

        } while (hamburguesa == undefined || hamburguesa != "string")

        return alert("Compraste una burger")
    }


} else {
    //funcion para seleccionar "manualmente" los ingredientes de una hamburguesa
    function crearBurger() {
        alert("Responde si o no")

        //si la respuesta fue sí, se crea un objeto
        class Hamburguesa {
            constructor(Lechuga, Tomate, Cebolla, Queso, cantidad) {
                this.Lechuga = Lechuga
                this.Tomate = Tomate
                this.Cebolla = Cebolla
                this.Queso = Queso
                this.cantidad = cantidad
                this.costoBase = costoBase
            }
        }
        const pedido1 = new Hamburguesa("si", "si", "si", "si", 1)
        const pedido2 = new Hamburguesa("no", "si", "no", "si", 1)

        const burger = [pedido1, pedido2]//array en donde se guardan los objetos Hamburguesa

        ////arreglar que el promt de "cantidad de hamburguesas" que solo admita numeros y mayores a 0, tira un NaN/////////////////////////////////
        const pedido = new Hamburguesa(prompt("Lechuga?"), prompt("tomate?"), prompt("Cebolla")
            , prompt("Queso"), parseInt(prompt("cantidad de hamburgesas"))
        )

        //con el push agregamos ese objetos a los pedidos
        burger.push(pedido)

        let total = burger.length * costoBase
        let indice = burger.length
        let clientes = 0;
        let precioDividido = 0;
        if (indice >= 1) {
            dividir = prompt("quieres dividir la cuenta?").toLowerCase()
            if (dividir === "si") {

                clientes = parseFloat(prompt("cuantos pagan"))

                if (clientes >= 2) {
                    precioDividido = total / clientes
                }
            }
        }
        alert("Tu pedido esta en camino")
        console.log(burger.length)
        console.log(precioDividido)
        console.table(burger)

    }
    crearBurger()
}
getDataBurger();
