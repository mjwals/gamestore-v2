import { v4 as uuidv4 } from "uuid";
import { getImage } from "@/constants/utils";

export const dataGames = [
  {
    id: uuidv4(),
    title: "The Last of Us: Part 2",
    description: [
      {
        txt: `Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.`,
        img: getImage("assets/lastOfUs/gallery/1.jpg"),
      },
      {
        txt: `Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.`,
        img: getImage("assets/lastOfUs/gallery/2.jpg"),
      },
      {
        txt: `As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.`,
        img: getImage("assets/lastOfUs/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/lastOfUs/hero.jpg"),
    thumbnailImage: getImage("assets/lastOfUs/thumb.jpg"),
    releaseDate: "19/06/2020",
    developer: "Santa Monica Studio",
    platform: {
      id: uuidv4(),
      name: "Playstation",
      icon: ["fab", "playstation"],
    },
    price: 19.99,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Animal Crossing: New Horizons",
    description: [
      {
        txt: `If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package. Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service. But deep down, isn’t there a part of you that longs for…freedom?`,
        img: getImage("assets/animalCrossing/gallery/1.jpg"),
      },
      {
        txt: `Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered. Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways.`,
        img: getImage("assets/animalCrossing/gallery/2.jpg"),
      },
      {
        txt: `Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more.`,
        img: getImage("assets/animalCrossing/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/animalCrossing/hero.jpg"),
    thumbnailImage: getImage("assets/animalCrossing/thumb.jpg"),
    releaseDate: "20/03/2020",
    developer: "Nintendo",
    platform: {
      id: uuidv4(),
      name: "Nintendo",
      icon: "", // See IconNintendo
    },
    price: 24.99,
    pegiRating: [getImage("assets/rating/p3.png")],
  },
  {
    id: uuidv4(),
    title: "Cyberpunk 2077",
    description: [
      {
        txt: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.`,
        img: getImage("assets/cyberpunk/gallery/1.jpg"),
      },
      {
        txt: `You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.`,
        img: getImage("assets/cyberpunk/gallery/2.jpg"),
      },
      {
        txt: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality.`,
        img: getImage("assets/cyberpunk/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/cyberpunk/hero.jpg"),
    thumbnailImage: getImage("assets/cyberpunk/thumb.jpg"),
    releaseDate: "10/12/2020",
    developer: "CD Projekt Red",
    platform: {
      id: uuidv4(),
      name: "PC",
      icon: ["fab", "windows"],
    },
    price: 24.99,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
      getImage("assets/rating/descriptors/sex.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Doom Eternal",
    description: [
      {
        txt: `DOOM Eternal is the direct sequel to 2016's DOOM. Developed by id Software, DOOM Eternal delivers the ultimate combination of speed and power, along with the next leap in push-forward, first-person combat.`,
        img: getImage("assets/doom/gallery/1.jpg"),
      },
      {
        txt: `As the DOOM Slayer, you’ll return to take your vengeance against the forces of Hell. Set to an all-new pulse-pounding soundtrack composed by Mick Gordon, you fight across dimensions as you slay new and classic demons with powerful new weapons and abilities.`,
        img: getImage("assets/doom/gallery/2.jpg"),
      },
    ],
    heroImage: getImage("assets/doom/hero.jpg"),
    thumbnailImage: getImage("assets/doom/thumb.jpg"),
    releaseDate: "20/03/2020",
    developer: "Bethesda",
    platform: {
      id: uuidv4(),
      name: "Playstation",
      icon: ["fab", "playstation"],
    },
    price: 10.0,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    description: [
      {
        txt: `The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time of economic malaise and lowest-common-denominator reality TV.`,
        img: getImage("assets/gta5/gallery/1.jpg"),
      },
      {
        txt: `Amidst this madness, three unique criminals plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities for serious money; Michael, an ex-con whose "retirement" is a less rosy than he hoped it would be; and Trevor, a violent dude driven by the chance for a quick high and the next big score.`,
        img: getImage("assets/gta5/gallery/2.jpg"),
      },
      {
        txt: `Nearly out of options, the crew risks it all in a series of daring and dangerous heists that could set them up for life - one way or the other.`,
        img: getImage("assets/gta5/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/gta5/hero.jpg"),
    thumbnailImage: getImage("assets/gta5/thumb.jpg"),
    releaseDate: "18/11/2014",
    developer: "Rockstar",
    platform: {
      id: uuidv4(),
      name: "PC",
      icon: ["fab", "windows"],
    },
    price: 10.0,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
      getImage("assets/rating/descriptors/in-game-purchases.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Assassin's Creed Valhalla",
    description: [
      {
        txt: `Build your own Viking Legend. Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.`,
        img: getImage("assets/assassinsCreed/gallery/1.jpg"),
      },
      {
        txt: `England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you? Write Your Viking Saga. Blaze your own path across England with advanced RPG mechanics. Fight brutal battles, lead fiery raids or use strategy and alliances with other leaders to bring victory.`,
        img: getImage("assets/assassinsCreed/gallery/2.jpg"),
      },
      {
        txt: `Every choice you make in combat and conversation is another step on the path to greatness. Lead Epic Raids. Lead a crew of raiders and launch lightning-fast surprise attacks against Saxon armies and fortresses. Claim the riches of your enemies' lands for your clan and expand your influence far beyond your growing settlement.`,
        img: getImage("assets/assassinsCreed/gallery/3.jpg"),
      },
      {
        txt: `ENGAGE IN VISCERAL COMBAT. Unleash the ruthless fighting style of a Viking warrior as you dual-wield axes, swords, or even shields against relentless foes. Decapitate opponents in close-quarters combat, riddle them with arrows, or assassinate them with your Hidden Blade. Grow Your Settlement. Your clan's new home grows with your legend.`,
        img: getImage("assets/assassinsCreed/gallery/4.jpg"),
      },
      {
        txt: `Customise your settlement by building upgradable structures. Unlock new features and quests by constructing a barracks, a blacksmith, a tattoo parlour, and much more. Share Your Custom Raider. Recruit mercenary Vikings designed by other players or create and customise your own to share online. Sit back and reap the rewards when they fight alongside your friends in their game worlds.`,
        img: getImage("assets/assassinsCreed/gallery/5.jpg"),
      },
      {
        txt: `A Dark Age Open World. Sail across the icy North Sea to discover and conquer the broken kingdoms of England. Immerse yourself in activities like hunting and drinking games or engage in traditional Norse competitions like flyting – or, as it's better known, verbally devastating rivals through the art of the Viking rap battle.`,
        img: getImage("assets/assassinsCreed/gallery/6.jpg"),
      },
    ],
    heroImage: getImage("assets/assassinsCreed/hero.jpg"),
    thumbnailImage: getImage("assets/assassinsCreed/thumb.jpg"),
    releaseDate: "10/11/2020",
    developer: "Ubisoft",
    platform: {
      id: uuidv4(),
      name: "Xbox",
      icon: ["fab", "xbox"],
    },
    price: 24.99,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
      getImage("assets/rating/descriptors/in-game-purchases.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "The Witcher 3: Wild Hunt",
    description: [
      {
        txt: `With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing.`,
        img: getImage("assets/theWitcher/gallery/1.jpg"),
      },
      {
        txt: `Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format. Also known as "The Witcher III: Wild Hunt".`,
        img: getImage("assets/theWitcher/gallery/2.jpg"),
      },
    ],
    heroImage: getImage("assets/theWitcher/hero.jpg"),
    thumbnailImage: getImage("assets/theWitcher/thumb.jpg"),
    releaseDate: "19/06/2015",
    developer: "CD Projekt Red",
    platform: {
      id: uuidv4(),
      name: "PC",
      icon: ["fab", "windows"],
    },
    price: 15.0,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Paper Mario: The Origami King",
    description: [
      {
        txt: `Featuring a new ring-based battle system that mixes puzzle-solving skills with traditional turn-based combat, Paper Mario: The Origami King aims to put new twists in the series' established formula.`,
        img: getImage("assets/mario/gallery/1.jpg"),
      },
    ],
    heroImage: getImage("assets/mario/hero.jpg"),
    thumbnailImage: getImage("assets/mario/thumb.jpg"),
    releaseDate: "17/07/2020",
    developer: "Nintendo",
    platform: {
      id: uuidv4(),
      name: "Nintendo",
      icon: "", // See IconNintendo
    },
    price: 24.99,
    pegiRating: [
      getImage("assets/rating/p7.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/fear.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Half-Life Alyx",
    description: [
      {
        txt: `Half-Life: Alyx is Valve's VR return to the Half-Life series. It's the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity's only chance for survival.`,
        img: getImage("assets/halfLife/gallery/1.jpg"),
      },
      {
        txt: `The Combine's control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth's greatest scientists: you and your father, Dr. Eli Vance.`,
        img: getImage("assets/halfLife/gallery/2.jpg"),
      },
      {
        txt: `As founders of a fledgling resistance, you've continued your clandestine scientific activity performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine. Every day, you learn more about your enemy, and every day you work toward finding a weakness.`,
        img: getImage("assets/halfLife/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/halfLife/hero.jpg"),
    thumbnailImage: getImage("assets/halfLife/thumb.jpg"),
    releaseDate: "23/03/2020",
    developer: "Valve",
    platform: {
      id: uuidv4(),
      name: "PC",
      icon: ["fab", "windows"],
    },
    price: 15.0,
    pegiRating: [
      getImage("assets/rating/p16.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "God of War",
    description: [
      {
        txt: `His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.`,
        img: getImage("assets/godOfWar/gallery/1.jpg"),
      },
      {
        txt: `As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past.`,
        img: getImage("assets/godOfWar/gallery/2.jpg"),
      },
      {
        txt: `Set within the untamed forests, mountains, and realms of Norse lore, God of War features a distinctly new setting with its own pantheon of creatures, monsters, and gods.`,
        img: getImage("assets/godOfWar/gallery/3.jpg"),
      },
    ],
    heroImage: getImage("assets/godOfWar/hero.jpg"),
    thumbnailImage: getImage("assets/godOfWar/thumb.jpg"),
    releaseDate: "20/04/2018",
    developer: "Santa Monica Studio",
    platform: {
      id: uuidv4(),
      name: "Playstation",
      icon: ["fab", "playstation"],
    },
    price: 7.0,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "Resident Evil 3",
    description: [
      {
        txt: `Fight your way to freedom from the brink of despair. A series of strange disappearances have been occurring in the American Midwest within a place called Racoon City.`,
        img: getImage("assets/re3/gallery/1.jpg"),
      },
      {
        txt: `A specialist squad of the police force known as S.T.A.R.S. has been investigating the case, and have determined that the pharmaceutical company Umbrella and their biological weapon, the T-Virus, are behind the incidents though they've lost several members in the process.`,
        img: getImage("assets/re3/gallery/2.jpg"),
      },
      {
        txt: `Jill Valentine and the other surviving S.T.A.R.S. members try to make this truth known, but find that the police department itself is under Umbrella's sway and their reports are rejected out of hand. However, soon reports of a grisly "cannibal virus" begin to surface, and vicious dogs begin roaming the streets.`,
        img: getImage("assets/re3/gallery/3.jpg"),
      },
      {
        txt: `With the viral plague spreading through the town and to her very doorstep, Jill is determined to survive. However, unbeknownst to Jill, an extremely powerful pursuer has already been dispatched to eliminate her.`,
        img: getImage("assets/re3/gallery/4.jpg"),
      },
    ],
    heroImage: getImage("assets/re3/hero.jpg"),
    thumbnailImage: getImage("assets/re3/thumb.jpg"),
    releaseDate: "03/04/2020",
    developer: "Capcom",
    platform: {
      id: uuidv4(),
      name: "Playstation",
      icon: ["fab", "playstation"],
    },
    price: 13.99,
    pegiRating: [
      getImage("assets/rating/p18.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
      getImage("assets/rating/descriptors/bad-language.jpg"),
    ],
  },
  {
    id: uuidv4(),
    title: "The Legend of Zelda: Link's Awakening",
    description: [
      {
        txt: `26 years after its original release on Game Boy, The Legend of Zelda: Link's Awakening will be reborn as a new experience on Nintendo Switch. Buffeted by a storm, Link washes ashore on the mysterious Koholint Island.`,
        img: getImage("assets/zelda/gallery/1.jpg"),
      },
      {
        txt: `In order to return home, Link must overcome challenging dungeons and battle against fearsome monsters. This new version of the classic adventure includes many unique elements that appeared in the original Game Boy release, such as 2D platformer-style rooms and appearances from characters outside of The Legend of Zelda series.`,
        img: getImage("assets/zelda/gallery/2.jpg"),
      },
    ],
    heroImage: getImage("assets/zelda/hero.jpg"),
    thumbnailImage: getImage("assets/zelda/thumb.jpg"),
    releaseDate: "20/09/2019",
    developer: "Nintendo",
    platform: {
      id: uuidv4(),
      name: "Nintendo",
      icon: "", // See IconNintendo
    },
    price: 18.0,
    pegiRating: [
      getImage("assets/rating/p7.png"),
      getImage("assets/rating/descriptors/violence.jpg"),
    ],
  },
];
