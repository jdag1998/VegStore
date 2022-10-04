const Veg = require('../models/veg')
const vegs = require('../models/seed')

// ROUTE     GET /vegs   (index)
const findAllVegs = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Veg.find({}, (err, foundVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegs/Index', { veg: foundVeg })
        }
    })
}

// ROUTE      GET /vegs/new    (new)
const showNewView = (req, res) => {     
   
    res.render('vegs/New')
}

// ROUTE     POST /vegs     (create)
const createNewVeg = (req, res) => {
    if (req.body.costEfficient === "on") {
        req.body.costEfficient = true
    } else {
        req.body.costEfficient = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
  Veg.create(req.body, (err, createdVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegs')
        }
    })
}


// ROUTE       GET /vegs/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
  Veg.deleteMany({}, (err, deletedVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(vegs)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
          Veg.create(vegs, (err, createdVeg) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegs')
                }
            })
        }
    })
}

// ROUTE     GET /vegs/:id     (show)
const showOneVeg = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Veg.findById(req.params.id, (err, foundVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegs/Show', { veg: foundVeg })
        }
    })
}


// ROUTE      GET /vegs/:id/edit     (edit)
const showEditView = (req, res) => {
  Veg.findById(req.params.id, (err, foundVeg) => {
    console.log(req.params.id)
    console.log(foundVeg)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegs/Edit', { veg: foundVeg })
        }
    })
}

// ROUTE     PUT /vegs/:id       (update)
const updateOneVeg = (req, res) => {

    if (req.body.costEfficient === "on") {
        req.body.costEfficient = true
    } else {
        req.body.costEfficient = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundVeg or updatedVeg)
    Veg.findByIdAndUpdate(req.params.id, req.body, (err, foundVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegs/${req.params.id}`)
        }
    })
}


// ROUTE       DELETE /vegs/:id      (destroy)
const deleteOneVeg = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index! (in DB)')
    
    Veg.findByIdAndDelete(req.params.id, (err, deletedVeg) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegs')
        }
    })
}

module.exports = {
    findAllVegs,
    showNewView, 
    createNewVeg,
    seedStarterData,
    showOneVeg,
    showEditView,
    updateOneVeg,
    deleteOneVeg
}