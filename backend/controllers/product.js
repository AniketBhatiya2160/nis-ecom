import { db } from '../db.js';


export const vGetAllProduct = (req, res) => {
    const q = "Select * from product where v_id=?";
    db.query(q, [req.params.v_id], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const SoldProduct = (req, res) => {
    const q = "Select * from order where v_id=?";
    db.query(q, [req.params.v_id], (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}

export const addProduct = (req, res) => {
    console.log(req.body)
    const q = "INSERT INTO `product` (`p_name`, `p_desc`, `p_image`, `p_price`, `v_id`, `cat_id`) VALUES (?)";
    const values = [
        req.body.p_name,
        req.body.p_desc,
        req.body.imgUrl,
        req.body.p_price,
        req.body.v_id,
        req.body.cat_id]

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json("Product Added")
    })
}
export const updateProduct = (req, res) => {
    const pid = parseInt(req.params.id);
    const q = "Update product set `p_name`=?,`p_desc`=?,`p_price`=?,`p_image`=? where p_id=?";
    const values = [
        req.body.p_name,
        req.body.p_desc,
        req.body.p_image,
        req.body.p_price,
        req.body.cat_id]

    db.query(q, [...values, pid], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json("Product Updated")
    })
}
export const deleteProduct = (req, res) => {
    const pid = parseInt(req.params.id);
    const q = "Delete from product where p_id=?"
    db.query(q, pid, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Data has been deleted successfully!")
    })
}

export const getByProductId = (req, res) => {
    const pid = parseInt(req.params.id);
    const q = "Select * from product where p_id=?";
    db.query(q, pid, (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}
