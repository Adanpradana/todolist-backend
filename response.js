const response = (statusCode, res, status, data, code) => {
  res.status(statusCode).json({
    payload: {
      code,
      status,
      data,
    },
    page: {
      size: 10,
      total: 100,
      totalPages: 10,
      current: 2,
      next: "",
      previous: "",
    },
  });
};

exports.responseError = (statusCode, res, status, data, code) => {
  res.status(statusCode).json({
    payload: {
      code,
      status,
      errors: {
        id: ["id must be integer", "must be uniqe", "id not null", "greater than1 less than 100"],
        todo_list: ["must be string", "not null", "max 200 char"],
        deskripsi: ["must be string", "not null", "max 200 char"],
        time_created: ["must be time stamp", "not null", "string"],
        isdone: ["string, not null, boolean"],
      },
    },
  });
};

const notFound = (res, statusCode, message) => {
  res.status(statusCode).json({
    statusCode,
    message,
  });
};

const successMsg = (res, statusCode, message) => {
  res.status(statusCode).json({
    statusCode,
    message,
  });
};
module.exports = {
  response,
  notFound,
  successMsg,
};
