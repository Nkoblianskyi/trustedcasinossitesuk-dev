import type { BettingSite } from "../types"

const defaultTerms = "18+ | New customers only | Wagering requirements apply | T&Cs apply | BeGambleAware.org | Please play responsibly"

const rawSites: Omit<BettingSite, "score">[] = [
    {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Wager £20 and Get 100 Free Spins",
    terms: defaultTerms,
    link: "https://www.midnite.com/",
    reviews: 8742,
  },
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Stake £10 & Get 200 Free Spins",
    terms: defaultTerms,
    link: "https://www.betfred.com/",
    reviews: 9317,
  },
    {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Deposit £10 & Get £20 Casino Bonus + 50 Free Spins",
    terms: defaultTerms,
    link: "https://www.betvictor.com/",
    reviews: 9088,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "Bet £10 & Get £50 Casino Bonus",
    terms: defaultTerms,
    link: "https://www.boylesports.com",
    reviews: 9204,
  },

  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Play £10 on Slots and Get 100 Free Spins",
    terms: defaultTerms,
    link: "https://www.ladbrokes.com/",
    reviews: 8971,
  },

]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
