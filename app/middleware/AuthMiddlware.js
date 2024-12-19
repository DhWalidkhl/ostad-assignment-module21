import {DecodeToken} from "../utilities/TokenUtilites.js";

export default (req, res, next)=>{
    let token = req.headers['token'];
    if(!token){
        token = req.cookies['token'];
    }
    const decoded = DecodeToken(token)
    if (decoded === null){
        return res.status(401).send({status: 'fail', message: 'Unauthorized'})
    }
    else {
        const email = decoded.email;
        const user_id = decoded.user_id;

        req.headers.email = email;
        req.headers.user_id = user_id;

        next()
    }
}