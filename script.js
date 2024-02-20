let nomeHeroi = "Boxman";
let heroiXp =139;

switch (true) {
    case heroiXp >= 0 && heroiXp <= 1000:
        console.log("O Herói " + nomeHeroi + " está no nível **Ferro**");
        break;
    
    case heroiXp >= 1001 && heroiXp <= 2000:
        console.log("O Herói " + nomeHeroi + " está no nível Bronze");
        break;

    case heroiXp >= 2001 && heroiXp <= 5000:
        console.log("O Herói " + nomeHeroi + " está no nível Prata");
        break;

    case heroiXp >= 5001 && heroiXp <= 7000:
            console.log("O Herói " + nomeHeroi + " está no nível Ouro");
            break;

    case heroiXp >= 7001 && heroiXp <= 8000:
                console.log("O Herói " + nomeHeroi + " está no nível Platina");
                break;

    case heroiXp >= 8001 && heroiXp <= 9000:
        console.log("O Herói " + nomeHeroi + " está no nível Ascendente");
        break;

    case heroiXp >= 9001 && heroiXp <= 10000:
            console.log("O Herói " + nomeHeroi + " está no nível Imortal");
            break;

    case heroiXp >= 10000:
                console.log("O Herói " + nomeHeroi + " está no nível Radiante");
                break;
    }
