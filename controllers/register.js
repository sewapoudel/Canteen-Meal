const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { firstname, lastname, email, password: Npassword } = req.body;
    if (!firstname || !lastname || !email || !Npassword) return res.json({ status: "error", error: "Please enter correct data" });
    else{
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        
       
                        db.query('SELECT email FROM users WHERE email = ?', [email], async (erro, resul) => {
                            if (erro) throw erro;
                            if (resul[0]) return res.json({ status: "error", error: "The email has already been taken" });
                            else {
                                // Hash password and insert new user into the database
                                const password = await bcrypt.hash(Npassword,8);
                                console.log(password);
                                

                                db.query('INSERT INTO users SET ?', { firstname: firstname, lastname: lastname, email: email, password: password }, (err, resu) => {
                                    if (err) throw err;
                                    return res.json({ status: "success", success: "User has been registered" });
                                });
                            }
                        });
                    }}


module.exports = register;
