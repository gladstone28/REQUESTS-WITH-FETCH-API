Lesson link:

https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/js-requests-with-fetch-api/exercises/handling-post-request-response

### REQUESTS WITH FETCH API

## Handling a POST Request

In the previous exercise, we set up the POST request by providing the endpoint and the object containing all the necessary information. In this exercise, we’ll handle the response.

The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another [.then()](https://www.codecademy.com/resources/docs/javascript/promise/then) method and handle the returned [JSON](https://www.codecademy.com/resources/docs/javascript/json) object and display the information to our webpage.

Let’s implement this knowledge into our code!

Remember that if you reset the exercise at any point, you will have to paste in your API key again at the top!

### Instructions

Checkpoint 1 Enabled
1. Chain a .then() method at the end of the fetch() function we wrote in the previous exercise. As its first argument, pass an arrow function as a callback that takes response as its single parameter.
