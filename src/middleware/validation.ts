import {z} from 'zod';
import { Request, Response, NextFunction } from 'express'


const schema = z.object({
    email: z.string().email({message:"Invalid Email fromat"}),
    message: z.string().max(500)
})

async function validation(req: Request,res: Response,next: NextFunction) {
    const message = req.body;
    const response = schema.safeParse(message);
    if(!response.success){
        res.status(400).json({
            message: "Input is invalid"
        })
        return;
    }
    else{
        next();
    }
}

export default validation;