const app = require("express")();
const Server = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(Server);


app.set("view engine", "html")
app.engine("html", require("ejs").renderFile)
app.use(require("express").static(path.join(__dirname, "./public")))

app.get("/",(req, res)=>{
    res.render("socket")
})

let activeUsers = {};

io.on("connection",(stream)=>{
    if(!activeUsers[stream.id]){
        activeUsers[stream.id] = stream;
    }
    stream.on("user-joined",(data) => {
        activeUsers[data.id].name = data.name
        const payload = Object.keys(activeUsers).map((x) => ({id: x, name: activeUsers[x].name}));
        stream.broadcast.emit("update-user-list", payload)
        stream.emit("update-user-list", payload, [stream.id])
    })

    stream.on("initiate-call", (data)=>{
        stream.to(data.to).emit("video-call-ringing", data);
    })

    stream.on("exchange-candidate", data => {
        stream.to(data.to).emit("exchange-candidate", data);
    })
    stream.on("video-call-accept-answer", (data)=>{
        stream.to(data.to).emit("video-call-accepted", data);
    })


    stream.on("disconnect", () => {
        delete activeUsers[stream.id];
        stream.broadcast.emit("update-user-list", Object.keys(activeUsers).map((x) => ({id: x, name: activeUsers[x].name})))
    })
    console.log("connection received!");
})


Server.listen(3000, function(err) {
    console.log(`Listening on port 3000`,err);
});

