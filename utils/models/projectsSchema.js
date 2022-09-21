import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: null
    },
    github: {
        type: String,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true,
        default: new Date().toLocaleDateString('pt-PT'),
    },
})

module.exports = mongoose.models.projects || mongoose.model('projects', projectSchema);