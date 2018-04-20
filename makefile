SASS_SRC != find ./sass -type f -name '*.scss'
JS_SRC != find ./js_source -type f -name '*.js'
PHP_SRC != find php -type f -name '*.php'
SVG_SRC != find php/inc/svg -type f -name '*.svg'

PAGE_INDEX=docs/index.html
PAGE_404=docs/404.html

CSS_OUTPUT=docs/main.css
JS_OUTPUT=php/inc/js/app.min.js


all: $(CSS_OUTPUT) $(PAGE_404) $(PAGE_INDEX) $(JS_OUTPUT)

$(PAGE_INDEX): $(JS_OUTPUT) $(PHP_SRC) $(SVG_SRC)
	php php/index.php > $(PAGE_INDEX)

$(PAGE_404): $(PAGE_INDEX)
	cp $(PAGE_INDEX) $(PAGE_404)

$(CSS_OUTPUT): $(SASS_SRC)
	npm run gulp

$(JS_OUTPUT): $(JS_SRC)
	npm run gulp

#watch tasks
watch_php:
	while true; do \
        make $(PAGE_404); \
        inotifywait --quiet --recursive --event create --event modify --event move ./php/; \
    done

#to watch js and sass, run `npm run gulp:watch`