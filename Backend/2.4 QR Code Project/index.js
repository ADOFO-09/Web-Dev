/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"; 

const question = [
    {
        type: "input",
        name: "url",
        message: "Enter url here to turn into QR code image"
    }
]

inquirer.prompt(question).then((answers)=> {
  const url = answers.url
  const qr_svg = qr.image(answers.url, { type: 'png' });
  qr_svg.pipe(fs.createWriteStream('qr_code.png'));
  console.log('QR code image has been saved as qr_code.png');

  fs.writeFile("qrUrl.txt", url, (err) => {
    if(err) throw err;
    console.log("The file has been saved");
  })
})
