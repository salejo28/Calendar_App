import { Event } from "../interfaces/Event";
import { DeleteFile } from "../lib/DeleteFile";
import { DeleteById, GetByRelation, Save, UpdateById } from "../sql/Sql";

export async function CreateEvent({
    name,
    details,
    date_time
}: Event, id: string | number) {
    const existByName: any = await GetByRelation("events", "name", name)
    if (existByName.length !== 0) return {
        success: false,
        error: "Event with this name is already exists!"
    }
    const existByDateTime: any = await GetByRelation("events", "date_time", date_time);
    if (existByDateTime.length !== 0) return {
        success: false,
        error: "You already have an event at this time!"
    }

    const event: Event = {
        name,
        details,
        date_time,
        user_id: id
    }

    const e: any = await Save("events", event)

    return {
        success: true,
        message: "Event created!",
        insertId: e.insertId
    }
}

export async function UpdateEvent({
    id,
    name,
    details,
    date_time
}: Event, user_id: string | number) {
    const existByName: any = await GetByRelation("events", "name", name)
    if (existByName.length !== 0 && existByName[0].name !== name) return {
        success: false,
        error: "Event with this name is already exists!"
    }
    const existByDateTime: any = await GetByRelation("events", "date_time", date_time);
    if (existByDateTime.length !== 0 && existByDateTime[0].date_time !== date_time) return {
        success: false,
        error: "You already have an event at this time!"
    }

    const event: Event = {
        name,
        details,
        date_time,
        user_id
    }

    await UpdateById("events", <string|number>id, event)

    return {
        succees: true,
        message: "Event updated!"
    }
}

export async function DeleteEvent(id: string | number) {

    const files: any = await GetByRelation("files", "event_id", id);
    if (files.length > 0) {
        files.forEach(async (file: any) => {
            await DeleteFile(file.url)
            await DeleteById("files", file.id);
        })
    }

    await DeleteById("events", id);

}