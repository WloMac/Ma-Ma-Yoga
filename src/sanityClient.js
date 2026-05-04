import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: "dxd7frf0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
})