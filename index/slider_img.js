let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    contagem()
}, 5000);

function contagem(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}