// Try edit message
function perfectTwo(arr, input){
  let arr=[2,7,11,15];
  let input = 9;

  for(let i=0; i<=arr.length; i++)
  {
    for(let j=0; j<=i; j++)
    {
      let jumlah=arr[i]+arr[j];
      if(jumlah===input && arr[i]!==arr[j])
      {
        return [arr.indexOf(arr[j]),arr.indexOf(arr[i])]; 
      }
    }
  }
  return '<no way>';
}

$('#msg').html(perfectTwo([2,7,11,15],9))

console.log(perfectTwo([2,7,11,15],9))