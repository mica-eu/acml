const rastrear = require('@rastrear/acml');

module.exports = async (req, res) => {
  try {
    const data = await rastrear.allEvents(req.query.code);
    res.json(data);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};
