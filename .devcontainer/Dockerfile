FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN apt-get update -y && apt upgrade -y && apt-get install gh zsh curl lsd openssh-server -y

SHELL ["/bin/zsh", "-c"]