window.addEventListener("DOMContentLoaded", function () {
    const resultadosConsultaBtn = document.getElementById(
        "resultados-consulta"
    );

    const metodosPago = [
        "ZELLE",
        "Paypal",
        "Binance",
        "Bolívares",
        "Tarjeta de Crédito o Débito Internacional",
    ];
    /*const paisesLatino = [
        "AR",
        "BO",
        "BR",
        "CL",
        "CO",
        "CR",
        "CU",
        "EC",
        "SV",
        "GT",
        "HN",
        "NI",
        "PY",
        "PE",
        "PR",
        "DO",
        "UY",
    ];*/
    const wsMsgVariaciones = [
        ["Estoy interesad@", "Mi", "Tengo", "Me encuentro", "Estoy intresad@"],
        [, "Su", "Tiene", "Se encuentra", "Está interesad@"],
    ];

    const form = document.getElementById("consulta-form");

    resultadosConsultaBtn.addEventListener("click", function () {
        const pacientAge = form.elements["edad-paciente"];
        const paisesLista = document.getElementById("paises");
        // const estadosLista = document.getElementById("estados-ve");
        const tipoPaciente = document.getElementById("tipo-paciente");
        const tipoConsulta = document.getElementById("tipo-consulta");
        const nombrePaciente = document.getElementById("nombre-paciente");
        const ambasConsultasIntro = document.getElementById("ambas-consultas");

        const costoConsultaMsg = document.getElementById("cost-con");
        const metodoPagoMsg = document.getElementById("met-pago");
        const resultadosHeading = document.getElementById(
            "resultados-contenedor"
        ).children[1];
        let tipoPacienteMsg = "";
        let tipoConsultaMsg = "";
        let nombrePacienteMsg = "";
        let ubicacionMsg = "";
        const whatsappBtn = document.getElementById("ws-btn");

        let whatsappURL = ``;
        const whatsappNumero = "584244104734";

        /** Precios de las consultas */
        const venezuelaPrecio = "$50.00";
        const restoDelMundoPrecio = "$50.00";
        const packagePrice = "$120.00";

        // inicializa los valores de visualización de los elementos
        resultadosHeading.className = "invisible";
        document.getElementById("con-online").className = "invisible";
        document.getElementById("con-offline").className = "invisible";
        resultadosHeading.previousElementSibling.className = "";
        metodoPagoMsg.className = "";
        costoConsultaMsg.className = "";
        document.querySelector(".concretar-msg").classList.remove("invisible");
        whatsappBtn.className = "";
        ambasConsultasIntro.className = "invisible";

        if (tipoPaciente.value == 0) {
            alert(
                "Necesito saber para quien será este proceso psico-terapeutico"
            );
            return;
        } else {
            switch (tipoPaciente.value) {
                case "1":
                    tipoPacienteMsg = "para%20mí";
                    break;
                case "2":
                    tipoPacienteMsg = "para%20alguien%20más";
                    break;
            }
        }

        if (nombrePaciente.value != "") {
            nombrePacienteMsg = nombrePaciente.value;
        } else {
            alert("Por favor ingrese el nombre del paciente");
            return;
        }

        if (
            pacientAge.value == "" ||
            pacientAge.value > 100 ||
            pacientAge.value < 0
        ) {
            alert("Edad ingresada no valida");
        } else {
            if (pacientAge.value < 14) {
                // if (paisesLista.value == "VE") {
                //     if (estadosLista.value == 0) {
                //         alert(
                //             "Por favor seleccionar el estado donde se encuentre"
                //         );
                //         return;
                //     } else if (estadosLista.value == "Carabobo") {
                //         document.getElementById("con-offline").className = "";
                //         ambasConsultasIntro.className = "";
                //         costoConsultaMsg.children[1].innerText = `${venezuelaPrecio} (USD)`;
                //         metodoPagoMsg.children[1].innerText =
                //             metodosPago.join(", ") + ", Efectivo.";
                //     } else {
                //         whatsappBtn.className = "invisible";
                //         resultadosHeading.previousElementSibling.className =
                //             "invisible";
                //         resultadosHeading.className = "";
                //         document
                //             .querySelector(".concretar-msg")
                //             .classList.add("invisible");

                //         metodoPagoMsg.className = "invisible";
                //         costoConsultaMsg.className = "invisible";
                //     }
                // } else {
                whatsappBtn.className = "invisible";
                resultadosHeading.previousElementSibling.className =
                    "invisible";
                resultadosHeading.className = "";
                metodoPagoMsg.className = "invisible";
                costoConsultaMsg.className = "invisible";
                document
                    .querySelector(".session-packages")
                    .classList.add("invisible");
                document
                    .querySelector(".concretar-msg")
                    .classList.add("invisible");
                // }
                //expandir contenedor con los resultados
                document.getElementById("resultados-contenedor").className =
                    "contenedor-expandido";
            } else {
                if (paisesLista.value == 0) {
                    alert("Por favor ingresar un país");
                    return;
                } /* else if (paisesLista.value == "VE") {
                    if (estadosLista.value == 0) {
                        alert(
                            "Por favor seleccionar el estado donde se encuentre"
                        );
                        return;
                    } else if (estadosLista.value == "Carabobo") {
                        document.getElementById("con-offline").className = "";
                        document.getElementById("con-online").className = "";
                        ambasConsultasIntro.className = "";
                        metodoPagoMsg.children[1].innerText =
                            metodosPago.join(", ") + ", Efectivo.";
                    } else {
                        document.getElementById("con-online").className = "";
                        metodoPagoMsg.children[1].innerText =
                            metodosPago.join(", ") + ".";
                    }
                    costoConsultaMsg.children[1].innerText = `${venezuelaPrecio} (USD)`;
                } */ /* else if (
                    paisesLista.value == "CA" ||
                    paisesLista.value == "US" ||
                    paisesLista.value == "MX" ||
                    paisesLista.value == "PA"
                ) {
                    document.getElementById("con-online").className = "";
                    costoConsultaMsg.children[1].innerText = "$25.00 (USD)";
                    metodoPagoMsg.children[1].innerText =
                        metodosPago.join(", ") + ".";
                } else if (paisesLatino.indexOf(paisesLista.value) != -1) {
                    document.getElementById("con-online").className = "";
                    costoConsultaMsg.children[1].innerText = "$20.00 (USD)";
                    metodoPagoMsg.children[1].innerText =
                        metodosPago.join(", ") + ".";
                }*/ else {
                    document.getElementById("con-online").className = "";
                    // costoConsultaMsg.children[1].innerText = `${restoDelMundoPrecio} (USD)`;
                    // costoConsultaMsg.children.namedItem(
                    //     "unit-price"
                    // ).innerText = `Precio Unitario: ${restoDelMundoPrecio} (USD)`;
                    // costoConsultaMsg.children.namedItem(
                    //     "package-price"
                    // ).innerText = `Paquete 3 Consultas: ${packagePrice} (USD)`;
                    metodoPagoMsg.children[1].innerText =
                        metodosPago.join(", ") + ".";
                    document
                        .querySelector(".session-packages")
                        .classList.remove("invisible");
                }
            }

            if (tipoConsulta.value == 0) {
                alert(
                    "Necesito saber que tipo de abordaje psicologico necesitas"
                );
                return;
            } else {
                switch (tipoConsulta.value) {
                    case "individual":
                        tipoConsultaMsg = "en%20una%20sesión%20individual";
                        break;
                    case "pareja":
                        tipoConsultaMsg = "en%20una%20sesión%20en%20pareja";
                        break;
                    case "familiar":
                        tipoConsultaMsg = "en%20una%20sesión%20familiar";
                        break;
                }
            }

            /* if (estadosLista.value != 0) {
                ubicacionMsg = `${
                    paisesLista[paisesLista.selectedIndex].innerText
                }%20-%20${estadosLista.value}`;
            } else { */
            ubicacionMsg = `${
                paisesLista[paisesLista.selectedIndex].innerText
            }`;
            /* } */

            if (tipoPaciente.value == 1) {
                whatsappURL = `https://wa.me/${whatsappNumero}?text=Hola%0A%0A${wsMsgVariaciones[0][0]}%20en%20una%20sesión%20${tipoPacienteMsg}.%0A%0A${wsMsgVariaciones[0][1]}%20nombre%20es%20${nombrePacienteMsg}.%0A%0A${wsMsgVariaciones[0][2]}%20${pacientAge.value}%20años%20de%20edad.%0A%0A${wsMsgVariaciones[0][3]}%20en%20${ubicacionMsg}.%0A%0A${wsMsgVariaciones[0][0]}%20${tipoConsultaMsg}.`;
            } else if (tipoPaciente.value == 2) {
                whatsappURL = `https://wa.me/${whatsappNumero}?text=Hola%0A%0A${wsMsgVariaciones[0][0]}%20en%20una%20sesión%20${tipoPacienteMsg}.%0A%0A${wsMsgVariaciones[1][1]}%20nombre%20es%20${nombrePacienteMsg}.%0A%0A${wsMsgVariaciones[1][2]}%20${pacientAge.value}%20años%20de%20edad.%0A%0A${wsMsgVariaciones[1][3]}%20en%20${ubicacionMsg}.%0A%0A${wsMsgVariaciones[1][4]}%20${tipoConsultaMsg}.`;
            }

            whatsappBtn.href = whatsappURL;

            //expandir contenedor con los resultados
            document.getElementById("resultados-contenedor").className =
                "contenedor-expandido";

            //hacer scroll a los resultados
            const resultadosContainerPosition = getElementLocation(
                document.getElementById("resultados-contenedor")
            );
            window.scroll({
                top: resultadosContainerPosition.top - 200,
                left: 0,
                behavior: "smooth",
            });
        }
    });

    // Mostrar/ocultar el select con los estados
    const paisesLista = document.getElementById("paises");
    // const estadosLista = document.getElementById("estados-ve");
    // paisesLista.addEventListener("change", function () {
    //     if (paisesLista.value == "VE") {
    //         estadosLista.className = "";
    //     } else {
    //         estadosLista.className = "invisible";
    //         estadosLista.selectedIndex = 0;
    //     }
    // });
});

// obtener la posición del elemento
function getElementLocation(element) {
    let rect = element.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
