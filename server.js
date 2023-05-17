const app = require('./app');
const {connectionDatabase} = require('./config/database');
connectionDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server connected on ${process.env.PORT}`)
})
