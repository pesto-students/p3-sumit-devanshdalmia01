import { stocks, fd, gold, mf, assets } from "../models/assets.js";
import { sendEmail } from "../utils/mail.js";
import { v4 } from "uuid";
import addAsset from "../utils/addAsset.js";

const createAsset = async (req, res) => {
	switch (req.params.assetType) {
		case "stock":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				const newStock = new stocks({
					stockId: v4(),
					name: req.body.name,
					quantity: req.body.quantity,
					buyDate: req.body.buyDate,
					buyPrice: req.body.buyPrice,
					sellDate: req.body?.sellDate,
					sellPrice: req.body?.sellPrice,
				});
				newStock.save((err, doc) => {
					if (err) {
						return res.status(400).json({ success: false, message: err.message });
					}
				});
				addAsset(asset, req.params.assetType, newStock, req, res);
			});
			break;
		case "fd":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				const newFd = new fd({
					fdId: v4(),
					name: req.body.name,
					startDate: req.body.startDate,
					principal: req.body.principal,
					maturityDate: req.body?.maturityDate,
					maturityAmount: req.body?.maturityAmount,
				});
				newFd.save((err, doc) => {
					if (err) {
						return res.status(400).json({ success: false, message: err.message });
					}
				});
				addAsset(asset, req.params.assetType, newFd, req, res);
			});
			break;
		case "gold":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				const newGold = new gold({
					goldId: v4(),
					name: "Gold",
					quantityInGrams: req.body.quantityInGrams,
					buyDate: req.body.buyDate,
					buyPricePerGram: req.body.buyPricePerGram,
					sellDate: req.body?.sellDate,
					sellPricePerGram: req.body?.sellPricePerGram,
				});
				newGold.save((err, doc) => {
					if (err) {
						return res.status(400).json({ success: false, message: err.message });
					}
				});
				addAsset(asset, req.params.assetType, newGold, req, res);
			});
			break;
		case "mf":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				const newMF = new mf({
					mfId: v4(),
					name: req.body.name,
					quantity: req.body.quantity,
					buyDate: req.body.buyDate,
					buyNAV: req.body.buyNAV,
					sellDate: req.body?.sellDate,
					sellNAV: req.body?.sellNAV,
				});
				newMF.save((err, doc) => {
					if (err) {
						return res.status(400).json({ success: false, message: err.message });
					}
				});
				addAsset(asset, req.params.assetType, newMF, req, res);
			});
			break;
		case "savings":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				if (asset) {
					asset.cash = req.body?.cash;
					asset.bankAccountBalance = req.body?.bankAccountBalance;
					asset.save((err, doc) => {
						// sendEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
						return res.status(200).json({
							success: true,
							data: asset,
						});
					});
				} else {
					const newAsset = new assets({
						assetId: v4(),
						userId: req.user._doc.userId,
					});
					newAsset.cash = req.body?.cash;
					newAsset.bankAccountBalance = req.body?.bankAccountBalance;
					newAsset.save((err, asset) => {
						if (err) {
							return res.status(400).json({ success: false, message: err.message });
						}
						// sendEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
						return res.status(200).json({
							success: true,
							data: asset,
						});
					});
				}
			});
			break;
	}
};

export { createAsset };
