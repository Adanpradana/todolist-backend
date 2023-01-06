const { todolist, users, users_todolist } = require("./controller/controller");
const user = require("./database/connection");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

router.get("/", users.home);
//users
router.get("/users", users.getUsers);
router.post("/users", users.createUser);
router.put("/users", users.editUser);
router.post("/users/login", users.login);
// router.delete("/main/api/users/:id", users.findUser);
router.get("/users/:user_name/todolist", users_todolist.getUsersTodo);
router.get("/users/login/todolist", users_todolist.getUserLogin);

router.post("/users/todolist/", todolist.post);
router.put("/users/todolist/", todolist.update);
router.delete("/users/todolist", todolist.destroy);
// router.get("/main/api/todolist", todolist.get);
// router.get("/main/api/todolist/search", todolist.search);
// router.get("/main/api/todolist/find", todolist.find);
// router.put("/main/api/:todo_id", todolist.update);

user.sync();
app.use(router);
app.listen(port, () => console.log(`listening in port ${port}`));
