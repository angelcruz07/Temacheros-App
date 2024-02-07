<h1> The War Mode Contributing Guide </h1>
<p>"Hello, we're excited that you're interested in contributing to the Temach community project. Before submitting your contribution, we recommend you read the following information to understand the organization and flow of the project."</p>

<h2> Repo SetUp </h2>
To begin, fork the repository and clone it to your local machine. The project utilizes npm as a package manager.

1. Run `npm install` in the root folder.
2. Execute `npm run dev` in the root folder.

<h2> WorkFlow </h2>

When committing and creating pull requests, please use English language.

When working with TypeScript, we follow the practice of using interfaces.

Not familiar with the topic? Check out [**Typescript-React**](https://www.youtube.com/watch?v=dNxaP_BTtwQ&list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M)

We adhere to the First Mobile methodology of tailwind.

Join our workspace on Trello [**Trello Temacheros**](https://trello.com/invite/b/Zt11UGbX/ATTIcbf09ae974c91e2069e23933d0fc863b066377E5/temacheros-web)

Directory names should be as descriptive as possible following programming best practices.

## Structure

```
src/
    app/
        (home) - Root of the project
        (ETC) - Project-related folders
    componets/ui/
            index.tsx
            description-name/
                name-componet/
                    yourcomponents.tsx

    interfaces/
        yourinterface.inteface.ts
        index.ts
```

In the 'components' directory, you must follow a couple of strict rules for the UI implementation. Within this directory, you should create folders with descriptive names related to your project, where you will include all your components. Similarly, ensure that each of your components has a descriptive name.

<h3 align="center">Happy coding</h3>
