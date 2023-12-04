const nums=[1,3,4,7];
setTimeout(() => {
    console.log("now")
    clearInterval(time)
    
}, 3000);
const time=setInterval(() => {
    console.log("not yet")
    
}, 500);