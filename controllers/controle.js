const Product = require("../model/productmodel");

const postData = async(req,res)=>{
    try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch(error){
      res.status(500).json({Message: error.message});
    }
  };

  const getData = async(req,res)=>{
    try{
        const product = await Product.find({});
        res.status(200).send(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const findData = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).send(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {findData, getData, postData}