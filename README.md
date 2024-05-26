# js-assignment
````

problem 1 : I have used node-cache package to store fetched matches by tour name, reducing endpoint latency by avoiding repetitive database queries, enhancing performance as tours scale.

problem 2 : I've updated the query for adding new fields like match's id, startTime and format.

problem 3 : To implement the news API, i have first defined a createNews function in newsService.js using MySQL and Node.js. This function inserts news data into a MySQL database using /news POST endpoint. then wrote Jest test cases in news.test.js to ensure the all 4 news API endpoints function correctly. The tests included checking the creation of news and fetching news by various IDs, confirming both the functionality and data integrity.

````