import express from "express"
import cors from "cors"
import morgan from "morgan"
import connectdatabase from "./database/conn.js"
import router from "./router/route.js"

const app = express();

/* middle ware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8080

app.get('/', (req, res) => {
    res.status(201).json("Home get request");
})

// api routes
app.use('/api',router);






// start server only if databasd is connected

connectdatabase().then(() => {
    try {
        // start the server
        app.listen(port, () => {
            console.log("server connected succesfully")
        })

    } catch (error) {
        console.log("Can not connect to the server")

    }
}).catch((error)=>{
    console.log("invalid data base connection")
})




