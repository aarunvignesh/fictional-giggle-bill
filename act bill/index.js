const express = require("express"),
    moment = require("moment"),
    path = require("path"),
    app = express();

app.set("view engine", "html")
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "./public")))

app.get("/chart", (req, res) => {
    res.render("chart")
})

app.get("/", (req, res) => {
    const modulePath = "./config/config";
    delete require.cache[require.resolve(modulePath)]
    config = require(modulePath)
    res.render("index.html", {
        invoice_number: Math.round(Math.random() * 100000000),
        billing_period: moment(config.invoice_date).format("MMM, YYYY"),
        invoice_date: moment(config.invoice_date).add(1, "days").format("DD/MM/YYYY"),
        start_date: moment(config.invoice_date).format("DD/MM/YYYY"),
        due_date: moment(config.invoice_date).add(15, "days").format("DD/MM/YYYY"),
        end_date_of_month: moment(config.invoice_date).endOf("month").format("DD/MM/YYYY"),
        duration: moment(config.invoice_date).endOf("month").diff(moment(config.invoice_date).subtract(1, "day"), "days"),
        transaction_date: moment(config.invoice_date).add(Math.ceil(Math.random() * 10), "days").format("DD/MM/YYYY"),
        transaction_ref_no: Math.round(Math.random() * 100000000),
        subscriber_id: Math.round(Math.random() * 100000000)
    });
});

app.listen(1200);