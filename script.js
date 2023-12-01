const header=document.getElementById("header");
const snocontainer=document.getElementById("sno");
const bodyContainer=document.getElementById("body-container") ;
const columns=26,rows=100;
for(let i=1;i<=columns;i++){
    // <!-- <div class="head-cell"></div>
    const headCell=document.createElement("div");
    headCell.className="head-cell";
    if(i!=0){
        headCell.innerText=String.fromCharCode(64+i);
    }
    header.appendChild(headCell);
}
for(let i=1;i<=rows;i++){
    // <!-- <div class="sno-cell"></div>
    const snoCell=document.createElement("div");
    snoCell.innerText=i;
    snoCell.className="sno-cell";
    sno.appendChild(snoCell);
}
for(let row=1;row<=rows;row++){
    const rowElement=document.createElement("div");
    rowElement.className="row";
    for(let col=1;col<=columns;col++){
        const cell=document.createElement("div");
        cell.className="cell";
        cell.contentEditable=true;
         // col = 1 => "A1", "A2", "A3" ....
        cell.id = `${String.fromCharCode(64 + col)}${row}`;
        rowElement.appendChild(cell);
         cell.addEventListener("focus", onFocusCell)
         cell.addEventListener("input", onChangeCellText);
    }
    bodyContainer.appendChild(rowElement);
}