const express=require("express");
const loggedin=require("../controllers/loggedin")
const logout = require("../controllers/logout")
const router = express.Router();

router.get("/", loggedin, (req,res) => {
    if(req.user){
    res.render("login",{status:"loggedin", user:req.user});
    }
    else{
        res.render("login",{status:"no", user:"nothing"});
    }
})

router.get("/register",(req,res) => {
    res.sendFile("register.html",{root:"./public"});
})
router.get("/login",(req,res)=>{
    res.sendFile("login.html",{root:"./public/"});
})

router.get('/homepage', (req, res) => {
    res.sendFile("homepage.html",{root:"./public/"});
});






router.get("/logout", logout)

    
module.exports = router;