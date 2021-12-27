import express from "express";
const app = express();

// Server creation!
app.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})

function keepAlive(){
    app.listen(3000, ()=>{console.log("Server is Ready!")});
}

export default keepAlive;