function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks:1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks:15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks:1,
                },
            },
        },
        away: {
            teamName: " Charlotte Hornets",
            colors: [" Turquoise, Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop	": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals:22,
                    blocks: 5,
                    slamDunks: 12,
                },

            },

        },
    };
}

console.log(gameObject());

function numPointsScored(playerName){
    const game = gameObject();
    for (let player in game.home.players){
        if(player === playerName){
            return game.home.players[player].points;
        }
    }

    for (let player in game.away.players){
        if(player === playerName){
            return game.away.players[player].points;
        }
    }

    return "Player not found";
}

function shoeSize(playerName){
    const game = gameObject();
    for (let player in game.home.players){
        if (player === playerName){
            return game.home.players[player].shoe;
        }
    }

    for (let player in game.away.players){
        if (player === playerName){
            return game.away.players[player].shoe;
        }
    }

    return "Player not found";

}

function teamColors(teamName){
    const game = gameObject();
    if (teamName === teamName){
        return game.home.colors;
    } else if (teamName === teamName){
        return game.away.colors;
    }

    return "Team not found";
}

function teamNames(){
    const game = gameObject;
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName){
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away.teamName === teamName ? game.away : null;
    return Object.values(team.players).map((player) => player.number);
}

function playerStats(playerName){
    const game = gameObject();
    for (let player in game.home.players){
        if (player === playerName){
            return game.home.players[player];
        }
    }

    for (let player in game.away.players){
        if (player === playerName){
            return game.away.players[player];
        }
    }

    return "Player not found";
}

function bigShoeRebounds(){
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;

   const checkPlayer = (players) => {
    for (let player in players) {
        debugger;
        if (players[player].shoe > largestShoeSize){
            largestShoeSize = players[player].shoe;
            playerWithLargestShoeSize = players[player];
        }
    }
   };

   checkPlayers(game.home.players);
   checkPlayers(game.away.players);

   return playerWithLargestShoe.rebounds;

}

function mostPointsScored(){
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";

    const checkPlayers = (players) => {
        for (let player in players) {
            if (players[player].points > mostPoints){
                mostPoints = players[player].points;
                playerWithMostPoints = players[player];
            }
        }
    };

    checkPlayers(game.home.players);
    checkPlayers(game.away.players);

    return playerWithMostPoints;

}

function winningTeam(){
    const game = gameObject();
    const calculateTotalPoints = (players) => {
        return Object.values(players).reduce((total, player) =>total + player.points, 0);
    };

    const homePoints = calculateTotalPoints(game.home.players);
    const awayPoints = calculateTotalPoints(game.away.players);

    if (homePoints > awayPoints){
        return game.home.teamName;
    } else if (awayPoints > homePoints){
        return game.away.teamName;
    } else {
        return "Its a tie";
    }
}      

function playerWithLongestName(){
    const game = gameObject();
    let longestName = 0;
    let playerWithLongestName = "";

    const checkPlayers = (players) => {
        for (let player in players){
            if (player.length > longestName){
                longestName = player.length;
                playerWithLongestName = player;
            }
        }
    };

    checkPlayers(game.home.players);
    checkPlayers(game.away.players);

    return playerWithLongestName;
}

function doesLongNameStealATon(){
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName = "";

    let mostSteals = 0;
    let playerWithMostSteals = "";


    const checkPlayers = (players) => {
        for (let player in players){
            if (player.length > longestName){
                longestName = player.length;
                playerWithLongestName = player;
            }

            if (players[player].steals > mostSteals ){
                mostSteals = players[player].steals;
                playerWithMostSteals = players[player];
            }
        }
    };

    checkPlayers(game.home.players);
    checkPlayers(game.away.players);

    return playerWithLongestName === playerWithMostSteals;
}