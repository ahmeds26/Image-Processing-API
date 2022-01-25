import express from 'express';
import resizeImage from '../../resizeImage';
const path = require('path');
const fs = require('fs');


const folderName = 'thumbnails'

// Creating Thumbnails folder if not exist
if (!fs.existsSync(path.resolve('inputFolder/' + folderName))) {
  fs.mkdirSync(path.resolve('inputFolder/' + folderName));
}
else {};

const images = express.Router();


images.get('/', (req: express.Request, res: express.Response): void => {
    const imageName = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    
    const currentName = imageName + '.jpg'
    const currentWidth = Number(width); 
    const currentHeight = Number(height);
    
    const thumbFile: string = imageName + '_' + width + '_' + height + '.jpg';

    const thumbAbsolutePath = path.resolve('inputFolder/thumbnails/' + thumbFile);
    
    // Checking if the requested thumbnail is a repeated one
    fs.access(thumbAbsolutePath, fs.constants.F_OK, (err: string) => {
      console.log('\n> Checking if the thumbnail exists');
      if (err) {
        console.error('Thumbnail does not exist...');
        console.log(`\n> Creating Thumbnail with width: ${width} and height: ${height}`);
        
        setTimeout(() => {
          res.sendFile(thumbAbsolutePath);
        }, 3000);

        resizeImage(currentName, currentWidth, currentHeight, thumbFile);
      } else{
        console.log('Thumbnail exists...');
        process.nextTick(() => {
          res.sendFile(thumbAbsolutePath);
        });
      }
    });
});

export default images;