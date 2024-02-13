import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import mongoose, { ObjectId } from 'mongoose';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
      interface Request {
        user?: any; // Change 'any' to the type of your user object if possible
      }
    }
  }



export const generateToken = (_id: String, username: String, email: String, isAdmin: Boolean, profilePicture: String | undefined | null, myList: mongoose.Types.ObjectId[] | null | undefined) => {
    if (!process.env.JWT_PW) {
        throw new Error('MONGO_CONNECTION is not defined');
    }
    return jwt.sign({ _id: _id, username: username, email: email, isAdmin, profilePicture, myList }, process.env.JWT_PW, { expiresIn: '7d' })
}
export const sendMail = async (options: any) => {
    dotenv.config();
    if (process.env.EmailUserName && process.env.EmailPassword) {
        const user = process.env.EmailUserName.toString();
        const pass = process.env.EmailPassword.toString();
        const transport = nodemailer.createTransport({
            service: 'Gmail',
            secure: false,
            auth: {
                user: user,
                pass: pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mail = {
            from: user,
            to: options.email,
            subject: options.subject,
            text: options.message
        }
        transport.sendMail(mail, (error, info) => {
            if (error) {
                console.log(error.message)
            } else {
                console.log("success")
            }
        })
    }
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if (auth) {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];

            jwt.verify(token, process.env.JWT_PW as string, (err, decode) => {
                if (err) {
                    res.status(401).send({ message: err.message });
                } else {
                    // Assuming decode has the type you expect it to have
                    req.user = decode;
                    next();
                }
            });
        }
    } else {
        res.status(401).send({ message: "No token" });
    }
}

