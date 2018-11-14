$(document).ready(function() { 
        var rupeeAmount = [];
        var userTotal = 0;
        var cpuNum = 0;
        var wins = 0;
        var losses = 0;

        for (var i = 0; i < 4; i++) {
            var randomNum = Math.floor(Math.random() * 12) + 1;
            rupeeAmount[i] = randomNum;
            
            console.log(rupeeAmount[i]);
            
        }

        function resetGame() {
            cpuNum = Math.floor(Math.random() * 101) + 19;
            $("#randomNum").text(cpuNum);
            userTotal = 0;

            console.log(cpuNum + " is the Number to get!");
        }

        function winner() {
            wins++;
            $("#userWins").text(wins);
            alert("You win!");
            resetGame();
        }

        function loser() {
            losses++;
            $("#userLosses").text(losses);
            alert("You lose!");
            resetGame();
        }

        $("#greenRupee").on("click", function() {
            var green = rupeeAmount[0];
            userTotal += green;

            $("#finalTotal").text(userTotal);
            
            if (userTotal == cpuNum) {
                winner();
            } else if (userTotal > cpuNum) {
                loser();
            }

            console.log("Green Rupee!")
            console.log(userTotal);
            
        });

        $("#blueRupee").on("click", function() {
            var blue = rupeeAmount[1];
            userTotal += blue;

            $("#finalTotal").text(userTotal);

            if (userTotal == cpuNum) {
                winner();
            } else if (userTotal > cpuNum) {
                loser();
            }
            
            console.log("Blue Rupee!")
            console.log(userTotal);
            
        });

        $("#redRupee").on("click", function() {
            var red = rupeeAmount[2];
            userTotal += red;

            $("#finalTotal").text(userTotal);

            if (userTotal == cpuNum) {
                winner();
            } else if (userTotal > cpuNum) {
                loser();
            }

            console.log("Red Rupee!")
            console.log(userTotal);
            
        });

        $("#purpleRupee").on("click", function() {
            var purple = rupeeAmount[3];
            userTotal += purple;

            $("#finalTotal").text(userTotal);

            if (userTotal == cpuNum) {
                winner();
            } else if (userTotal > cpuNum) {
                loser();
            }

            console.log("Purple Rupee!")
            console.log(userTotal);
            
        });

        resetGame();
});