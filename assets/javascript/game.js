// define variables
phase = 1;
myChar = "";
badGuyChar = "";
death = "no";
myHp = "";
badGuyHp = "";
myPower = "";
badGuyPower = "";
characters = {cheta: {hp:100, power:10},pitbull: {hp:80, power:8},dalmation: {hp:120, power: 6},chihuahua: {hp:50, power: 5}};
opponents = ["cheta", "pitbull", "dalmation", "chihuahua"];
badGuyList = "";
selectedBadGuy = "";
killedBadGuy = "";
//capture mouseclick select you
// define functiopns
function clearSelectMe () {
    // document.getElementById("charSelect").innerHTML = " ";
    $("#charSelect").html(" ");
    console.log("cleared");
};

function clearSelectOpp () {
    $("#badguys").html(" ");
};

function clearOpp () {
    $("#opponent").html(" ");
};

function charSelector () {
    myChar = event.srcElement.id;
    myHp = eval('characters.' + myChar + ".hp");
    myPower = eval('characters.' + myChar + ".power");
    mySpot = opponents.indexOf(myChar);
    opponents.splice(mySpot,1);
    console.log(opponents);
    // break;   
    // clearSelectMe ();
};

function badGuySelector () {
    badGuyChar = event.srcElement.id;
    badGuyHp = eval('characters.' + badGuyChar + ".hp");
    badGuyPower = eval('characters.' + badGuyChar + ".power");
    console.log(badGuyChar);
    badGuyList = "";
    if (killedBadGuy = "false") {
    selectedBadGuy = opponents.indexOf(badGuyChar);
    opponents.splice(selectedBadGuy,1);};
    // console.log (badGuyChar);
    // console.log(selectedBadGuy);
    console.log (opponents);
    // break;   
    if(phase === 2 || phase === 3) {
        // clearSelectOpp ();
        // badGuySelector (pitbull);
        // document.getElementById("opponent").innerHTML = '<h3 id = ' + badGuyChar + '>' + badGuyChar + '<h3>';
        // $("#opponent").html('<h3 id = ' + badGuyChar + '>' + badGuyChar + '<h3>');
        $("#opponent").html('<img style:"text-align:center; float:left" id = "' + badGuyChar + '" src = "assets/images/' + badGuyChar + '.jpg">');
    
        //TODO: list remaining opponents here
        // alert(opponents.length);
        for (i=0; i < opponents.length; i++) {
            // badGuyList = badGuyList + '<h3 id =' + opponents[i] + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
            badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector()" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
            $("#badguys").html(badGuyList);
            };
            if (opponents.length === 0) {
                $("#badguys").html("");
            };
        phase = 3;
        // alert("booger!");
        // alert(opponents);
        }
    // clearSelectMe ();
};

function youLoose () {
    alert("YOU HAVE DIED!");
    resetgame ();   
}

function fatality () {
    alert("FATALITY! GOOD JOB! SELECT A NEW OPPONENT!");
    // phase = 1;
    clearOpp ();
    badGuyList = "";
    killedBadGuy = true;
    // killedBadGuy = opponents.indexOf(badGuyChar);
    // opponents.splice(killedBadGuy,1);
    for (i=0; i < opponents.length; i++) {
        badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector(' + opponents[i] + ')" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
        // badGuyList = badGuyList + '<h3 id =' +  + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
        $("#badguys").html(badGuyList);
        if (opponents.length === 0) {
            $("#badguys").html("");
        };
        };
   
    phase = 2;

}
// alert(characters.cheta.hp);  
//clear charSelect div
// alert("booger");
// $("#cheta").on("click", function() {
$("#cheta").on("click", function() {
    if(phase === 1) {
        charName = "cheta";
        clearSelectMe ();
        charSelector(charName);
        // document.getElementById("you").innerHTML = '<h3 id = ' + myChar + '>' + myChar + '<h3>';
        // $("#you").html('<h3 id = ' + myChar + '>' + myChar + '<h3>');
        $("#you").html('<img style:"text-align:center; float:left" id = "' + myChar + '" src = "assets/images/' + myChar + '.jpg"><br>');
        // $("#badguys").html('<h3 id ="pitbull" onClick="badGuySelector()">Pitbull</h3><h3 id ="dalmation" onClick="badGuySelector()">dalmation</h3><h3 id="chihuahua" onClick="badGuySelector()">Chihuahua</h3>');
        badGuyList = "";
        //loop for displaying badguys
        for (i=0; i <= opponents.length-1 ; i++) {
            badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector(' + opponents[i] + ')" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
            console.log(badGuyList);
            console.log(opponents);
            console.log(i);
            // badGuyList = badGuyList + '<h3 id =' +  + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
            $("#badguys").html(badGuyList);
            };
        // myHp = characters.cheta.hp;
        // myPower = characters.cheta.power;
        $("#hp").text(myHp);
        $("#power").text(myPower);
        phase = 2;
     
    }
        
});

