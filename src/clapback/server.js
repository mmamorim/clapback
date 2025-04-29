import { Server } from "socket.io"

const PORT = 3030

const server = {
    io: null,
    cb: null,

    init(cb) {
        server.cb = cb
        server.io = new Server({});
        server.io.on("connection", (socket) => {
            console.log("new connection");
            socket.emit("ack", "ok");

            socket.on('get', (path) => {
                console.log("GET request path ", path);
                let data = server.cb.get(path)
                console.log("data", data);
                socket.emit('getData', data)
            })

            socket.on("disconnect", (reason) => {
                console.log("disconnected ",reason);
            });
        });

        try {
            server.io.listen(PORT)
            console.log("server on port " + PORT);
        } catch (e) {
            console.log("server error");
        }
    },

    sendChange(path) {
        if (server.io) {
            server.io.emit(path, "changed")
            console.log("Changes emited to ", path);
        }
    }
}

export default server