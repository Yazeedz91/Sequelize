/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
async function windowAction() {
  const table = document.querySelector('#dining_halls');
  
  const request = await fetch('/api/dining');
  const data = await request.json();
  const hall_array = data.data;

  console.log(hall_array);

  hall_array.forEach((element) => {
    const hall_name = element.hall_name;
    const hall_loc = element.hall_address;
    const table_row = document.createElement('tr');
    table_row.classList.add('tr');
    table_row.innerHTML = `
                        <td class="td">${hall_name}</td>
                        <td class="td">${hall_loc}</td>
                      `;
    table.append(table_row);
  });

  Object.keys(data).forEach((element) => {
    Object.keys(element).forEach((hall) => {
      
    });
  });
}

window.onload = windowAction;