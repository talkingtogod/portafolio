document.addEventListener('DOMContentLoaded',()=>{const a=document.getElementById("WhoAmI");const professions=["Developer","Designer","Cybersecurity Engineer","System designer","Pentester"];let i=0;let j=0;let c=false;const typeSpeed=100;const eraseSpeed=50;const delayBetweenWords=1000;function typeNextLetter(){let x=professions[i].toLocaleLowerCase()
if(x.startsWith("e")||x.startsWith("a")){document.getElementById("idk").textContent="an"}else{document.getElementById("idk").textContent="a"}
if(j<professions[i].length){a.textContent+=professions[i].charAt(j);a.style.animation="typing 0.1s ease-out";j++;setTimeout(typeNextLetter,typeSpeed);}else{setTimeout(startErasing,delayBetweenWords);}}
function eraseNextLetter(){if(j>0){a.textContent=professions[i].substring(0,j-1);a.style.animation="erasing 0.1s ease-out";j--;setTimeout(eraseNextLetter,eraseSpeed);}else{i=(i+1)%professions.length;setTimeout(typeNextLetter,typeSpeed);}}
function startErasing(){c=true;eraseNextLetter();}
typeNextLetter();});
