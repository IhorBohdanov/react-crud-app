function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ol>
        <li>Реализовать CRUD Web приложение используя React</li>
        <li>В качестве бэкэнда использовать сервис http://jsonplaceholder.typicode.com/</li>
        <li>Вывести список альбомов используя API GET http://jsonplaceholder.typicode.com/albums</li>
        <li>Вывести список фото для каждого альбома, используя роутинг и API GET http://jsonplaceholder.typicode.com/albums/1/photos где 1 - id альбома.</li>
        <li>Реазизовать добавление/изменение/удаление альбомов, используя API POST/PUT/DELETE http://jsonplaceholder.typicode.com/albums/1</li>
      </ol>
    </>
  );
}

export default Home;