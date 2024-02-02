async function loadTable(url,table){
    const tableHead = document.querySelector('thead');
    const tableBody = document.querySelector('tbody');

    const response = await fetch(url);
    const data = await  response.json();
    //console.log(data);
    const{rows,headers} = data;


    // Clear the table
    tableHead.innerHTML = '<tr></tr>';
    tableBody.innerHTML = '';


    // Populate the headers

    for(const headerText of headers){
        const headerElement = document.createElement('th');
        headerElement.textContent = headerText;

        tableHead.querySelector('tr').appendChild(headerElement);
    }

    //Populate the rows

    for(const row of rows){

        const rowElement = document.createElement('tr');

        for(const cellText of row){
            const cellElement = document.createElement('td');

            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }

        tableBody.appendChild(rowElement);

    }



}

loadTable("./data.json",document.querySelector('table') );

//table -> document.querySelector(''table)