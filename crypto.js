const CryptoJS = require('crypto-js');

const encrypt = (secretKey, data) => {
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();

    return ciphertext // .toString('hex')
};

const decrypt = (secretKey, ciphertext) => {
    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData
};

module.exports = {
    encrypt,
    decrypt
};