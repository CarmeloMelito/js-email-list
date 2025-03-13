
let randoMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

let emails = [];
for (let i = 0; i < 10; i++) {
    axios.get(randoMail)
        .then(response => {
            emails.push(response.data.response)
            // console.log(emails)
            let emailList = document.getElementById("email-list");

            let email = response.data.response;
            emails.push(email);
            //Creazione LI
            let listItem = document.createElement("li");
            listItem.textContent = email;
            emailList.appendChild(listItem);
            console.log(email);
        })
        //ERRORE
        .catch(error => {
            console.log("ERRORE");
        });
}


// .catch(error => {
//     console.log("ERRORE")
// });


//   <ul id="email-list">
//<li></li>
//</ul>









