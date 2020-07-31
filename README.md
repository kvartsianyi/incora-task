#### **_To start backend:_**

**Step 1** - _create database_
```
npx sequelize-cli db:create
```
**Step 2** - _create tables_
```
npx sequelize-cli db:migrate
```
**Step 3** - _insert test data into database_
```
npx sequelize-cli db:seed:all
```
_Test users:_
```
login: digimon
password: 12345678

login: pikachu
password: 12345678
```
**Step 4** - _start server_
```
pm2 start app.js
```

#### **_To start frontend:_**
**Step 1** - _start command_
```
ng s -o
```
