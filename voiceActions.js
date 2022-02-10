// Using the /build/artyom.js file
import Artyom from 'artyom.js';

const Jarvis = new Artyom();

Jarvis.say("Hello World !");

// adding voice commands for Download and Delete
artyom.addCommands({
    indexes: ["Download", "Delete"],
    action: function(i){
        if(i == 1){
            // you said Delete, Deleting current canvas and redrawing
        } else if(i ==0){
            // you said Download, Saving current canvas and downloading image
            var imageFile = document.getElementById("img-file");
            // Set that you want to download the image when link is clicked
            imageFile.setAttribute('download', 'image.png');
            // Reference the image in canvas for download
            imageFile.setAttribute('href', canvas.toDataURL());
            imageFile.download(tactileImage.png);
        }

    }
});

// initializing voice command API
artyom.initialize({
    lang:"en-GB",
    debug:true, // Show what recognizes in the Console
    listen:true, // Start listening after this
    speed:0.9, // Talk a little bit slow
    mode:"normal" // This parameter is not required as it will be normal by default
});

artyom.say("A long text here",{
    onStart: function(){
        console.log("Talking ...");
    },
    onEnd: function(){
        console.log("I said all that i knew");
    }
});