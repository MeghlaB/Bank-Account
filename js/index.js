 //login Event handelar
 document.getElementById("btn-login").addEventListener("click",function(){
    const loginPage=document.getElementById("container");
    loginPage.style.visibility="hidden"
    const depositeWithdraw=document.getElementById("tranzactionArea");
    depositeWithdraw.style.visibility="visible"
    
})
//Deposite event Handelar
document.getElementById("btn-Deposite").addEventListener("click",function(){
    const depositeAmount=document.getElementById("depositeAmount").value;
    const depositeNumber=parseFloat(depositeAmount)
    
    // $000 
    const currentDeposite=document.getElementById("currentDeposite").innerText;
    const currentNumber=parseFloat(currentDeposite)
    //depositeNumber + currentNumber
    const totalDeposite=depositeNumber+currentNumber
    //blance ar sthe add
    const currentbalance=document.getElementById("currentbalance").innerText
    const currentBlance=parseFloat(currentbalance);
    const totalBalance=currentBlance+totalDeposite;
    document.getElementById("currentbalance").innerText=totalBalance;
    document.getElementById("currentDeposite").innerText=totalBalance
    document.getElementById("depositeAmount").value='';
})


//withdraw event Handelar

document.getElementById("btn-Withdraw").addEventListener("click",function(){
    console.log("hello");
     const withdrawAmount=document.getElementById("withdrawAmount").value;
     const withdrawNumber=parseFloat(withdrawAmount)
    // Get the current withdraw value
    const currentWithdraw=document.getElementById("withdraw").innerText;
    const blanceWithdraw=parseFloat(currentWithdraw);
    // Calculate the new total withdraw
    const withdrawBlance=withdrawNumber+blanceWithdraw;
    console.log(withdrawBlance);
     
    document.getElementById("withdraw").innerText=withdrawBlance;

    //mot blance diea ja tk witdraw krbo ta substings
    const currentBalance=document.getElementById("currentbalance").innerText;
    const currentblance=parseFloat(currentBalance);
    const totalWithdraw=currentblance - withdrawBlance;
    document.getElementById("currentbalance").innerText=totalWithdraw;
    document.getElementById("withdrawAmount").value="";
})    