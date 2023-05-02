import { request, response } from 'express';

const Rates =
	 [
		{
			"code": "THB",
			"currency": "bat (Tajlandia)",
			"mid": 0.1231
		},
		{
			"code": "USD",
			"currency": "dolar ameryka\u0144ski",
			"mid": 4.2151
		},
		{
			"code": "AUD",
			"currency": "dolar australijski",
			"mid": 2.8397
		},
		{
			"code": "HKD",
			"currency": "dolar Hongkongu",
			"mid": 0.5369
		},
		{
			"code": "CAD",
			"currency": "dolar kanadyjski",
			"mid": 3.1534
		},
		{
			"code": "NZD",
			"currency": "dolar nowozelandzki",
			"mid": 2.6178
		},
		{
			"code": "SGD",
			"currency": "dolar singapurski",
			"mid": 3.1656
		},
		{
			"code": "EUR",
			"currency": "euro",
			"mid": 4.6286
		},
		{
			"code": "HUF",
			"currency": "forint (W\u0119gry)",
			"mid": 0.012456
		},
		{
			"code": "CHF",
			"currency": "frank szwajcarski",
			"mid": 4.7031
		},
		{
			"code": "GBP",
			"currency": "funt szterling",
			"mid": 5.2428
		},
		{
			"code": "UAH",
			"currency": "hrywna (Ukraina)",
			"mid": 0.1147
		},
		{
			"code": "JPY",
			"currency": "jen (Japonia)",
			"mid": 0.031419
		},
		{
			"code": "CZK",
			"currency": "korona czeska",
			"mid": 0.1981
		},
		{
			"code": "DKK",
			"currency": "korona du\u0144ska",
			"mid": 0.6211
		},
		{
			"code": "ISK",
			"currency": "korona islandzka",
			"mid": 0.030919
		},
		{
			"code": "NOK",
			"currency": "korona norweska",
			"mid": 0.4035
		},
		{
			"code": "SEK",
			"currency": "korona szwedzka",
			"mid": 0.4097
		},
		{
			"code": "RON",
			"currency": "lej rumu\u0144ski",
			"mid": 0.9372
		},
		{
			"code": "BGN",
			"currency": "lew (Bu\u0142garia)",
			"mid": 2.3665
		},
		{
			"code": "TRY",
			"currency": "lira turecka",
			"mid": 0.2172
		},
		{
			"code": "ILS",
			"currency": "nowy izraelski szekel",
			"mid": 1.1553
		},
		{
			"code": "CLP",
			"currency": "peso chilijskie",
			"mid": 0.005264
		},
		{
			"code": "PHP",
			"currency": "peso filipi\u0144skie",
			"mid": 0.0751
		},
		{
			"code": "MXN",
			"currency": "peso meksyka\u0144skie",
			"mid": 0.2342
		},
		{
			"code": "ZAR",
			"currency": "rand (Republika Po\u0142udniowej Afryki)",
			"mid": 0.2318
		},
		{
			"code": "BRL",
			"currency": "real (Brazylia)",
			"mid": 0.853
		},
		{
			"code": "MYR",
			"currency": "ringgit (Malezja)",
			"mid": 0.9502
		},
		{
			"code": "IDR",
			"currency": "rupia indonezyjska",
			"mid": 0.00028394
		},
		{
			"code": "INR",
			"currency": "rupia indyjska",
			"mid": 0.051382
		},
		{
			"code": "KRW",
			"currency": "won po\u0142udniowokorea\u0144ski",
			"mid": 0.003202
		},
		{
			"code": "CNY",
			"currency": "yuan renminbi (Chiny)",
			"mid": 0.613
		},
		{
			"code": "XDR",
			"currency": "SDR (MFW)",
			"mid": 5.6876
		}
	]



const dataEndpoint = (router) => {
	// GET ALL POSTS
	router.get('/api/posts', async (request, response, next) => {
		response.status(200).send({ Rates });
	});

	// GET POST BY ID
	/*router.get('/api/post/:id', async (request, response, next) => {
		const searchPostId = Number(request.params.id);
		const searchPost = posts.find((post) => post.id === searchPostId);
		response.status(200).send({ post: searchPost });
	});*/

	// POST
	/*router.post('/api/posts', async (request, response, next) => {
		posts.push(request.body.newPost);

		response.status(200).send({ post: posts[posts.length - 1] });
	});*/

	// PUT - Update Post by ID
    /*router.put("/api/posts/:id", async (request, response, next) => {
        const postId = parseInt(request.params.id);
        const postIndex = posts.findIndex((post) => post.id === postId);

        if (postIndex !== -1) {
          posts[postIndex] = { ...posts[postIndex], ...request.body.updatedPost };
        posts[postIndex] = Object.assign({}, posts[postIndex], request.body.updatedPost);
          response.status(200).send({ post: posts[postIndex] });
        } else {
          response.status(404).send({ error: "Post not found" });
        }
      });*/
    };
export default dataEndpoint;
