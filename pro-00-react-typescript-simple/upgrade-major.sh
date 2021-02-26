# https://www.carlrippon.com/upgrading-npm-dependencies/
# It may cause the `npm start` fails on Windows 10.
npx npm-check-updates -u
npm install

# Solution 2:
# npm install -g npm-check-updates
# ncu -u
# npm install (or `npm update`)