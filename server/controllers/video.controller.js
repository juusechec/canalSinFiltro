import Video from '../models/video';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all videos
 * @param req
 * @param res
 * @returns void
 */
export function getVideos(req, res) {
  Video.find().sort('-fechaAgregado').exec((err, videos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({videos});
  });
}

/**
 * Save a video
 * @param req
 * @param res
 * @returns void
 */
export function addVideo(req, res) {
  if (!req.body.video.name || !req.body.video.title || !req.body.video.content) {
    res.status(403).end();
  }

  const newVideo = new Video(req.body.video);

  // Let's sanitize inputs
  newVideo.title = sanitizeHtml(newVideo.title);
  newVideo.name = sanitizeHtml(newVideo.name);
  newVideo.content = sanitizeHtml(newVideo.content);

  newVideo.slug = slug(newVideo.title.toLowerCase(), {lowercase: true});
  newVideo.cuid = cuid();
  newVideo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({video: saved});
  });
}

/**
 * Get a single video
 * @param req
 * @param res
 * @returns void
 */
export function getVideo(req, res) {
  Video.findOne({cuid: req.params.cuid}).exec((err, video) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({video});
  });
}

/**
 * Delete a video
 * @param req
 * @param res
 * @returns void
 */
export function deleteVideo(req, res) {
  Video.findOne({cuid: req.params.cuid}).exec((err, video) => {
    if (err) {
      res.status(500).send(err);
    }

    video.remove(() => {
      res.status(200).end();
    });
  });
}

/**
 * Update a video
 * @param req
 * @param res
 * @returns void
 */
export function updateVideo(req, res) {
  if (!req.body.video.name || !req.body.video.title || !req.body.video.content) {
    res.status(403).end();
  }

  const oldVideo = {};

  // Let's sanitize inputs
  oldVideo.cuid = sanitizeHtml(req.body.video.cuid);
  oldVideo.title = sanitizeHtml(req.body.video.title);
  oldVideo.name = sanitizeHtml(req.body.video.name);
  oldVideo.content = sanitizeHtml(req.body.video.content);

  oldVideo.slug = slug(req.body.video.title.toLowerCase(), {lowercase: true});

  Video.findOne({cuid: oldVideo.cuid}).exec((err, getVideo) => {
    if (err) {
      res.status(500).send(err);
    }
    Video.findByIdAndUpdate(getVideo._id, oldVideo).exec((err, video) => {
      if (err) {
        res.status(500).send(err);
      }
      //res.status(200).end();
      res.json({video});
    });
  });
}
