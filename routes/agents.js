const express = require('express')
const router = express.Router()
const Agents = require('../models/agents')

// Getting all
router.get('/', async (req, res) => {
    try {
        const agents = await Agents.find()
        res.json(agents)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Getting one
router.get('/:id', getAgent, (req, res) => {
    res.send(res.agent.name)
}) 

async function getAgent(req, res, next) {
    let agent
    try {
        agent = await Agents.findById(req.params.id)
        if (agent == null) {
            return res.status(404).json({message: 'Cannot find agent.'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.agent = agent
    next()
}

module.exports = router
