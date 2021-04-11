
   function updatetime()
    {
        let today = new Date() ;
        let seconds = today.getSeconds() ;
        let minutes = today.getMinutes() ;
        let hours = today.getHours() ;
        let ap = (hours < 12) ? "AM" : "PM" ;
        if(hours<10)
        {
            JSON.stringify(hours) ;
            hours = "0" + hours ;
        }
        if(minutes<10)
        {
            JSON.stringify(minutes) ;
            minutes = "0" + minutes ;
        }
        if(seconds<10)
        {
            JSON.stringify(seconds) ;
            seconds = "0" + seconds ;
        }
        document.querySelector("div").innerHTML = "<b>"+hours+"</b>"+":"+ "<b>"+minutes+"</b>"+":"+ "<b>"+seconds+"</b>"+ "<b>"+ap+"</b>"  ;
    } ;
setInterval(updatetime , 1000);