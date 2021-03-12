const controls=document.querySelectorAll(".controls input");

function updateChange(){
    let size=this.dataset.spacing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+size);
}

for(let control of controls){
    control.addEventListener("change", updateChange);
    control.addEventListener("mousemove", updateChange);
}