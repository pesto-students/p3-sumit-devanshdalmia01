import { stocks, fd, gold, mf, assets } from "../models/assets.js";
import expenses from "../models/expenses.js";
import errorChecker from "../utils/errorChecker.js";

const updateAsset = async (req, res) => {
	switch (req.params.assetType) {
		case "stock":
			stocks.updateOne(
				{ _id: req.body._id },
				{
					$set: {
						name: req.body?.name,
						quantity: req.body?.quantity,
						buyDate: req.body?.buyDate,
						buyPrice: req.body?.buyPrice,
						sellDate: req.body?.sellDate,
						sellPrice: req.body?.sellPrice,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "Stock not found!")
			);
			break;
		case "fd":
			fd.updateOne(
				{ _id: req.body._id },
				{
					$set: {
						name: req.body?.name,
						startDate: req.body?.startDate,
						principal: req.body?.principal,
						maturityDate: req.body?.maturityDate,
						maturityAmount: req.body?.maturityAmount,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "FD not found!")
			);
			break;
		case "gold":
			gold.updateOne(
				{ _id: req.body._id },
				{
					$set: {
						name: req.body?.name,
						quantityInGrams: req.body?.quantityInGrams,
						buyDate: req.body?.buyDate,
						buyPricePerGram: req.body?.buyPricePerGram,
						sellDate: req.body?.sellDate,
						sellPricePerGram: req.body?.sellPricePerGram,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "gold not found!")
			);
			break;
		case "mf":
			mf.updateOne(
				{ _id: req.body._id },
				{
					$set: {
						name: req.body?.name,
						quantity: req.body?.quantity,
						buyDate: req.body?.buyDate,
						buyNAV: req.body?.buyNAV,
						sellDate: req.body?.sellDate,
						sellNAV: req.body?.sellNAV,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "mf not found!")
			);
			break;
		case "savings":
			assets.updateOne(
				{ userId: req.user._doc.userId },
				{
					$set: {
						cash: req.body?.cash,
						bankAccountBalance: req.body?.bankAccountBalance,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "asset not found!")
			);
			break;
	}
};

const updateExpense = async (req, res) => {
	expenses.updateOne(
		{ _id: req.body._id },
		{
			$set: {
				description: req.body?.description,
				amount: req.body?.amount,
				category: req.body?.category,
				date: req.body?.date,
			},
		},
		(err, doc) => errorChecker(err, doc, res, "Expense not found!")
	);
};

export { updateAsset, updateExpense };
