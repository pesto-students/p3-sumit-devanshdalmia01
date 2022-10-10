export default function updateErrorChecker(err, doc, res, message) {
	if (!doc) {
		return res.status(404).json({ success: false, message: message });
	} else {
		return res.status(200).json({
			success: true,
		});
	}
}
