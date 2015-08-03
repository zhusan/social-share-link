# Social Share

A simple and easy-to-use social share link. It can be used nodejs.

---


## Node.js support

Install social-share by npm

```
$ npm install social-share-link
```

Just use it

```
var share = require('social-share-link');
var url = share('twitter', {
    title:'share it'
});
```

If you use express, you can

```
app.get('/redirect', function(req, res) {
    var url = share(req.query.service, req.query);
    res.redirect(url);
});
```
