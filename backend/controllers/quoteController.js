const quoteService = require('../services/quoteService');

exports.createQuote = async (req, res) => {
  try {
    const { name, email, phone, eventDate, barType } = req.body;

    const result = await quoteService.processQuote({
      name,
      email,
      phone,
      eventDate,
      barType,
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
