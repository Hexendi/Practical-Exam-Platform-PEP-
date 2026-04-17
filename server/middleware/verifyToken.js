import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      message: "No token provided"
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    "h3saidtoh3_chkizmiz",
    (err, decoded) => {

      if (err) {
        return res.status(401).json({
          message: "Invalid token"
        });
      }

      req.user = decoded;

      next();
    }
  );

}

export default verifyToken;
