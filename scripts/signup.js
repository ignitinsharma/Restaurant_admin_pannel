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

  let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "POST",

    body: JSON.stringify(login_data),

    //--> we are telling what type of data we are sending into local server
    headers: {
      "Content-Type": "application/json",
    },
  });

  //--> passing this in get profile data
  getprofile(login_data.username, login_data.password)
  let data = await res.json();
  console.log(data);
}


//--> for varify token
let getprofile = async (username, token) => {
  let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
   
  headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  let data = await res.json();
  console.log(data);
};
