# View Engines

View engines are templating systems that allow you to render dynamic HTML on the server side before sending it to the client. They are commonly used in combination with frameworks like Express.

In Node.js, view engines make it easier to insert variables and data into HTML pages using template syntax, such as `{{name}}` in Handlebars.

## Why use a View Engine?

- Dynamically generate HTML content from server data
- Separate business logic from presentation
- Reuse common layouts (like headers and footers)
- Useful for building multi-page apps or server-rendered UIs

## Common View Engines

- **Handlebars (`hbs`)** – logic-less templating with Mustache-style syntax
- **EJS** – lets you embed JavaScript directly inside HTML
- **Pug (formerly Jade)** – uses significant whitespace and minimal syntax

## Content of this section

- **shop-hbs-demo** - shop app with Handlebars
