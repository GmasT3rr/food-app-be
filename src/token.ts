import axios from 'axios';
import { Request, Response } from 'express';
import 'dotenv/config'; // Asegúrate de cargar las variables de entorno al inicio

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

if (!clientID || !clientSecret) {
  throw new Error('CLIENT_ID and CLIENT_SECRET must be defined in the environment variables.');
}

const options = {
  method: 'POST',
  url: 'https://oauth.fatsecret.com/connect/token',
  auth: {
    username: clientID,
    password: clientSecret,
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    scope: 'basic',
  }).toString(),
};

export const authToken = async (req: Request, res: Response) => {
  try {
    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching auth token:', error);
    res.status(500).send('Error fetching auth token');
  }
};
