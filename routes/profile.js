const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:platformUserIdentifier', async (req, res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    };

    const { platform, platformUserIdentifier } = req.params;

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${platformUserIdentifier}`,
      {
        headers
      }
    );
    // console.log(response);

    const data = await response.json();

    // console.log(res.json(data));

    if(data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: 'Profile Not Found'
      });
    }


    res.json(data);
    // console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error!!!!!!!"
    });
  }
});

module.exports = router;
