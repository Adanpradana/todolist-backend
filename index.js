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

//users
router.get("/main/api/users", users.getUsers);
router.post("/main/api/users", users.createUser);
router.put("/main/api/users/:id", users.findUser);
router.delete("/main/api/users/:id", users.findUser);
router.get("/main/api/users/todolist", users.getUsersTodo);

router.get("/main/api/todolist", todolist.get);
router.get("/main/api/todolist/search", todolist.search);
router.get("/main/api/todolist/find", todolist.find);
router.post("/main/api/todolist/add", todolist.post);
router.put("/main/api/:todo_id", todolist.update);
router.delete("/main/api/:todo_id", todolist.destroy);

app.use(router);
app.listen(port, () => console.log(`listening in port ${port}`));
