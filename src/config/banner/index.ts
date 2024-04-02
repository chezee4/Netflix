import bannerIMG from 'src/../public/BgMovies.jpg'
import bannerIMG2 from 'src/../public/Container.jpg'

export const banners = [
  {
    id: '1',
    title: 'Avengers : Endgame',
    subtitle:
      'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos іs actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
    img: bannerIMG,
  },
  {
    id: '2',
    title: 'Avengers : Infinity War',
    subtitle:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    img: bannerIMG2,
  },
  {
    id: '3',
    title: 'Avengers : Age of Ultron',
    subtitle:
      'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it is up to the Avengers to stop the villainous Ultron from enacting his terrible plan.',
    img: bannerIMG,
  },
  {
    id: '4',
    title: 'The Avengers',
    subtitle:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    img: bannerIMG2,
  },
] as const
