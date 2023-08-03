Chrome extension that uses openai chat completion api to give you AI auto completion for your texts in whatsapp web :)

To use this extension, first clone the repo.

Then create account in openai and get our secret apikey, then paste the the apikey in vertex.js file where i have mentioned "your_openai_apikey". 

Once you have done that, install the necessary dependencies for the project by running npm install at the root of the project.

Run node server.js to start up the backend which will handle the actual AI API call to vertex

Now you may head into your chrome browser and go to the url chrome://extensions. Click on the 'Load unpacked' button and choose the project directory. This will load in the extension locally into chrome. Now you may head into your extensions list and you will find the extension.

You will have to click on the extension once everytime you enter whatsapp web in order to trigger the button to show up under the text input
