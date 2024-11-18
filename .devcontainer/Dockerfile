FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN apt update && apt upgrade &&\
  apt-get git github-cli openssh zsh curl &&\
  npm i -g pnpm

SHELL ["/bin/zsh", "-c"]