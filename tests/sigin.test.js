// import the signin
const mongoose = require('mongoose');
const request = require('supertest');
const {app} = require('../src/Signin');

// establish a connection to the database 
const {databaseConnector, databaseDisconnector} = require('../src/database');
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/SomeTestDatabase';

// set up before-tests and after-tests operations
beforeEach(async () => {
    await databaseConnector(DATABASE_URI);
});

afterEach(async () => {
    await databaseDisconnector();
});

// then we can write a tests 

describe('sigin page...', () => {

    it("shows a hello message", async () => {
        const response = await request(app).get('/api/auth/signIn');
        expect(response.statusCode).toEqual(200);
        expect(response.text).toEqual(expect.stringContaining("Hello"));
    });
});

describe('password and email...', () => {

        it("Entering email and password", async () => {
            const response = await (await request(app).post('//api/auth/signIn')).setEncoding({
              email: "user1@gmail.com",
              password: "test@123"
        });
        expect(response.statusCode).toEqual(200);
    });
})
