import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from "./schema.js";

//Variables
const app = express();
//const schema = {};


app.get('/', (req,res)=>{
    res.json(
        {
            msg:"version 1.0.0.0a"
        }
    )
})

app.use('/graphql', graphqlHTTP(
    {
        graphiql: true,
        schema: schema
    }
));

app.listen(8000, ()=>console.log('Iniciando server por el puerto 8000'));