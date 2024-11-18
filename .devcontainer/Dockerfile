FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN apt update -y && apt upgrade -y &&\
  apt-get git github-cli openssh zsh curl -y &&\
  npm i -g pnpm -y

SHELL ["/bin/zsh", "-c"]