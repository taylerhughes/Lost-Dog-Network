const secrets = {
  dbUri: "mongodb://tayler:African01@ds255319.mlab.com:55319/lost-dog"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
