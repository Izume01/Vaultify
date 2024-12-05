<p align="center">
    <img src="https://i.imgur.com/KmqOB0a.png" align="center" width="50%">
</p>
<p align="center"><h1 align="center">VAULTIFY</h1></p>
<p align="center">
    <em>Securely manage and store your sensitive information.</em>
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/Izume01/Vaultify?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
    <img src="https://img.shields.io/github/last-commit/Izume01/Vaultify?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/Izume01/Vaultify?style=default&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/Izume01/Vaultify?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
    <!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

##  Overview

Vaultify is a secure vault management system that allows users to store and manage sensitive information such as passwords, notes, and files. It provides encryption and decryption functionalities to ensure data security.

---

##  Features

- Securely store passwords, notes, and files.
- Encryption and decryption of sensitive data.
- User authentication and authorization.
- Responsive user interface.

---

##  Project Structure
```sh
Vaultify/
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
├── public/
│   ├── css/
│   │   ├── asfalt-light.png
│   │   ├── container.css
│   │   ├── index.css
│   │   ├── login.css
│   │   └── register.css
│   └── js/
│       ├── getVaultContainer.js
│       ├── overlay.js
│       └── vault.js
└── src/
    ├── app.js
    ├── config/
    │   ├── connectDB.js
    │   └── passport.js
    ├── controller/
    │   ├── managerController.js
    │   ├── userController.js
    │   ├── vault.js
    │   └── vaultControleller.js
    ├── middleware/
    │   └── authenticate.js
    ├── model/
    │   ├── password.js
    │   ├── User.js
    │   ├── vault.js
    │   └── vaultContainer.js
    ├── routes/
    │   ├── auth.js
    │   ├── manager.js
    │   ├── protected_routes.js
    │   ├── slug.js
    │   ├── vault.js
    │   ├── vaultContainer.js
    │   └── vaultGen.js
    ├── utils/
    │   ├── encryption.js
    │   ├── fileEncryption.js
    │   └── slugGenerate.js
    └── views/
        ├── container.ejs
        ├── index.ejs
        ├── login.ejs
        └── register.ejs 
```

###  Project Index
<details open>
    <summary><b><code>VAULTIFY/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
                <td>ESLint configuration file.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/package.json'>package.json</a></b></td>
                <td>Project dependencies and scripts.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- src Submodule -->
        <summary><b>src</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/app.js'>app.js</a></b></td>
                <td>Main application file.</td>
            </tr>
            </table>
            <details>
                <summary><b>model</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/model/vaultContainer.js'>vaultContainer.js</a></b></td>
                        <td>Vault container schema.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/model/password.js'>password.js</a></b></td>
                        <td>Password schema with encryption methods.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/model/vault.js'>vault.js</a></b></td>
                        <td>Vault schema.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/model/User.js'>User.js</a></b></td>
                        <td>User schema with password hashing.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>config</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/config/connectDB.js'>connectDB.js</a></b></td>
                        <td>Database connection configuration.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/config/passport.js'>passport.js</a></b></td>
                        <td>Passport.js configuration for authentication.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>views</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/views/register.ejs'>register.ejs</a></b></td>
                        <td>Registration page template.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/views/login.ejs'>login.ejs</a></b></td>
                        <td>Login page template.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/views/index.ejs'>index.ejs</a></b></td>
                        <td>Main page template.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>routes</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/routes/vaultContainer.js'>vaultContainer.js</a></b></td>
                        <td>Routes for vault container operations.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/routes/protected_routes.js'>protected_routes.js</a></b></td>
                        <td>Protected routes requiring authentication.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/routes/manager.js'>manager.js</a></b></td>
                        <td>Routes for manager operations.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/routes/auth.js'>auth.js</a></b></td>
                        <td>Authentication routes.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/routes/vault.js'>vault.js</a></b></td>
                        <td>Routes for vault operations.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>utils</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/utils/encryption.js'>encryption.js</a></b></td>
                        <td>Utility functions for encryption.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/utils/fileEncryption.js'>fileEncryption.js</a></b></td>
                        <td>Utility functions for file encryption.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>middleware</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/middleware/authenticate.js'>authenticate.js</a></b></td>
                        <td>Middleware for authentication.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>controller</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/controller/userController.js'>userController.js</a></b></td>
                        <td>Controller for user operations.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/controller/managerController.js'>managerController.js</a></b></td>
                        <td>Controller for manager operations.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/src/controller/vaultControleller.js'>vaultControleller.js</a></b></td>
                        <td>Controller for vault operations.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
    <details> <!-- public Submodule -->
        <summary><b>public</b></summary>
        <blockquote>
            <details>
                <summary><b>css</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/public/css/login.css'>login.css</a></b></td>
                        <td>Styles for login page.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/public/css/index.css'>index.css</a></b></td>
                        <td>Styles for main page.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/public/css/register.css'>register.css</a></b></td>
                        <td>Styles for registration page.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>js</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/public/js/getVaultContainer.js'>getVaultContainer.js</a></b></td>
                        <td>JavaScript for fetching vault containers.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/Izume01/Vaultify/blob/master/public/js/overlay.js'>overlay.js</a></b></td>
                        <td>JavaScript for overlay functionality.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---

##  Getting Started

###  Prerequisites

Before getting started with Vaultify, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

###  Installation

Install Vaultify using one of the following methods:

**Build from source:**

1. Clone the Vaultify repository:
```sh
❯ git clone https://github.com/Izume01/Vaultify
```

2. Navigate to the project directory:
```sh
❯ cd Vaultify
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

###  Usage
Run Vaultify using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

##  Project Roadmap

- [X] **`Basic UI`**: <strike>Design and implement a user-friendly interface.</strike>
- [X] **`Task Routes and Controller`**: Develop routes and controllers for task management.
- [X] **`Implement JWT - Cookies`**: Integrate JWT for secure authentication using cookies.
- [ ] **`Add, Update, Delete Passwords for Account`**: Enable CRUD operations for account passwords.
- [ ] **`Master Password`**: Implement a master password feature for enhanced security.
- [ ] **`Password Generator`**: Create a tool to generate strong passwords.
- [ ] **`Export / Import Password`**: Allow users to export and import passwords.
- [ ] **`Categorize Accounts`**: Provide functionality to categorize accounts.
- [ ] **`Search`**: Implement a search feature to quickly find accounts.
- [ ] **`Copy to Clipboard`**: Add a feature to copy passwords to the clipboard.
- [ ] **`Password Strength Indicator`**: Display the strength of passwords to users.

---
---
##  Contributing

- **💬 [Join the Discussions](https://github.com/Izume01/Vaultify/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Izume01/Vaultify/issues)**: Submit bugs found or log feature requests for the `Vaultify` project.
- **💡 [Submit Pull Requests](https://github.com/Izume01/Vaultify/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Izume01/Vaultify
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com/Izume01/Vaultify/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Izume01/Vaultify">
   </a>
</p>
</details>

---

