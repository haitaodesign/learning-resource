#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git clone git@github.com:haitaodesign/learning-resource.git

cd learning-resource

yarn

yarn build

git add .

git commit -m 'release: github pages'

git push https://${GITHUB_TOKEN}@github.com/haitaodesign/learning-resource.git master