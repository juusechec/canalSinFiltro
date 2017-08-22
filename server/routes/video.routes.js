import { Router } from 'express';
import * as VideoController from '../controllers/video.controller';
const router = new Router();

// Get all Videos
router.route('/videos').get(VideoController.getVideos);

// Get one video by cuid
router.route('/videos/:id').get(VideoController.getVideo);

// Add a new Video
router.route('/videos').post(VideoController.addVideo);

// Delete a video by cuid
router.route('/videos/:id').delete(VideoController.deleteVideo);

// Add a new Video
router.route('/videos').put(VideoController.updateVideo);

export default router;
