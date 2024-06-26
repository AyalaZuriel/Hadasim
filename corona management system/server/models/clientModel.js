const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    number: Number,
    phone: { type: Number, required: true },
    telephone: String,
    dob: { type: Date, required: true },
    vaccineDates: [Date],
    vaccineManufacturers: [String],
    positiveDate: Date,
    recoveryDate: Date,
})

module.exports = mongoose.model('Client', clientSchema);
