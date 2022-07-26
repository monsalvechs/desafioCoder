
let hamburguesa = "";
let relleno = "";
const costoBase = 90;
let respuesta;

function getDataBurger() {
    //bucle do while 
    do {
        hamburguesa = prompt("Pedí tu hamburguesa de Carne, Pollo o Cerdo").toLowerCase()
        //condicional if para saber que dato ingresa el usuario
        if (hamburguesa == "carne" || hamburguesa == "pollo" || hamburguesa == "cerdo") {

            let conTodo = prompt("¿Con todo?").toLowerCase()

            //if anidado para saber si quiere relleno

            if (conTodo == "si") {
                relleno = `${hamburguesa}, lechuga, tomate, queso, cebolla, pepinillos`;
                alert(`Hamburguesa de ${relleno}: ${costoBase}$ pesos`)


            } else if (conTodo == "no") {
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

getDataBurger();