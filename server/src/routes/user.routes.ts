import { Router } from "express";
import { authenticate } from "../auth/Auth";
import { UserController } from '../controllers/user.controller'

export class UserRoutes {

    router: Router;
    controller: UserController;

    constructor() {
        this.router = Router();
        this.controller = new UserController();

        this.Get();
        this.Update();
        this.Delete();
        this.UploadImg();
    }

    Get() {
        this.router.get('/', authenticate, this.controller.GetUser);
    }

    UploadImg() {
        this.router.post('/', authenticate, this.controller.UploadFile);
    }

    Update() {
        this.router.put('/', authenticate, this.controller.UpdateUser);
    }

    Delete() {
        this.router.delete('/', authenticate, this.controller.DeleteUser);
    }

}