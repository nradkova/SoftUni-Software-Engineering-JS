const { post: commentPost } = require('../controllers/comments');

const productController=require('../controllers/productController');
const accessoryController=require('../controllers/accessoryController');
const homeController=require('../controllers/homeController');
const authController=require('../controllers/authController');


module.exports = (app) => {
    app.use('/auth',authController);
    app.use('/products',productController);
    app.use('/accessories',accessoryController);

    app.post('/comments/:cubeId/create', commentPost);
   
    app.use('/',homeController);
}