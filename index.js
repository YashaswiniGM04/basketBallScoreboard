
let count1 =0
let count2 =0

function click1(num, text)
{ 
   count1 +=num
   document.getElementById(text).textContent = count1

}

function click2(num, text)
{ 
   count2 +=num
   document.getElementById(text).textContent = count2

}

function Reset1(text)
{
    count1 =0
    document.getElementById(text).textContent = count1
  
}

function Reset2(text)
{
    count2 =0
    document.getElementById(text).textContent = count2
  
}
