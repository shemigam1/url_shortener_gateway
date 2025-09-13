import { NextFunction, Request, Response } from "express";
import { ICreateUrl, IGetUrl, IUpdateUrl } from "../types/url";
// import { urlFactory } from "../services/factories";
// import { createProxyMiddleware } from "http-proxy-middleware";
import axios from "axios";
import { log } from "console";

const BASE_URL =
  process.env.BASE_URL || "https://url-shortener-c65r.onrender.com/api/v1/url";
// const proxyOptions = {
//   target: "",
//   changeOrigin: true,
// };

export const createShortUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(res.locals.user, "user");

  const input: ICreateUrl = {
    originalUrl: req.body.originalUrl,
    createdBy: res.locals.user._id || "dummy@mail.com",
  };

  // const data = await axios.post(`${BASE_URL}/`, input);
  // const response = data.data;
  // return res.status(response.code).json(response);
  const data = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  const response = data.json().then((data) => {
    return res.status(data.code).json(data);
  });
  // return res.status(response.code).json(response);
};

export const updateShortUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input: IUpdateUrl = {
    originalUrl: req.body.originalUrl,
    shortUrl: req.body.shortUrl,
  };
  const data = await axios.put(`${BASE_URL}/${input.shortUrl}`, input);
  const response = data.data;
  return res.status(response.code).json(response);
};

// export const deleteShortUrlController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const input: IGetUrl = {
//     shortUrl: req.body.shortUrl,
//   };
//   const data = await axios.put(`${BASE_URL}/${input.shortUrl}`, input);
//   const response = data.data;
//   return res.status(response.code).json(response);
// };

export const getShortUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input: IGetUrl = {
    shortUrl: req.body.shortUrl,
  };
  const data = await axios.get(`${BASE_URL}/${input.shortUrl}`);
  const response = data.data;
  return res.status(response.code).json(response);
};

export const getShortUrlCountController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input: IGetUrl = {
    shortUrl: req.body.shortUrl,
  };
  //   if (!redirect_target) return res.status(response.code).json(response);

  const data = await axios.get(`${BASE_URL}/analytics/${input.shortUrl}`);
  const response = data.data;
  return res.status(response.code).json(response);
};

export const getAllShortUrlsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await axios.get(`${BASE_URL}/`);
  const response = data.data;
  return res.status(response.code).json(response);
};
