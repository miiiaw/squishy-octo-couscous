import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: '6m8515fq',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})


