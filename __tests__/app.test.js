const request = require('supertest');
const app = require('../lib/app');



describe('server routes', () => {
    it('GET at "/" returns "hi" ', async() => {
        const response = await request(app)
            .get('/');
        expect(response.text).toEqual('hi');
    });

    it('confirm GET at "/red" returns body of repsonse ', async() => {
        const response = await request(app)
            .get('/red');
        expect(response.text).toEqual('<h1>red<h1>');
    });

    it('confirm GET at "/green" returns body of repsonse ', async() => {
        const response = await request(app)
            .get('/green');
        expect(response.text).toEqual('<h1>green<h1>');
    });

    it('confirm GET at "/blue" returns body of repsonse ', async() => {
        const response = await request(app)
            .get('/blue');
        expect(response.text).toEqual('<h1>blue<h1>');
    });

});
