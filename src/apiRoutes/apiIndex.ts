import express from 'express';
import images from './subRoutes/images';


const mainroute = express.Router();

mainroute.get('/', (req, res) => {
    res.send('This is the main Endpoint...');
});

mainroute.use('/images', images);


export default mainroute;