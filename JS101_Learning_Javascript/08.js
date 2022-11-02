let database_user = "abc@gmail.com";
let database_pass = "123abc";
let user = "abc@gmail.com";
let pass = "123abc";
if(database_user == user){
  if(database_pass == pass){
    console.log("login Successful");  
  }else{
    console.log("Incorrect Password");
  }
}else {
  console.log("Wrong Credentials");
}
