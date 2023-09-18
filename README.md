# UAB-Project

Setting Up and Running the UAB Chat Bot
Prerequisites

Ensure you have Node.js and npm (comes bundled with Node.js) installed on your machine.

Step-by-Step Guide

Cloning the Repository:

If you have the project in a git repository, you can clone it using:

bash

Copy code

git clone https://github.com/singhrahulbrijesh/UAB-Project.git

Otherwise, if you've provided the files as a ZIP, ensure the new user has unzipped the project into a local directory.

Navigating to Project Directory:

Open your terminal or command prompt and navigate to the project directory:

bash

Copy code

cd path-to-your-project-directory

Installing Dependencies:

Before running the server, you need to install the required dependencies. This project appears to use Express, CORS, and File System (fs) modules, among others. To install them, run:

Copy code

npm install

Starting the Server: Once all the dependencies are installed, you can start the server by running:


Copy code

node index.js

You should see a message in the console indicating the server is running, something like: 

Server is running on port 3000

Accessing the Chat Bot in a Browser:
-> Open your favorite web browser and navigate to:

Copy code
-> http://localhost:3000

You should see the UAB Chat Bot interface ready to be used.

Interacting with the Chat Bot:

 -> Use the input field at the bottom to type a message.

 -> Click the "Send" button to send the message.

 -> Your message, as well as any bot response, will be displayed in the main chat area.

Stopping the Server:

If you want to stop the server, go back to your terminal where the server is running and press:
 -> Ctrl + C

Note:
This project saves chat history in a file called chatHistory.json. Ensure this file is writable by the server for it to function properly.
