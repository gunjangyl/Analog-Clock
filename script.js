//window.alert("Hello Js");
function clock(){
    let date= new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    console.log(date);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    h_rotation= (30*hours) + (minutes/2)
    m_rotation= 6*minutes
    s_rotation= 6*seconds
    console.log(hr)
    hr.style.transform="rotate("+h_rotation+"deg)";
    min.style.transform="rotate("+m_rotation+"deg)";
    sec.style.transform="rotate("+s_rotation+"deg)";

}

clock();
setInterval(clock,1000);