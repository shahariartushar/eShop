import express, { Application, Request, Response, NextFunction } from "express";

import path from "path";
import bodyParser from "body-parser";

import adminRoutes from "./routes/admin";
import shopRountes from "./routes/shop";

var viewPath = path.join(__dirname, 'views');
const port: number = 3000;

const app: Application = express();

app.set('view engine', 'ejs');
app.set('views', viewPath);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/admin", adminRoutes);
app.use(shopRountes);

// '/invalid url'
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render('404',{pageTitle: 'Page Not Found', path:'/'});
});

app.listen(port, () => console.log("Server started"));
