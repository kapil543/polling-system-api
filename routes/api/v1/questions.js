const express = require('express');
const router = express.Router();

const QuestionsController = require('../../../controller/api/v1/questions_controller');

router.post('/create',QuestionsController.Create);
router.get('/:id',QuestionsController.Fetch);
router.delete('/:id/delete',QuestionsController.Delete);
router.post('/:id/options/create',QuestionsController.CreateOption);

module.exports = router;

