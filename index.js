var tipBtns = document.querySelectorAll(".tip_btn");
var cstmIntrest= document.querySelector(".tip_custom");
var billInput= document.querySelector(".billinput");
var peopleInput=document.querySelector(".personinput");
var inputDiv = document.querySelectorAll(".div_input");
var warning= document.querySelectorAll(".warn");
var amt=0,people=0,tip=0;
function calculate(){
  amt = billInput.value;
  people = peopleInput.value;
  tip =  tipIntrest();
  if(isNaN((amt/people)*tip) || ((amt/people)*tip) === Infinity ){
    document.querySelector(".tip_amt_person").textContent="$" + "0.00" ;
    document.querySelector(".tip_amt_total").textContent="$" + "0.00";
  }
  else{
    document.querySelector(".tip_amt_person").textContent="$" + ((amt/people)*tip).toFixed(2) ;
   
    document.querySelector(".tip_amt_total").textContent="$" + ((amt * tip+ parseFloat(amt) )/people).toFixed(2);
      
  }
  
}
function tipIntrest(){
  if (cstmIntrest.value!=="" )
  {
    return cstmIntrest.value/100;
  }
  else{
    for(let i =0;i<tipBtns.length;i++)
    {
      if(tipBtns[i].classList.contains("active"))
      {
        return tipBtns[i].dataset.value/100;
      }
    }
  }
}

billInput.addEventListener("input",function(){
  if(billInput.value==="" || billInput.value==="0" || isNaN(billInput.value))
  {
    inputDiv[0].style.outline="2px solid red";
    warning[0].style.visibility ="visible";
  }
  else{
    inputDiv[0].style.outline="initial";
    warning[0].style.visibility ="hidden";
    calculate();
  }
})
for(let i=0;i<tipBtns.length;i++)
{
  tipBtns[i].addEventListener("click",function(){
    for(let j=0;j<tipBtns.length;j++)
    {
      tipBtns[j].classList.remove("active");
    }
    warning[1].style.visibility ="hidden";
    
    this.classList.add("active");
    cstmIntrest.value= "";
    calculate();
  })
}
cstmIntrest.addEventListener("input",function(){
  for(let i=0;i<tipBtns.length;i++)
  {
    tipBtns[i].classList.remove("active");
  }
  if(cstmIntrest.value==="" || cstmIntrest.value==="0" || isNaN(cstmIntrest.value))
  {
    warning[1].style.visibility ="visible";
  }
  else{
    warning[1].style.visibility ="hidden";
    calculate();
  }
  
})
peopleInput.addEventListener("input",function()
{
  if(peopleInput.value==="" || peopleInput.value==="0" || isNaN(peopleInput.value) )
  {
    inputDiv[1].style.outline="2px solid red";
    warning[2].style.visibility ="visible";
  }
  else{
    inputDiv[1].style.outline="initial";
    warning[2].style.visibility ="hidden";
    calculate();
  }
})
document.querySelector(".reset_btn").addEventListener("click",function(){
  billInput.value="";
  amt=0;
  people=0;
  tip=0;
  for(let i=0;i<tipBtns.length;i++)
  {
    tipBtns[i].classList.remove("active");
  }
  peopleInput.value="";
  calculate();
})




