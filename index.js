const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3009;
const router = express.Router();
const controller = require("./controller/controller");

const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

router.get("/main/api/todolist", controller.get);
router.get("/main/api/todolist/search", controller.search);
router.get("/main/api/todolist/find", controller.find);
router.post("/main/api/todolist", controller.post);
router.put("/main/api/:id", controller.update);
router.delete("/main/api/:id", controller.destroy);

app.use(router);
app.listen(port, () => console.log(`listening in port ${port}`));
