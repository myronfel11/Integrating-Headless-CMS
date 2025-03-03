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

8. I am now gonna delete the code i found to test out the listen method and the code to try fetching data in the products page.

9. I found a youtube video on how to fetch the api using javascript (https://www.youtube.com/watch?v=jPl34SsWgq4&t=870s) and it led me the right direction but i was caught with a different issue involving my link no having credentials for the api.

10. I ran the following to fix this issue
    a. Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted (ran this as administrator in powershell)
    b. Sanity Start (restart the server)
    c. sanity cors delete http://localhost:5173 (it kept showing this website didnt have credentials)
    d. sanity cors add http://localhost:5173 --credentials (this force gave it credentials)

11. now im getting a 400 bad request it looks like a syntax error to me, so to fix this the first step im gonna take is make my products.jsx page actually connect to my schema that i created a few days ago. My event types name is "event" so im gonna change the post to event along with some more changes to match the fields. and see if I still get a syntax error.

12. That worked so my next step is to try displaying the data onto the webpage. I grabbed the code from the sanity documentation that was meant for Nextjs and threw them into chat to convert them into react. for this step it wasnt as easy as just throw it into chat to convert. I used... <h2 className=" text-emerald-400">You are viewing {events.length} events</h2> to test out if it would break whenever i did something new. It would tell me an error occured if the events.length would stop showing 1. once I stopped getting errors I converted the page.tsx file from the sanity docs to work with my events.jsx file

13. I ran npm run deploy and it is now up and ready!

*HOW TO RUN*

1. npm run dev

2. click on Events in the navbar

3. the schema made in Sanity will pop up

