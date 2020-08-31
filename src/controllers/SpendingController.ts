import {Request, Response} from 'express';
import { readFileSync } from 'fs';
import path from 'path';

export default class SpendingController {

    async index(request: Request, response: Response) {

        const spendings = JSON.parse(readFileSync(path.resolve('./spending.json'), 'utf-8'));

        return response.json(spendings);
    }

    async show(request: Request, response: Response) {

        const filters = request.query;

        const id = filters.id as any;

        if (!id) {
            return response.status(400).json({
                error: 'Missing id  to search '
            })
        }

        const spendItem:any = [];

        const dataFile = JSON.parse(readFileSync(path.resolve('./spending.json'), 'utf-8'));

        dataFile.map((data: any) => {
            if (data.spending_itens.length > 0)
                data.spending_itens.map((spend) => {spendItem.push(spend)})
        })

        const itemSpend = spendItem.filter((item) => { 
            return (item != undefined && item.id == id) ? item : false;
        })

        if (itemSpend[0] == undefined) {
            return response.status(400).json({
                error: 'Missing to search '
            })
        }

        return response.json(itemSpend[0]);
    }
}