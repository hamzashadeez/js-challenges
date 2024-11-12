const USERS =JSON.parse(localStorage.getItem("users") || "[]");


const registerUser = (name, id)=>{
   const idExist = USERS.find((user) => user.id === id)
   if(idExist){
      alert("User Id already exist");
      return;
   }
   let newUser = {name, id}
   localStorage.setItem("users", JSON.stringify(newUser))
}


const login = (name, id)=>{

}

console.log(USERS)
registerUser("hamza", 3)