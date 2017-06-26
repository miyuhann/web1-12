for(var i = 1; i < 10; i++){
var li = document.createElement('li'); 
li.textContent = i + '回目';
document.getElementById('list').appendChild(li);
}

var HP=100;
while(0 < HP){
  var li = document.createElement('li');
  var damage = Math.floor(Math.random() * 100);
  HP -= damege;
  HP = (HP < 0) ? 0: HP;
  li.textContent = damege + 'のダメージを受けた。残りのHP:' + HP;
  document.getElementById('while').appendChild(li);
}

var include_tax = function(price){
  return Math.floor(price + 0.08 * price);
}

for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  var price = Math.floor(Math.random() * 1000);
  li.textContent = price + '円(税込み' + include_tax(price) + '円)';
  document.getElementById('price').appendChild(li);
}

var constellatio = ['おひつじ座','おうし座','ふたご座','かに座','しし座','おとめ座','てんびん座','さそり座','いて座','やぎ座','みずがめ座','うお座'];
for(i in constellatio){
  var li = document.createElement('li');
  li.textContent = constellatio[i];
  document.getElementById('array').appendChild(li);
}

var player = {name:'ほげほげ', age:20, blood:'A'};
for(key in player){
  var li = document.createElement('li');
  li.textContent = key + ': ' + player[key];
  document.getElementById('object').appendChild(li);
}

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
  return false;
};
