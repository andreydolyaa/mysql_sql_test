const express = require('express');
const router = express.Router();
const db = require('../db.js');



// GET ALL USERS
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) res.status(400).json({ message: err.message });
        else res.status(200).send(result)
    })
});


//GET ONE USER BY ID
router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM users WHERE ID = ${req.params.id}`, (err, result) => {
        if (err || !result.length) res.status(400).json('COULD NOT FIND USER');
        else {
            res.status(200).json(result)
        }
    });
});


//CREATE NEW USER
router.post('/', (req, res) => {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { age } = req.body;
    const { email } = req.body;
    const { address } = req.body;

    db.query('INSERT INTO users (firstName,lastName,age,email,address) VALUES (?,?,?,?,?)',
        [firstName, lastName, age, email, address],
        (err, result) => {
            if (err) res.status(400).json({ message: err.message });
            else res.status(201).send('USER CREATED');
        }
    )
});


//DELETE A USER
router.delete('/:id', (req, res) => {
    db.query(`DELETE FROM users WHERE ID = ${req.params.id}`, (err, result) => {
        if (err || !result.length) res.status(400).json('COULD NOT DELETE, USER DOSEN\'T EXISTS');
        else res.status(200).send(`USER HAS BEEN DELETED`)
    });
});



// //UPDATE SPECIEFIC USER DETAIL --> e.g TYPE: firstName, VALUE: newName
// router.put('/:id', (req, res) => {
//     let sql = `UPDATE users SET ${req.body.type} = '${req.body.value}' WHERE ID = ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if (err) if (err || !result.length) res.status(400).json('CANNOT UPDATE USER');
//         res.status(200).send(`USER HAS BEEN UPDATED`);
//     })
// });


//UPDATE USER update full column
router.put('/:id', (req, res) => {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { age } = req.body;
    const { email } = req.body;
    const { address } = req.body;
    let sql = `UPDATE users SET 
                firstName = '${firstName}',
                lastName = '${lastName}',
                age = '${age}',
                email = '${email}',
                address = '${address}'
                WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) if (err || !result.length) res.status(400).json('CANNOT UPDATE USER');
        res.status(200).send(`USER HAS BEEN UPDATED`);
    })
});




module.exports = router;