import { Router } from "express";
import * as specificationsController from '../controllers/specification.controller';

const router: Router = Router();

router.get('/temperature',specificationsController.getTemperature);
router.get('/co-concentration',specificationsController.getCOConcentration);
router.get('/lpg-gas-Concentration',specificationsController.getLPGGasConcentration);
router.get('/',specificationsController.getAll);

export default router;