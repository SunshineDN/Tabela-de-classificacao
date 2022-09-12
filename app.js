var nameKey = document.getElementById("name");
var iconKey = document.getElementById("picture");

var users = [];
var index = 0;

var keys = [nameKey, iconKey];
keys.forEach(element => {
    element.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addUser();
        }
    })
})

function addUser() {
    let name = document.getElementById("name").value;
    let icon = document.getElementById("picture").value;
    let infoTable = document.getElementById("infoTable");

    let user = {
        icon,
        name,
        "victory": 0,
        "draws": 0,
        "defeats": 0,
        "score": 0,
    }

    if (name == "" || icon == "") {
        alert(`Algum dos dados estão em branco, verifique.`)
        return
    } else if (icon.endsWith(".jpg") == false && icon.endsWith(".png") == false) {
        console.log(icon.endsWith(".jpg"))
        alert(`O endereço do ícone não termina com .jpg ou .png!`)
        return
    }

    if (users.length == 0) {
        let table = 
        `<table style="width:100%" id="infoTable">
        <thead>
            <tr>
                <th>Picture</th>
                <th>Nome</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>Pontos</th>
                <th colspan="3">Ações</th>
            </tr>
        </thead>
        <tbody id="tabelaJogadores">
            <tr>
                <td class="pic"><img src="${user.icon}" alt="Ícone do usuário ${user.name}"</td>
                <td>${user.name}</td>
                <td>${user.victory}</td>
                <td>${user.draws}</td>
                <td>${user.defeats}</td>
                <td>${user.score}</td>
                <td><button onClick="addVictory(${index})">Vitória</button></td>
                <td><button onClick="addDraw(${index})">Empate</button></td>
                <td><button onClick="remove(${index})">Remover jogador</button></td>
            </tr>
        </tbody>`
        infoTable.innerHTML = table
        index++;

    } else {
        let tabelaJogadores = document.getElementById("tabelaJogadores");
        let tdUser = `
        <tr>
                <td class="pic"><img src="${user.icon}" alt="Ícone do usuário ${user.name}"</td>
                <td>${user.name}</td>
                <td>${user.victory}</td>
                <td>${user.draws}</td>
                <td>${user.defeats}</td>
                <td>${user.score}</td>
                <td><button onClick="addVictory(${index})">Vitória</button></td>
                <td><button onClick="addDraw(${index})">Empate</button></td>
                <td><button onClick="remove(${index})">Remover jogador</button></td>
            </tr>`
        tabelaJogadores.innerHTML += tdUser;
        index++;
    }

    users.push(user)
    console.log(users)
}

function calcScore(indice) {
    return ((users[indice].victory * 3) + users[indice].draws)
}

function addVictory(indice) {
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = "";
    
    index = 0;
    let user = users[indice];
    user.victory++;
    user.score = calcScore(indice);

    users.forEach(obj => {
        if (obj != user) {
            obj.defeats++;
        }
    })

    users.forEach(obj => {
        let tdUser = `
        <tr>
                <td class="pic"><img src="${obj.icon}" alt="Ícone do usuário ${obj.name}"</td>
                <td>${obj.name}</td>
                <td>${obj.victory}</td>
                <td>${obj.draws}</td>
                <td>${obj.defeats}</td>
                <td>${obj.score}</td>
                <td><button onClick="addVictory(${index})">Vitória</button></td>
                <td><button onClick="addDraw(${index})">Empate</button></td>
                <td><button onClick="remove(${index})">Remover jogador</button></td>
            </tr>`
        tabelaJogadores.innerHTML += tdUser;
        index++;
    })
}

function addDraw(indice) {
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = "";
    
    index = 0;
    let user = users[indice];

    users.forEach(obj => {
        obj.draws++;
        let tdUser = `
        <tr>
                <td class="pic"><img src="${obj.icon}" alt="Ícone do usuário ${obj.name}"</td>
                <td>${obj.name}</td>
                <td>${obj.victory}</td>
                <td>${obj.draws}</td>
                <td>${obj.defeats}</td>
                <td>${obj.score}</td>
                <td><button onClick="addVictory(${index})">Vitória</button></td>
                <td><button onClick="addDraw(${index})">Empate</button></td>
                <td><button onClick="remove(${index})">Remover jogador</button></td>
            </tr>`
        tabelaJogadores.innerHTML += tdUser;
        index++;
    })
}

function remove(indice) {
    var infoTable = document.getElementById("infoTable")
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = "";

    index = 0;
    let user = users[indice];
    
    for (i = 0; i < users.length; i++) {
        if (users[i] == user) {
            users.splice(i, 1)
        }
    }

    if (users.length == 0) {
        infoTable.innerHTML = "";
        return
    }

    users.forEach(obj => {

        let tdUser = `
        <tr>
                <td class="pic"><img src="${obj.icon}" alt="Ícone do usuário ${obj.name}"</td>
                <td>${obj.name}</td>
                <td>${obj.victory}</td>
                <td>${obj.draws}</td>
                <td>${obj.defeats}</td>
                <td>${obj.score}</td>
                <td><button onClick="addVictory(${index})">Vitória</button></td>
                <td><button onClick="addDraw(${index})">Empate</button></td>
                <td><button onClick="remove(${index})">Remover jogador</button></td>
            </tr>`
        tabelaJogadores.innerHTML += tdUser;
        index++;
    })
}