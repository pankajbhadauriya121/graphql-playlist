const express= require('express');
const graphqlHTTP= require('express-graphql');
const schema= require('./schema/schema')
const mongoose= require('mongoose');
const cors = require('cors');
const app = express();


// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/graphql-ninja');
mongoose.connection.once('open',()=>{
  console.log('connection established to MongoDB')
})
app.use('/graphql' , graphqlHTTP({
      schema,
      graphiql:true
})
)

app.listen('4001',()=>{
  console.log('listening on port 4001')
})
