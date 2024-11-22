import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/' , (req,res)=> {
    res.send('Hello World');
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
