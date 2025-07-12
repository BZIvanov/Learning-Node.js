# CSS minification demo with Gulp

This project demonstrates how to use **Gulp** to automate CSS minification. It uses `gulp-clean-css` to minify `.css` files and `gulp-rename` to append a `.min` suffix to the output files.

## How It Works

The Gulp task defined in `gulpfile.js`:

1. Selects all `.css` files in the `styles/` directory.
2. Minifies them using `gulp-clean-css`.
3. Renames them by adding `.min` suffix (e.g., `style.css` → `style.min.css`).
4. Outputs the minified files to `dist/styles/`.

## Usage

To run the minification task, use the following npm script:

```bash
npm run minify-css
```
