import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.adviceslip.com/advice');

        console.log(result.data);

        const quote = result.data.slip.advice;
        const author = "Consejo";

        res.render('index', {
            quote,
            author
        });

    } catch (error) {
        console.log("ERROR:", error.message);
        res.send('Error al obtener la frase');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});