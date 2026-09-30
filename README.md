# Production CI/CD Pipeline

## Project Overview

A production-style CI/CD pipeline for a Node.js
Notes API with automated testing, code quality
checks, container security scanning and deployment
to AWS EC2.

## Technologies

- Node.js
- Express
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub
- SonarQube
- Trivy
- AWS EC2
- Nginx
- Linux
- Bash

## Project Goals

1. Automate application testing.
2. Integrate code quality checks.
3. Scan Docker images for vulnerabilities.
4. Publish validated images to Docker Hub.
5. Deploy the application to AWS EC2.
6. Verify deployments and implement rollback.


## Git Workflow

This project uses Git for version control.

- `main` contains the stable project history.
- Feature branches are used for individual changes.
- Changes are reviewed before being merged.
- GitHub stores the remote repository.


## Development Workflow

1. Create a feature branch.
2. Make the required code changes.
3. Run tests locally.
4. Push the feature branch.
5. Open a pull request.
6. Review and merge the changes.



## GitHub Pull Request Workflow

This project follows a feature-branch workflow.

1. Create a feature branch from main.
2. Make changes locally.
3. Commit the changes.
4. Push the feature branch to GitHub.
5. Create a Pull Request.
6. Review the changes.
7. Merge the Pull Request into main.


