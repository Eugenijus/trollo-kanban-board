const user = 'trolloAdmin';
const pass = '';
const dbName = 'trolloDB';

module.exports = {
  mongoURI: 
  `mongodb+srv://${user}:${pass}@cluster0-9sea1.mongodb.net/${dbName}?retryWrites=true&w=majority`  
};
