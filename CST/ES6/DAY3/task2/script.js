//testtttttttttttttt (not use in task2)
// create dynamic table
var table_container=document.createElement("div");
// table_container.classList.add("")
var table= document.createElement("table");

var thead=document.createElement("thead");
var thead_row=document.createElement("tr");

var headers=["Id","Name"];
headers.forEach(header=>{
    let th = document.createElement('th');
    th.textContent = header;
    thead_row.appendChild(th);
})
thead.appendChild(thead_row);
table.appendChild(thead);
table_container.appendChild(table);



























