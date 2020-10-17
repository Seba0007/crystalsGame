$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var crystals;

    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19
    }

    function randomNumCrystals() {
        return {
            red: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/red.png"
            },
            blue: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/blue.png"
            },
            yellow: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/yellow.png"
            },
            green: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/green.png"
            }
        }
    }

    function setGame() {
        yourMatchingNumber = 0;

        crystals = randomNumCrystals();

        randomNum = randomNumGen();
        $("#displayRandom").text(randomNum);
    }

    function upDateDom(didUserWin) {

        $("#displayGanador").empty();

        if(didUserWin === true){
            $("#displayGanador").append($("<p>").text("Ganaste!!!"));
            setGame();
            renderMatchingNumber();
        }
        else if (didUserWin === false) {
            $("#displayGanador").append($("<p>").text("Perdiste"));
            setGame();
            renderMatchingNumber();
        }
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);

        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $("#displayGanador").append(pWins);
        $("#displayGanador").append(pLosses);
    }

    function renderCrystals() {
        for (var key in crystals) {
            var crystalDiv = $("<div class= 'crystals-button' data-name='" + key + "'>");
            var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#areaImagen").append(crystalDiv);
        }
    }

    function upDateMatchingNumber(crystal) {
        yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }

    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#areaPuntos").html();
        $("#areaPuntos").html(scoreNumDiv);
    }
    setGame();
    upDateDom();
    renderCrystals();
    renderMatchingNumber();

    $(".crystals-button").on("click", function(event) {
        upDateMatchingNumber($(this));
        renderMatchingNumber();
    
        if (yourMatchingNumber === randomNum) {
          wins++;
          setGame();
          upDateDom(true);
        }
        else if (yourMatchingNumber > randomNum) {
          losses++;
          setGame();
          upDateDom(false);
        }
      });
    
    

       
     
     



})