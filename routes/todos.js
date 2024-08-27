const { getall, getByid, updateOne,createOne,deleteOne } = module.require("../controllers/todos");

const fs=module.require("fs")
const express = module.require('express')
const router=express.Router();
router.get('/',getall)



router.get('/:id',getByid)

router.patch('/:id',updateOne)
router.post("/",createOne)    

router.delete('/:id',deleteOne)
// router.get('/count',countAllDocuments);
module.exports=router;


