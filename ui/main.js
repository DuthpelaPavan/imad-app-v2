

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function(){
    var interval = setInterval(moveRight,20);
};
var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
var span=document.getElementById('count');
counter=counter+1;
span.innerHTML=counter.toString();
};