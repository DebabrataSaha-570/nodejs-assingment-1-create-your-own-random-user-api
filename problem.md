Your assignment is to create an API that generates random user data. The random user data should have the following properties:

Id
gender
name
contact
address
photoUrl

Your API should have a .json file. You will perform CRUD operations on the .json file using Express and the file system module. You are required to use the following endpoints to perform the operation:

GET /user/random A random user
Get a random user from the .json file

GET /user/all A list of random users
Get all the users from the .json file
BONUS: Limit the number of users using query parameter(s)

POST /user/save Save a random user
Save a user in the .json file
BONUS: validate the body and check if all the required properties are present in the body.

PATCH /user/update Update a random user
Update a user's information in the .json file using its id
BONUS: validate the user id

PATCH /user/bulk-update update multiple users
Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.
BONUS: validate the body.

DELETE /user/ delete
Delete a user from the .json file using its id
BONUS: validate the user id

Make sure to test the API with Postman or any other REST client.
Happy Coding !!! Be Awesome

You are required to submit the following:

Your GitHub repository link containing the API code.
The live link of the API deployed in Heroku/any other hosting platform.
