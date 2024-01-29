// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
function counterFunction(second){
    let counter = 0;
    console.log(`The counter is at ${counter}`);
    let setIntervalId = setInterval(() => {
        console.log(`The counter is at ${counter+1}`);
        counter++;
        if (counter == second){
            clearInterval(setIntervalId);
        }
        }, 1000)
    
}
