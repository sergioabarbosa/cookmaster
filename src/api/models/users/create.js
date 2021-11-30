// models/users/create.js
const { connection } = require('../connection');

const create = async ({ name, email, password }) => {
    const db = await connection();
    const result = await db.collection('users').insertOne({ name, email, password, role: 'user' });
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