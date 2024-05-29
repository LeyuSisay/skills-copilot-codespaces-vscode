//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Use ejs for view engine
app.set('view engine', 'ejs');

//Body parser
app.use(express.urlencoded({extended: false}));

//Static files
app.use(express.static('public'));

//Comments array
const comments = [
    {
        username: 'Todd',
        comment: 'LOL that is so funny'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

//Home route
app.get('/', (req, res) => {
    res.render('home.ejs');
});

//Comments route
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
});

//New comment route
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
});

//Create comment route
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
});

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});