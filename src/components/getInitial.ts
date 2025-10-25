import { Request, Response, NextFunction } from "express";

export const get200 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({ status: "success", data: "sa va dau la muie" });
  } catch (err) {
    next(err);
  }
};
