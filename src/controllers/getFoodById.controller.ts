import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.SERVER_API;

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const foodId = req.params.id;
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send("No token provided");
    }

    const endpoint = `${URL}`;
    const response = await axios.post(endpoint, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        method: "food.get.v4",
        food_id: foodId,
        format: "json",
      },
    });

    res.send(response.data.food);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
