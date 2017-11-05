// const listings= [];

module.exports= {
  postListing: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    const {
      name,
      description,
      loan_amount,
      monthly_mortgage,
      desired_rent,
      address_line,
      city,
      state2,
      zip,
      img_url
    }= req.body;

    dbInstance.post_listing([name, description, loan_amount, monthly_mortgage, desired_rent, address_line, city, state2, zip, img_url])
      .then( ()=> res.status(200).json())
      .catch( ()=> res.status(500).json());
  },

  getListings: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_listings()
      .then(result=> res.status(200).json(result))
      .catch(res.status(500).json(console.log('error')));
  }
}
