# nodejs-crud

## api example

### get list hero: http://localhost:3000/api/heroes

### get hero detail: http://localhost:3000/api/heroes/1

### add hero:  http://localhost:3000/api/heroes, method:POST, content-type: application-json
```{
   "id": 1,
   "name": "thai"
}```
curl :
```curl --location 'http://localhost:3000/api/heroes' \
--header 'Content-Type: application/json' \
--data '{
   "id": 1,
   "name": "thai"
}'```

### update hero: http://localhost:3000/api/heroes, method:PUT, content-type: application-json
```{
   "id": 1,
   "name": "thai"
}```
curl:
```curl --location --request PUT 'http://localhost:3000/api/heroes' \
--header 'Content-Type: application/json' \
--data '{
    "id": 11,
    "name": "test"
}'```
 
