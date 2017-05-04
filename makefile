SASS_SRC != find ./sass -type f -name '*.scss'


all: main.css index.html 404.html js

index.html:
	php php/index.php > docs/index.html

404.html: index.html
	cp docs/index.html docs/404.html

main.css: $(SASS_SRC)
	sassc --style compressed sass/main.scss docs/main.css

js:
	npm run gulp

#watch tasks
watch_php:
	while true; do \
        make 404.html; \
        inotifywait --quiet --recursive --event create --event modify --event move ./php/; \
    done

watch_sass:
	while true; do \
        make main.css; \
        inotifywait --quiet --recursive --event create --event modify --event move ./sass/; \
    done

watch_js:
	while true; do \
        make js; \
        inotifywait --quiet --recursive --event create --event modify --event move ./js_source/; \
    done