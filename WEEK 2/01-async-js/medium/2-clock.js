// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function Clock(){
    let time = new  Date();
    const hr1 = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const hr2 = hr1 % 12 || 12;
    const ampm = hr1 >= 12 ? 'PM' :'AM';   
    console.log(`Time:  ${hr1}:${min}:${sec}`)
    console.log(`Time:  ${hr2}:${min}:${sec} ${ampm}`)
    console.log();;
}
setInterval(Clock, 1000);