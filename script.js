function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    var newRow = table.insertRow(0);

    // Insert new cells into the newly inserted row
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);

    // Set the text for the new cells
    newCell1.innerHTML = "New Cell1";
    newCell2.innerHTML = "New Cell2";
}
