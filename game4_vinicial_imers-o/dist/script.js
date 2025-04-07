//time usuário 
let princesas = ["", "", ""];

//time do computador
let viloes = ["", "", ""];

let forcaPrincesas = 0;
let forcaViloes = 0;

for(let i = 0; i < 3; i++ ){
  let escolhaPrincesas = prompt("Digite o nome da sua princesa: " + (i + 1));
  princesas[i] = escolhaPrincesas;
  //força do time
  forcaPrincesas += Math.floor(Math.random() * 10) + 1
}

for (let i = 0; i < 3; i++){
  escolhaComputador = Math.floor(Math.random() * 10);
  let viloesPossiveis = ["Rainha má", "Malévola", "Úrsula", "Mãe Gothel", "Lady Tremaine", "Gaston", "Príncipe Hans", "Te Ka", "Mor'du", "Shan Yu"];
  viloes[i] = viloesPossiveis[escolhaComputador];
  //foça do time
  forcaViloes += Math.floor(Math.random() * 10) + 1
} 

//comparar princesas com vilões
if(forcaPrincesas > forcaViloes){
  alert("Seu time é muito forte e levou a melhor! sua força foi: " + forcaPrincesas +". Força computador: " + forcaViloes)
}
else if(forcaViloes > forcaPrincesas){
  alert("Seu time não foi tão forte assim e o computador ganhou! força computador: " + forcaViloes + " Sua força foi: " + forcaPrincesas)
}
else{
  alert("As forças foram iguais!! Sua força foi de: " + forcaPrincesas)
}

console.log(princesas);
console.log("Força Princesas: " + forcaPrincesas)
console.log(viloes)
console.log("Força Vilões: "+ forcaViloes)