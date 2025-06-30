# Express

TODO: move everything from this section to the Frameworks or other sections.

#### Other Hints

- If we want to read file just once, not on every request, we can put the reading piece of code outside the createServer method, because outside that method the code is read only once.

- projection - this termin in mongoDB refers to selecting only specific fields/columns from our document/row

- runValidators set to true is very important option for PATCH and PUT requests, because without it we can change valid to invalid data

- global error handler, which is a normal middleware is recognized by Express providing 4 instead of 3 parameters, where the first parameter is the error

```javascript
// this is how the global error middleware looks like
next(err, req, res, next) => {
  // some code here
}
```

- if we pass an argument to the next() method the global error handler will be called

```javascript
// next here will go directly to the global error handler
next(somethingHere);

// next here will go the next middleware in our app
next();
```
