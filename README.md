# Cats-API
##

## Описание API:

### /cats (get)
Вызывает метод getAll(). Данный метод ничего не принимает и возвращает массив котиков, отсортированных по id, в формате JSON.
Пример:
```
[
    {
        "catId": 2,
        "name": "Alice",
        "color": "Бежевая",
        "breed": "Сиамская пушистая",
        "age": 8,
        "price": 150,
        "img": "235d1a84-2a56-41e5-81e3-1f63f49c6f01-kit.jpg",
        "isBooked": true
    },
    {
        "catId": 3,
        "name": "Jett",
        "color": "Черный",
        "breed": "Сибирский",
        "age": 2,
        "price": 120,
        "img": "65efaad2-9a09-48e9-a3f9-1a4d96d4d805-kit.jpg",
        "isBooked": true
    }
]
```

### /cats/get_one/:id (get)
Вызывает метод getOne(id: number). Данный метод принимает id нужного котика и возвращает его в формате JSON.
Пример:
```
{
    "catId": 2,
    "name": "Alice",
    "color": "Бежевая",
    "breed": "Сиамская пушистая",
    "age": 8,
    "price": 150,
    "img": "235d1a84-2a56-41e5-81e3-1f63f49c6f01-kit.jpg",
    "isBooked": true
}
```

### /cats/booked (get)
Вызывает метод getBooked(). Данный метод ничего не принимает и возвращает массив котиков, которые забронированы и отсортированы по id, в формате JSON.
Пример:
```
[
    {
        "catId": 3,
        "name": "Jett",
        "color": "Черный",
        "breed": "Сибирский",
        "age": 2,
        "price": 120,
        "img": "65efaad2-9a09-48e9-a3f9-1a4d96d4d805-kit.jpg",
        "isBooked": true
    }
]
```

### /cats/not_booked (get)
Вызывает метод getNotBooked(). Данный метод ничего не принимает и возвращает массив котиков, которые незабронированы и отсортированы по id, в формате JSON.
Пример:
```
[
    {
        "catId": 2,
        "name": "Alice",
        "color": "Бежевая",
        "breed": "Сиамская пушистая",
        "age": 8,
        "price": 150,
        "img": "235d1a84-2a56-41e5-81e3-1f63f49c6f01-kit.jpg",
        "isBooked": false
    }
]
```
### /cats/book/:id (put)
Вызывает метод book(id: number). ный метод принимает id нужного котика и, если он не забронирован, то изменяет поле брони на true. Данный метод ничего не возвращает.
