# amdbuy_test

В директории server создать файл config.ts и добавить туда api key чата в виде 
```ts
export const API_KEY = 'api key';
```
Установить зависимости:
```bash
cd server && npm install
```
для запуска проекта из директории server выполнить
```bash
cd server && npm run start
```
Для отправки запроса в chat gpt использовать следующий эндпоинт (по умолчанию порт 3000)
#### - POST http://localhost:3000/openai/send
тело запроса в формате json:
```json
{
  "message": "your message"
}
```
ответ придет в формате json вида:
```json
{
    "role": "assistant",
    "content": "response"
}
```
