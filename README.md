Image-Processing-API

An Express endpoint to resize, display and store an input image


Built With:

    1- Typescript
    2- Node.js
    3- Jasmine
    4- Express API

Getting Started:

    Follow the package.json file for the required modules to be installed

    1- npm i sharp
    2- npm i express
    3- npm i jasmine
    4- npm i supertest
    5- npm i --save-dev prettier
    6- npm i --save-dev eslint
    7- npm i --save-dev ts-node
    8- npm i --save-dev nodemon
    9- npm i --save-dev typescript
    10- npm i --save-dev @types/typescript
    11- npm i --save-dev @types/node
    12- npm i --save-dev @types/sharp
    13- npm i --save-dev @types/express
    14- npm i --save-dev @types/jasmine
    15- npm i --save-dev @types/supertest


Scripts:

    1- npm run test
        to do unit testing with jasmine.
        
    2- npm run start
        to test the api endpoint by running this command then visiting the endpoint with the query parameters of the image name and the width and height for the resizing.

        then go to the browser and visit the endpoint url of local host with the query parameters as an example:

        http://localhost:3000/api/images?filename=encenadaport&width=200&height=200

    3- npm run build
        to transpile the typescript files into javascript ones.





