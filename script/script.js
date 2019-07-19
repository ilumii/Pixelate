
function row(){

    var row = document.getElementById("grid");
    var table = document.getElementById("table");

    if(table.rows.length == 1 && row.cells.length == 0){
         row.insertCell(0);
     }
     
     else{
        newrow = table.insertRow(0);
        firstrow = document.getElementsByTagName("tr")[0];
        for(let i = 0; i < row.cells.length; i++){
            newrow.insertCell(0);
        }
    }
}

function column(){
    var row = document.getElementById("grid");
    var table = document.getElementById("table");
    if(table.rows.length == 1){
        row.insertCell(0);
    }
    else{
        for (var i = 0; i<table.rows.length; i++){
            table.rows[i].insertCell(0);
        }
    }
}
