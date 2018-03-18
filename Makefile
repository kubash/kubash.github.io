d:
	cd dimension; gatsby develop

thalhalla: clean public
	cd dimension; npm run deploy

public:
	cd dimension; gatsby build

clean:
	cd dimension; rm -Rf public

ci: clean public
