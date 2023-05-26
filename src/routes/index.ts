import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("What's up doc ?!");
});

export default router;
