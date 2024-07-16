import mongoose from "mongoose";

const studentDeta = new mongoose.Schema(
    {
        
       fistName:{
        type: String,
        require: true
       },
       lastName:{
        type: String,
        require: true
       },
       DOB:{
        type: Date,
        require: true
       }

    },{timestamps: true}
)

export default Deta = mongoose.model("Deta", studentDeta);

