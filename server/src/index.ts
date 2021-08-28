import { config } from 'dotenv'
config();
import { App } from './App';
import './Db'

async function main() {
    const app = new App();
    await app.listen();
}

if (require.main === module) {
    main();
}