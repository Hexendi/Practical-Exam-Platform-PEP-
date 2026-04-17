import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router();

router.get(
  "/dashboard",
  verifyToken,
  verifyAdmin,
  (req, res) => {

    res.json({
      message: "welcome PEP admin "
    });

  }
);

export default router;
