//loginBtn handler js *****************
const loginBtn = document.getElementById("Btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display= "none";
  const moneyArea = document.getElementById("money-area"); 
  moneyArea.style.display= "block";
});


// previous page handler js *************
const previousPage = document.getElementById("previousBtn");
previousPage.addEventListener("click" , function(){
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "block";
  const moneyArea = document.getElementById("money-area");
  moneyArea.style.display = "none";
});

// deposit handle js *************
const addDeposit = document.getElementById("depositBtn");
addDeposit.addEventListener("click" , function(e){
  e.preventDefault();
  const depositamount = document.getElementById("depositAmount").value ;
  const depoNum = parseFloat(depositamount);

  // const currentDeposit = document.getElementById("deposit").innerText;
  // const depositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depoNum + depositNumber ;

  // document.getElementById("deposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value ="";
  
  // const currentBalance = document.getElementById("balance").innerText;
  // const balanceNumber = parseFloat(currentBalance);

  // const totalBalance = balanceNumber + depoNum;
  // document.getElementById("balance").innerText = totalBalance;

  updateAmountText("deposit" , depoNum);
  updateAmountText("balance" , depoNum);
});

// function call korew kora zai .. code kome ase
function updateAmountText (id , depoNum){
  const current = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(current);

  const totalBalance = balanceNumber + depoNum;
  document.getElementById(id).innerText = totalBalance;
}


//Withdraw button handler ************
const addWithdraw = document.getElementById("withdrawBtn");
addWithdraw.addEventListener("click" , function(e){
  e.preventDefault();
  const currentWithdraw = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(currentWithdraw);

  const wAmount = document.getElementById("withdraw").innerText;
  const withdrawAmount = parseFloat(wAmount);

  const totalWithdraw = withdrawNumber + withdrawAmount ;

  document.getElementById("withdraw").innerText = totalWithdraw;

  document.getElementById("withdrawAmount").value ="";

  updateAmountText("balance" , -1*withdrawNumber);
});

