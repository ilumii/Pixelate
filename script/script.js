
function row(){

    var row = document.getElementById("grid");
    var table = document.getElementById("table");

    if(table.rows.length == 1 && row.cells.length == 0){
         row.insertCell(0);
     }
     
     else{
        newrow = table.insertRow(0);
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

function remove_Column(){
    var row = document.getElementById("grid");
    var table = document.getElementById("table");
    if(table.rows.length == 1){
        row.deleteCell(0);
    }
    else{
        for (var i = 0; i<table.rows.length; i++){
            table.rows[i].deleteCell(table.rows.length-1);
        }
    }
}

function removerow(){
    var row = document.getElementById("grid");
    var table = document.getElementById("table");
    if(table.rows.length > 1){
        table.deleteRow(table.length - 1);
    }
    else{
        for(let i = 0; row.cells.length > 0; i++){
            row.deleteCell(0);
        }
    }
}

function clear_all(){
    var x = document.getElementsByTagName("TD");
    var y= Array.from(x);
    for(var i = 0; i<y.length;i++){
        y[i].style.backgroundColor="#A9A9A9";
    }
}

function fill_all(){
    var drop = document.getElementById("color_val");
    var color = drop.options[drop.selectedIndex].value;
    var x = document.getElementsByTagName("TD");
    for(var i = 0; i<x.length;i++){
        x[i].style.backgroundColor=color;
    }
}

function fill_nonColored(){
    var drop = document.getElementById("color_val");
    var color = drop.options[drop.selectedIndex].value;
    var x = document.getElementsByTagName("TD");
    for(var i = 0; i<x.length;i++){
        if(x[i].style.backgroundColor == "rgb(169, 169, 169)" || x[i].style.backgroundColor == ""){
            x[i].style.backgroundColor = color;
        }
    }
}