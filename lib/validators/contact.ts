import {z} from 'zod'

export const contactValidator = z.object({
    name: z.string(),
    duration: z.number(),
    relation: z.string()
})

export type ContactCreationRequest = z.infer<typeof contactValidator>