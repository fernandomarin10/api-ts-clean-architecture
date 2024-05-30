import { Router } from "express";
import { UserController } from "../controllers/UserController";
import {UserService} from "../../application/services/UserService";

const router = Router();
const userService: UserService = new UserService();
const userController = new UserController(userService);

router.get("/:id", (req, res) => userController.getUser(req, res));

export default router;