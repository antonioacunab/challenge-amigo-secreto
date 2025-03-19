// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo ()
{
    const nuevoAmigo = document.getElementById("amigo").value;

    if (nuevoAmigo === "")
    {
        alert("Debe ingresar un nombre");

        return;
    }

    amigos.push(nuevoAmigo);

    document.getElementById("amigo").value = "";

    document.getElementById("amigo").focus();

    actualizarAmigos();
}

function actualizarAmigos ()
{
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let amigo of amigos)
    {
        const item = document.createElement("li");

        item.textContent = amigo;

        listaAmigos.appendChild(item);
    }
}

function sortearAmigo ()
{
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = amigoSorteado;
}