# Cats-API
##

## Описание API:

### /cats
Вызывает метод getAll(). Данный метод ничего не принимает и возвращает массив котиков, отсортированных по id, в формате JSON.
Пример:
code block
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

### /cats/get_one/:id
Вызывает метод getOne(id: number). Данный метод принимает id нужного котика и возвращает его в формате JSON.
Пример:
code block
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
