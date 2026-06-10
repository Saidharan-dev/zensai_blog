const express= require('express');
const router= express.Router();
const locals={
        title: 'Zensai blog',
        description: 'A simple blog built with Node.js, Express, and EJS.'
    }
router.get('/', (req, res)=>{
    res.render('index', { locals });
});
router.get('/about', (req, res)=>{
    res.render('about',{ locals});
});
router.get('/contact', (req, res)=>{
    res.render('contact',{ locals});
});
module.exports= router;