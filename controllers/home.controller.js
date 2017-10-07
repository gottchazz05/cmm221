exports.index = function(req,res) {

	let content = {
		highlight: {
			url:'/assets/images/home/banner/highlight.jpg',
			title: 'Hello'
		},

		thumbnail:[
		{
			url:'/assets/images/home/banner/thumbnail-1.jpg',
			title: 'Market'
		},
		{
			url:'/assets/images/home/banner/thumbnail-2.jpg',
			title: 'Office'
		},
		{
			url:'/assets/images/home/banner/thumbnail-3.jpg',
			title: 'Cafe'
		},
		{
			url:'/assets/images/home/banner/thumbnail-4.jpg',
			title: 'Football'
		}
		]
	}
	res.render('home.twig', content)
}