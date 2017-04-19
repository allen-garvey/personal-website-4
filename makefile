SASS_SRC != find ./sass -type f -name '*.scss'


all: main.css index.html 404.html

index.html:
	php index.php > docs/index.html

404.html:
	php index.php > docs/404.html

main.css: $(SASS_SRC)
	sassc --style compressed sass/main.scss docs/main.css