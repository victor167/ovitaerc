var CompetitionRenderer = document.querySelector(".ipo-CompetitionRenderer");
var CompetitionOpens = CompetitionRenderer.querySelectorAll(".ipo-Competition.ipo-Competition-open");

for(var i=0;i<CompetitionOpens.length;i++){
    var title = CompetitionOpens[i].querySelector(".ipo-CompetitionButton .ipo-CompetitionButton_NameLabel").innerText;
    var games = CompetitionOpens[i].querySelectorAll(".ipo-Fixture");

    for(var e=0;e<games.length;e++){
        var player = games[e].querySelectorAll(".ipo-TeamStack .ipo-TeamStack_TeamWrapper");

        var teamScore = games[e].querySelectorAll(".ipo-SetScore .ipo-SetScore_SetWrapper");
        var teamPoints = games[e].querySelector(".ipo-TeamPoints");

        var gaming1 = player[0].innerText;
        var gaming2 = player[1].innerText;
        var game = player[2].innerText;
        var sets = teamScore.length;

        var turn1 = false;
        var turn2 = false;
        var score1 = [];
        var score2 = [];
        var point1 = 0;
        var point2 = 0;

        for(var j=0;j<sets;j++){
            var scores = teamScore[j].querySelectorAll(".ipo-SetScore_SetResult");
            score1.push(scores[0].innerText);
            score2.push(scores[1].innerText);
        }

        var points = teamPoints.querySelectorAll(".ipo-TeamPoints_TeamScore");
        point1 = points[0].innerText;
        point2 = points[1].innerText;

        addApuesta(title, game, sets,{
            turn: turn1,
            name: gaming1,
            scores: score1,
            points: point1
        },{
            turn: turn2,
            name: gaming2,
            scores: score2,
            points: point2
        });

    }
}