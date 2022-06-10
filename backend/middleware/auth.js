const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Utilisateur non trouvé !";
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error : new Error("Requête non authentifiée !")});
    }
};