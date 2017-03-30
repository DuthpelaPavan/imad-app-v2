

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
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var span=document.getElementById('count');
counter=request.responseText;
span.innerHTML=counter.toString();
            }
        }
        
    };
    request.open('GET','http://duthpelapavan.imad.hasura-app.io/counterplus',true);
    request.send(null);
};


var button=document.getElementById('submit');
button.onclick=function(){
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                
names=request.responseText;
names=JSON.parse(names);
list='';
for(i=0;i<names.length;i++){
    list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
            }
        }
        
    };
    var nameinput=document.getElementById('text');
var name=nameinput.value;
    request.open('GET','http://duthpelapavan.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
};

