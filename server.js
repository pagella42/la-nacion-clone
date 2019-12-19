
let express = require('express')
let app = express()
let bodyParser = require("body-parser")
let api = require('./server/routes/api')
const request = require('request')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)


articlesProcess = (articles)=>{
  let data = {
    articles: articles,
    tags:[],
    tagSlug:{}
  }

  let unsorted = []
  
  for(let tags of articles){
    tags.taxonomy.tags.forEach(t =>{
       !unsorted.includes(t.text)?  unsorted.push(t.text) :null
       !data.tagSlug[t.text] ? data.tagSlug[t.text] = t.slug : null
    })
  }
  data.tags = unsorted.sort(function(a, b){
    return b.length - a.length;
  });
 return data
}



//allow foregin requests (ONLY FOR DEV MODE)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})



app.get('/articles', function (req, res) {
 
  request('https://api-test-ln.herokuapp.com/articles', function (err, response) {

    if (response.statusCode == 200) {
      let articles = JSON.parse(response.body).articles
      res.send(articlesProcess(articles))
    }
    else {
      console.log("error - no articles")
    }
  })
})






app.listen(5000)