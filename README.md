# Apex Legend Player Tracker

## Usage

- This is a simple app build for searching players gaming information. 

- Uses node & express for backend and vue for front end

- Using Morgan to check http process

- We are using __Toasted__ for the visual interaction

- API: 

`API key :: 2132ff93-7f4b-4fb4-8a49-db538fc38074`



### Trash 

- node-fetch: It returns a promise. So we need to use __async await__ and we need use try catch to catch the error

### Why We are building a backend server script? 

There are several reasons behind building our server script. Well we could just hit the third party api from the front end but we are not going to do that. That could've been simple work. __Reasons Behind this__

- It's not really secured. As we have an __API key__ we want to keep it on the server side. So it's safe on our server and can't be accessed rom our server. 

- Well we are constructing our own __API__ So we have full control over it. Like we are able to send _status code_, _response time_, _size_, _message body_ etc. Every thing is modified.

- It's a production application so backend is really important. 

- We have full control over our application and the __API__


### To run both backend and frontend at the same time 

- We will use concurently to run both back and front at the same time. 

### Extra

- To view the background image we used lifecycle method. 

- The code is in the search.vue