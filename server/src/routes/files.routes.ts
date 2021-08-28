import { Router } from "express";
import { authenticate } from "../auth/Auth";
import { FilesControllers } from "../controllers/files.controller";

export class FilesRoutes {

    router: Router
    controller: FilesControllers

    constructor() {
        this.router = Router();
        this.controller = new FilesControllers();

        this.GetFile()
        this.GetFiles()
        this.UploadFiles()
        this.UpdateFile()
        this.DeleteFile()
    }

    GetFile() {
        this.router.get('/:path', authenticate, this.controller.DownloadFile);
    }

    GetFiles() {
        this.router.get('/', authenticate, this.controller.GetFiles);
    }

    UploadFiles() {
        this.router.post('/', authenticate, this.controller.UploadFiles);
    }

    UpdateFile() {
        this.router.put('/:id', authenticate, this.controller.UpdateFile);
    }

    DeleteFile() {
        this.router.delete('/:id', authenticate, this.controller.DeleteFiles);
    }

}