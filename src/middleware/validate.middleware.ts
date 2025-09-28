import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validate =
  (schema: ZodTypeAny, property: "body" | "query" | "params" = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.format(),
      });
    }

    // zamijeni originalni property validiranim podacima (tip-safe)
    (req as any)[property] = result.data;
    next();
  };
