const asyncHandler = require("express-async-handler");


const User = require("../models/user");
const account = require("../models/account");

//@description     To add Metamask accounts to users
//@route           POST /api/account/
//@access          Public
const addAccount = asyncHandler(async (req, res) => {
   
   //console.log(keyword)
   const owner_username=req.user.username
   const address=req.body.address

   if (!owner_username || !address) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

    
   // console.log(req.user)
   const accountExists = await account.findOne({$and:[{ address:req.body.address },{owner_username:req.user.username}]})
   const accounNumber=await account.countDocuments({owner_username:req.user.username})

  if(accountExists!=null){
    res.json({
    accountExist:true
    })
  }
  else if(accounNumber>3)
  {
    res.status(400);
    throw new Error("Account Number Exceeded");


  }
  else{

    const accountLinked = await account.create({
        
        owner_username,
        address,
        
      });
      if(accountLinked)
      {
        res.json({
            AccountLinked:true,

        })
      }
      else{
        res.status(400);
        throw new Error("Problem in LInking Account");

      }
    

  }


});



//@description     To Display Metamask accounts to users
//@route           POST /api/account/show
//@access          Public
const showAccount = asyncHandler(async (req, res) => {
   
    //console.log(keyword)
     
    // console.log(req.user)
 
   const accounts = await account.find(
     {owner_username:req.user.username}
 )
 res.send(accounts)
 
 
 });


module.exports = { addAccount,showAccount };