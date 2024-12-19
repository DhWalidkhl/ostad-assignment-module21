import UserModel from "../models/UserModel.js";
import {EncodeToken} from "../utilities/TokenUtilites.js";

export const Register = async (req, res) => {
    try{
        const reqBody = req.body;
        await UserModel.create(reqBody)
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const Login = async (req, res) => {
    try{
        const reqBody = req.body;
        const data = await UserModel.findOne(reqBody);
        if(data === null){
            return res.json({status: "fail", message: "User does not found"})
        }
        else {
            const token = EncodeToken(data.email, data._id)
            const cookieOpt = {expires: new Date(Date.now()+24*6060*1000), httpOnly: false}
            res.cookie('token', token, cookieOpt)
            return res.status(200).json({status: 'success', message: 'User Login Successful', token: token});
        }
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const SingleUserProfile = async (req, res) => {
    try{
        const user_id = req.headers['user_id'];
        const result = await UserModel.find({_id: user_id})
        return res.status(200).json({status: 'success', message: 'Single User Profile', data: result});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const AllUserProfile = async (req, res) => {
    try{
        const data = await UserModel.find()
        return res.status(200).json({status: 'success', message: 'All User Profile', data: data});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}

export const SingleUserProfileUpdate = async (req, res) => {
    try{
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        await UserModel.updateOne({_id: user_id}, {$set:reqBody}, {upsert: true})
        return res.status(200).json({status: 'success', message: 'User Profile Updated'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const DeleteSingleUser = async (req, res) => {
    try{
        const user_id = req.params.id
        await UserModel.deleteOne({_id: user_id})
        return res.status(200).json({status: 'success', message: 'User Deleted Successfully'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}