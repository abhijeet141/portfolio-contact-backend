import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response} from 'express'
import validation from './middleware/validation';
import { Message } from './database/database';
import cors from 'cors'; 

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/message',validation,async(req: Request, res: Response)=>{
try
    {
    const {email,message} = req.body;
    const existingMessage = await Message.findOne({ email: email, message: message });
    if (existingMessage) {
        return res.status(400).json({
          message: 'Message has already been sent'
        });
    }

    const response = new Message({
        email: email,
        message: message
    })
    await response.save();
    res.json({
        message: 'Message sent sucessfully'
    })
}
    catch (error) {
        res.status(500).json({
          message: 'An error occurred while saving the message',
        });
      }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);  
})