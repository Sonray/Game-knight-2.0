$(document).ready(function(){

//Toggle effects
    $("#chess-about").click(function(){
        $("#about-chess").toggle("3000");
    });
    $("#about-chess").click(function(){
        $("#about-chess").toggle("3000");
    });

    $("#ludo-about").click(function(){
        $("#about-ludo").toggle("3000");
    });
    $("#about-ludo").click(function(){
        $("#about-ludo").toggle("3000");
    });

    $("#scrabble-about").click(function(){
        $("#about-scrabble").toggle("3000");
    });
    $("#about-scrabble").click(function(){
        $("#about-scrabble").toggle("3000");
    });

    $("#checkers-about").click(function(){
        $("#about-checkers").toggle("3000");
    });
    $("#about-checkers").click(function(){
        $("#about-checkers").toggle("3000");
    });

    $("#snake-about").click(function(){
        $("#about-snake").toggle("3000");
    });
    $("#about-snake").click(function(){
        $("#about-snake").toggle("3000");
    });

    $("#fifa-about").click(function(){
        $("#about-fifa").toggle("3000");
    });
    $("#about-fifa").click(function(){
        $("#about-fifa").toggle("3000");
    });

    $("#rage-about").click(function(){
        $("#about-rage").toggle("3000");
    });
    $("#about-rage").click(function(){
        $("#about-rage").toggle("3000");
    });

    $("#cod-about").click(function(){
        $("#about-cod").toggle("3000");
    });
    $("#about-cod").click(function(){
        $("#about-cod").toggle("3000");
    });

    $("#watchdogs-about").click(function(){
        $("#about-watchdogs").toggle("3000");
    });
    $("#about-watchdogs").click(function(){
        $("#about-watchdogs").toggle("3000");
    });

    $("#jedi-about").click(function(){
        $("#about-jedi").toggle("3000");
    });
    $("#about-jedi").click(function(){
        $("#about-jedi").toggle("3000");
    });

    $("#xboxone-about").click(function(){
        $("#about-xboxone").toggle("3000");
    });
    $("#about-xboxone").click(function(){
        $("#about-xboxone").toggle("3000");
    });

    $("#ps-about").click(function(){
        $("#about-ps").toggle("3000");
    });
    $("#about-ps").click(function(){
        $("#about-ps").toggle("3000");
    });

    $("#virtual-about").click(function(){
        $("#about-virtual").toggle("3000");
    });
    $("#about-virtual").click(function(){
        $("#about-virtual").toggle("3000");
    });

    $("#xpads-about").click(function(){
        $("#about-xpads").toggle("3000");
    });
    $("#about-xpads").click(function(){
        $("#about-xpads").toggle("3000");
    });

    $("#pspads-about").click(function(){
        $("#about-pspads").toggle("3000");
    });
    $("#about-pspads").click(function(){
        $("#about-pspads").toggle("3000");
    });
//End toggle effects


//Order codes

let price = [150,200,250,300,350,500,700]
let location = ["Nairobi","Rongai","Ruiru","Machakos"]
var deliveryCharges = [50,100,150,200]

function total(price,locationCharge){
    return (price+locationCharge)
}

function chargeDeliver(location){
    if(location === "Nairobi"){
        return deliveryCharges[0]
    }
    else if(location === "Rongai"){
        return deliveryCharges[1]
    }
    else if(location === "Ruiru"){
        return deliveryCharges[2]
    }
    else if(location === "Machakos"){
        return deliveryCharges[3]
    }
}
function itemCash(item){
    if(item === "xboxpads" || item === "ps4pads"){
        return price[0]
    }
    else if(item === "ludo" || item === "cod"){
        return price[1]
    }
    else if(item === "snake" || item === "jedi"){
        return price[2]
    }
    else if(item === "scrabble" || item === "checkers" || item === "watchdogs" || item === "Rage2"){
        return price[3]
    }
    else if(item === "chess" || item === "fifa20"){
        return price[4]
    }
    else if(item === "xboxone" || item === "ps4pro"){
        return price[5]
    }
    else if(item === "vr"){
        return price[6]
    }
}


function relayMessage(game, userLocation){
    
    var pricing = itemCash(game)
    var getDelivery = chargeDeliver(userLocation.toString())

    var tottal = total(pricing,getDelivery)

    if ((userLocation !== location[0]) && (userLocation !== location[1]) && (userLocation !== location[2]) && (userLocation !== location[3])){
        
        alert("Sorry we do not have a game-night branch near "+userLocation+". Our current branches are located in these areas "+location)

    }
    else{

        alert("You have ordered a "+game+" which costs "+pricing+" Your delivery location is "+userLocation+" the delivery cost is "+getDelivery+" and the total cost is "+tottal)
    
    }

}

$("#hire-chess").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "chess"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-scrabble").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "scrabble"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-checkers").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "checkers"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-snake").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "snake"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-fifa").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "fifa20"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-rage").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "rage2"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-cod").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "cod"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-watchdogs").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "watchdogs"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-jedi").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "jedi"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-xboxone").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "xboxone"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-ps").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "ps4pro"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-virtual").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "vr"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-xpads").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "xboxpads"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})

$("#hire-pspads").click(function(){

    var userLocation = prompt("Enter delivery location")

    var game = "ps4pads"

    var spitOut = relayMessage(game,userLocation)
    return spitOut
})


});

    