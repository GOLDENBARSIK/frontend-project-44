on:
	npm ci;
	npm install readline-sync;
	node src/start.js
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint
parity-check:
	node bin/brain-even.js
calculator:
	node bin/brain-calc.js
nod:
	node bin/brain-gcd.js
progress:
	node bin/brain-progression.js
games:
	node src/gameslist.js