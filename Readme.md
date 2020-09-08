# Encrypted API


## requirement

- node


## install

```sh 
npm install
```

## start

```sh 
npm start
```


## dev

```sh 
npm run dev
```

### extra dev tools

```sh
# -H "Accept: application/json"
curl -i -H "Content-Type: application/json" -X GET localhost:3000/allocation
curl -i -H "Content-Type: application/json" -X POST -d @allocation/data.json localhost:3000/allocation

curl -i -H "Content-Type: application/json" -X GET localhost:3000/allocation/5dbf48c27b59602fb48d44ae

```




## test

```sh
npm test
```

```sh
curl localhost:3000/allocations
curl localhost:3000/allocations
```


## changelog

initial setup
setup for express
setup test framework (mocha, chai, chai-http)
first endpoint /allocations
Separate Express 'app' and 'server'


## TODO

