const express = require("express");
const app = express();
const morgan = require("morgan");
const usersRoutes = require("./routes/users");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    return next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "developement") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        return res.json({
            message: err.message,
            error: err
        });
    });
}

app.listen(3000, () => {
    console.log("Getting started on port 3000!");
})