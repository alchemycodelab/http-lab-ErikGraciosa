const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('the classic true = true', () => {
        expect(true).toEqual(true)
    })
});
