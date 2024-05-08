# 🌍 Our Club Website - ![CodeQL](https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite/workflows/CodeQL/badge.svg) ![Vercel](https://img.shields.io/github/deployments/Skyline-College-Computer-Science-Club/project.ClubWebsite/production?&logo=vercel&label=Vercel%20Deployment)

> Preview media are outdated as of 12/05/2023.
>
> <img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/site_preview2.gif" width=400></img> > <img src="https://media.discordapp.net/attachments/1147427497290506332/1155458898183061595/Image_9-24-23_at_4.00_AM.jpeg" width=400></img>

An informational website about us, the Computer Science Club @ Skyline College.

### 🔗 Check it out over at https://skycsc.vercel.app.

Will serve stuff like showcases for our projects, social media links & connections, Discord + GitHub integrations, a photo album?, a _blog_?, resources and intern opportunities, and whatever else our club would want to show to the world.

## 🔰 Quick Setup / Getting Started

1. Clone this repository locally to your computer using Git.

-   You can do so by clicking the green `<> Code` button above, copying the URI, then using the `git clone <URI>` command in any terminal.

2. Open the cloned folder in an IDE of your choice, then open a command-line shell and CD into the directory of said folder.

-   If using an external, standalone command-line shell, use the `cd` command like so: `cd "Documents\My Projects\project.ClubWebsite-main"`
-   **If you use VSCode**: after opening the folder, open a new VSCode Terminal; it will automatically navigate itself to the currently open directory. (see below)

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/open_folder_and_terminal.gif" width=600></img>

3. For this project, you only need to download one installer/program: **[📘Node.js](https://nodejs.org/en)**

4. After installing Node.js, run the following command in the directory of the downloaded project to install our project's required dependencies, which includes React and the Next.js frameworks:

```
npm install
```

-   If you want, we recommend installing the [yarn](https://classic.yarnpkg.com/en/docs/getting-started) package installer as well via `npm install --global yarn`!

-   After installation, you should now see a new folder `node_modules` with said dependancies.

5. Now that we have all our required libaries, you can now test-run and host the website on your local computer using:

```bash
npm run dev
# or
yarn dev
```

Steps 4 & 5 can be seen here:

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/npm_install_and_run.gif" width=740></img>

-   With it running, open http://localhost:3000 in any browser to see your locally hosted website.

-   You can start by editing the home page's components; modifying the files under `src/components`. The page auto-updates every time you save the file.

After this initial setup, you will only need to re-run Step 5) to continue editing the project in the future.

## 📚 Important Resources and Documentation

Our project uses [**Node.js**](https://nodejs.org/en), the JavaScript runtime engine that powers the logic of our website.

Our project uses [**React.js**](https://react.dev), our website's core HTML/TypeScript-orientated structuring framework.

Our project uses [**Tailwind CSS**](https://tailwindcss.com), our website's core CSS styling library.

Our project uses [**Framer Motion**](https://www.framer.com/motion/), a comprehensive, production-ready animation library for React.

Our project uses [**Vercel**](https://vercel.com/), a frontend Cloud service that provides the infrastructure to host, build, scale, and secure our well-maintained website.

🧠 To specifically **learn more** about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## ⚙️ Important Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
