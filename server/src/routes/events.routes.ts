import { Router } from "express";
import { authenticate } from "../auth/Auth";
import { EventsController } from "../controllers/events.controller";

export class EventsRoues {
    router: Router
    controller: EventsController

    constructor() {
        this.router = Router()
        this.controller = new EventsController()

        this.GetEvents()
        this.GetEvent()
        this.CreateEvent()
        this.UpdateEvent()
        this.DeleteEvent()
    }

    GetEvents() {
        this.router.get('/:event_id', authenticate, this.controller.GetEvents);
    }

    GetEvent() {
        this.router.get('/', authenticate, this.controller.GetEvent);
    }

    CreateEvent() {
        this.router.post('/', authenticate, this.controller.CreateEvent);
    }

    UpdateEvent() {
        this.router.put('/', authenticate, this.controller.UpdateEvent);
    }

    DeleteEvent() {
        this.router.delete('/:id', authenticate, this.controller.DeleteEvent);
    }

}