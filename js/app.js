
document.getElementById('btnSubmit').addEventListener('click',function(){
    const enterEmail = document.getElementById('userEmail');
    const enterValueE = enterEmail.value;
    const enterPass = document.getElementById('userPassword');
    const enterValueP = enterPass.value
   if(enterValueE === 'rajib33@gmail.com' && enterValueP === '12345'){
    window.location.href = 'bank.html';
   }
   else{
    alert("BOKACHUDA");
   }
    

    // const enterPass = document.getElementById('userPassword');
    // const enterValueP = enterPass.value;
    // console.log(enterValueE,enterValueP);
    
})

// function getElemenvalidateForm() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (email === "" || password === "") {
//         alert("Both fields are required.");
//         return false;
//     }

//     // Basic email format validation
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     // Password length validation
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }

//     return true;
// }