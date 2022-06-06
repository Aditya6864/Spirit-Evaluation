// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction)
function myFunction(event) {
   event.preventDefault()
   let name = document.querySelector("#name").value
   let employeeID = document.querySelector("#employeeID").value
   let department = document.querySelector("#department").value
   let experience = document.querySelector("#exp").value
   let email = document.querySelector("#email").value
   let mobile = document.querySelector("#mbl").value

   console.log(name, employeeID, department, experience, email, mobile);
    
   var tr =document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = name;

        var td2 = document.createElement("td");
        td2.innerText = employeeID;

        var td3 = document.createElement("td");
        td3.innerText = department;

        var td4 = document.createElement("td");
        td4.innerText = experience;

        var td5 = document.createElement("td");
        td5.innerText = email;

        var td6 = document.createElement("td");
        td6.innerText = mobile;

        var td7 = document.createElement("td");
        if (experience > 5){
            td7.innerText = "Senior";
        }
        else if ((experience >= 2) && (experience <= 5)){
            td7.innerText = "Junior";
        }
        else if (experience <= 1){
            td7.innerText = "Fresher";
        }
        
        var td8 = document.createElement("td");
        td8.innerText = "Delete";
        td8.style.backgroundColor = "red";
        td8.style.cursor = "pointer";
        td8.addEventListener("click",deleteRow);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.querySelector("tbody").append(tr);
}

function deleteRow() {
    console.log(event.target.parentNode.remove());
}