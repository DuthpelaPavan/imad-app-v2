var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles = {
articleone : {
 title: 'artcleone',
 heading: 'article-one',
 date: 'date',
 body: 'hey their this is excellent'
},
articletwo : {
 title: 'artcletwo',
 heading: 'article-two',
 date: 'date',
 body: 'hey their this is excellent'
},
articlethree : {
 title: 'artclethree',
 heading: 'article-three',
 date: 'date',
 body: 'hey their this is excellent'
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var body=data.body;
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
    <link href="/ui/style.css" rel="stylesheet">
   </head>
    <body>
        <div class="pavan">
        <div>
            <h2>${heading}</h2>
        </div>
        <div>
          ${date}
        </div>
        <hr/>
        <div>
            ${body}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    // /:articleName = articleone
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
