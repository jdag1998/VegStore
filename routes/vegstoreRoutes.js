// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of fruit
const Veg = require('../models/veg')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllVegs,
    showNewView, 
    createNewVeg,
    seedStarterData,
    showOneVeg,
    showEditView,
    updateOneVeg,
    deleteOneVeg
} = require('../controllers/vegController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllVegs)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneVeg)

// Setup "update" route
router.put('/:id', updateOneVeg)

// Setup "create" route
router.post('/', createNewVeg)

// Setup "edit" route
router.get('/:id/edit', showEditView)
// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "show" route  
router.get('/:id', showOneVeg)



module.exports = router