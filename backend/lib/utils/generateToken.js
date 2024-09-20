import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevent xss attacks cross-site request forgey attacks
    sameSite: "strict", // CSRF attacks a cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
