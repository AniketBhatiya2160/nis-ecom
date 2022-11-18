import { db } from '../db.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';


export const vregister = (req, res) => {
    
    //Check exisiting user
    const q = "Select * from vendor where v_email=?"
    db.query(q, [req.body.v_email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User Already exist");
        //Hash the Password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.v_pass, salt);

        const q = "Insert into vendor (`v_name`,`v_contact`,`v_email`,`v_address`,`v_pass`) values(?)"
        const values = [
            req.body.v_name,
            req.body.v_contact,
            req.body.v_email,
            req.body.v_address,
            hash,
        ]
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            if (data) return res.status(200).json("User Created");
        })
    })

}
export const vlogin = (req, res) => {
    //Check user
    const q = "select * from vendor where v_email =?";
    db.query(q, [req.body.v_email], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found");

        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.v_pass, data[0].v_pass)
        if (!isPasswordCorrect) return res.status(400).json("Wrong Email or Password")
        const token = jwt.sign({ v_id: data[0].v_id }, "jwtkey");
        const {v_pass,...other}=data[0]

        res.cookie("access_token", token, {httpOnly: true}).status(200).json(other)

    })

}
export const vlogout = (req, res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("Logged Out")
    
}