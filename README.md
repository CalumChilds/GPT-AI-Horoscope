# UoS Computing Society Horoscope

It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

## Setup
**Note: Where it says s123456 in these instructions, rename index.js to index-s(your student number).js** This will make it a lot easier for us to accept your pull requests!

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Click the Fork button on the top-right hand corner of this page. This will create a version of this repository on your GitHub account.
3. Install GitHub Desktop or Git if you haven't already. [Instructions on how to install GitHub Desktop can be found here.](https://github.com/CalumChilds/GPT-AI-Horoscope/wiki/Installing-GitHub-Desktop-&-Git).
4. Navigate into the project directory using the Node.js command prompt program.

   ```bash
   $ cd GPT-AI-Horoscope
   ```

5. Install the requirements

   ```bash
   $ npm install
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) in index-s123456.js (located inside the pages folder), where it says `"{YOUR_OPEN_AI_API_KEY}"`.

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at localhost:3000/index-s123456.
