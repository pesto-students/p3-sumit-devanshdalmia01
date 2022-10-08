import { stocks, fd, gold, mf, assets } from "../models/assets.js";
import { sendConfirmationEmail } from "../middlewares/auth.js";
import { v4 } from "uuid";

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
				if (asset) {
					asset.stocks.push(newStock._id);
					asset.save((err, doc) => {
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
					newAsset.stocks.push(newStock._id);
					newAsset.save((err, asset1) => {
						if (err) {
							return res.status(400).json({ success: false, message: err.message });
						}
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset1, "asset");
						return res.status(200).json({
							success: true,
							data: asset1,
						});
					});
				}
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
				if (asset) {
					asset.fixedDeposit.push(newFd._id);
					asset.save((err, doc) => {
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
					newAsset.fixedDeposit.push(newFd._id);
					newAsset.save((err, asset) => {
						if (err) {
							return res.status(400).json({ success: false, message: err.message });
						}
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
						return res.status(200).json({
							success: true,
							data: asset,
						});
					});
				}
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
				if (asset) {
					asset.gold.push(newGold._id);
					asset.save((err, doc) => {
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
					newAsset.gold.push(newGold._id);
					newAsset.save((err, asset) => {
						if (err) {
							return res.status(400).json({ success: false, message: err.message });
						}
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
						return res.status(200).json({
							success: true,
							data: asset,
						});
					});
				}
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
				if (asset) {
					asset.mutualFund.push(newMF._id);
					asset.save((err, doc) => {
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
					newAsset.mutualFund.push(newMF._id);
					newAsset.save((err, asset) => {
						if (err) {
							return res.status(400).json({ success: false, message: err.message });
						}
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
						return res.status(200).json({
							success: true,
							data: asset,
						});
					});
				}
			});
			break;
		case "savings":
			assets.findOne({ userId: req.user._doc.userId }, function (err, asset) {
				if (asset) {
					asset.cash = req.body?.cash;
					asset.bankAccountBalance = req.body?.bankAccountBalance;
					asset.save((err, doc) => {
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
						// sendConfirmationEmail(req.user._doc.firstName, req.user._doc.email, asset, "asset");
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
