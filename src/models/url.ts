import mongoose, { Schema } from "mongoose";
import { IUrl } from "../types/url";

const shortUrlSchema: Schema = new Schema<IUrl>(
    {
        originalUrl: { type: String, required: true },
        shortUrl: { type: String, required: true },
        createdBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() },
        visitCount: { type: Number, default: 0 },
    },
    { timestamps: true }
).index({ shortURL: 1 });

const shortUrlModel = mongoose.model("ShortURL", shortUrlSchema, "shortenedURLs");
export { shortUrlModel };