import express, { Application } from 'express'
import morgan from 'morgan';
import expressFileUpload from 'express-fileupload'
import config from './config/config';
import routes from './routes';

export class App {

    app: Application

    constructor(private port?: Number) {
        this.app = express();

        this.settings();
        this.middlewares();
        this.routes()
    }

    settings() {
        this.app.set('port', this.port || config.PORT)
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(expressFileUpload());
    }

    routes() {
        this.app.use('/api/users', routes.user);
        this.app.use('/api/auth', routes.auth);
        this.app.use('/api/files', routes.files);
        this.app.use('/api/events', routes.events);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log("Server listening on port", this.app.get('port'))
    }

}