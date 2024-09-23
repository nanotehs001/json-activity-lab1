document.getElementById("userForm").addEventListener("submit", myFunction);



function myFunction(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let hobbies = document.getElementById("hobbies").value;

    let myData = {
        name: name,
        age : age,
        email : email,
        hobbies : hobbies
    }   

    let myDataStringify = JSON.stringify(myData);
    console.log(myData)
    console.log(myDataStringify)

    document.getElementById("jsonOutput").innerHTML = myDataStringify
  
}