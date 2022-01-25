import express from 'express';
import mainRoute from './apiRoutes/apiIndex'


const app = express();
const port = 3000;

app.use('/api', mainRoute, express.static('thumbnails'));


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;

