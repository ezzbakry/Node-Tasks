const {getall,createone,getByid,updateOne,deleteOne,login} = module.require("../controllers/users");


const fs = module.require('fs');
const express = module.require('express')
const router=express.Router();
const{auth,restrict}=module.require('../middlewares/auth')
const app = express();
app.use(express.json())
router.get('/',auth,restrict("admin"),getall)
router.post('/',createone)
router.get('/:id',getByid)
router.patch('/:id',updateOne)
router.delete('/:id',deleteOne)

router.post('/login',login)

module.exports=router;