$("#pitbull").on("click", function() {
    if(phase === 1) {
        charName = "pitbull";
        clearSelectMe ();
        charSelector(charName);
        // document.getElementById("you").innerHTML = '<h3 id = ' + myChar + '>' + myChar + '<h3>';
        // $("#you").html('<h3 id = ' + myChar + '>' + myChar + '<h3>');
        $("#you").html('<img style:"text-align:center; float:left" id = "' + myChar + '" src = "assets/images/' + myChar + '.jpg"><br>');
        // $("#badguys").html('<h3 id ="pitbull" onClick="badGuySelector()">Pitbull</h3><h3 id ="dalmation" onClick="badGuySelector()">dalmation</h3><h3 id="chihuahua" onClick="badGuySelector()">Chihuahua</h3>');
        
        //loop for displaying badguys
        for (i=0; i< opponents.length; i++) {
            badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector(' + opponents[i] + ')" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
            // badGuyList = badGuyList + '<h3 id =' +  + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
            $("#badguys").html(badGuyList);
            };
        // myHp = characters.cheta.hp;
        // myPower = characters.cheta.power;
        $("#hp").text(myHp);
        $("#power").text(myPower);
        phase = 2;
     
    };

   
        
});

$("#dalmation").on("click", function() {
    if(phase === 1) {
        charName = "dalmation";
        clearSelectMe ();
        charSelector(charName);
        // document.getElementById("you").innerHTML = '<h3 id = ' + myChar + '>' + myChar + '<h3>';
        // $("#you").html('<h3 id = ' + myChar + '>' + myChar + '<h3>');
        $("#you").html('<img style:"text-align:center; float:left" id = "' + myChar + '" src = "assets/images/' + myChar + '.jpg"><br>');
        // $("#badguys").html('<h3 id ="pitbull" onClick="badGuySelector()">Pitbull</h3><h3 id ="dalmation" onClick="badGuySelector()">dalmation</h3><h3 id="chihuahua" onClick="badGuySelector()">Chihuahua</h3>');
        
        //loop for displaying badguys
        for (i=0; i< opponents.length; i++) {
            badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector(' + opponents[i] + ')" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
            // badGuyList = badGuyList + '<h3 id =' +  + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
            $("#badguys").html(badGuyList);
            };
        // myHp = characters.cheta.hp;
        // myPower = characters.cheta.power;
        $("#hp").text(myHp);
        $("#power").text(myPower);
        phase = 2;
     
    }
        
});
$("#chihuahua").on("click", function() {
    if(phase === 1) {
        charName = "chihuahua";
        clearSelectMe ();
        charSelector(charName);
        // document.getElementById("you").innerHTML = '<h3 id = ' + myChar + '>' + myChar + '<h3>';
        // $("#you").html('<h3 id = ' + myChar + '>' + myChar + '<h3>');
        $("#you").html('<img style:"text-align:center; float:left" id = "' + myChar + '" src = "assets/images/' + myChar + '.jpg"><br>');
        // $("#badguys").html('<h3 id ="pitbull" onClick="badGuySelector()">Pitbull</h3><h3 id ="dalmation" onClick="badGuySelector()">dalmation</h3><h3 id="chihuahua" onClick="badGuySelector()">Chihuahua</h3>');
        
        //loop for displaying badguys
        for (i=0; i< opponents.length; i++) {
            badGuyList = badGuyList + '<img style:"text-align:center; float:left" onClick="badGuySelector(' + opponents[i] + ')" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
            // badGuyList = badGuyList + '<h3 id =' +  + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
            $("#badguys").html(badGuyList);
            };
        // myHp = characters.cheta.hp;
        // myPower = characters.cheta.power;
        $("#hp").text(myHp);
        $("#power").text(myPower);
        phase = 2;
     
    }
        
});

// $("#badguys").on("click", function() {
//     // if(phase === 1) { }
// // select a new opponent after winning
//     // for (i=0; i< opponents.length; i++) {
//     //     badGuyList = badGuyList + '<h3 id =' + opponents[i] + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
//     //     $("#badguys").html(badGuyList);
//     //     };
//     // };


    
//     if(phase === 2) {
//     // clearSelectOpp ();
//     badGuySelector ();
//     // document.getElementById("opponent").innerHTML = '<h3 id = ' + badGuyChar + '>' + badGuyChar + '<h3>';
//     // $("#opponent").html('<h3 id = ' + badGuyChar + '>' + badGuyChar + '<h3>');
//     $("#opponent").html('<img style:"text-align:center; float:left" id = "' + badGuyChar + '" src = "assets/images/' + badGuyChar + '.jpg">');

//     //TODO: list remaining opponents here
//     // alert(opponents.length);
//     for (i=0; i < opponents.length; i++) {
//         // badGuyList = badGuyList + '<h3 id =' + opponents[i] + ' onClick="badGuySelector()">' + opponents[i] + '</h3>';
//         badGuyList = '<img style:"text-align:center; float:left" onClick="badGuySelector()" id = "' + opponents[i] + '" src = "assets/images/' + opponents[i] + '.jpg">';
//         $("#badguys").html(badGuyList);
//         };
//     phase = 3;
//     // alert("booger!");
//     // alert(opponents);
//     }
// // };
// });

$("#you").click(function() {
    clearSelectMe ();
    // charSelect ("cheta" );
    // alert("dog");
});  

$("#attacks").click(function() {
    if (phase === 3) {
        alert("POW!");
        badGuyHp = badGuyHp - myPower;
        myHp = myHp - badGuyPower;
        myPower = myPower * 2;
        $("#hp").text(myHp);
        $("#power").text(myPower);
        if (badGuyHp <= 0 && myHp > 0) {
            fatality ();
        } 
        if (myHp <= 0) {
            youLoose ();
        }
    }
});  






//put your character's image in "you" div

//capture mouseclick select opp.

//put your remaining opponents in the "badguys" div

//put opponent in "opponent" div

//start fight loop

//capture mouseclick

//apply damage

//check for death

//if death = yes do opponent select

//increase attack power

// capture another mouseclick