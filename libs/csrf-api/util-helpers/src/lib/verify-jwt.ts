import * as jsonwebtoken from 'jsonwebtoken';

export const verifyJWT = <T extends object>(
  token: string,
  secret: string
): Promise<T> => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else if (!decoded) {
        reject('Failed to get jsonwebtoken decoded content.');
      } else {
        resolve(decoded as T);
      }
    });
  });
};
