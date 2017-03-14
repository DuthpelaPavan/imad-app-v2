

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function(){
    var interval = setInterval(moveRight,20);
};

var counter=document.getElementById('counter');
counter.onclick=function(){
    counter=counter+1;
var count=document.getElementById('count');
count=counter.toString();
}