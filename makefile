SASS_SRC != find ./sass -type f -name '*.scss'


all:
	php index.php > docs/index.html

main.css: $(SASS_SRC)
	sassc --style compressed sass/main.scss docs/main.css