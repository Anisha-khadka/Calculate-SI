function Interest(){
let P= document.getElementById('p').value;
let T= document.getElementById('t').value;
let R= document.getElementById('r').value;
var SI =P*T*R;
var h1 = document.createElement('h1');
var text= document.createTextNode('The calculated simple interest  is '+ SI);
h1.setAttribute('id','Interest');
h1.appendChild(text);
document.getElementById('flex-result').appendChild(h1);
}
 function end() {
    document.getElementById('Interest').remove();

}
