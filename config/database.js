const mongoose =require('mongoose');
exports.connectionDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=> {
        console.log(`Database Connected Sucessfully: ${con.connection.host}`);
    })
    .catch((error)=>{
        console.log((error));
    })
}