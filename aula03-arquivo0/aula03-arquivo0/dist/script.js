let rodada = 1;
let venceu = null;

while (rodada <= 3) {
  console.log("rodada = " + rodada);
  let escolhaJogador = prompt("Nível = " + rodada + ", escolha vidro[1,2 ou 3]?");
  
  if (escolhaJogador == 1 || escolhaJogador == 2 || escolhaJogador == 3) {
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
    
    if (pisoQuebrado == escolhaJogador) {
      venceu = false;
      break;
    } else {
      alert("Você passou para próxima rodada, o piso quebrado estava no " + pisoQuebrado + ". Boa sorte!");
      venceu = true;
    }
    
    rodada += 1;
    
  } else{
    alert("Digite apenas 1, 2 ou 3");
  }
}

if (venceu == true){
    alert("Você sobreviveu até a última rodada. Parabéns!!");
} else{
  alert("O vidro quebrou!!");
}