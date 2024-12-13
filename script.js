const container = document.querySelector("#container");

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

createGrid(100);