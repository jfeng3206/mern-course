import User  from "../models/userModel.js";
import { StatusCodes } from 'http-status-codes';
import { hashPassword, comparePassword  } from "../utils/passwordUtils.js";
import { UnauthenticatedError,  } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAcount = await User.countDocuments()===0
  req.body.role = isFirstAcount ? 'admin':'user';
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user });
};

export const login =async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  const isValidUser = user && (await comparePassword(req.body.password, user.password));
  if(!isValidUser) throw new UnauthenticatedError('invalid credentials');
  const token = createJWT({userId: user._id, role: user.role});

  // This line defines a constant oneDay that represents the number of milliseconds in a day. 
  // This value is used later to set the expiration time for the cookie.
  const oneDay = 1000 * 60 * 60 * 24;
  //This line sets a cookie with the name "token" and a value of token, which is the JWT that was generated for the user. 
  // The ... represents an object containing additional options for the cookie.
  res.cookie('token', token, {
    //This option makes the cookie inaccessible to JavaScript running in the browser. 
    // This helps to prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.
    httpOnly: true,

    //expires: new Date(Date.now() + oneDay): This option sets the expiration time for the cookie. 
    // In this case, the cookie will expire one day from the current time (as represented by Date.now() + oneDay).
    expires: new Date(Date.now() + oneDay),

    //secure: process.env.NODE_ENV === 'production': This option determines whether the cookie should be marked as secure or not. 
    // If the NODE_ENV environment variable is set to "production", then the cookie is marked as secure, which means it can only be transmitted over HTTPS. 
    // This helps to prevent man-in-the-middle (MITM) attacks, which can intercept and modify cookies that are transmitted over unsecured connections.
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.CREATED).json({ msg: 'user logged in' });
  };

  export const logout = (req, res) => {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
  };

