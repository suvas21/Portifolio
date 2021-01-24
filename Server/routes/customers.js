import express from 'express';

import {getCustomers} from '../controllers/customers.js';
import {createCustomers} from '../controllers/customers.js';

const router = express.Router();

router.get('/', getCustomers);
router.post('/', createCustomers);

export default router;