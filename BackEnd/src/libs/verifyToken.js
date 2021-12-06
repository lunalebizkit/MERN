const jwt= require('jsonwebtoken')
const SECRET = process.env.SECRET;
const verifyToken= (req, res, next)=>{
    let token= req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("No hay token!")
    }
    jwt.verify(token, SECRET, (err, decoded)=>{
        if (err) {
            return res.status(401).send("No esta Autorizado")
        }
        req.userId= decoded.id;
        next()
    });
}
module.exports= verifyToken