const connectDatabase = require('../config/db');
var app = express();

connectDatabase();
const port = 5000;

app.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});