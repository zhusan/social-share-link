all: install cat compile

install:
	npm install

cat:
	cat src/share.js src/parser.js > share.js

