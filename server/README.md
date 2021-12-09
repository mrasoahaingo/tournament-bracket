# [**Tournament bracket**](https://github.com/mrasoahaingo/tournament-bracket)

## Install & start server
```
yarn
DB_CREDS="{YOUR DB CREDENTIALS}" yarn start
```

## Usage

### Create a game
```
curl -X POST http://localhost:3000/games -H 'Content-Type: application/json' -d '{"maxPlayers": "16"}'
```

### Create a player
```
curl -X POST http://localhost:3000/players -H 'Content-Type: application/json' -d '{"name": "michael"}'
```

### Join a game
```
curl -X POST http://localhost:3000/players/{PLAYER_ID}/join/{GAME_ID}
```

### Game status (bracket)
```
curl -X GET http://localhost:3000/games/{GAME_ID}
```
