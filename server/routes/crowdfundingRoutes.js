import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import Campaign from '../models/Campaign.js';  // ✅ Correct import

const router = express.Router();

// Create Campaign
router.post('/', authMiddleware, async (req, res) => {
  try {
    const campaign = new Campaign({ ...req.body, user: req.user.userId });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ error: 'Error creating campaign' });
  }
});
// Get All Campaigns
router.get('/', async (req, res) => {
  const campaigns = await Campaign.find().populate('user', 'name email');
  res.json(campaigns);
});

// Update Campaign
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ error: 'Error updating campaign' });
  }
});

// Delete Campaign
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: 'Campaign deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting campaign' });
  }
});

export default router;  // ✅ Ensure this is exported
