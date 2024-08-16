process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { datoService } from "../../src/services";
import { db } from '../../src/config/connection/database';
import dato from "../../src/models/dato.model";


describe('datoService Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    dato.create({
      id: 1,
      name: 'test',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    dato.create({
      id: 2,
      name: 'test2',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });

    //Para lanzar pruebas con kafka
    // let topics = [
    //   'pruebas',
    //   'test'
    // ];
    // try{
    //     await Kafka.init(topics);
    //     console.log('Connected to Kafka');

    // }catch(err){
    //     console.log('Error', err);
    // }
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const dato: any[] = await datoService.findAll();
      expect(2).equal(dato.length);
    });
  });

});