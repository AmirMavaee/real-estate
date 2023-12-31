const { hash, compare } = require("bcryptjs");

async function hashPassword(password){
    const result = await hash(password , 12);
    return result;
}

async function verifyPassword (password , hashPassword){
    const isValid = await compare(password , hashPassword);
    return isValid; 
}

export {hashPassword , verifyPassword};