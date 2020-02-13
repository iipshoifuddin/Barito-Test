// Try edit message
function perfectTwo(arr){
  let newArr=[],index=0,x=-1;

  for(let i=0; i<arr.length; i++)
  {
    if(arr[i+1]>arr[i])
    {
      for(let k=0; k<i+1; k++)
      {
        newArr[index]=arr[i+1]-arr[k];
        index++;
        //console.log(arr[k]);
      }
    }
  }
  newArr.sort(function(a, b){return b - a});
  return newArr[0];
}

$('#msg').html(perfectTwo([5,6,15,3,10,22,15]))

console.log(perfectTwo([5,6,15,3,10,22,15]))