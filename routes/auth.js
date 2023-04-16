import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

/*
{
  "username":"Utkarsh",
  "email":"abc@12hmail.com",
  "country":"india",
  "img":"abshj",
  "city":"bsjsb",
  "phone":"768769",
  "password":"mncsnln"
}
*/
export default router