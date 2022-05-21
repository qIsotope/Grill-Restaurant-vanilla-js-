// FIND THE PARENTS OF DELIVERY ITEMS
const listOfProducts = document.querySelector('.delivery-content')
// ARRAY OF INFORMATION ABOUT ITEMS
const arrayOfItems = [
	// ITEMS STEAK CATEGORY
	{
		category: 'steak',
		URL: './images/delivery/steak/steak1.jpg',
		name: 'Steaks with goulash sauce',
		price: '$15.50',
		cooking: 'Enjoy fillet steak with sauce for a healthy dinner that also boasts sweet potato fries, spinach and cherry tomatoes.',
		ingridients: '3 tsp rapeseed oil plus extra for the steaks,small onions,halved and sliced, green pepper deseeded and diced, garlic cloves , sliced',
	},

	{
		category: 'steak',
		URL: './images/delivery/steak/steak2.jpg',
		name: 'Steak haché with pommes frites',
		price: '$17.50',
		cooking: 'A classic French recipe of bun-less burger & chips, that can be found in every brasserie and bistro.',
		ingridients: '1 tbsp vegetable oil 4 shallots very finely chopped freshly ground beef thyme sprigs, leaves picked and chopped',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak3.jpeg',
		name: 'Steak Diane',
		price: '$22.50',
		cooking: 'Treat someone to a classic steak diane for supper and impress with your flambé skills. For the ultimate luxury, we’ve gone for fillet steak',
		ingridients: '2 fillet steaks,cut from the centre of the fillet 25g butter 1 thyme sprig 1 large or 2 small shallots, peeled and finely chopped',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak4.jpg',
		name: 'Simple sirloin steak',
		price: '$24.50',
		cooking: 'Master the art of cooking the perfect sirloin steak for truly tender meat and you\'ll never look back. Serve with chunky chips and salad for a weekend treat',
		ingridients: '2 sirloin steaks, each about 200g and 2cm thick 1 tbsp sunflower oil 1 tbsp butter sprig of thyme or rosemary',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak5.jpg',
		name: 'Pastrami-style steak & mustard mayo',
		price: '$20.00',
		cooking: 'Pair sauerkraut and mustard mayo with steak to make a sensational combination.',
		ingridients: '2 x 250g sirloin or ribeye steaks sunflower or vegetable oil, for drizzling 2 tbsp mayonnaise 2 tsp English mustard 50g butter',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak6.jpg',
		name: 'Bavette with chimichurri sauce',
		price: '$16.50',
		cooking: 'Steak with chimichurri sauce is a classic combination, but pickled jalapeños give it a modern twist.',
		ingridients: '1 ½kg bavette steak 2 tbsp olive oil 2 green chillies , sliced 100ml extra virgin olive oil large pack parsley , leaves picked',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak7.jpg',
		name: 'Rump steak',
		price: '$18.50',
		cooking: 'Try our perfect method for cooking a simple rump steak with these easy, foolproof steps.',
		ingridients: '2 x 200g rump steak about 2-3cm thick 1 tbsp sunflower oil 1 tbsp unsalted butter 1 large garlic clove bashed once',
	},
	{
		category: 'steak',
		URL: './images/delivery/steak/steak8.jpg',
		name: 'Steak with mushroom puff tartlets',
		price: '$23.50',
		cooking: 'These are sort of deconstructed Beef Wellingtons, but the result is much lighter and crisper',
		ingridients: '100g puff pastry 1 tbsp olive oil , plus a little extra 1 shallot , finely chopped 100g chestnut mushroom , chopped',
	},
	// ITEMS STEAK CATEGORY

	// ITEMS RIBS CATEGORY
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs1.jpg',
		name: 'Stickiest ever BBQ ribs with chive dip',
		price: '$25.50',
		cooking: 'Slow cook these American-style pork ribs so they\'re really tender then coat in an irresistibly sweet 6 spring onions, sliced',
		ingridients: '2 racks baby back pork ribs 2 cans cola 2 tsp toasted sesame seed',
	},
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs2.jpg',
		name: 'Slow cooker ribs',
		price: '$30.00',
		cooking: 'Slow cooking is the perfect way to get tender melt-in-the-mouth pork ribs, simply throw everything in the slow cooker then finish off in the oven or bbq',
		ingridients: '1 ½kg meaty pork ribs 1 bottle barbecue sauce (350g approx) 2 pork stock cubes 2 bay leaves 1 tsp coriander seed',
	},
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs3.jpg',
		name: 'Mexican-style chilli ribs',
		price: '$17.00',
		cooking: 'Serve these sticky chipotle pork ribs come rain or shine- they can be finished by grill or barbecue.',
		ingridients: '1 ½kg pork spare rib - the meatier the better 1 tbsp ground cumin 1 tsp hot smoked paprika 1 tbsp ground coriander',
	},
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs4.jpg',
		name: 'Porcini-rubbed rib of beef',
		price: '$28.00',
		cooking: 'This rib of beef is a real showstopper and packed with umami flavour, but it\'s so easy to make too.',
		ingridients: 'dried porcini mushrooms 3kg grass-fed rib of beef 1 tbsp smoked sea salt',
	},
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs5.jpg',
		name: 'Sizzling spare ribs with BBQ sauce',
		price: '$27.50',
		cooking: 'Some like it hot, so sizzle your ribs with BBQ sauce.',
		ingridients: '4 x 500g packs pork spare ribs 1 bunch of spring onions , roughly chopped (green stems and all) 1 Scotch bonnet chilli, seeded and finely chopped 6 tbsp Appleton rum',
	},
	{
		category: 'ribs',
		URL: './images/delivery/ribs/ribs6.jpg',
		name: 'Chinese pork ribs',
		price: '$23.50',
		cooking: 'Sticky, tender beef ribs with a subtle oak-smoked flavour are sure to be a hit at your next barbecue.',
		ingridients: '12 meaty pork ribs 100ml hoisin sauce 2 tbsp soy sauce 1 tbsp clear honey 1 tbsp vinegar 1 tsp Chinese five-spice powder',
	},
	// ITEMS RIBS CATEGORY

	// ITEMS SAUSAGE CATEGORY
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage1.jpg',
		name: 'Easy sausage casserole',
		price: '$22.50',
		cooking: 'A comforting and hearty one-pot sausage casserole recipe with spicy chorizo, smoked paprika and plenty of vegetables, perfect for a filling family meal.',
		ingridients: '6 cooking chorizo sausages 2 tbsp olive or rapeseed oil 1 onion, finely chopped 2 medium sticks celery, finely chopped 1 yellow pepper, chopped 1 red pepper, chopped',
	},
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage2.jpg',
		name: 'Toad-in-the-hole',
		price: '$21.00',
		cooking: 'Serve this comforting classic made with chipolata sausages and a simple batter – it`s easy enough that kids can help make it.',
		ingridients: '12 chipolatas 1 tbsp sunflower oil 140g plain flour 2 eggs 175ml semi-skimmed milk',
	},
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage3.jpg',
		name: 'Chunky sausage & tomato pasta',
		price: '$15.50',
		cooking: 'Jazz up sausages with this spicy tomato pasta.',
		ingridients: '1 tbsp olive oil 4 thick pork sausages, cut into bite-sized pieces 2 garlic cloves, crushed medium white wine 1 tbsp tomato purée',
	},
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage4.jpg',
		name: 'Sausages with oregano, mushrooms & olives',
		price: '$11.00',
		cooking: 'Mash is a must for a winning sausage dish, give it a boost with this easy one-pot stew.',
		ingridients: '450g pack reduced-fat sausage 2 tsp dried oregano 2 garlic cloves , sliced 400g can chopped or cherry tomato',
	},
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage5.jpg',
		name: 'Sausage casserole with garlic toasts',
		price: '$31.00',
		cooking: 'Smarten up sausages and sneak in a few vital veggies too with this comforting midweek meal.',
		ingridients: '8 reduced-fat sausages 1 yellow pepper , deseeded and chopped 4 red onions , cut into wedges 400g can chopped tomatoes',
	},
	{
		category: 'sausage',
		URL: './images/delivery/sausage/sausage6.jpg',
		name: 'Sausage & lentil one-pot',
		price: '$32.00',
		cooking: 'Pack of sausages in the fridge? Try them in this rich stew - it\'s made in just one pot, so you\'ll save on washing up.',
		ingridients: '1 tbsp olive oil 400g pack sausage 1 onion, finely chopped 1 garlic clove, crushed 1 red pepper, sliced',
	},
	// ITEMS SAUSAGE CATEGORY

	// ITEMS CHICKEN CATEGORY
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken1.jpg',
		name: 'Classic roast chicken & gravy',
		price: '$33.50',
		cooking: 'What more can we say? A classic roast chicken recipe should be in everyone\'s repertoire, and it can always save the day.',
		ingridients: '2 tbsp sunflower oil 1 onion, thinly sliced 2 garlic cloves, crushed thumb-sized piece of ginger, grated 6 chicken thighs, boneless and skinless 100g Greek yogurt',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken2.jpg',
		name: 'Easy chicken curry',
		price: '$21.00',
		cooking: 'This easy staple chicken curry is a fantastic recipe for family dinners. It\'s made with just a handful of ingredients and is enriched with creamy yogurt.',
		ingridients: '1 onion, roughly chopped 2 carrots, roughly chopped 1 free range chicken, about 1.5kg/3lb 5oz 1 lemon, halved small bunch thyme',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken3.jpg',
		name: 'Chicken and mushrooms',
		price: '$33.00',
		cooking: 'A healthy and low calorie chicken casserole with bacon, button mushrooms, peas and a parsley sauce - use chicken thighs for extra flavour and juiciness.',
		ingridients: '2 tbsp olive oil 500g boneless, skinless chicken thigh flour, for dusting 50g cubetti di pancetta 300g small button mushroom',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken4.jpg',
		name: 'Nutty chicken satay strips',
		price: '$24.50',
		cooking: 'Keep these nutty chicken satay strips in the fridge for a healthy choice when you\'re peckish. The chicken is served with cucumber and sweet chilli sauce.',
		ingridients: '2 tbsp chunky peanut butter (without palm oil or sugar) 1 garlic clove, finely grated 1 tsp Madras curry powder few shakes soy sauce',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken5.jpg',
		name: 'Chicken tikka masala',
		price: '$22.50',
		cooking: 'This takeaway favourite is freezer-friendly and quick to reheat, giving you the chance to get ahead and save money.',
		ingridients: '4 tbsp vegetable oil 25g butter 4 onions, roughly chopped 6 tbsp chicken tikka masala paste (use shop-bought or make your own – see recipe, below) 2 red peppers, deseeded and cut into chunks',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken6.jpg',
		name: 'Foolproof slow roast chicken',
		price: '$23.00',
		cooking: 'Slow-roasting is a great way to keep chicken nice and moist. Adding the potatoes to the roasting tin infuses them with plenty of flavour, too.',
		ingridients: 'butter, for greasing 1.6kg chicken 1kg roasting potatoes, halved or quartered if large 2 whole garlic heads, halved through the middle 100ml white wine 100ml chicken stock',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken7.jpg',
		name: 'Chicken madras',
		price: '$17.50',
		cooking: 'Ditch the takeaway menu and cook our healthy chicken madras curry instead. This simple family dinner is full of fragrant spices and tender pieces of chicken.',
		ingridients: '1 onion, peeled and quartered 2 garlic cloves thumb-sized chunk of ginger, peeled ½ red chilli 1 tbsp vegetable oil ½ tsp turmeric',
	},
	{
		category: 'chicken',
		URL: './images/delivery/chicken/chicken8.jpg',
		name: 'Home-style chicken curry',
		price: '$25.50',
		cooking: 'A rustic and authentic quick Indian one-pot packed with tonnes of hot Asian spices and fragrant coriander.',
		ingridients: '1 large onion 6 garlic cloves, roughly chopped 50g ginger, roughly chopped 4 tbsp vegetable oil 2 tsp cumin seeds 1 tsp fennel seeds',
	},
	// ITEMS CHICKEN CATEGORY

	// ITEMS DESSERTS CATEGORY
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts1.jpg',
		name: 'New York cheesecake',
		price: '$17.50',
		cooking: 'This authentic creamy dessert will add a taste of New York to any dining table. Our American-style baked cheesecake recipe makes an easy family dessert.',
		ingridients: '85g butter, plus extra for tin 140g digestive biscuits, made into fine crumbs 1 tbsp sugar, granulated or golden caster 900g Philadelphia cheese, or other full-fat soft cheese 250g golden caster sugar',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts2.jpg',
		name: 'Lemon cheesecake',
		price: '$15.00',
		cooking: 'Need a simple, zingy dessert you can make with minimal fuss? Try this creamy lemon cheesecake, made with just a few basic storecupboard ingredients.',
		ingridients: '110g digestive biscuits 50g butter 25g light brown soft sugar 350g mascarpone 75g caster sugar',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts3.jpg',
		name: 'Chocolate cheesecake',
		price: '$16.50',
		cooking: 'Treat family and friends to this decadent chocolate dessert. It\'s an indulgent end to a dinner party or weekend family meal',
		ingridients: '150g digestive biscuits (about 10) 1 tbsp caster sugar 45g butter, melted, plus extra for the tin 150g dark chocolate 120ml double cream 2 tsp cocoa powder',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts4.jpg',
		name: 'Chocolate molten cakes',
		price: '$14.00',
		cooking: 'Bake an impressive dinner party dessert with minimum fuss – these chocolate puddings, also known as chocolate fondant or lava cake, have a lovely gooey centre',
		ingridients: '100g butter, plus extra to grease 100g dark chocolate, chopped 150g light brown soft sugar 3 large eggs ½ tsp vanilla extract',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts5.jpg',
		name: 'Lemon & elderflower celebration cake',
		price: '$24.00',
		cooking: 'Decorate this simple elderflower and lemon cake with edible flowers for a showstopping celebration dessert. It\'s perfect for a wedding or birthday',
		ingridients: '6 medium eggs 100g natural yoghurt 50ml milk 450g butter, softened 450g golden caster sugar 450g self-raising flour',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts6.jpg',
		name: 'Chocolate fondant',
		price: '$27.50',
		cooking: 'A gooey prepare-ahead dessert that\'s perfect for entertaining - it\'s all a matter of timing.',
		ingridients: '50g melted butter, for brushing cocoa powder, for dusting 200g good-quality dark chocolate, chopped into small pieces 200g butter, in small pieces',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts7.jpg',
		name: 'Christmas sticky toffee pudding',
		price: '$30.00',
		cooking: 'Switch up your traditional Christmas pudding with this sticky toffee version. It\'s a great modern twist on the classic festive dessert.',
		ingridients: '250g dates, pitted and finely chopped 100g raisins 200ml golden or spiced rum 150g butter, softened, plus extra for the basin',
	},
	{
		category: 'desserts',
		URL: './images/delivery/desserts/desserts8.jpg',
		name: 'Blueberry cake with cream cheese frosting',
		price: '$17.50',
		cooking: 'Enjoy this fruity soured cream cake with a cup of tea or serve as an impressive dessert. The blueberries will burst in your mouth as you bite into your slice.',
		ingridients: '175g soft butter 175g golden caster sugar 3 large eggs 225g self-raising flour 1 tsp baking powder',
	},
	// ITEMS DESSERTS CATEGORY

	// ITEMS DRINKS CATEGORY
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks1.jpg',
		name: 'Rhubarb gin',
		price: '$13.50',
		cooking: 'Use seasonal rhubarb to make this G&T-with-a-difference, or top the finished gin with soda water for a refreshing and gloriously pink summertime drink.',
		ingridients: 'pink rhubarb stalks caster sugar (don\'t use golden - it muddies the colour) gin',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks2.jpg',
		name: 'Mango & banana smoothie',
		price: '$12.50',
		cooking: 'Cool down this summer with a fresh and fruity smoothie',
		ingridients: '1 medium mango 1 banana 500ml orange juice 4 ice cubes',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks3.jpg',
		name: 'Mulled wine cocktail',
		price: '$10.00',
		cooking: 'The perfect party drink, as it can be made well ahead, then brought out of the fridge as guests arrive – or serve it hot for a traditional winter warmer.',
		ingridients: '00g/4oz light muscovado sugar 1 star anise 1 cinnamon stick 4 cloves 150ml water 1 lemon 2 clementines',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks4.jpg',
		name: 'Peanut butter smoothie',
		price: '$13.00',
		cooking: 'Whizz up a quick and filling peanut butter smoothie, with rolled oats and banana. Brilliant for breakfast, you can freeze the banana for extra thickness.',
		ingridients: '200ml oat milk 1 banana, peeled and chopped 20g peanut butter 1 tbsp rolled oats pinch of cinnamon',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks5.jpg',
		name: 'Ginger lemon fizz',
		price: '$14.50',
		cooking: 'A refreshing alternative to shop-bought soft drinks, perfect for the summer.',
		ingridients: '	50g fresh root ginger , roughly chopped 300g caster sugar 2 lemons , sliced, plus extra to serve sparkling water',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks6.jpg',
		name: 'Pink lemonade',
		price: '$16.00',
		cooking: 'Adding raspberries to homemade lemonade gives it a tangy flavour and turns it a vivid pink.',
		ingridients: '300g caster sugar 1½ lemons sliced 1 orange sliced 3 punnets raspberries ice and fresh mint to serve',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks7.jpg',
		name: 'Eggnog',
		price: '$11.50',
		cooking: 'Make our easy eggnog recipe for the perfect festive party tipple. This traditional Christmas drink.',
		ingridients: '50g caster sugar 4 egg yolks 1 tsp vanilla essence 397g can of condensed milk 100ml brandy',
	},
	{
		category: 'drinks',
		URL: './images/delivery/drinks/drinks8.jpg',
		name: 'Blackcurrant cordial',
		price: '$15.00',
		cooking: 'Is a great way to use up a pick-your-own glut of blackcurrants and makes a refreshing summer drink.',
		ingridients: '300g golden caster sugar zest and juice 2 lemons 450g blackcurrants',
	},
	// ITEMS DRINKS CATEGORY
];
// MAPPED THE ARRAY OF ITEMS IN HTML CODE
arrayOfItems.map(item => {
	// IF ITEM CATEGORY IS STEAK WE DONT ADD CLASS WHICH HIDE ITEMS
	if (item.category === 'steak') {
		listOfProducts.insertAdjacentHTML('beforeend', `<div data-category="${item.category}" class="delivery-item">
							<div class="delivery__item-img overlay-item">
								<a href="${item.URL}" data-pswp-width="1125" data-pswp-height="715"
									target="_blank">
									<img src="${item.URL}" alt="">
									<div class="gallery-overlay overlay">
										<div class="delivery__item-img-icon overlay-info">
											<i class="fas fa-search-plus"></i>
										</div>
									</div>
								</a>
							</div>
							<div class="delivery__item-info">
								<div class="delivery__item-header">
									<div class="delivery__item-name">
										${item.name}
									</div>
									<div class="delivery__item-price">
										${item.price}
									</div>
								</div>
								<div class="delivery__item-description-container">
									<div class="delivery__item-description">
										<div class="delivery__item-cooking">
											${item.cooking}
										</div>
										<div class="delivery__item-bottom">
											<div class="delivery__item-ingridients">
												${item.ingridients}
											</div>
										</div>
									</div>
									<div class="delivery__item-basket">
										<a href="#" class="hvr-icon-rotate">
											<i class="fas fa-shopping-cart hvr-icon"></i>
											<i class="succes-icon fas fa-check"></i>
										</a>
									</div>
								</div>
							</div>
						</div>`)
	}
	// IF ITEM CATEGORY ISN`T STEAK WE ADD CLASS WHICH HIDE ITEMS
	else {
		listOfProducts.insertAdjacentHTML('beforeend', `<div data-category="${item.category}" class="delivery-item hide">
							<div class="delivery__item-img overlay-item">
								<a href="${item.URL}" data-pswp-width="1125" data-pswp-height="715"
									target="_blank">
									<img src="${item.URL}" alt="">
									<div class="gallery-overlay overlay">
										<div class="delivery__item-img-icon overlay-info">
											<i class="fas fa-search-plus"></i>
										</div>
									</div>
								</a>
							</div>
							<div class="delivery__item-info">
								<div class="delivery__item-header">
									<div class="delivery__item-name">
										${item.name}
									</div>
									<div class="delivery__item-price">
										${item.price}
									</div>
								</div>
								<div class="delivery__item-description-container">
									<div class="delivery__item-description">
										<div class="delivery__item-cooking">
											${item.cooking}
										</div>
										<div class="delivery__item-bottom">
											<div class="delivery__item-ingridients">
												${item.ingridients}
											</div>
										</div>
									</div>
									<div class="delivery__item-basket">
										<a href="#" class="hvr-icon-rotate">
											<i class="fas fa-shopping-cart hvr-icon"></i>
											<i class="succes-icon fas fa-check"></i>
										</a>
									</div>
								</div>
							</div>
						</div>`)
	}
})

