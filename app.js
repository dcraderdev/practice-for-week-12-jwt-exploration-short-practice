// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
const jwt = require('jsonwebtoken');
// Your code here
const wrongSecret = 'b3d30d0a6d4895755d0f8252b03f796bcf63d72a265b7d0e1e9206378f8995c6bbbd0d989e9c9f9dde2c8911bb81bfb4dfbf078fe961c678149f01c638e08c0b'

const crypto = require('crypto');
// const secret = crypto.randomBytes(64).toString('hex');
// console.log(secret);


// Define variables - DO NOT MODIFY
let token;
let payload;

// 1. Sign (create) a JWT containing your email address
token = jwt.sign( 
  { email: "johnny@gmail.com" }, // payload object
  process.env.SECRET_KEY,        // secret token from .env file
  { expiresIn: '1h' }            // options (example: Token expires in 1 hour)
);

// Your code here

// See the JWT in the console
console.log('JWT:', token);

// 2. Decode a JWT Payload

// Your code here
payload = jwt.decode(token); 
// returns the decoded payload: {"email":"johnny@gmail.com"}

// See the decoded payload in the console
console.log('Payload:', payload);

// 3. Verify a JWT


// // Your code here

// payload = jwt.verify(token, process.env.SECRET_KEY);
// payload = jwt.verify(token, wrongSecret);

// if the secret is verified, the payload is decoded and returned
// if the secret is not valid, a JsonWebTokenError is thrown
// if the token is expired, a TokenExpiredError is thrown



// See the verified payload in the console
console.log('Verified Payload:', payload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here
try {
// payload = jwt.verify(token, wrongSecret);
payload = jwt.verify(token, process.env.SECRET_KEY);

} catch (error) {
  throw new Error('HACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \nHACKER ALERT - HACKER ALERT \n')

}



// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here