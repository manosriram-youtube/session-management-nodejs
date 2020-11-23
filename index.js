const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 5000;

app.use(cookieParser());
app.use(session({ secret: "mano1234", saveUninitialized: true, resave: true }));

const user = {
    name: "Mano Sriram",
    source: "Youtube"
};

console.log(process.env);
app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("User logged in");
});

app.get("/user", (req, res) => {
    const sessionUser = req.session.user;
    return res.send(sessionUser);
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    return res.send("User logged out!");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));
