#!/bin/bash

sed -i '2c Listen 8080' 'httpd.conf'

MESSAGE=$1
git add .
git commit -m $MESSAGE
git push -u origin main