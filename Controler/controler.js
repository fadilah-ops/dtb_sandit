import { data } from "../model.js";

export const getdata = async (req, res) => {
    try {
        const feld = await data.findAll(); 
        console.log(feld);
        res.json(feld);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getbyid = async (req, res) => {
    try {
        const id = req.params.id;
        const feld = await data.findOne({
            where:{
                id:id
            }
        }); 
        res.json(feld);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getbytype = async (req, res) => {
    try {
        const id = req.params.type;
        const feld = await data.findAll({
            where:{
                type:id
            }
        }); 
        res.json(feld);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal Server Error" });
    }
};
