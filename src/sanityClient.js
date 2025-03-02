import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '8m69terj',  
  dataset: 'production',               
  apiVersion: "2024-11-01",
  useCdn: false,
  token: "skAhSD9osd9iO0TgMYY95Fd2tBqdYJEVpTNPTWfP3T9lk7rTJqfvpELhAv8M7OgQ3fRY5oTjkov3NJmMueT77KVZsfVwPrIXzoGmwhKU0jsQ9eZSGZP5xOpkG1zyBF03og8bKr4SptcrIaY7hjFlsWur2i2i6zVNBTcvN4s99ptvR6XDqCye" 
});

export default client;