const { model } = require('mongoose');
const { HoldingSchema } = require('../schemas/HOldingSchema');

const HoldingModel = new model("holding", HoldingSchema)

module.exports = {HoldingModel};