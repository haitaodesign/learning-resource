#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn build

git add .

git commit -m 'release: github pages'

git config --local user.name "haitaodesign"

git config --local user.email "15393243613@163.com"

git checkout -b dev

git checkout master

git merge dev

git push -f https://${GITHUB_TOKEN}@github.com/haitaodesign/learning-resource.git master