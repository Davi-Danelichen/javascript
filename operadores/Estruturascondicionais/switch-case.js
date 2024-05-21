function exibirInfoClasse(classe){
    switch(classe){
        case"Guerreiro":
        console.log("Classe: Guerreiro");
        console.log("Descrição: Os guerreiro são combatentes corpo a corpo");
        console.log("Habilidades: Ataques poderoso ,resistencia adanos");
        break;
    case "Mago":
        console.log("Classe : Mago");
        console.log("Descrição: Os magos são mestres do poder arcano, capaz de fazer coisas absurdas");
        console.log("Habilidade: Magias de ataque, controle elemental");
        break;
    case "Ladino":
        console.log("Classe: Ladino");
        console.log("Descrição: Os ladrões são mestres do poder arcano, capaz de fazer coisas absurdas");
        console.log("Habilidade: Furtividade, ataques precisos");
        break;
    default:
        console.log("Classe nãoreconhecida. Escolha entre Guerreiro , mago ou Ladino");
    }

}

exibirInfoClasse("Ladino");