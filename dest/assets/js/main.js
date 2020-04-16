const getWord = async() => {
    const res = await fetch('/getword');
    const word = await res.text();

    document.getElementById("random-word").innerText = word;
};

getWord();


const getUsers = async() => {
    const res = await fetch('/api/users');
    const users = await res.json();

    users.forEach(user => {
        const li = document.createElement('li');
        li.setAttribute("class", "list-group-item");
        const text = document.createTextNode(user.name);
        li.appendChild(text);
        document.getElementById('users').appendChild(li);
    }); 
};

getUsers();