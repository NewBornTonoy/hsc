setInterval(()=>{

    let FinalDate = new Date("Aug 17, 2023 10:00").getTime()/(1000*60*60);
    let PresentDAte = new Date().getTime()/(1000*60*60) +24;
    let Display = FinalDate - PresentDAte
    let day = Display/24;
    document.querySelector('.hour').innerHTML = Display.toFixed(3);
    document.querySelector('.day').innerHTML = day.toFixed(1);
     
}),1000;

