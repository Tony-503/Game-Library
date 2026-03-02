const games = [
{
"id": 1,
"name": "Portal 2",
"pricePoint": "$$",
"audience": "Puzzle Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
"description": "Mind-bending co-op and single-player portal puzzles.",
"submittedBy": "Sasha",
"submittedOn": "2024-01-11T10:15:00"
},
{
"id": 2,
"name": "Hades",
"pricePoint": "$$",
"audience": "Action Roguelike Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
"description": "Fast combat and repeat runs through the underworld.",
"submittedBy": "Milo",
"submittedOn": "2024-01-14T08:22:00"
},
{
"id": 3,
"name": "Civilization VI",
"pricePoint": "$$$",
"audience": "Strategy Gamers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
"description": "Build an empire and outsmart rival civilizations.",
"submittedBy": "Nia",
"submittedOn": "2024-01-18T16:40:00"
},
{
"id": 4,
"name": "Stardew Valley",
"pricePoint": "$",
"audience": "Cozy Gamers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
"description": "Farm, fish, and build relationships in a peaceful town.",
"submittedBy": "Evan",
"submittedOn": "2024-01-20T12:05:00"
},
{
"id": 5,
"name": "Overcooked! 2",
"pricePoint": "$$",
"audience": "Co-op Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/728880/header.jpg",
"description": "Chaotic local and online co-op cooking challenges.",
"submittedBy": "Rin",
"submittedOn": "2024-01-23T19:30:00"
},
{
"id": 6,
"name": "Forza Horizon 5",
"pricePoint": "$$$",
"audience": "Racing Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
"description": "Open-world racing festival set in vibrant Mexico.",
"submittedBy": "Jules",
"submittedOn": "2024-01-27T09:10:00"
},
{
"id": 7,
"name": "Cities: Skylines",
"pricePoint": "$$",
"audience": "Simulation Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg",
"description": "Design and manage traffic, zoning, and city growth.",
"submittedBy": "Ari",
"submittedOn": "2024-02-01T13:42:00"
},
{
"id": 8,
"name": "The Witcher 3: Wild Hunt",
"pricePoint": "$$$",
"audience": "RPG Lovers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
"description": "Story-rich open-world RPG with monster hunting quests.",
"submittedBy": "Tara",
"submittedOn": "2024-02-03T11:58:00"
},
{
"id": 9,
"name": "Bloons TD 6",
"pricePoint": "$",
"audience": "Tower Defense Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg",
"description": "Build monkey defenses to pop endless balloon waves.",
"submittedBy": "Ben",
"submittedOn": "2024-02-08T17:14:00"
},
{
"id": 10,
"name": "Valheim",
"pricePoint": "$$",
"audience": "Survival Gamers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
"description": "Co-op Viking survival with crafting and boss battles.",
"submittedBy": "Leah",
"submittedOn": "2024-02-12T07:46:00"
},
{
"id": 11,
"name": "Street Fighter 6",
"pricePoint": "$$$",
"audience": "Fighting Game Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg",
"description": "Modern competitive fighter with classic and new controls.",
"submittedBy": "Kai",
"submittedOn": "2024-02-14T20:03:00"
},
{
"id": 12,
"name": "Balatro",
"pricePoint": "$",
"audience": "Card Game Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2379780/header.jpg",
"description": "Poker-inspired roguelike deckbuilder with wild synergies.",
"submittedBy": "Lana",
"submittedOn": "2024-02-18T15:27:00"
},
{
"id": 13,
"name": "No Man's Sky",
"pricePoint": "$$",
"audience": "Exploration Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header.jpg",
"description": "Explore a vast universe with crafting and base building.",
"submittedBy": "Omar",
"submittedOn": "2024-02-22T10:33:00"
},
{
"id": 14,
"name": "Life is Strange",
"pricePoint": "$$",
"audience": "Narrative Gamers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/319630/header.jpg",
"description": "Choice-driven story adventure with time-rewind powers.",
"submittedBy": "Mina",
"submittedOn": "2024-02-26T21:18:00"
},
{
"id": 15,
"name": "Jackbox Party Pack 3",
"pricePoint": "$",
"audience": "Party Game Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/434170/header.jpg",
"description": "Phone-controlled party mini-games for groups.",
"submittedBy": "Noel",
"submittedOn": "2024-03-01T14:01:00"
},
{
"id": 16,
"name": "RimWorld",
"pricePoint": "$$",
"audience": "Base Builders",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
"description": "Colony sim focused on survival stories and management.",
"submittedBy": "Ivy",
"submittedOn": "2024-03-04T09:56:00"
},
{
"id": 17,
"name": "Hi-Fi RUSH",
"pricePoint": "$$",
"audience": "Music Action Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1817230/header.jpg",
"description": "Stylish action where combat moves sync to the beat.",
"submittedBy": "Drew",
"submittedOn": "2024-03-07T18:20:00"
},
{
"id": 18,
"name": "SimCity 4 Deluxe",
"pricePoint": "$",
"audience": "City Sim Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/24780/header.jpg",
"description": "Classic city-building with deep zoning and utilities.",
"submittedBy": "Sloane",
"submittedOn": "2024-03-10T12:47:00"
},
{
"id": 19,
"name": "Celeste",
"pricePoint": "$",
"audience": "Platformer Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
"description": "Precision platforming and speedrun-friendly movement.",
"submittedBy": "Pax",
"submittedOn": "2024-03-14T08:12:00"
},
{
"id": 20,
"name": "LEGO Star Wars: The Skywalker Saga",
"pricePoint": "$$",
"audience": "Family Gamers",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg",
"description": "Family-friendly action across all nine Star Wars films.",
"submittedBy": "Gia",
"submittedOn": "2024-03-18T16:35:00"
},
{
"id": 21,
"name": "Total War: WARHAMMER III",
"pricePoint": "$$$",
"audience": "Hardcore Strategy Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg",
"description": "Massive real-time battles plus grand strategy campaign.",
"submittedBy": "Hugo",
"submittedOn": "2024-03-22T11:29:00"
},
{
"id": 22,
"name": "Elden Ring",
"pricePoint": "$$$",
"audience": "Action RPG Players",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
"description": "Open-world action RPG with difficult but rewarding combat.",
"submittedBy": "Yara",
"submittedOn": "2024-03-26T19:52:00"
},
{
"id": 23,
"name": "Phasmophobia",
"pricePoint": "$",
"audience": "Horror Fans",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg",
"description": "Co-op ghost hunting horror with voice interaction.",
"submittedBy": "Kian",
"submittedOn": "2024-03-29T22:10:00"
},
{
"id": 24,
"name": "Terraria",
"pricePoint": "$",
"audience": "Sandbox Creators",
"image": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
"description": "2D sandbox adventure with building, crafting, and bosses.",
"submittedBy": "Rae",
"submittedOn": "2024-04-02T13:06:00"
}
]

export default games;