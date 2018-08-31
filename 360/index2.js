/**
 * Created by victor167 on 28/08/2018.
 */


var games = [];
games.push({
    player1: 'Victor',
    player2: 'Volteau'
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function addApuesta(title,game,sets,object1,object2){
    /**
     * title="",
     * game=""
     * object={
     *      turn: true
     *      name: "Victor",
     *      scores:[4,7,3]
     *      points: 40
     * }
     */
    console.log("=================");
    console.log("title",title);
    console.log("game",game);
    console.log("sets",sets);
    console.log("object1",object1);
    console.log("object2",object2);
    console.log("=================");
    var keyChampions = addChampionship(title);

    for(var i=0;i<games.length;i++){
        if(games[i].object1==object1.name){

        }
    }
}


var championships = [];
function addChampionship(title){
    for(var i=0;i<championships.length;i++){
        if(championships[i].title===title){
            return championships[i].key;
        }
    }
    var key = makeid();
    championships.push({title:title,key: key});
    return key;
}