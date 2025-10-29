const mongoose = require("mongoose");

const bycrpts = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String,required: true},
        email: {type:String, required:true, unique:true},
        password: {type:String,required:true},
        profileImageURl : {type:String, default:null},
    },
    {timestamps:true}
);


UserSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bycrpts.hash(this.password,10);
    next();
})

//comparing pass
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

module.exports = mongoose.model("User",UserSchema);
