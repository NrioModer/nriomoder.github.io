const randomNumber = Math.floor(Math.random() * 141);

let jokers = [
  {
    name: "Big Stick",
    text: [
      "Each {C:attention}8{} gain {C:chips}+16{} Chips when scored. Increases by {C:chips}+16{} Chips for scored {C:attention}8{} {C:inactive}(Resets after each hand played)"
    ],
    image_url: "img/j_big_stick.png",
    rarity: "Uncommon"
  },
  {
    name: "Dust Cloud",
    text: [
      "Each {C:attention}face{} card can't be {C:red}debuffed{} or {C:red}faced down{}"  
    ],
    image_url: "img/j_dust_cloud.png",
    rarity: "Uncommon"
  },
  {
    name: "Flying Skull",
    text: [
      "Create a {C:spectral}Spectral{} card for every {C:attention}9{C:inactive} [9]{} discarded 9",
      "{C:inactive}(Must have room)"
    ],
    image_url: "img/j_flying_skull.png",
    rarity: "Uncommon"
  },
    {
    name: "Hammer",
    text: [
      "For each scored {C:attention}10{} gain {X:attention,C:white}X0.9{} Blind amount"      
    ],
    image_url: "img/j_hammer.png",
    rarity: "Uncommon"
  },
  {
    name: "Lament",
    text: [
      "Give {C:attention}1{} tag for every {C:attention}4 Aces{} in full deck {C:inactive}(Currently 0 Aces, 0 tags)"
    ],
    image_url: "img/j_lament.png",
    rarity: "Uncommon"
  },
  {
    name: "Precious egg",
    text: [
      "After {C:attention}6{} rounds, sell this card to create a random {C:red}Rare{} {C:attention}joker{} {C:inactive}(Currently {C:attention}0{C:inactive}/6)" 
    ],
    image_url: "img/j_precious_egg.png",
    rarity: "Common"
  },
  {
    name: "Scrap Metal",
    text: [
      "{C:chips,s:1.1}+60{} Chips. {C:red}Self destructs{} if any card or joker is sold or destroyed"   
    ],
    image_url: "img/j_scrap_metal.png",
    rarity: "Common"
  },
  {
    name: "Screwdriver",
    text: [
      "Retrigger each {C:attention}6{} that are played or held in hand"    
    ],
    image_url: "img/j_screwdriver.png",
    rarity: "Uncommon"
  },
  {
    name: "Shovel",
    text: [
      "{C:red}+1{} discard if played hand contains a {C:attention}2{}" 
    ],
    image_url: "img/j_shovel.png",
    rarity: "Uncommon"
  },
    {
    name: "Spanner",
    text: [
      "When {C:attention}blind{} is selected with 2 or more planet, destroy them and create a {C:spectral}Black Hole{}"          
    ],
    image_url: "img/j_spanner.png",
    rarity: "Uncommon"
  },
  {
    name: "Toxic Ooze",
    text: [
      "{C:mult}+3{} Mult when each played {C:attention}3{} is scored, halves when Boss Blind is defeated {C:inactive}(Curently {C:mult}+6 {C:inactive}Mult)" 
    ],
    image_url: "img/j_toxic_ooze.png",
    rarity: "Uncommon"
  },
  {
    name: "Venus Fly Trap",
    text: [
      "Each scored {C:attention}7{} has a {C:green}1 in 2{} chance to draw an extra card" 
    ],
    image_url: "img/j_venus_fly_trap.png",
    rarity: "Uncommon"
  },
  {
    name: "Whip",
    text: [
      "Add {C:purple}Enhanced 4{} per hand remaining, then {C:red}lose all hand{} by end of the round"  
    ],
    image_url: "img/j_whip.png",
    rarity: "Uncommon"
  },
  {
    name: "Sword",
    text: [
      "{C:chips,s:1.1}+Between 10 to 60{} Chips." 
    ],
    image_url: "img/j_sword.png",
    rarity: "Common"
  },
  {
    name: "Dagger",
    text: [
      "Each {C:attention}Card{} held in hand gives {C:mult}+3{} Mult"   
    ],
    image_url: "img/j_dagger.png",
    rarity: "Common"
  },
  {
    name: "Juggling Ball",
    text: [
      "When {C:attention}Boss Blind{} is defeated, give {C:money}$2{} and {C:attention,T:tag_juggle}Juggle Tag"  
    ],
    image_url: "img/j_juggling_ball.png",
    rarity: "Common"
  },
  {
    name: "Poison Needle",
    text: [
      "{C:mult}+1{} Base Mult for played hand. Limit {C:attention}3{C:inactive} [3]{} hand per round."     
    ],
    image_url: "img/j_poison_needle.png",
    rarity: "Common"
  },
  {
    name: "Concentration",
    text: [
      "If the used hands are {C:attention}equal{} to the previous ones, it gains {C:money}+$2{} for each used hands {C:inactive}(0/4)" 
    ],
    image_url: "img/j_concentration.png",
    rarity: "Common"
  },
  {
    name: "Duplicate",
    text: [
      "For each card {C:attention}played and scored{}, add a {C:attention}Temporary{} copy of the card to deck" 
    ],
    image_url: "img/balala_jokers/part_" + randomNumber + ".png",
    rarity: "Uncommon"
  },
  {
    name: "Bear Potion",
    text: [
       "When sold, destroy a random joker with {C:attention}rarity above Uncommon{} and create {C:attention}The Bear{}."
    ],
    image_url: "img/j_bear_potion.png",
    rarity: "Rare"
  },
  {
    name: "The Bear",
    text: [
       "{X:mult,C:white}X6{} Mult"
    ],
    image_url: "img/j_bear.png",
    soul: true,
    rarity: "Legendary"
  },
  {
    name: "The Witch",
    text: [
       	"Each card in the",
	"hand is counted"   
    ],
    image_url: "img/j_witch.png",
    soul: true,
    rarity: "Legendary"
  },
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
     {
       name: "Temporary",
       text: [
          "It's {C:attention}destroyed{} after the blind"
       ],
       image_url: "img/sticker_temporary.png",
       rarity: "Sticker"
     },
]

let blinds = [
  {
    name: "The Bully",
    text: [
      "Add 13 random Temporary Stone cards to your deck",
      "{C:inactive}({C:red}2x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
      "{C:inactive}(Appears in Ante 3)"
    ],
    image_url: "img/the_bully.png",
    rarity: "Boss Blind"
  },
]

let shop_items = []

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}