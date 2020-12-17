const router = require('express').Router();
const webpush = require("web-push");

webpush.setVapidDetails(
	"mailto:test@test.com",
	process.env.PUBLIC_VAPID_KEY,
	process.env.PRIVATE_VAPID_KEY
);

router.get("/public-vapid-key", (req, res) => {
	res.json({publicVapidKey: process.env.PUBLIC_VAPID_KEY});
});

router.post("/subscribe", (req, res) => {
	const subscription = req.body;
	
	res.status(201).json({});
	
	const payload = JSON.stringify({
		title: "Push Notification Test Title",
		body: "Push Notification Test Body",
		icon: "https://speed.kjrocker.com/wp-content/uploads/2018/04/everad_llogo-1-2.png"
	});
	
	setInterval(() => {
		webpush
			.sendNotification(subscription, payload)
			.then(() => console.log('\n', 'sendNotification done', '\n'))
			.catch(err => console.error(err))
	}, 10000);
});

module.exports = router;


