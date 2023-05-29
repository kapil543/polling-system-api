const express = require('express');
const router = express.Router();

const OptionsController = require('../../../controller/api/v1/options_controller');

router.delete('/:id/delete',OptionsController.DeleteOption);
router.get('/:id/add_vote',OptionsController.Addvote);

module.exports = router;