# UAB-Project 

Setting Up and Running the UAB Chat Bot


Prerequisites:- Ensure you have Node.js and npm (comes bundled with Node.js) installed on your machine.

Step-by-Step Guide

step 1: git clone https://github.com/singhrahulbrijesh/UAB-Project.git
Step 2: Navigating to Project Directory using terminal: cd path-to-your-project-directory
step 3: npm install (If you haven't install that)
step 4: node index.js or npm start [Starting the Server]
step 5:  Open your favorite web browser and navigate to and copy this link -> http://localhost:3000
You should see a message in the console indicating the server is running, something like the Server is running on port 3000


You should see the UAB Chat Bot interface ready to be used.

Interacting with the Chat Bot:

 -> Use the input field at the bottom to type a message.

 -> Click the "Send" button to send the message.

 -> Your message and any bot response will be displayed in the main chat area.

Stopping the Server:

If you want to stop the server, go back to your terminal where the server is running and press:
 -> Ctrl + C

 ---------------------------------------------------------------------------------------------------------------------------------
Docker steps: - 

Setting up UAB Chatbot:

Navigate to Project Directory:

Open Command Prompt or PowerShell and navigate to your UAB chatbot project directory:

 -> cd path\to\UAB_PROJECT\UAB Project

Docker Compose File:

Ensure that you have a docker-compose.yml file in this directory

Build and Run the Containers:

Execute the following command to build and start your containers:

 -> docker-compose up --build

Once the command completes, you should see logs indicating that the services (chat-app and mongo) are running.

Accessing the Chatbot:

If everything goes as planned, your chatbot should be accessible on:

 -> http://localhost:3000
Open this link in your web browser to interact with the UAB chatbot.

Stopping the Containers:
 -> CTRL+C or docker-compose down
This will stop and remove all the containers defined in the docker-compose.yml file.

Note:
This project saves chat history in a file called chatHistory.json. Ensure this file is writable by the server for it to function properly.


