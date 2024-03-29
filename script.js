// EN VARIABEL SOM ÄR ETT HTMLELEMENT

import { loadPlayers } from "./data/players.js"
import { addPlayer, updatePlayer } from "./data/players.js"
import { createTableTdOrTh } from "./ui/helpers.js"

export function sum(a, b) {
    return a + b;   
  }


// letar vi i DOM
//const btnClickMe = document.getElementById("btnClickMe")
const allPlayersTBody = document.querySelector("#allPlayers tbody")
//const allPlayersTBody = document.querySelector("#allPlayerstbody")
//const searchPlayer = document.getElementById("searchPlayer")
// hello
const save =  document.getElementById("save")
const addNew = document.getElementById("addNew")


//weird
save.addEventListener("click",async (ev)=>{
    ev.preventDefault()
    let player = {
        id:playerId.value,
        namn: playerName.value,
        age: age.value,
        born:born.value,
        jersey:jersey.value
    }
    if(parseInt(playerId.value) <= 0){
        await addPlayer(player)
    }else{
        await updatePlayer(player)
    }
    playersArray = await loadPlayers()
    showTable(playersArray)
    //MicroModal.close('modal-1');
});






let playersArray = await loadPlayers()

const showTable = function(playersArray){
    allPlayersTBody.innerHTML = ""
    playersArray.forEach(player => {
        let tr = document.createElement("tr")
        tr.appendChild(createTableTdOrTh("th",player.namn))
        tr.appendChild(createTableTdOrTh("td",player.jersey))
        tr.appendChild(createTableTdOrTh("td",player.age))
        
        let td = document.createElement("td")
        let btn = document.createElement("button")
        btn.textContent = "EDIT"
        btn.dataset.stefansplayerid=player.id
        td.appendChild(btn)
        tr.appendChild(td)
                 
        allPlayersTBody.appendChild(tr)
        btn.addEventListener("click",function(){
            playerName.value = player.namn
            jersey.value = player.jersey
            age.value = player.age
            born.value = player.born
            playerId.value = player.id
            //MicroModal.show('modal-1');
        })
        
    });

}


addNew.addEventListener("click",()=>{
    playerName.value = ""
    jersey.value =0
    age.value = 0
    born.value = ""
    playerId.value = 0
    //MicroModal.show('modal-1');

});

showTable(playersArray)





const playerName = document.getElementById("playerName")
const jersey = document.getElementById("jersey")
const age = document.getElementById("age")
const born = document.getElementById("born")    
const playerId = document.getElementById("playerId")


// const fillTable = function(){
//     while(allPlayersTBody.firstChild){
//         allPlayersTBody.firstChild.remove()
//     }
//     for(let i = 0; i < players.length;i++){
//         if(players[i].visible == false){
//             continue
//         }
//         //skapa en tr och stoppar in
//         let tr = document.createElement("tr")
//         // problem = att använda innerHTML rekommenderas inte
//         //let tds = `<th>${players[i].name}</th><td>${players[i].jersey}</td><td>${players[i].position}</td><td>${players[i].team}</td>`
//         //tr.innerHTML = tds

//         // // BEST PRACTICE 
//         // let th = document.createElement("th")
//         // th.textContent = players[i].name
//         // tr.appendChild(th)

//         // let td = document.createElement("td")
//         // td.textContent = players[i].jersey
//         // tr.appendChild(td)

//         // td = document.createElement("td")
//         // td.textContent = players[i].position
//         // tr.appendChild(td)

//         // td = document.createElement("td")
//         // td.textContent = players[i].team
//         // tr.appendChild(td)

//         // BEST PRACTICE - refactorized
//         tr.appendChild(createTableTdOrTh("th",players[i].name))
//         tr.appendChild(createTableTdOrTh("td",players[i].jersey))
//         tr.appendChild(createTableTdOrTh("td",players[i].position))
//         tr.appendChild(createTableTdOrTh("td",players[i].team))

//         let td = document.createElement("td")
//         let btn = document.createElement("button")
//         btn.textContent = "EDIT"
//         btn.dataset.stefansplayerid=players[i].id
//         // btn.addEventListener("click",function(){
//         //       alert(players[i].name)  
//         //       //                      detta funkar fast med sk closures = magi vg
//         // })
//         //  

//         td.appendChild(btn)
//         tr.appendChild(td)
        


//         allPlayersTBody.appendChild(tr)
//         tr.addEventListener("click",clickOnButton)
//     }

// }

// // EFTER RASTEN 
// // 1. search filter
// // 2. click on row

// fillTable()

// console.log(players)



// searchPlayer.addEventListener("input",function(){ //
//     //
//     // loopar igenom alla players och matchar med searchPlayer.value
//     // och sätter en egenskap på Player som heter visible
//     const searchFor = searchPlayer.value.toLowerCase()
//     for(let i = 0; i < players.length;i++){ 
//         if(players[i].name.toLowerCase().includes(searchFor) || players[i].position.toLowerCase().includes(searchFor) || players[i].team.toLowerCase().includes(searchFor) ){
//             players[i].visible = true                            
//         }else{
//             players[i].visible = false 
//         }
//     }
//     fillTable()
// })




