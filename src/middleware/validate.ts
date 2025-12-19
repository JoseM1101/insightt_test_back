import { Request, Response, NextFunction, RequestHandler } from "express"
import { z, ZodType } from "zod"

export const validate =
  <T>(schema: ZodType<T>): RequestHandler<any, any, T> =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.flattenError(result.error),
      })
    }

    req.body = result.data
    next()
  }
