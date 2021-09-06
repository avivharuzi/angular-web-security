import * as jsonwebtoken from 'jsonwebtoken';

export interface JWTOptions {
  secret: string;
  expiresIn: number;
}

export const signJWT = (
  subject: string,
  options: JWTOptions
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const { secret, expiresIn } = options;
    jsonwebtoken.sign(
      {},
      secret,
      {
        expiresIn: `${expiresIn}s`,
        subject,
      },
      (err, encoded) => {
        if (err) {
          reject(err);
        } else if (!encoded) {
          reject('Failed to sign jsonwebtoken.');
        } else {
          resolve(encoded);
        }
      }
    );
  });
};
