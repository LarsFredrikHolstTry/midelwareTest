const authenticator = (req, res, next) => {
    if(!req.headers.authorization || req.headers.authorization.indexOf("Basic ") === -1){
      res.setHeader('WWW-Authenticate', 'Basic realm="Sirkus", charset="UTF-8"');
      return res.status(401).end();
    }
  
    const credentials = req.headers.authorization.split(' ')[1];
    const [username,password] = Buffer.from(credentials, 'base64').toString("UTF-8").split(":");
  
    const user = authenticate(username, password);
    if(user){
      return res.status(403).end();
    }
    next();
  }

  function authenticate(username, password){
      return username === "kalleKlovn" && password === "rød nese";
  }

  module.exports = authenticator