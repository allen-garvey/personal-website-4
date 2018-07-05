SASS_SRC != find ./sass -type f -name '*.scss'
JS_SRC != find ./js_source -type f -name '*.js'
PHP_SRC != find php -type f -name '*.php'

OUTPUT_DIR=public_html

PAGE_INDEX=$(OUTPUT_DIR)/index.html

CSS_OUTPUT=$(OUTPUT_DIR)/main.css
JS_OUTPUT=php/inc/js/app.min.js


all: $(CSS_OUTPUT) $(PAGE_INDEX) $(JS_OUTPUT)

$(PAGE_INDEX): $(JS_OUTPUT) $(PHP_SRC)
	php php/index.php > $(PAGE_INDEX)

$(CSS_OUTPUT): $(SASS_SRC)
	npm run gulp

$(JS_OUTPUT): $(JS_SRC)
	npm run gulp