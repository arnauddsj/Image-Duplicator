const fs = require('fs');
const path = require('path');

const filename = 'image.jpg'; // The name of your picture to duplicate
const src = path.join(__dirname, filename); // Folder that contain the picture to duplicate

const listeFile = 'list.json'; // Name of the JSON file that contain all refs

const destDir = path.join(__dirname, 'images'); // Destination folder, You need to create the "images" folder

// Read the JSON file and parse to nameRef variable
const nameRef = JSON.parse(fs.readFileSync(listeFile, 'utf8'));

// Iterate over the objects
Object.keys(nameRef).forEach(key => {

    let refName = `${destDir}/${nameRef[key].imageName}.jpg`; //Change imageName with the name of your key

    //Start copy function 
    fs.copyFileSync(src, path.join(destDir, filename));

    //Start rename function
    fs.rename(`${destDir}/${filename}`, refName, function (err) {
        if (err) {
            console.log('ERROR: ' + err);
        } else {
            console.log('Picture created and renamed with success!');
        };
    });
});
