import {z, defineCollection} from "astro:content"

const projectsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            categories: z.array(z.string()),
            year: z.string(),
            featured: z.boolean().default(false),
            logo: image(),
            title: z.string(),
            type: z.string(),
            company: z.string(),
        }),
})

export const collections = {
    projects: projectsCollection,
}
