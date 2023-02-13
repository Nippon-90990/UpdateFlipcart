// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import Product from "../models/Product"

const handler = async(req, res)=> {
    let products = await Product.find()
    // let tshirts = {}
    // for(let item of products){
    //     if(item.title in tshirts){
    //         if(!tshirts[item.title].color.includes(item.color) && item.availablQty > 0){
    //             tshirts[item.title].color.push(item.color)
    //         }
    //         if(!tshirts[item.title].size.includes(item.size) && item.availablQty > 0){
    //             tshirts[item.title].size.push(item.size)
    //         }
    //     }
    //     else{
    //         tshirts[item.title] = JSON.parse(JSON.stringify(item))
    //         if(item.availablQty > 0){
    //             tshirts[item.title].color = [item.color]
    //             tshirts[item.title].color = [item.size]
    //         }
    //     }
    // }
    res.status(200).json({ products })
    }

export default connectDb(handler);