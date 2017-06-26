var num = parseInt(window.prompt('1~100の数字を入力'));

while(num > 100 || num < 1)
{
  if(num > 100 || num < 1)
    num = parseInt(window.prompt('1~100の数字を入力'));
}

for(var i = 0; i < num; i++)
{
  var li = document.createElement('li');
  if((i + 1) % 3 != 0 && (i + 1) % 5 != 0)
  {
    li.textContent = i + 1;
    document.getElementById('choice').appendChild(li);
  }
  else if((i + 1) % 3 == 0)
  {
    li.textContent = 'Fizz';
    document.getElementById('choice').appendChild(li);
  }  
  else if((i + 1) % 5 == 0)
  {
    li.textContent = 'Buzz';
    document.getElementById('choice').appendChild(li);
  } 
}
