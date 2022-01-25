import supertest from 'supertest';
import app from '../index';
import resizeImage from '../resizeImage';
const path = require('path');


const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the main api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }
)});

describe('Test Image Specs', () => {
    it('checks if resizes properly', async () => {
        const result = await resizeImage('fjord', 150, 100, 'fjord_150_100.jpg');
        expect(result).not.toBe(path.resolve('inputFolder/thumbnails/' +'fjord_150_100.jpg'));
    }
)});