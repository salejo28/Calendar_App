import { Request, Response } from 'express'
import { CreateEvent, DeleteEvent, UpdateEvent } from '../middlewares/Event';
import { GetById, GetByRelation } from '../sql/Sql';

export class EventsController {
    async GetEvent(req: Request, res: Response) {
        const { id } = req.params;
        const event = await GetById("events", id)
        return res.json({ event });
    }

    async GetEvents(req: Request, res: Response) {
        const { id } = req.user;
        const events = await GetByRelation("events", "user_id", id)
        return res.json({ events });
    }

    async CreateEvent(req: Request, res: Response) {
        const { id } = req.user;
        const { success, error, message, insertId } = await CreateEvent(req.body, id);
        if (!success) return res.json({ success, error })
        return res.json({ success, message, insertId })
    }

    async UpdateEvent(req: Request, res: Response) {
        const { id } = req.user;
        const { succees, error, message } = await UpdateEvent(req.body, id)
        if (!succees) return res.json({ succees, error })
        return res.json({
            succees,
            message
        })
    }

    async DeleteEvent(req: Request, res: Response) {
        const { id } = req.params;
        await DeleteEvent(id);
        return res.json({
            message: "Event Deleted!"
        })
    }
}