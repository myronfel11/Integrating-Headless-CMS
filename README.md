Steps I took and my thought process to set up and integrate the headless CMS into my web app

1. I  went on Sanity.io and I completed the following actions:
    a. Ran this in the terminal "npm create sanity@latest -- --project 8m69terj --dataset production --template clean --typescript --output-path studio-integrating-a-headless--cmds
cd studio-integrating-a-headless--cmds"
    b. Ran this in the terminal right after "npm run dev"
    c. Opened "http://localhost:3333"
2. add a page for the backend (this case it's products)
3. went on the project and clicked API > + Add API token > Contributor > copied api token link > placing it here for now until I figure out how to do an API request.
    skAhSD9osd9iO0TgMYY95Fd2tBqdYJEVpTNPTWfP3T9lk7rTJqfvpELhAv8M7OgQ3fRY5oTjkov3NJmMueT77KVZsfVwPrIXzoGmwhKU0jsQ9eZSGZP5xOpkG1zyBF03og8bKr4SptcrIaY7hjFlsWur2i2i6zVNBTcvN4s99ptvR6XDqCye

4. followed along the "getting started" on sanity to learn how to  create schema
5. ran npm install @sanity/client in the responsive-nav-bar directory
6. created a file called sanityClient.js in the src folder
7. Im using Vite and the sanity documentation is for Next. If I was using Nextjs, I would import defineLive from "next-sanity" and continue with the documentation. Instead I tried doing a workaround to get the real-time update to work for Vitejs but I just couldnt get it working. I ended up doing the following steps.
    a. ran npm install @sanity/eventsource
    b. used Sanity's listen method
(I think I will come back to this later because I have been stuck here for awhile.)

8.