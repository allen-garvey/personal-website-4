SASS_SRC != find ./assets/sass -type f -name '*.scss'
JS_SRC != find ./assets/js -type f -name '*.js'
PHP_SRC != find php -type f -name '*.php'

OUTPUT_DIR=public_html

PAGE_INDEX=$(OUTPUT_DIR)/index.html

CSS_OUTPUT=php/inc/css/app.css
JS_OUTPUT=php/inc/js/app.js


all: $(PAGE_INDEX)

$(PAGE_INDEX): $(JS_OUTPUT) $(PHP_SRC) $(CSS_OUTPUT)
	php php/index.php > $(PAGE_INDEX)

$(CSS_OUTPUT): $(SASS_SRC)
	npm run deploy

$(JS_OUTPUT): $(JS_SRC)
	npm run deploy