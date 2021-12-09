const _ = require("koa-route");
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const mongoose = require("mongoose");

const gameRoutes = require("./domains/game/gameRoutes");
const playerRoutes = require("./domains/player/playerRoutes");

const app = new Koa();

const uri = `mongodb+srv://${process.env.DB_CREDS}@cluster0.tkxqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

app.use(bodyparser());

app.use(_.post("/games", gameRoutes.create));
app.use(_.get("/games/:gameId", gameRoutes.details));

app.use(_.post("/players", playerRoutes.create));
app.use(_.post("/players/:playerId/join/:gameId", playerRoutes.joinGame));
app.use(_.post("/players/:playerId/score/:matchId", playerRoutes.submitScore));

app.listen(3000);

console.log("listening on port 3000");
