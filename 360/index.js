var CompetitionRenderer = document.querySelector(".ipo-CompetitionRenderer");
var CompetitionOpens = CompetitionRenderer.querySelectorAll(".ipo-Competition.ipo-Competition-open");

for(var i=0;i<CompetitionOpens.length;i++){
    var title = CompetitionOpens[i].querySelector(".ipo-CompetitionButton .ipo-CompetitionButton_NameLabel").innerText;
    var games = CompetitionOpens[i].querySelectorAll(".ipo-Fixture");
    console.log("==============================:" + title);
    for(var e=0;e<games.length;e++){
        var player = games[e].querySelectorAll(".ipo-TeamStack .ipo-TeamStack_TeamWrapper");

        var teamScore = games[e].querySelectorAll(".ipo-SetScore .ipo-SetScore_SetWrapper");
        var teamPoints = games[e].querySelectorAll(".ipo-TeamPoints");

        var gaming1 = player[0].innerText;
        var gaming2 = player[1].innerText;
        var setname = player[2].innerText;

        console.log("gaming1",gaming1);
        console.log("gaming2",gaming2);
        console.log("setname",setname);

        console.log("teamScore",teamScore);
        console.log("teamPoints",teamPoints);

        console.log("#");
    }
}