import express from 'express';
import routes from './api/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 1337;

routes(app);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
