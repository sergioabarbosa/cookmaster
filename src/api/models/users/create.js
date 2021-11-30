// models/users/create.js
const { connection } = require('../connection');

const create = async ({ name, email, password }) => {
    const result = await connection()
        .then((db) => db.collection('users').insertOne({ name, email, password }));
        return { 
            name, 
            email,
            role: 'user',
            _id: result.insertedId, 
         };
};

module.exports = {
    create,
}; 