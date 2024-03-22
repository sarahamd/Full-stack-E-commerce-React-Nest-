

document.addEventListener("DOMContentLoaded", () => {
    populateTable();
  });
  
  /******way1 */
  // async function populateTable() {
  //     const url = "https://jsonplaceholder.typicode.com/users";
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     const tbody = document.getElementById("DataBody");
  
  //     data.forEach(userdata => {
  //       let row = `<tr>
  //         <td>${userdata.id}</td>
  //         <td>${userdata.name}</td>
  //         <td>${userdata.email}</td>
  //         <td>${userdata.username}</td>
  //         <td>${userdata.phone}</td>
  //       </tr>`;
  //       tbody.innerHTML += row;
  //     });

  // }

  /******way2***************************** */
 function populateTable() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(response => {
      // console.log(response.json());
      return response.json();
    })
    .then(data =>{
      console.log(data);
      const tbody = document.getElementById("DataBody");
      data.forEach(userdata => {
        let row = `<tr>
          <td>${userdata.id}</td>
          <td>${userdata.name}</td>
          <td>${userdata.email}</td>
          <td>${userdata.username}</td>
          <td>${userdata.phone}</td>
        </tr>`;
        tbody.innerHTML += row;
      });
      // test
      // const tbody = document.getElementById("div1");
      // tbody.innerHTML = JSON.stringify(data);
    })
  
}
  
