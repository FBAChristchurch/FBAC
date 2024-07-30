let fishType = (Math.random());
let money = 0
console.log(fishType);

document.addEventListener("keyup", event =>{
    let fishType = (Math.random());
    console.log(fishType);
    if (fishType <= .3){
        document.getElementById("text").innerHTML = "caught common fish"
        money =+ money + 1
        document.getElementById("money").innerHTML = money
    }
    if (fishType >= .3){
        if (fishType <= .4){
            document.getElementById("text").innerHTML = "caught uncommon fish"
            money =+ money + 5
            document.getElementById("money").innerHTML = money
        }
    }
    if (fishType >= .4){
        if (fishType <= .475){
            document.getElementById("text").innerHTML = "caught rare fish"
            money =+ money + 10
            document.getElementById("money").innerHTML = money
        }
    }
    if (fishType >= .475){
        if (fishType <= .525){
            document.getElementById("text").innerHTML = "caught ultra rare fish"
            money =+ money + 50
            document.getElementById("money").innerHTML = money
        }
    }
    if (fishType >= .525){
        if (fishType <= .55){
            document.getElementById("text").innerHTML = "caught ledgendary fish"
            money =+ money + 100
            document.getElementById("money").innerHTML = money
        }
    }
    if (fishType >= .55){
        document.getElementById("text").innerHTML = "caught no fish"
        document.getElementById("money").innerHTML = money
    }
});

document.getElementById("money").innerHTML = money

if (fishType <= .2){
    console.log("caught a common one")
}
if (fishType >= .2){
    if (fishType <= .3){
        console.log("caught an uncommon one")
    }
}
