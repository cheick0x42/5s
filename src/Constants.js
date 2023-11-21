export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};
import { FontAwesome } from "@expo/vector-icons";


export const recipeList = [
	{
		id: "01",
		name: "Oeuil",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/eye.png"),
		rating: "4.2",
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E", 
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "02",
		name: "Nez",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/nose.png"),
		rating: "3.6",
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "03",
		name: "Langue",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/lan.jpg"),
		rating: "4.6",
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "04",
		name: "Oreille",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/ear.png"),
		rating: "3.6",
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "05",
		name: "Main",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/main.png"),
		rating: "2.2",
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"lorem impsu blablabla",
		steps: [
			"question",
			"Season the chicken breasts  salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"S both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hoful chicken!",
		],
	}
];
