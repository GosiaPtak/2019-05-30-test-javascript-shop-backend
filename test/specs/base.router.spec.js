const express = require('express');
const supertest = require('supertest');
const { assert } = require('chai');
const router = require('../../src/api/routers/base.router');

suite ('base router', ()=>{
    test('should respons on GET /', async()=>{
        const app = express();
        router(app);
        const response = await supertest(app).get('/');
        assert.equal(response.text,'ok');

    });

    test('should respons on GET /products',async()=>{
        const app = express();
        const response = await supertest(app).get('/products');
        assert.isTrue(JSON.parse((response.text).length)>0);
        //assert.
    });
})