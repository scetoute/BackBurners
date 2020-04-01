const router = require('express').Router();
const { Budget } = require('../Database/Objects')

router.put('/', async (req, res, next) => {
    try {
        const user = req.body;
        const budget = await Budget.findOne({where: {userId: user.id}});
        if (!budget) res.sendStatus(404);
        const updatedBudget = await budget.update(req.body);
        res.json(updatedBudget);
    } catch (err) {
      next(err);
    }
});

router.get('/:userId', async (req, res, next) => {
    try {
        const userId = req.body.id;
        const budget = await Budget.findOne({where: {userId: userId}});
        if (!budget) res.sendStatus(404);
        res.json(budget);
    } catch (err) {
        next(err);
    }
});

module.exports = router;