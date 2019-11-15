module.exports = {
    getUsers(req, res) {
        const db = req.app.get('db');
        db.get_users()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    getPosts(req, res) {
        const db = req.app.get('db');
        db.get_posts()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    addUser(req, res) {
        const db = req.app.get('db')
        db.add_user(req.body)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    addPost(req, res) {
        const db = req.app.get('db')
        db.add_post(req.body)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    }
}