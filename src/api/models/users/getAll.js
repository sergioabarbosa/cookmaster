// // models/users/getAll.js

// const connection = require('../connection');

// // Busca todos os users do banco.
// const getAll = async () => connection()
//       .then((db) => db.collection('users').find().toArray())
//           .then((users) =>
//           users.map(({ _id, name, email }) =>
//               getNewUser({
//                   name,
//                   email,
//                   id: _id,
//               })));

// module.exports = {
//     getAll,
// };