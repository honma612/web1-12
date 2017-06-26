var num = parseInt(window.prompt('1~100の数字を入力'));

while(num > 100 || num < 1)
{
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
  if((i + 1) % 3 == 0 && (i + 1) % 15 != 0)
  {
    li.textContent = 'Fizz';
    document.getElementById('choice').appendChild(li);
  }  
  if((i + 1) % 5 == 0 && (i + 1) % 15 != 0)
  {
    li.textContent = 'Buzz';
    document.getElementById('choice').appendChild(li);
  } 
  if((i + 1) % 15 == 0)
  {
    li.textContent = 'FizzBuzz';
    document.getElementById('choice').appendChild(li);    
  }
}
