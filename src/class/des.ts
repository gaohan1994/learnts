const crypto = require('crypto');

export class Des {
  constructor(param) {
    const { key, iv, autoPad, alg } = param;
    this.alg = alg;
    this.key = new Buffer(key);
    this.iv = new Buffer(iv || 0);
    this.autoPad = autoPad;
  }

  doCrypto = (plainText) => {
    const cipher = crypto.createCipheriv(this.alg, this.key, this.iv);
    cipher.setAutoPadding(this.autoPad);
    let ciph = cipher.update(plainText, 'utf8', 'hex');
    ciph += cipher.final('hex');
    return ciph;
  }

  doDecrypt = (encryptText) => {
    const decipher = crypto.createDecipheriv(this.alg, this.key, this.iv);
    decipher.setAutoPadding(this.autoPad);
    let txt = decipher.update(encryptText, 'hex', 'utf8');
    txt += decipher.final('utf8');
    return txt;
  }
}