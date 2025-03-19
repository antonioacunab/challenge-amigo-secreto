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
}