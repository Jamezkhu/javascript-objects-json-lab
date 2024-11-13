(function(){
    //starts 
    console.info("Hello JS");
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    digitalClock.appendChild(myNode);
    const myDate = new Date();
    console.dir(myDate);
    //myNode.innerHTML = myDate.toDateString();
    const updateTime = () => {
        console.info("tick tock");
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit" });
        updateClockHands(myDate)
    };
    setInterval(updateTime, 1000);
    updateTime();

    const updateClockHands = (myDate_ => {
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    })

    
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    hrHand.style.backgroundColor = '#0f0';
    //end 
    })();