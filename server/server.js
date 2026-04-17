
import express from 'express';
import adminRoutes from "./routes/adminRoutes.js";
import jwt from 'jsonwebtoken';
import cors from 'cors';
import verifyToken from './middleware/middleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//fake database
const users = [
  {
    email: "admin@test.com",
    password: "1234",
    role: "admin"
  },
  {
    email: "user@test.com",
    password: "0000",
    role: "user"
  }
];

app.get('/', (req, res) => {
  res.send('the home page');
});

app.post("/login", (req, res) => {

  const { email, password } = req.body;
  const user = users.find(
    u => u.email === email &&
         u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "wrong email or password"
    });
  }
  const token = jwt.sign(
    {
      email: user.email,
      role: user.role
    },
    "h3saidtoh3_chkizmiz",
    { expiresIn: "1h" }
  );

   res.json({
    token,
    role: user.role
  });

});

// Protected route
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
