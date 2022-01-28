//  This is the Database

var pokemonDB = [
  {
    name: 'charmander',
    type: 'fire',
    hp: 39,
    attack: 52,
    defense: 43,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
  },
  {
    name: 'bulbasaur',
    type: 'fire',
    hp: 45,
    attack: 49,
    defense: 49,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
  },
  {
    name: 'squirtle',
    type: 'water',
    hp: 44,
    attack: 48,
    defense: 65,
    level: 1,
    img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
  }
  
]

//  State
var gameState = {
    userPokemon: '',
    rivalPokemon: ''
}

console.log(gameState)

//  Elements
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonsEl)
var battleScreenEl = document.getElementById('battle-screen')
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')
console.log(attackBtnsEl)


//  This is the Initial Loop
var i = 0;
while (i < pokemonsEl.length) {
//  This adds function to all the characters on screen select
    pokemonsEl[i].onclick = function() {
//  Current Selected Pokemons Name
     var pokemonName = this.dataset.pokemon

//  Elements for Images on the Battle Screen
     var player1img = document.querySelector('.player1').getElementsByTagName('img')
     var player2img = document.querySelector('.player2').getElementsByTagName('img')

//  This is Where we Save the Current Pokemon
     gameState.userPokemon = pokemonName

//  CPU Picks a Pokemon
     cpuPick()
//  Changes the Select Screen to Battle Screen
     battleScreenEl.classList.toggle('active')

//  Select Data From Current User Pokemon
     var currentPokemon = pokemonDB.filter(function(pokemon){
        return pokemon.name == gameState.userPokemon       
     })
     player1img[0].src = currentPokemon[0].img


//  Select Data From Current CPU Pokemon   
     var currentRivalPokemon = pokemonDB.filter(function(pokemon){
        return pokemon.name == gameState.rivalPokemon       
     })     
     player2img[0].src = currentRivalPokemon[0].img


//  User Choose Attack


//  CPU Health Goes Down


//  CPU Attack


//  User Health Goes Down



//  Rock > Scissors


//  Paper > Rock


//  Scissors > Paper


//  Depending on Pokemon Type and Defense is How Hard the Attack is Going to be
//  and How Much Health it Will Take Out.



//  Then Whoever Gets to Health < = 0 Loses
    }
    i++
}
var a = 0
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function() {
    var attackName = this.dataset.attack
    gameState.currentUserAttack = attackName
    console.log(gameState.currentUserAttack)
  }
  a++
}

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var cpuPick = function () {
    gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon
    
}

















// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
//   {
//     name: 'charmander',
//     type: 'fire',
//     attack: 52,
//     defense 39,
//     level: 1
//   },
//   {
//     name: 'charmander',
//     type: 'fire',
//     attack: 52,
//     defense 39,
//     level: 1
//   },
  
// ]


// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var stamina = 39;

// // create a formula for attacks
// console.log((attack * level ) * stack / 7)



// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)




// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2




// // when one user loses all his health declare a winner


