exports.GetWelcomes = (req,res,next) =>{
    res.render("home/welcome",{ pageTitle: "Welcome" });
};