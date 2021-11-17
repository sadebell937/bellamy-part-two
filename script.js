

let petName = prompt("Name your pet");
let energy = 0;
let happiness = 0;

for ( let i=0; i<6; i++){
    let action = prompt("feed, pet or walk?");   
   
    if (action == "feed") {
            energy=(energy +2);
    } else if (action == "pet") {
            happiness =(happiness + 1);

    } else if (action == "walk") {
        if (energy <= 0){
                alert ("Not enough energy to enjoy a walk")
        }else {happiness = (happiness + 2)
                energy =( energy - 1)
            happiness =  (happiness + 2)
        
        }
    }
 }                      
console.log("petName", petName);
console.log("happiness is", happiness);
console.log("energy is", energy);
console.log( petName + " has " + happiness + " happiness and " + energy + " energy "  );