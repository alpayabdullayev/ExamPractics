import Produtc from "../model/productSchema.js";

export const createProduct = async(req,res)=>{
    try {
        const product = new Produtc(req.body)
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

export const getAllProduct = async(req,res)=>{
    try {
        const product = await Produtc.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

export const getProductById = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Produtc.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}

export const deletePoruct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Produtc.findByIdAndDelete(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
    }
}