#!/bin/bash

MESSAGE=$0
echo $MESSAGE
git add .
git commit -m $MESSAGE
git push -u origin main