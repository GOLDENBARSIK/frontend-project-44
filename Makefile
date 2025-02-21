install:
	npm ci
brain-games:
	npm install readline-sync
	node bin/brain-games.js
make lint:
	npx eslint .