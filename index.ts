import express from 'express';
import tweet from './tweet';
const app = express();

app.get('/', async (req,res) =>{
    tweet()
    return res.send('Tudo bem :)')
  })
  
  
  app.listen(process.env.PORT||9999, () => {
  console.log('App running')
  })

