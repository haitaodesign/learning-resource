#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git clone https://${GITHUB_TOKEN}@github.com/haitaodesign/learning-resource.git

cd learning-resource

yarn

git merge dev

yarn build

git config --local user.name "haitaodesign"
git config --local user.email "15393243613@163.com"

git add .

git commit -m 'release: github pages'

git push -f https://${GITHUB_TOKEN}@github.com/haitaodesign/learning-resource.git master