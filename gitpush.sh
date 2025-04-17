#!/bin/bash

sed -i '2 Listen 80'

MESSAGE=$1
git add .
git commit -m $MESSAGE
git push -u origin main