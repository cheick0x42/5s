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
		name: "Oeil",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/eye.png"),
		rating: "4.2",
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E", 
		description:
			"Liste quelques objets de cette couleur qui t'entourent.",
		steps: [
			"Retrouvez tous les objets blanc autour de soi",
/* 			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!", */
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
			"Qu'est ce que vous avez ressenti ?",
		steps: [
			"Sentez l'objet le plus proche de toi.",
/* 			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.", */
		],
	},
	{
		id: "03",
		name: "Langue",
		image: require("../assets/images/defi.png"),
		icon: require("../assets/images/test.png"),
		rating: "4.6",
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		description:
			"Quel goût avait-elle ? Acidulé, sucré...",
		steps: [
			"Prenez une pomme et dégustez-la !",
/* 			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!", */
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
			"Décrit ce que tu as entendu, ce que tu as ressenti.",
		steps: [
			"Ecoute les sons autour de toi.",
/* 			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.", */
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
			"Est ce que cela te rend plus énergique ?",
		steps: [
			"Frotte tes mains, bras, ventre, jambes puis fais même chose en tapotant",
/* 			"Season the chicken breasts  salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"S both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hoful chicken!", */
		],
	}
];
