// EASILY INSERT DATA TO DATABASE

import * as db from '../database/connectDb';
import Store from '../models/storeModel'
import fs from 'fs';
import path from 'path'

async function run() {
    try {
        const jsonData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
        const data = JSON.parse(jsonData)
        await db.connect();
        for (let i = 0; i < data.length; i++) {
            const storeData = data[i];
            await Store.create(storeData);
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('DONE');
        process.exit()
    }
}
run();
