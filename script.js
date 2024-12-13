const container = document.querySelector("#container");
const button = document.querySelector("button");

function createGrid(value=16){
    for(let i= 1; i <= value; i++){
        let div = document.createElement("div");
        div.classList.add("rowDiv");
        for(let i = 1; i <= value; i++){
            let divElement = document.createElement("div");
            divElement.classList.add("element");
            
            div.appendChild(divElement)
        } 
        container.appendChild(div);

    }
}

container.addEventListener("mouseover",(event)=> {
    let element = event.target;
    element.classList.add("backColor");
});

button.addEventListener("click",()=>{
    let value = prompt("Insert the dimension of the canvas that you desise.");
    if(value>0 && value<101){
        container.textContent="";
        createGrid(value);
    } else{
        alert("Values over 100 and below 1 are not allowed.")
    }
    
})

createGrid();