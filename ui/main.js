console.log('Loaded!');

var img=document.getElementById('img');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+2;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function(){
    var interval = setInterval(moveRight,200);
};

