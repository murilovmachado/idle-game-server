#!/bin/bash

# Make npm command visible
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# This script is executed after the source is copied to the instances
cd /home/ec2-user/idle-game-server
npm install