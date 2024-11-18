const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.type( 'text/plain')
    res.send('Hello World!')
})
app.get( '/html', ( req, res ) => {
    res.type( 'text/html' )
    res.send('<h1>Je suis une app express</h1>')
})
app.use( ( req, res ) => {
    res.type( 'text/plain' )
    res.status( 404 )
    res.send('404 page non trouvée')
})
app.use(express.static(`public`)) ;
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Une erreur s'est produite.");
});
app.listen(port, () => {
    console.log(`l'Application écoute sur le port ${port}!`)
});