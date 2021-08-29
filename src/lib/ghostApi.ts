import GhostContentAPI from "@tryghost/content-api"

export const ghostApi = new GhostContentAPI({
  url: "https://words.ghost.io",
  key: process.env.NEXT_PUBLIC_GHOST_TOKEN as string,
  version: "v3",
})
