window.onload = function() {
    var tton = document.createElement("BUTTON");
    var div = document.getElementById('page');
    div.appendChild(tton);
    tton.innerText = '上一页';
    tton.setAttribute('onclick', 'up()');
    // div.appendChild(tton);
    var tton2 = document.createElement("BUTTON");
    tton2.appendChild(document.createTextNode('下一页'));
    tton2.setAttribute('onclick', 'next()');
    var div = document.getElementById('page').appendChild(tton2);
}

function next() {
    console.log(history);
    history.forward();
    console.log('next');
}

function up() {
    console.log(history);
    console.log('up');
    history.back();
}