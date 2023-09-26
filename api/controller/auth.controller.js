import User from "../models/user.model";
import bcrypt from 'bcrypt'
export const register = async(req, res) =>{
    try {
        const {name, password, email, phone} = req.body;
        if(!name || !password ||!email || !phone){
            res.status(201).json('there is an invalid field, please make sure all files are fullfilled')
        }

    } catch (error) {
        
    }
}













export const login = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}
export const logout = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }  
}