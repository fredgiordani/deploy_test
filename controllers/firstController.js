// Exemple d'un controller basique

function showViewWithFirstController  (req, res)  {
  res.render('viewThanksToFirstRoute');
};


module.exports=[
    showViewWithFirstController 
]