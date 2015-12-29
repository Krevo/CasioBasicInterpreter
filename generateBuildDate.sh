#!/bin/bash

TAG_DATE=`git log --tags --simplify-by-decoration --pretty="format:%ai %d" | head -n1 | cut -d' ' -f 1`
sed 's/\(var CBI_BUILD_DATE\)\(.*\)/\1 = "'${TAG_DATE}'";/g' src/js/cbiversion.js_ > public/js/cbiversion.js

VERSION=`git describe --tags --abbrev=0` || exit 1
sed -i 's/\(var CBI_VERSION\)\(.*\)/\1 = "'${VERSION}'";/g' public/js/cbiversion.js
