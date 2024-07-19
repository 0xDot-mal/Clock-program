function updCLOCK(){
    const date = new Date();
    let hours = date.getHours().toString().padStart(2 , 0);
    const mrdm = hours >= 12? `PM` : `AM`;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2 , 0);
    const minutes = date.getMinutes().toString().padStart(2 , 0);
    const seconds = date.getSeconds().toString().padStart(2 , 0);
    
    const timeSTRING = `${hours}:${minutes}:${seconds} ${mrdm}`;
    document.getElementById(`clock`).textContent = timeSTRING;
}

updCLOCK();

setInterval(updCLOCK , 1000);