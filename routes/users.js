const {getall,createone,getByid,updateOne,deleteOne,login} = module.require("../controllers/users");


const fs = module.require('fs');
const express = module.require('express')
const router=express.Router();
const app = express();
app.use(express.json())
router.get('/',getall)
router.post('/',createone)
router.get('/:id',getByid)
router.patch('/:id',updateOne)
router.delete('/:id',deleteOne)

router.post('/login',login)

module.exports=router;