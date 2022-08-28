const request = require( 'supertest' );
const server = require( '../server.js' );

let loginToken;

beforeEach(async () => {
    const loginUrl = '/api/auth/login';
    await request( server ).post( loginUrl ).send({
        username: 'test',
        password: 'test',
    }).then(res => {
        loginToken = res.body.token;
    });
});

describe( 'Unit testing lessons route', () => {
    const url = '/api/lessons';

    describe( 'can get all lessons', () => {
        it( 'should return an OK status code and a json type', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
        });
    });

    describe( 'can get a lesson by id', () => {
        it( 'should return an OK status code and a json type', async () => {
            const response = await request( server ).get( `${url}/1` ).set( 'Authorization', `${loginToken}` );
            expect( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body ).toHaveProperty( 'id', 1 );
        });
    });

});