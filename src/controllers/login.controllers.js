import {login} from "../schemas/login.schema";

const loginDeta = async() =>{
    try {
        const {userName, fullName, password} = req.body;
        if(!(userName, fullName, password)){
            console.log("All detels are require for this");
        }
     const Login =  await login.create({
            userName,
            fullName,
            password
        })
        console.log(Login);
    } catch (error) {
        return res.status(201).json(
            console.log("User Login Succesfull!", error)
          )
    }
}

export{
    loginDeta
}