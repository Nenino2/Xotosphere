import { RequestHandler } from 'express';
import Store from '../models/storeModel';

export const getAllStores: RequestHandler = async (req, res) => {
    const stores = await Store.find()

    res.json({ data: stores })
}

export const getStore: RequestHandler = async (req, res) => {
    const id = req.params.id;

    const store = await Store.findById(id);

    res.json({ data: store })
}

export const postStore: RequestHandler = async (req, res) => {
    const storeData = req.body;

    const store = await Store.create(storeData)

    res.json({ data: store })
}