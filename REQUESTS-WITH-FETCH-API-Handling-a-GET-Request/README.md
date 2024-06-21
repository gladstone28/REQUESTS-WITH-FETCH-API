


REQUESTS WITH FETCH API
Handling a GET Request
10 min
Great job making it this far!

In the previous exercise, we called the fetch() function to make a GET request to the Datamuse API endpoint. Then, you chained a .then() method and passed two callback functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, we will chain another .then() method, which will allow us to take the information that was returned with the promise and manipulate the webpage! Note that if there is an error returned in the first .then() method, the second .then() method will not execute.


