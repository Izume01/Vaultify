/* eslint-disable no-undef */
import { Strategy , ExtractJwt } from "passport-jwt";
import dotenv from 'dotenv'
import User from "../model/User.js";

dotenv.config(); 

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey  : process.env.SECRET
}

const configPasport = (passport) => {
    passport.use(new Strategy(options , async(payload , done) => {
        try {
            const user= await User.findOne(passport.id); 
            if(user) {
                return done(null , user);
            }
            return done(null , false);
        } catch (error) {
            console.log(error);
        }
    }))
}

export default configPasport;

