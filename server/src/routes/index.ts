import { AuthRoutes } from './auth.routes'
import { EventsRoues } from './events.routes'
import { FilesRoutes } from './files.routes'
import { UserRoutes } from './user.routes'

const auth = new AuthRoutes().router
const user = new UserRoutes().router
const files = new FilesRoutes().router
const events = new EventsRoues().router

export default {
    auth,
    user,
    files,
    events
}