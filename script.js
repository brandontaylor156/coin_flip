function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }    

function fiveHeads() {
        return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
    
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        
        if (attempts <= 100){
              resolve("Heads has been flipped 5 times");
        }
        else{
            reject("Coin flipped more than 100 times");
        }
            
        });
    }
    
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
    
console.log( "When does this run now?" );
    
    