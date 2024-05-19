import shopModel from "../models/shopModel.js";

const addShop = async(req,res)=> {
    console.log(req.body)
    const shop = new shopModel({
        NAME: req.body.NAME,
        ADDRESS: req.body.ADDRESS,
        SHOPOWNER: req.body.SHOPOWNER
    })

    try {
        await shop.save()
        res.json({success: true, message:"Shop Added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Error"})
    }
}

const listShop = async (req, res) => {
    try {
        const shops = await shopModel.find({});
        res.json({success: true, data:shops})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Error"})
    }
}

export {addShop, listShop};