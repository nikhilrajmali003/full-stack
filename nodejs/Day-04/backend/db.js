const mongoose = require('mongoose') ;
const colors = require('colors')

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    console.log(colors.blue('Connection is Successfull'))
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect ;