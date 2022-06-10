const db = require("../models")
const User = db.users

// Trouver un utilisateur
exports.findOneUser = (req, res, next) => {
    const userInfo = {}
    User.findOne({ where: { id: req.params.id }})
    .then(user => {
        userInfo.userName = user.userName
        userInfo.email = user.email
        if (user.isAdmin == false) {
          userInfo.role = "Utilisateur"
        } else {
          userInfo.role = "Administrateur"
        }
        userInfo.createdAt = user.createdAt
        userInfo.avatar = user.avatar
    })
    .then(() => {
        Comment.count({ where: { userId: req.params.id }})
        .then(cmtcount => { userInfo.commentsCount = cmtcount })
    })
    .then(() => {
        Message.count({ where: { userId: req.params.id }})
        .then(msgcount => { 
            userInfo.messagesCount = msgcount 
            res.status(200).json(userInfo)
        })
    })  
    .catch(error => res.status(404).json({ error }))
}
