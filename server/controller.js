


module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAll().then( response => {res.status(200).json( response )
        console.log(response)} )
        .catch( () => res.status(500).send());
    },
    
}