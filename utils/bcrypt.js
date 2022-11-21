const bcrypt = require("bcrypt");
const users = require("../model/users");

const bcryptCheck = async (id, password) => {
  const userData = await users.findOne({
    where: {
      id,
    },
  });
  const bcryptCheck = await bcrypt.compare(password, userData.password);
  return {
    userData,
    bcryptCheck,
  };
};

module.exports = bcryptCheck;
