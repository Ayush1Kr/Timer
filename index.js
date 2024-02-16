const dayelement= document.querySelector(".days");
const hourelement= document.querySelector(".hours");
const minuteelement = document.querySelector(".minutes");
const secondelement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const countertimer= document.querySelector(".countertimer");


const second = 1000,
 minute= 60* second,
 hour = 60 * minute,
 day = 24* hour;


const timerfunciton = ()=>{

    let now = new Date();
    let dd= String(now.getDate()).padStart(2,"0"),
    mm= String(now.getMonth()+1).padStart(2,"0"),
    yyyy= now.getFullYear();
 
    now = `${mm}/${dd}/${yyyy}`;

    const enterday = prompt("Enter date").padStart(2, "0");
    const entermonth = prompt("Enter month").padStart(2, "0");
    
    let targetdate = `${entermonth}/${enterday}/${yyyy}`;
    

    if(now > targetdate)
    {
        targetdate = `${entermonth}/${enterday}/${yyyy+1}`;
    }

     const intervalid = setInterval(() => {
        const timer = new Date(targetdate).getTime();
        const today = new Date().getTime();

        const difference = timer -today;

        // console.log(timer);
        // console.log(today);
        // console.log(difference);
        // console.log(Math.floor(difference/day));
        // console.log(Math.floor((difference%day)/hour));
        // console.log(Math.floor((difference%hour)/minute));
        // console.log(Math.floor((difference%minute)/second));


        
        const leftday = Math.floor(difference/day);
        const lefthour= (Math.floor((difference%day)/hour));
        const leftminute= (Math.floor((difference%hour)/minute));
        const leftsecond=(Math.floor((difference%minute)/second));

        dayelement.innerText= leftday;
        hourelement.innerText= lefthour;
        minuteelement.innerText= leftminute;
        secondelement.innerText= leftsecond; 

        if (difference < 0)
        {
            countertimer.style.display= "none";
            heading.innerText = "Time's Up ";
            clearInterval(intervalid);
        }

    }, 0);
}


timerfunciton();