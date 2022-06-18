@echo off
:: Author: chankruze (chankruze@gmail.com)
:: Created: Sat Jun 18 2022 00:47:07 GMT+0530 (India Standard Time)

:: Copyright (c) geekofia 2022 and beyond

:: increment package 
set /p v=version to increase (patch/minor/major): 
:: increment, build & publish
npm version %v% && npm ci && npm run build && npm publish