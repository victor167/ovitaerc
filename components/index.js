document.querySelector(".input-text").addEventListener('keypress', function(evt) {
    if (evt.which === 13) {
        evt.preventDefault();
    }
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 9) {
        var focus = document.activeElement;
        var nodes = document.querySelectorAll(".input");
        if(focus.classList.contains('input')){
            if(nodes[nodes.length-1]===focus){
                nodes[0].focus();
                evt.preventDefault();
            }
        }else{
            nodes[0].focus();
            evt.preventDefault();
        }
    }
});