const bcrypt = require("bcrypt");
const users = require("../model/users");

const bcryptCheck = async (user_name, password) => {
  const userData = await users.findOne({
    where: {
      user_name,
    },
  });
  const bcryptCheck = await bcrypt.compare(password, userData.password);
  return {
    userData,
    bcryptCheck,
  };
};

module.exports = bcryptCheck;
