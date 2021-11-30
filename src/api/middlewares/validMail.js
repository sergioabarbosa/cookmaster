const errUserNoNameOrEmailOrPassword = {
  code: 400, 
  message: 'Invalid entries. Try again.',
};
const validMail = async (name, email, password) => {
  // const mailFormat = /^\w+@\w+\.\w+(\.\w{2})?$/gm;
  // const errUserNoNameOrEmailOrPassword = { 
  //   code: 400,
  //   message: 'Invalid entries. Try again.',
  // };
  
  // if (!name || !email || !password) {
  //   return {
  //     err: errUserNoNameOrEmailOrPassword,
  //   };
  // }
  // if (!mailFormat.test(email)) {
  //   return {
  //     err: errUserNoNameOrEmailOrPassword,
  //   };
  // }
  const mailFormat = /^\w+@\w+\.\w+(\.\w{2})?$/gm;
  
  if (!name || !email || !password) return { err: errUserNoNameOrEmailOrPassword };
  if (!mailFormat.test(email)) return { err: errUserNoNameOrEmailOrPassword };
  return false;
};

module.exports = {
   validMail, 
};