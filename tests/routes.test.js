const request = require('supertest');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/debugging');
const app = require('../app');
let server = '';

describe('GET /products/:name', ()=>{
    

    beforeEach(()=> { server = app.listen(3001)})
    afterEach(()=> { server.close() })
    // afterEach((done)=> { server.close(done) })  <-- this does not work also
    afterAll((done) => { 
       mongoose.disconnect();
    //  done();                    <--- does not work even when using await on mongoose  
    // mongoose.disconnect(done);  <--- does not work also
    })

    it('should return a 404 status', async ()=>{
        // debugger;
        const res = await request(server).get('/name');
        expect(res.status).toBe(404); 
        
    })

    // *** Ignore below **** 
    // it('simple test', async ()=>{
    //     number = 1
    //     await expect(number).toBe(1);
    //     // expect(res.status).toBe(200);
    // })
    // it(' "/" should return a 200 status', async ()=>{
    //     await request(server).get('/').expect(200);
    //     // expect(res.status).toBe(200);
    // })
    // it('should return 19', async ()=>{
    //     const res = await request(server).get('/');
    //     expect(res.text).toBe('19');
    //     // expect(res.status)s.toBe(200);
    // })
    
})