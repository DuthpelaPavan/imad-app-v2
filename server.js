var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleone = {
 title: 'artcleone',
 heading: 'article-one',
 date: 'date',
 body: 'hey their this is excellent'
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
return htmltemplate;
}

app.get('/articleone', function (req, res) {
  res.send(createTemplate(articleone));
});



app.get('/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one.htmlui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
