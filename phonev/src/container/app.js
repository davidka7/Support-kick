var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
app.post("url/add",(req, res, next) =>{
const phoneNumber = req.body.username


createNewAccesCode.save()
.then(() => res.json("phoneNumber added"))
.catch(err => res.status(400).json('Error:'+err))

})
//    (POST) CreateNewAccessCode
//    Parameters: phoneNumber
//    Return: a random 6-digit access code
//    Other requirement: save this access code to the phoneNumber in the database
//    (POST) ValidateAccessCode
//    Parameters: accessCode, phoneNumber
//    Return: { success: true }
//    Other requirement: set the access code to empty string once validation is complete





app.listen(3001, () => {
 console.log("Server running on port 3001");
});