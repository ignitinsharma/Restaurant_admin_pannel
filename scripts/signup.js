async function Register() {
  //--> taking data form user in form
  let Register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/auth/register`,
    {
      //--> for sending data  request
      method: "POST",

      body: JSON.stringify(Register_data),

      //--> we are telling what type of data we are sending into local server
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
}


async function login() {
  //--> taking data form user in form
  let login_data = {
    username: document.getElementById("lusername").value,
    password: document.getElementById("lpassword").value,
  };

  //--> we taking direct else it gives error
  let user=login_data.username;

  let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "POST",

    body: JSON.stringify(login_data),

    //--> we are telling what type of data we are sending into local server
    headers: {
      "Content-Type": "application/json",
    },
  });

  //--> passing this in get profile data
  

  savetoken(user,data.token,10000)


  let data = await res.json();
  console.log(data);
}


// //--> for varify token

//-->making seassion storage means after a time letter seassion got expires
let savetoken = (username,token,time)=>{

  let user={
      username,
      token
  }

  localStorage.setItem('user_details', JSON.stringify(token));
  setTimeout(()=>{
   
      localStorage.setItem('user_details', JSON.stringify(null));
 

  },time)
}



// ! flow of the code
//* singup
//* login
//* using token get profile details
//! based on user details we can check user is admin or not