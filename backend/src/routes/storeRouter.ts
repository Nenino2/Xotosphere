import ExpressPromiseRouter from 'express-promise-router';
import { getAllStores, getStore, postStore } from '../controllers/storeController';

const router = ExpressPromiseRouter();

router.route('/').get(getAllStores).post(postStore)

router.route('/:id').get(getStore)

export default router;
