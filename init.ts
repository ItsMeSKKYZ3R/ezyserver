import * as express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("Hello there !")
})

export function initServer(port: number, message?: string) {
    app.listen(port);
    if(message) console.log(message)
    return {
        express: express,
        app: app
    };
}