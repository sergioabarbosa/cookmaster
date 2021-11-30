const validMail = async (name, email, password) => {
  const mailFormat = /^\w+@\w+\.\w+(\.\w{2})?$/gm;
  const errUserNoNameOrEmailOrPassword = { 
    message: 'Invalid entries. Try again.',
  };
  
  if (!name || !email || !password) {
    return {
      err: errUserNoNameOrEmailOrPassword,
    };
  }
  if (!mailFormat.test(email)) {
    return {
      err: errUserNoNameOrEmailOrPassword,
    };
  }
};

module.exports = {
   validMail, 
};