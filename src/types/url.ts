import { Schema } from "mongoose";

export interface IUrl {
  originalUrl: string;
  shortUrl: string;
  createdBy: string | Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  visitCount: number;
}

export interface ICreateUrl {
  originalUrl: string;

  createdBy: string | Schema.Types.ObjectId;
}

export interface IUpdateUrl {
  originalUrl: string;
  shortUrl: string;
}

export interface IGetUrl {
  shortUrl: string;
}
