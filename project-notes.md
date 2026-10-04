# My DevOps Project Learning Notes

## Day 1

### Objective
Prepare my development environment and
understand the project architecture.

### Concepts learned
- CI: Continuous Integration
- CD: Continuous Delivery or Deployment
- Git: Version control
- GitHub: Remote repository hosting

### Commands practised
- node -v
- npm -v
- git --version
- mkdir
- cd
- pwd
- ls
- touch

### Questions
1. What does CI do?
2. What does CD do?
3. Why do we use Git?
4. What is the purpose of GitHub?
5. What does each major component in my
   project architecture do?







   ## Day 2 — Linux and Terminal

### Concepts learned
- Terminal, shell and Linux
- Directory navigation
- File and directory operations
- Reading and searching files
- File permissions
- Bash scripting

### Commands practised
- pwd, ls, cd
- mkdir, touch, cp, mv, rm
- cat, less, grep, find
- chmod
- echo
- command -v
- git status

### Bash
Created a script to check whether Node.js,
npm and Git are installed.

### Questions
1. What is the difference between a terminal
   and a shell?
2. What does chmod 600 mean?
3. What is the difference between > and >>?
4. Why do we use Bash scripts?
5. How can grep help with troubleshooting?






## Day 3 — Git Fundamentals

### Concepts learned
- Working directory
- Staging area
- Local and remote repositories
- Git branches
- Commits and commit history
- Fast-forward merging
- Merge conflicts

### Commands practised
- git status
- git diff
- git diff --staged
- git log --oneline
- git show
- git switch
- git switch -c
- git merge
- git add
- git commit
- git push
- git branch

### Practice completed
- Created a feature branch.
- Made and committed changes.
- Merged a feature branch into main.
- Created and resolved a merge conflict.

### Questions
1. What is the staging area?
2. Why do we use feature branches?
3. What is a fast-forward merge?
4. What causes a merge conflict?
5. How do you inspect changes before committing?







## Day 5 — Bash Scripting and Automation

### What I learned

- Bash scripts automate repetitive commands.
- A shebang specifies which interpreter should execute a script.
- `chmod +x` gives a script execute permission.
- `$(command)` performs command substitution.
- `command -v` can check whether a command is available.
- Bash conditions can handle success and failure.
- Exit code 0 generally represents success.
- Non-zero exit codes generally represent failure.
- `exit 1` explicitly reports failure.
- CI/CD systems use exit codes to determine whether a step succeeded.
- `set -e` causes a Bash script to stop when a command fails.

### Project Script

Created:

`scripts/check-environment.sh`

The script checks whether Node.js, npm, Git, and Docker are installed.








## Day 6 — Node.js and Express API

### What I learned

- Node.js allows JavaScript to run outside the browser.
- Express is a Node.js framework used to build HTTP servers and APIs.
- `package.json` defines Node.js project metadata, dependencies, and scripts.
- `npm install` installs project dependencies.
- `node_modules` contains installed dependencies and should not be committed.
- `.gitignore` prevents files such as `node_modules` and `.env` from being committed.
- Environment variables can be accessed through `process.env`.
- The application uses port 3000 by default.
- Express middleware can process JSON request bodies.
- HTTP routes define how the API responds to requests.
- The `/health` endpoint can be used for deployment health checks.
- The API currently stores task data in memory.

### API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Application health check |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a specific task |
| POST | `/api/tasks` | Create a task |
| DELETE | `/api/tasks/:id` | Delete a task |








## Day 7 — Automated Testing

### What I learned

- Automated tests verify application behavior without manual testing.
- Unit tests test isolated pieces of functionality.
- API/integration tests verify multiple application components working together.
- Jest is used as the JavaScript testing framework.
- Supertest is used to send HTTP requests to the Express application.
- The Express application was separated from the server startup code.
- `module.exports = app` allows the application to be imported by tests.
- `describe()` groups related tests.
- `test()` defines an individual test.
- `expect()` defines an assertion.
- HTTP status codes can be tested automatically.
- API response bodies can also be tested.
- `npm test` runs the automated test suite.
- A successful test run returns exit code 0.
- A failed test run returns a non-zero exit code.
- CI/CD systems use these exit codes to determine whether a pipeline step passed or failed.

### Testing Command

```bash
npm test








## Day 8 — Test Coverage

### What I learned

- Code coverage measures how much application code is exercised by automated tests.
- Statement coverage measures executed statements.
- Branch coverage measures executed decision paths.
- Function coverage measures executed functions.
- Line coverage measures executed lines.
- High coverage does not automatically mean high-quality tests.
- Coverage helps identify untested code paths.
- Tests should ideally be isolated from one another.
- Generated coverage reports should not be committed to Git.
- Jest can generate HTML coverage reports.
- `npm run test:coverage` runs tests and generates coverage information.

### Coverage Command

```bash
npm run test:coverage




## Day 9 — CI Preparation

### What I learned

- CI environments should use reproducible dependency installation.
- `npm ci` is designed for clean dependency installation in CI environments.
- `package-lock.json` helps ensure consistent dependency versions.
- `node_modules` should not be committed to Git.
- Tests can be organized inside a dedicated `tests/` directory.
- Jest automatically discovers test files using test naming conventions.
- CI should stop when a required command fails.
- `set -e` makes a Bash script stop when a command fails.
- A local CI verification script can reproduce important CI steps before pushing code.

### Local CI Verification

Created:

`scripts/ci-check.sh`

The script performs:

1. Dependency installation with `npm ci`
2. Automated tests with `npm test`
3. Coverage generation with `npm run test:coverage`

### CI Principle

```text
Command succeeds → continue
Command fails → stop