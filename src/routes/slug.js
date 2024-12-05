import vaultContainerModal from '../model/vaultContainer.js';
import authenticateUser from '../middleware/authenticate.js';

import express from 'express';

const router = express.Router();

router.get('/container/:slug', authenticateUser,async (req, res) => {
  try {
    const { slug } = req.params;
    const container = await vaultContainerModal.findOne({ slug });
    if (!container) {
      return res.status(404).send('Container not found');
    }
    console.log(container._id);
    res.render('container', { container});
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});


export default router;