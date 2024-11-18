FROM node:20-alpine

WORKDIR /app

RUN apk update && \
  apk add git && \
  apk add github-cli && \
  apk add openssh && \
  apk add zsh && \
  apk add curl && \
  npm i -g pnpm

SHELL ["/bin/zsh", "-c"]

# Clone dotconf repository and update zshrc
RUN git clone https://github.com/alifprihantoro/dotconf ~/.dotconf && echo 'source ~/.dotconf/zshrc' >> ~/.zshrc

# Copy VS Code settings and keybindings
RUN cp ~/.dotconf/vscode/keybind.json ~/.config/Code/User/keybindings.json && cp ~/.dotconf/vscode/setting.json ~/.config/Code/User/settings.json