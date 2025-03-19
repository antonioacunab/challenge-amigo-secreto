// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function addFriend ()
{
    const newFriend = document.getElementById("friend").value;

    if (newFriend === "")
    {
        alert("Debe ingresar un nombre");

        return;
    }

    friends.push(newFriend);

    document.getElementById("friend").value = "";

    document.getElementById("friend").focus();

    updateFriends();
}

function updateFriends ()
{
    const friendList = document.getElementById("friend-list");

    friendList.innerHTML = "";

    for (let amigo of friends)
    {
        const item = document.createElement("li");

        item.textContent = amigo;

        friendList.appendChild(item);
    }
}

function sortFriend ()
{
    const randomIndex = Math.floor(Math.random() * friends.length);

    const sortedFriend = friends[randomIndex];

    document.getElementById("result").innerHTML = sortedFriend;
}