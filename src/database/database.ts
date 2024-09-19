import mongoose, {Schema} from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL!;
mongoose.connect(MONGO_URL);

interface IMessage{
    email: string,
    message: string
}

const messageSchema = new Schema<IMessage>({
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 30
    },
    message:{
        type: String,
        required: true,
    }
})

const Message = mongoose.model<IMessage>('Message',messageSchema);
export {Message};