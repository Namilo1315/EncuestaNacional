
function calcularVoto() {
    const respuestas = {
        p1: document.querySelector('input[name="p1"]:checked').value,
        p2: document.querySelector('input[name="p2"]:checked').value,
        p3: document.querySelector('input[name="p3"]:checked').value,
        p4: document.querySelector('input[name="p4"]:checked').value,
        p5: document.querySelector('input[name="p5"]:checked').value,
    };

    const votosA = Object.values(respuestas).filter(respuesta => respuesta === "A").length;
    const votosB = Object.values(respuestas).filter(respuesta => respuesta === "B").length;

    if (votosA > votosB) {
        document.getElementById("resultado").innerHTML = "<h3>Tu candidato para Presidente es Sergio Massa!!!</h3><br><img src='./imagenes/massa.jpg' alt='Massa'></img><br><br><h4 class=text-primary>Muchas Gracias por tu tiempo.</h4>";
    } else {
        document.getElementById("resultado").innerHTML = "<h3>Tu candidato para Presidente es Javier Milei!!!</h3><br><img src='./imagenes/Milei.jpg' alt='Milei'></img><br><br><h4 class=text-primary>Muchas Gracias por tu tiempo.</h4>";
    }
}