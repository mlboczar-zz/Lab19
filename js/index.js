var fruitChosen = [0,0,0,0];

function addApples ( ) {
  fruitChosen[0] ++;
  alert("Added Apples!")}

function addAvocados ( ) {
  fruitChosen[1] ++;
  alert("Added Avocados!")}

function addBananas ( ) {
  fruitChosen[2] ++;
  alert("Added Bananas!")}

function addBroccoli ( ) {
  fruitChosen[3] ++;
  alert("Added Broccoli!")}

function checkOut(){
  var message = "Your Receipt:";
  var appleTotal = fruitChosen[0]*1.99
  var avoTotal = fruitChosen[1]*2.50
  var bananaTotal = fruitChosen[2]*.59
  var broccoliTotal = fruitChosen[3]*.99
  
  if(fruitChosen[0]>0)
  message += "\n" + fruitChosen[0] + " lb(s) apples --- $" + appleTotal;
  if(fruitChosen[1]>0)
  message += "\n" + fruitChosen[1]*4 + " avocados --- $" + avoTotal;
  if(fruitChosen[2]>0)
  message += "\n" + fruitChosen[2] + " lb(s) banana --- $" + bananaTotal;
  if(fruitChosen[3]>0)
  message += "\n" + fruitChosen[4] + " head(s) of broccoli  --- $" + broccoliTotal;
  message += "\nYour Total --- $" + (appleTotal+avoTotal+bananaTotal+broccoliTotal)
  alert(message);
}