for(var i = 1; i < 10; i++){
var li = docment.createElement('li'); 
li.textContent = 'アイテム';
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
