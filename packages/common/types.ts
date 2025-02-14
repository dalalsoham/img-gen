import {z} from "zod";

const TrainModel = z.object({
    name: z.string(),
    type: z.enum(["Man", "Woman", "Other"]),
    age: z.number(),
    ethinicity: z.enum(["Asian", "Black", "Hispanic", "Middle Eastern", "Native American", "Pacific Islander", "White", "Indian", "Other"]),
    eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray", "Black"]),
    bald: z.boolean(),
    images: z.array(z.string())
})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number()
})

export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string()
})