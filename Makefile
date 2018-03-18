d:
	gatsby develop

thalhalla: clean public
	npm run deploy

public:
	gatsby build

clean:
	rm -Rf public

ci: clean public
