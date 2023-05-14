var heading=document.createElement("h1");
heading.innerHTML="COVID 19 Tracker";
heading.style.textAlign="center";
heading.style.marginTop="50px";
document.body.append(heading);

var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");
input.style.width="30%";
input.setAttribute=("placeholder", "Entre the country name");

var linebreak=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-secondary");
button.style.margin="10px"
button.innerHTML="Search"
button.addEventListener("click", foo);


div.append(input,linebreak,button);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    var index=res2.length-1;
    /* console.log(res2[index].Active);
    console.log(res2[index].Confirmed);
    console.log(res2[index].Deaths);
    console.log(res2[index].Recovered); */

    div.innerHTML=`No of active cases: ${res2[index].Active}<br>
    No of confirmed cases: ${res2[index].Confirmed}<br>
   No of deaths cases: ${res2[index].Deaths}<br>
    No of recovered cases: ${res2[index].Recovered}`
}
   