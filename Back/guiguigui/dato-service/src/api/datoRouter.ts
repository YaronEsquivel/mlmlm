import { Router } from 'express';
import { datoFacade } from '../facade';
import { logger } from '../config/logger/logger';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/:
 *  post:
 *    description: Get all Users
 *    tags: ["Users"]
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: Users
 */
router.get('/users', datoFacade.findAll);

/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  post:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', async (req, res) => {
    logger.info("(%s) - Request accepted: %s","datoRouter.ts",req);
    res.send('pong');
    logger.info("(%s) - Sending Response: %s","datoRouter.ts",{data:"pong"});
});

/**
 * @export {express.Router}
 */
export default router;