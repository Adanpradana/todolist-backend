const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3310;
const router = express.Router();
const { todolist } = require("./controller/controller");
const { users } = require("./controller/controller");

const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

router.get("/main/api/todolist", todolist.get);
router.get("/main/api/todolist/search", todolist.search);
router.get("/main/api/todolist/find", todolist.find);
router.post("/main/api/todolist", todolist.post);
router.put("/main/api/:todo_id", todolist.update);
router.delete("/main/api/:todo_id", todolist.destroy);

//users
router.get("/main/api/users", users);

app.use(router);
app.listen(port, () => console.log(`listening in port ${port}`));
