let form = document.getElementById('studentForm');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let website = document.getElementById('website').value;
    let imageLink = document.getElementById('imageLink').value;

    let gender_array = document.getElementsByName('gender');
    let gender;
    for (let i = 0; i < gender_array.length; i++) {
        if (gender_array[i].checked) {
            gender = gender_array[i].value;
            break;
        }
    }
    //alert(gender_value);

    let skill_list = document.getElementsByName('skills');
    let skill_array = [];
    let k = 0;
    let skills ='-';
    
    for (let i = 0; i < skill_list.length; i++) {
        if (skill_list[i].checked) {
            skill_array[k++] = skill_list[i].value;
        }
    }
    if (skill_array.length > 0) {
        skills = skill_array.join();
    }
    //alert(skills);

    let tableObj = document.getElementById("dynamicTable");
    let tblBody = document.getElementById("tbody");

    const row = document.createElement("tr");
    const cell1 = document.createElement("td");

    const cellText1 = document.createTextNode(name);
    const cellText2 = document.createTextNode(gender);
    const cellText3 = document.createTextNode(email);

    const cellText4 = document.createElement('a');
    cellText4.href = website;
    cellText4.target = "_blank";
    cellText4.appendChild(document.createTextNode(website));

    const cellText5 = document.createTextNode(skills);

    cell1.appendChild(cellText1);
    cell1.appendChild(document.createElement("br"));
    cell1.appendChild(cellText2);
    cell1.appendChild(document.createElement("br"));
    cell1.appendChild(cellText3);
    cell1.appendChild(document.createElement("br"));

    cell1.appendChild(cellText4);
    cell1.appendChild(document.createElement("br"));
    cell1.appendChild(cellText5);
    row.appendChild(cell1);

    let img = document.createElement('img');
    img.src = imageLink;
    //img.alt = "Mountain";
    img.height = 135;
    img.width = 135;
    row.appendChild(img);

    tblBody.appendChild(row);
    tableObj.appendChild(tblBody);

});

function clearAll() {

    event.preventDefault();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("imageLink").value = "";

    let radio = document.getElementsByName("gender");
    for (let i = 0; i < radio.length; i++)
        radio[i].checked = false;

    let checkbox = document.getElementsByName("skills");
    for (let i = 0; i < checkbox.length; i++)
        checkbox[i].checked = false;

}
