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

function clear_all(){
    var x = document.getElementsByTagName("TD");
    var y= Array.from(x);
    for(var i = 0; i<y.length;i++){
        y[i].style.backgroundColor="#D3D3D3";
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
        if(x[i].style.backgroundColor == ""){
            x[i].style.backgroundColor = color;
        }
    }
}