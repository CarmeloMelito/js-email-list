
let randoMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

let emails = [];
for (let i = 0; i < 10; i++) {
    axios.get(randoMail)
        .then(response => {
            emails.push(response.data.response)
            console.log(emails)
        })
}












/*
//AXIOS
// axios.get(randoMail)
//     .then((response) => {
//         console.log(response.data);


//         const mail = response.data;



for (let i = 0; i > mail.lenght; i++) {

    const mail = response.data;
    axios.get(randoMail)
        .then((response) => {
            console.log(response.data);


        })
}
*/




//   <ul id="email-list">
//<li></li>
//</ul>









