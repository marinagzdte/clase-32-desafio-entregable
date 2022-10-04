import { Router } from 'express';
import os from 'os';
import logger from '../utils/logger.js';

const infoRouter = new Router();

infoRouter.get('/info', (req, res) => {
    logger.info(`Ruta ${req.path} metodo ${req.method}`);

    const info = {
        os: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage().rss,
        directory: process.cwd(),
        pid: process.pid,
        path: process.execPath,
        args: process.argv,
        cpus: os.cpus().length
    };
    res.render('info', info);
})

export default infoRouter;