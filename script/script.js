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
