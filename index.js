const server = require("./src/app");
const port = process.env.PORT||3001;
const {sequelize}=require("./src/db")

sequelize.sync({ alter: true })
.then(()=>{
    server.listen(port,()=>{
        console.log("We are in port "+ port)
    })
})
