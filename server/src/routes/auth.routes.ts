import { Router } from "express";
import { authenticate } from "../auth/Auth";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes {

    router: Router;
    controller: AuthController;

    constructor() {
        this.router = Router();
        this.controller = new AuthController();

        this.Register();
        this.Login();
        this.ForgottenPassword();
        this.ChangePassword();
        this.CheckEmail();
    }

    Register() {
        this.router.post('/register', this.controller.Register);
    }

    Login() {
        this.router.post('/login', this.controller.Login);
    }

    ChangePassword() {
        this.router.post('/change_password/:id', authenticate, this.controller.ChangePassword);
    }

    ForgottenPassword() {
        this.router.post('/forgotten_password', this.controller.ForgottenPassword);
    }

    CheckEmail() {
        this.router.post('/check_email', this.controller.CheckEmail);
    }

}