'use strict'
const express = require('express');
const fs = require('fs');
const path = require('path');
const DomParser = require('dom-parser');

const app = express();
const parser = new DomParser();


// Making a template engine
// Using dom-parser getting layout.html and saving it into variable
// I know that layout path is hardcoded, but for some reason I wasn't able to get it working dynamically

app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err);
        let template = fs.readFileSync('views/layout.html', 'utf-8', function(err, html) {  
            if (err) return callback(err);
            let dom = parser.parseFromString(html);
            return dom;
        });
        template = template.replace('<isreplace/>', content);   // using replace changing <isreplace> tag to <isdecorate> element with content
        return callback(null, template); 
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function (req, res){
    res.render('index');
});

app.get('/page1', function (req, res){
    res.render('page1');
});

app.get('/page2', function (req, res){
    res.render('page2');
});

app.listen(3000, function() {
    console.log('Server started on port 3000...');
});