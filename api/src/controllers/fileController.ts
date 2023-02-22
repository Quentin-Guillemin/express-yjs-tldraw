import { Request, Response } from "express";
import { unlinkSync } from "fs";
import { process } from "../utils/utils";

export const uploadFile = async (req: Request, res: Response) =>
  process(
    async (req: Request, res: Response) => {
      if (req.file) {
        return {
          id: req.body.id,
          uri: `/public/uploads/${req.file.filename}`,
        };
      } else throw new Error();
    },
    req,
    res
  );

export const deleteFile = (req: Request, res: Response) =>
  process(
    (req: Request, res: Response) =>
      unlinkSync(`public/uploads/${req.params.name}`),
    req,
    res
  );
