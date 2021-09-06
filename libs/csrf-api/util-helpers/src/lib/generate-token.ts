import * as crypto from 'crypto';

export const generateToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      resolve(buffer.toString('hex'));
    });
  });
};
