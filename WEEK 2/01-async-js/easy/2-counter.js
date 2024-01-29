// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

    function counterFunction(second){
        let count = 0;
        function updateCounter(){
            if (count<= second){
                console.log(`Counter: ${count}`)
                count++;
                setTimeout(() => {
                    updateCounter();
                }, 1000);
            }
            
        }
        updateCounter()
        
    }
counterFunction(5)