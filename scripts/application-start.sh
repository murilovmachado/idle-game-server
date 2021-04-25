#!/bin/bash

pm2 stop idle-game-sever
pm2 start /home/ec2-user/idle-game-server/build/index.js --name idle-game-sever