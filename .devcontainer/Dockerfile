FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Install pnpm
RUN npm install -g pnpm@9

# Install Neovim
RUN apt-get update && apt-get install -y neovim

# Install Git
RUN apt-get install -y git

# Install fzf
RUN apt-get install -y fzf

# Install lsd
RUN apt-get install -y lsd

# Clone dotconf repository and update zshrc
RUN git clone https://github.com/alifprihantoro/dotconf ~/.dotconf && echo 'source ~/.dotconf/zshrc' >> ~/.zshrc

# Copy VS Code settings and keybindings
RUN cp ~/.dotconf/vscode/keybind.json ~/.config/Code/User/keybindings.json && cp ~/.dotconf/vscode/setting.json ~/.config/Code/User/settings.json