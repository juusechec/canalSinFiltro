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
    res.json({
      videos
    });
  });
}

/**
 * Save a video
 * @param req
 * @param res
 * @returns void
 */
export function addVideo(req, res) {
  if (!req.body.video.titulo || !req.body.video.autor || !req.body.video.descripcion || !req.body.video.url) {
    res.status(403).end();
  }

  // console.log('Jejejej');
  // var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  // var regex = new RegExp(expression);
  //
  // if (!req.body.video.url.match(regex)) {
  //   //"No match"
  //   res.status(403).end();
  // }

  const newVideo = new Video(req.body.video);

  // Let's sanitize inputs
  newVideo.cuid = cuid();
  newVideo.titulo = sanitizeHtml(newVideo.titulo);
  newVideo.autor = sanitizeHtml(newVideo.autor);
  newVideo.descripcion = sanitizeHtml(newVideo.descripcion);
  newVideo.url = newVideo.url;
  newVideo.idsCategorias = [];
  newVideo.categorias = [];

  console.log('newVideo', newVideo);

  newVideo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({
      video: saved
    });
  });
}

/**
 * Get a single video
 * @param req
 * @param res
 * @returns void
 */
export function getVideo(req, res) {
  Video.findOne({
    cuid: req.params.cuid
  }).exec((err, video) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({
      video
    });
  });
}

/**
 * Delete a video
 * @param req
 * @param res
 * @returns void
 */
export function deleteVideo(req, res) {
  Video.findOne({
    cuid: req.params.cuid
  }).exec((err, video) => {
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
  if (!req.body.video.cuid || !req.body.video.titulo || !req.body.video.autor || !req.body.video.descripcion || !req.body.video.url) {
    res.status(403).end();
  }

  const oldVideo = {};

  // Let's sanitize inputs
  oldVideo.cuid = sanitizeHtml(req.body.video.cuid);
  oldVideo.titulo = sanitizeHtml(req.body.video.titulo);
  oldVideo.autor = sanitizeHtml(req.body.video.autor);
  oldVideo.descripcion = sanitizeHtml(req.body.video.descripcion);
  oldVideo.url = req.body.video.url;
  oldVideo.idsCategorias = [];
  oldVideo.categorias = [];

  console.log('oldVideo.cuid', oldVideo.cuid);

  Video.findOne({
    cuid: oldVideo.cuid
  }).exec((err, getVideo) => {
    console.log('video.controller.js updateVideo getVideo', getVideo);
    if (err) {
      res.status(500).send(err);
    }
    Video.findByIdAndUpdate(getVideo._id, oldVideo).exec((err, video) => {
      if (err) {
        res.status(500).send(err);
      }
      //res.status(200).end();
      res.json({
        video
      });
    });
  });
}
