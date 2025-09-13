import bcrypt, { genSalt, hash, compare } from 'bcrypt'
import { shortUrlModel } from '../models/url';
import { createHash } from 'crypto';

const saltRounds = 10;
export const hashPassword = async (password: string) => {
    const hashed = await bcrypt.hash(password, saltRounds)

    // console.log('hash: ', hash)
    if (!hashed) return
    return hashed
}

export const comparePassword = (userPassword: string, password: string) => {
    const match = bcrypt.compareSync(password, userPassword)
    // console.log(`userPassword......${userPassword}`);
    // console.log(`password......${password}`);

    // if (!match) throw new Error('something went wrong')
    return match
}

const charSet = "0123456789abcdefghijklmnopqrstuvwxyz";
const shortUrlLength = 6;

/**
 * @description: Hash available -> 36 ^ 6 = 2.176.782.336
 */
// export const generateShortHash = async () => {
//     let shortURL = "";
//     let offset = await shortUrlModel.countDocuments();
//     while (offset > 0) {
//         shortURL = charSet[offset % charSet.length] + shortURL;
//         offset = Math.floor(offset / charSet.length);
//     }

//     if (shortURL.length < shortUrlLength) {
//         return shortURL.padStart(shortUrlLength, charSet[0]);
//     }
//     return shortURL;
// };



export const generateShortHash = (): string => {
    try {
        // Generate a unique string using high-resolution timestamp and random values
        const uniqueString = `${process.hrtime().join('-')}-${Math.random()}-${Date.now()}`;
        
        // Generate SHA-256 hash
        const hash = createHash('sha256')
            .update(uniqueString)
            .digest('hex');

        // If you want to implement collision detection later, you'll need to:
        // 1. Make this function async: `export const generateShortHash = async (): Promise<string> => {`
        // 2. Uncomment and properly handle the database check
        // 3. Add proper error handling for the database operation
        
        // Return first 6 characters of the hash
        return hash.substring(0, 6);
        
    } catch (error) {
        // Fallback using simple timestamp and random value
        const fallbackString = `${Date.now()}-${Math.random()}`;
        const hash = createHash('sha256')
            .update(fallbackString)
            .digest('hex');
        
        return hash.substring(0, 6);
    }
};
