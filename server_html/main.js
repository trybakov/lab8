const port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plaintTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Error reading file");
            }
            res.end(data);
        });
    };

    router.get("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        res.end("INDEX");
    });

    router.get("/index.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        customReadFile("views/index.html", res);
    });

    router.post("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plaintTextContentType);
        res.end("POSTED");
    });

    http.createServer(router.handle).listen();
    console.log(`THe server is listening on port number: ${port}`);
