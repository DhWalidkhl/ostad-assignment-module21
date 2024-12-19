export const Register = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const Login = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User Login Successful'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const SingleUserProfile = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const AllUserProfile = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}

export const SingleUserProfileUpdate = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}


export const DeleteSingleUser = async (req, res) => {
    try{
        return res.status(200).json({status: 'success', message: 'User registered'});
    }
    catch(err){
        res.json({status: 'fail', message: err.toString()})
    }
}