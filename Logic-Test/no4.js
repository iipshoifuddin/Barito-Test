// Try edit message
function highPalindrome(n){
  if(n===1)
  {
    return 9;
  }
  else if(n===2)
  {
    n=100;
  }
  else if(n===3)
  {
    n=1000;
  }
  else if(n===4)
  {
    n=10000;
  }
  let palindrome=9;
  
  for(let i=1; i<=n; i++)
  {
    for(let j=1; j<=n; j++)
    {
      let sum = i*j;
      let str = sum.toString();
      if (str.length>2 && str.length%2===0 && str === str.split('').reverse().join('')) 
      {
        if(sum>palindrome)
        {
          palindrome=sum;
        }
      }
    }
  }
  return palindrome;
}

$('#msg').html(highPalindrome(2))

console.log(highPalindrome(2))