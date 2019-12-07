const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;

var routes = require("./api/routes");
routes(app);

app.listen(port, function() {
  console.log("Server started on port " + port);
  console.log("You find the api docs under /api-docs");
});
