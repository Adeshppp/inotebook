const jwt = require("jsonwebtoken")
const JWT_SECRET = "I.am*a&cOOL@DudE";


// takes request, respinse and next
//at the end of this function we will call next which is callback function in auth.js /getuser
const fetchUser = (req, res, next) =>{

    // Get the user from the jwt token and add id to request object
    const token= req.header("auth-token");// taking token from header

    // checking if token is present or not
    if(!token) res.status(401).send({error:"Please authenticate with valid token"});

    // checking whther token is valid or not
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } 
    // if token is not valid
    catch (error) {
        res.status(401).send({error:"Please authenticate with valid token"});
    }
}


module.exports = fetchUser;

