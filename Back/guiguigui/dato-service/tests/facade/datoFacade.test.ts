process.env.NODE_ENV = 'test'

import { expect } from "chai";
import datoFacade from '../../src/facade/dato/facade';
import { db } from '../../src/config/connection/database';
import dato from "../../src/models/dato.model";


describe('datoFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        dato.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });

        //Para lanzar pruebas con kafka
        // let topics = [
        //     'pruebas',
        //     'test'
        // ];
        // try{
        //     await Kafka.init(topics);
        //     console.log('Connected to Kafka');

        // }catch(err){
        //     console.log('Error', err);
        // }
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const dato: any[] = await datoFacade.findAll();
            expect(1).equal(dato.length);
        });
    });
});