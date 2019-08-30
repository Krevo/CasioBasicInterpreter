SHELL=/bin/bash
BUILD_DATE := $(shell date "+%Y-%m-%d")
NOW := $(shell date "+%s")
FIRST_AUG2014 := $(shell date -d '1 Aug 2014' "+%s")
REVISION := $(shell echo "r$$(($(NOW) - $(FIRST_AUG2014)))")

all: build/ cbiversion public/js/cbi.js

build/:
	mkdir build

build/driver_web.js: lib/jscc/driver_web.js_
	@echo -e "\033[32m#"
	@echo "# Modify/extend 'driver_web.js' from the javascript compiler compiler"
	@echo -e "#\033[0m"
	sed "s/parse( src, err_off, err_la )/parse( src, err_off, err_la, prgNodes, prgLabels )/g" lib/jscc/driver_web.js_ > $@

cbiversion:
	@echo -e "\033[32m#"
	@echo "# Regen RELEASE NUMBER and BUILD DATE"
	@echo -e "#\033[0m"
	sed 's/\(var CBI_BUILD_DATE\)\(.*\)/\1 = "'$(BUILD_DATE)'";/g' src/js/cbiversion.js_ > build/cbiversion.js
	sed -i 's/\(var CBI_VERSION\)\(.*\)/\1 = "'$(REVISION)'";/g' build/cbiversion.js

build/cbiparser.js: build/driver_web.js cbi_grammar.par
	@echo -e "\033[32m#"
	@echo "# Compile parser"
	@echo -e "#\033[0m"
	rhino lib/jscc/jscc.js -o $@ -t build/driver_web.js cbi_grammar.par

public/js/cbi.js: src/js/cbihelper.js src/js/cbimain.js build/cbiversion.js build/cbiparser.js
	@echo -e "\033[32m#"
	@echo "# Concatenate javascript files"
	@echo -e "#\033[0m"
	cat $^ > $@

clean:
	@echo -e "\033[32m#"
	@echo "# Clean all"
	@echo -e "#\033[0m"
	rm -rf build
	rm public/js/cbi.js

