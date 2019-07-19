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