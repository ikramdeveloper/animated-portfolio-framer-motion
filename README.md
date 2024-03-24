# Animated Portfolio

Introducing "Animated Portfolio" – Your Gateway to Dynamic Personal Branding!

Elevate your online presence with the power of motion! 🚀 Unleash the potential of your personal portfolio website with the Animated Portfolio, crafted with Next.js, TypeScript, and Framer Motion. Experience the perfect blend of seamless animations and cutting-edge technology to showcase your skills, projects, and achievements in a truly captivating way.

## Key Features:

✨ Next.js: Harness the efficiency of React with Next.js for a performant and SEO-friendly portfolio.

🚀 TypeScript: Elevate your coding game with the power of TypeScript, ensuring a robust and scalable foundation for your portfolio.

🎬 Framer Motion: Infuse life into your website with stunning animations, adding a layer of creativity to every scroll and click.

## Getting Started:

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd [folder-name]`
3. Install dependencies: `npm install`
4. Set up the required environment variables. Create a .env file in the root directory and add the necessary variables. You can use the .env.example file as a template.
5. Run the project: `npm run dev`

## Project Structure:

- `src/pages`: Contains the Next.js pages for different routes.
- `src/styles`: Contains the css files.

## Technologies Used

This project makes use of the following technologies:

- **Next.js**: A React framework for building web applications.
- **Typescript**: Superset of JavaScript to enhance readability.
- **Framer Motion**: Popular animation library for React applications.
- **Tailwind CSS**: Utility-first CSS framework.
- **EmailJS**: A JavaScript package for sending emails from web

## Husky Setup

This project is already bootstrapped with husky. However here are the details how you can setup husky in your project:

- Go to [husky getting-started guide](https://typicode.github.io/husky/getting-started.html) and install & setup husky

- Add the following code in package.json scripts section to check lint & type errors:

```bash
    "check-types": "tsc --noemit",
    "lint": "eslint --fix . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "pre-commit": "npm run lint && npm run check-types"
```

- Now change the pre-commit code in .husky folder to:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run pre-commit
```

- - Here pre-commit command would be executed before commit and if there is any error, your commit would be aborted.

## Contributing:

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License:

This project is licensed under the [MIT License](LICENSE.md).

## Author Links

👋 Hello, I'm Ikram Ul Haq - Web Developer & Programmer

☕ [Buy Me A Coffee](https://www.buymeacoffee.com/ikramdeveloper)

🚀 Follow Me:

- [Twitter](https://twitter.com/ikramdeveloper)
- [LinkedIn](https://www.linkedin.com/in/ikramdeveloper/)
- [StackOverflow](https://stackoverflow.com/users/13859212/ikram-ul-haq)
