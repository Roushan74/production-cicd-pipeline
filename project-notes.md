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