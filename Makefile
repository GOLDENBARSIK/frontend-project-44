on:
	npm ci;
	npm install readline-sync;
	node src/start.js
brain-games:
	node bin/brain-games.js
make lint:
	npx eslint .
parity-check:
	node bin/brain-even.js
calculator:
	node bin/brain-calc.js
games:
	node src/gameslist.js