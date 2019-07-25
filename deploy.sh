#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn build

git add .

git commit -m 'release: github pages'

git push