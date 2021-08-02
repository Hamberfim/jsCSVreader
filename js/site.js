"use strict";

// basic read csv data
document.querySelector("#parse-button").addEventListener('click', function () {
    // user selected file
    let file = document.querySelector("#file-input").files[0];

    // create a new FileReader Object
    let reader = new FileReader();

    // once the file is read trigger event
    reader.addEventListener('load', function (e) {
        // file content
        let text = e.target.result;

        // var to hold the content after spliting on each new line
        let newTextLines = "";

        if (text !== "") {
            newTextLines = text.split("\n"); // split into an string array for each line

        }

        // slice of the header titles from the string array
        let headerTitleList = newTextLines[0].split(",");

        // create a formated/markup template literal of the header titles - 
        let titles = "";
        for (let i = 0; i < headerTitleList.length; i++) {
            titles += `<th scope="col" class="text-nowrap">${headerTitleList[i]}</th>`;

        }
        document.getElementById('file-fieldHeaders').innerHTML = titles;

        // slice off the rest of the content from the string array
        let contentItemsList = newTextLines.slice(1, newTextLines.length);

        // 
        let itemsList = "";
        for (let i = 0; i < contentItemsList.length; i++) {
            itemsList += contentItemsList[i];

        }

        // split into rows
        let rows = "";
        if (itemsList !== "") {
            rows = itemsList.split("\r"); // split on each row

        }

        // create a formated/markup template literal of the row items
        let templateFields = "<tr>";
        for (let i = 0; i < rows.length; i++) {
            let rowItems = rows[i].split(",");
            for (let index = 0; index <= rowItems.length; index++) {
                if(index < rowItems.length) {
                    templateFields += `<td>${rowItems[index]}</td>`;
                } else if(index >= rowItems.length) {
                    templateFields += `</tr>`;
                }
                
            }

        }

        document.getElementById('file-contents').innerHTML = templateFields;

    });

    reader.readAsText(file);
});