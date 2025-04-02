idade = prompt("Digite sua idade: ")
if (idade >= 18){
  alert("Você pode jogar.")
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel e 3-Tesoura")
  escolhaComputador = Math.floor(Math.random() * 3) + 1
  console.log(escolhaComputador)
  // jogador = computador
  if(escolhaJogador == escolhaComputador){
    alert("Empate!")
  }
  //jogador = pedra
  if(escolhaJogador == 1){
    //computador = papel
    if(escolhaComputador == 2){
      alert("Computador venceu!")
    }
    //computador = tesoura
    else{
      alert("Jogador venceu!")
    }
  }
  //jogador = papel
  else if(escolhaJogador == 2){
    //computador = pedra
    if(escolhaComputador == 1){
      alert("Jogador venceu!")
    }
    //computador = tesoura
    else{
      alert("Computador venceu!")
    }
  }
 //jogador = tesoura
  else if(escolhaJogador == 3){
    //computador = pedra
    if(escolhaComputador == 1){
      alert("Computador venceu!")
    }
    //computador == papel
    else{
      alert("Jogador venceu!")
    }
  }
  else{
    alert("Opção inválida")
  }
}
else{
  alert("Você não pode jogar.")
}