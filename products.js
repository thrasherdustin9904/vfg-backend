import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/products.js';

const router = Router();

router.get('/', getProducts);
router.post('/add', addProduct);

export default router;
