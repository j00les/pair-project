const express =  require('express')
const app = express()
const PORT = 3005

console.log(">>>>>>")

app.set('view engine', 'ejs')
app.use(express.urlencoded( {extended:true}) )

app.get('/', (req))

// app.get('/production-houses', Controller.showProductionHouse) 
// app.get('/movies', Controller.showMovie)

// app.get('/movies/edit/:id',Controller.findMovieById)
// app.post('/movies/edit/:id', Controller.getFormData) 

// app.get('/movies/delete/:id', Controller.deleteMovie)

// //add
// app.post('/movies/add', Controller.getFormData) 
// app.get('/movies/add', Controller.addMovie)

app.listen(PORT, () => {
  console.log('yay', PORT)
})