import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '6m8515fq',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})


