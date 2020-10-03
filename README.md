# backend-for-login-with-tokens-
To run this file you have first node installed in your pc and also you have to install mongodb.

1. You can turn on the server by going in index.js that is in the src folder.
2. From the client site if have postman that's good!

This project is about Login Id's and token similar to ehat you have seen in the netfilx, amazon, etc there you have seen 
the token system over there that means you can join and also your friends can join but with same id also there is a restriction
so in this data base project you have a User id and tasks related to that but one id can have as many tokens there is a login 
process also available over there  I have also used middleware so that if any one whose id have not signed up cant be able to 
use this service 

process to open and enjoy the process 
1. Open the terminal 
2. In the very first folder write npm dev run to run the server
3. open the postman
4. And here are the sever addresses(don't forget to put https://localhost:3000) for adding you have to use postman raw section and send file through json in the body section
1.   /users/signup (post operation to add user id)
2.    /users/login (post operation to login if your username is present)
3.    /users/logout (post operation to logout)
4.    /users/me (get if you have logged in this will give your info)
5.    /users/:id (get operation to get info with id)
6.    /users/me (patch operation to update "body you have to provide")
7.    /users/me ("delete the specific token user")
    with this you can create, delete, change and update
    Now for the Tasks that you can add to a specific id's (don't take tension of id's of the task when you a get operation on the tasks you will get id's)
 1.   /tasks (post operation to post a task)
 2.   /tasks (get operation to get the list of tasks associated)
 3.   /tasks/:id (get operation to get a specific through specific if you have id of that task)
 4.   /tasks/:id (patch operation to update the task)
 5.   /tasks/:id (delete operation to delete the taskwith its id)
    
   
