Lesson link:

https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/js-requests-with-fetch-api/exercises/js-requests-with-fetch-api-intro

# REQUESTS WITH FETCH API

## Introduction to Requests with ES6

Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around HTTP requests.

There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests.

With a GET request, we’re retrieving, or getting, information from some source (usually a website). For a POST request, we’re posting information to a source that will process the information and send it back.

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We will go into event loops in more detail in the Concurrency Model and Event Loop in JavaScript article.

To make asynchronous event handling easier, promises were introduced in ES6 JavaScript.

In this lesson, we will explain how to use fetch() and promises to handle requests. Then, we will simplify requests using async and await.

### Instructions
Click the button on the web page to see what the code in main.js does. Notice the usage of fetch(), async, and await.

We’ll also be working with JSON, so study the structure of the response on the web page!

Go to the next exercise to learn more about requests.

