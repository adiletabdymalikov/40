let count = 10 ;
let timer;
function f1() {
    document.getElementById("p").textContent = count;
    
    timer = setInterval(() => {
        count--;
        document.getElementById("p").textContent = count;
        
        if (count <= 0) {
            clearInterval(timer);
            document.getElementById("p").textContent = "Birthday Countdown ";
        }
    }, 1000);
} 