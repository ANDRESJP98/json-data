const server = require("./src/app");
const PORT = 4000;
const {sequelize}=require("./src/db")

sequelize.sync({ alter: true })
.then(()=>{
    server.listen(PORT,()=>{
        console.log("We are in port "+ PORT)
    })
})
