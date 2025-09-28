// utils/jwt.util.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // obavezno koristi .env u produkciji
const JWT_EXPIRES_IN = "7d"; // koliko dugo token važi

type JwtPayload = {
  id: string;
  role: string;
};

export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
