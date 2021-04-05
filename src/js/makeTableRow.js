export default function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        let key;
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}