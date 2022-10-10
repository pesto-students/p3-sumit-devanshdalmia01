import { stocks, fd, gold, mf, assets } from "../models/assets.js";
import expenses from "../models/expenses.js";
import errorChecker from "../utils/errorChecker.js";

const deleteAsset = async (req, res) => {
	switch (req.params.assetType) {
		case "stock":
			stocks
				.deleteOne({ _id: req.body._id })
				.then(() => {
					assets.updateOne(
						{ userId: req.user._doc.userId },
						{
							$pull: { stocks: req.body._id },
						},
						(err, doc) => errorChecker(err, doc, res, "Could not delete from assets!")
					);
				})
				.catch((err, doc) => errorChecker(err, doc, res, "Could not find stock"));
			break;
		case "fd":
			fd.deleteOne({ _id: req.body._id })
				.then(() => {
					assets.updateOne(
						{ userId: req.user._doc.userId },
						{
							$pull: { fixedDeposit: req.body._id },
						},
						(err, doc) => errorChecker(err, doc, res, "Could not delete from assets!")
					);
				})
				.catch((err, doc) => errorChecker(err, doc, res, "Could not find fd"));
			break;
		case "gold":
			gold.deleteOne({ _id: req.body._id })
				.then(() => {
					assets.updateOne(
						{ userId: req.user._doc.userId },
						{
							$pull: { gold: req.body._id },
						},
						(err, doc) => errorChecker(err, doc, res, "Could not delete from assets!")
					);
				})
				.catch((err, doc) => errorChecker(err, doc, res, "Could not find gold"));
			break;
		case "mf":
			mf.deleteOne({ _id: req.body._id })
				.then(() => {
					assets.updateOne(
						{ userId: req.user._doc.userId },
						{
							$pull: { mutualFund: req.body._id },
						},
						(err, doc) => errorChecker(err, doc, res, "Could not delete from assets!")
					);
				})
				.catch((err, doc) => errorChecker(err, doc, res, "Could not find mutual fund"));
			break;
		case "savings":
			assets.updateOne(
				{ userId: req.user._doc.userId },
				{
					$set: {
						cash: 0,
						bankAccountBalance: 0,
					},
				},
				(err, doc) => errorChecker(err, doc, res, "Could not delete from assets!")
			);
			break;
	}
};

const deleteExpense = async (req, res) => {
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

export { deleteAsset, deleteExpense };
