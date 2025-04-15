import { createClient } from "next-sanity";


const client = createClient({
    projectId: "4p2o6wj8",
    dataset: "production",
    apiVersion: "2025-01-14",
    useCdn: true,
})

export async function sanityFetch({query, params = {}}:{query: string, params?: {[key: string]: string}}) {
    return await client.fetch(query, params)
}