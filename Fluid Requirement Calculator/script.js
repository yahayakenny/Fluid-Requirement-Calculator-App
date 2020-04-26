const twentyFourHrly = document.getElementById('dly');
const eightHrly = document.getElementById('hrly');
const deleteBtn = document.getElementById('delete-btn');
const submitBtn= document.getElementById('submit-btn');
const pastInputs = document.getElementById('past-inputs');
const form = document.getElementById('form');
const select = document.getElementById('select');

const bodyWeight = document.getElementById('weight');
const totalFluid = document.getElementById('total-fluid');



//To calculate total Maintenance Fluid
function calcMaintenance(calc) {

    if (bodyWeight.value <= 10){
        return ( bodyWeight.value * 100)
    
    } else if( bodyWeight.value > 10 && bodyWeight.value <= 20 ) { 
         return (1000 + ((bodyWeight.value - 10) * 50)) 
    } 
    else if (bodyWeight.value > 20){
        return (1500 + ((bodyWeight.value-20) *20))
    }
    
}


 function finalMaintenanceValue(e) {
     e.preventDefault();
    twentyFourHrly.innerHTML = calcMaintenance()

    };

 
    //To calculate total Fluid deficit

 function calcDeficit(e) {
     if (select.value === 'mild'){
         return (50 * bodyWeight.value)
     } else if (select.value === 'moderate') {
         return (75 * bodyWeight.value)
     }else if (select.value === 'severe') {
        return (100 * bodyWeight.value)
     }

 }
  
function finalDeficitValue (e) {
    e.preventDefault();
    eightHrly.innerHTML = calcDeficit();
}


 
//Total fluid intake
function totalFluidIntake() {
   
  var total =   calcMaintenance()+ calcDeficit();
  var totalString = total.toString();
  var aleq = Math.floor(total/3);
    var finalString = "You should give the child " +total+ "mls over a 24hr period divided into " +aleq.toString() + "mls every 8hrs."
    
    totalFluid.innerText = finalString;
    
};


submitBtn.addEventListener('click', finalMaintenanceValue);
submitBtn.addEventListener('click', finalDeficitValue);
submitBtn.addEventListener('click', totalFluidIntake);
