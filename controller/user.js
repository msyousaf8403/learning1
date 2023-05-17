const registerUser = async(req,res) =>{
    try{
        const{name,userName,email,password,address} = req.body;
        const user = await User.create({
            name,userName,email,password,address});
            res.status(201).json({
                success: true, user
            })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = registerUser;