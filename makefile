SASS_SRC != find ./sass -type f -name '*.scss'


all: main.css index.html 404.html js

index.html:
	php index.php > docs/index.html

404.html: index.html
	cp docs/index.html docs/404.html

main.css: $(SASS_SRC)
	sassc --style compressed sass/main.scss docs/main.css

js:
	npm run gulp