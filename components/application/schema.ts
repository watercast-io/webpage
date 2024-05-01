import { z } from "zod"

/**
 * 
    Lorena.claudette.gtz@gmail.com 
    Y7750651X
    R516151
    26/02/1989
 */

export const ApplicationSchema = z.object({
    email: z.string().email().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    nie: z.string().min(2, {
        message: "NIE must be at least 2 characters.",
    }),
    expediente: z.string().min(2, {
        message: "Expediente must be at least 2 characters.",
    }),
    fnacimiento: z.string().min(2, {
        message: "fecha nacimiento must be at least 2 characters.",
    }),
})