import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.SERVER_API;

export const getFoods = async (req: Request, res: Response) => {
  try {
    const searchExpression = req.query.search_expression as string;
    const pageNumber = req.query.page_number as string;
    const maxResults = req.query.max_results as string;
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
        max_results: maxResults,
        page_number: Number(pageNumber),
        method: "foods.search",
        search_expression: searchExpression,
        format: "json",
      },
    });

    res.send(response.data.foods);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
