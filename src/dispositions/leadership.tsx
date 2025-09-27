/*
  Leadership data for Skyline CS Club
  - Keep keys in this order for each leader entry:
    name → role → imgSrc → quote → email → linktree → instagram → discord → github → linkedin → website → icon
*/

import { BiCrown } from 'react-icons/bi'
import { CgCrown } from 'react-icons/cg'
import { GrMoney } from 'react-icons/gr'
import { BsLightningCharge } from 'react-icons/bs'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FaRegHandPeace } from 'react-icons/fa'
import { LuConstruction } from 'react-icons/lu'
import { AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineEmojiEvents } from 'react-icons/md'
import { PiFeatherDuotone, PiHandshakeBold } from 'react-icons/pi'
import type { ReactNode } from 'react'

/* --- image directories --- */
const dir_leaderPortraits = '/assets/home/leader_portraits/'
const dir_2023_2024 = dir_leaderPortraits + '2023_2024/'
const dir_2024_2025 = dir_leaderPortraits + '2024_2025/'
const dir_2025_2026 = dir_leaderPortraits + '2025_2026/'

/* --- fallbacks --- */
const pfp_none = dir_leaderPortraits + 'noprofile.webp'
export const FALLBACK_QUOTE = (
  <p>
    That was no message. <i>This</i> is a message.
  </p>
)

/* --- types for consistency --- */
type Socials = {
  email?: string
  linktree?: string
  instagram?: string
  discord?: string
  github?: string
  linkedin?: string
  website?: string
}

export type Leader = Socials & {
  name: string
  role: string
  imgSrc: string
  quote?: ReactNode | string
  icon: ReactNode
}

export type MinorRole = {
  title: string
  label: string
  color_complex: string
  icon: ReactNode
}

export type YearBlock = {
  title: string
  major: Leader[]
  minor: MinorRole[]
}

/* --- data --- */
export const leadership: YearBlock[] = [
  {
    title: '2025 — 2026',
    major: [
      {
        name: 'Assem Alghaithi',
        role: 'Chapter Lead President',
        imgSrc: dir_2025_2026 + 'president.jpg',
        quote: '',
        email: 'mailto:president+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <BiCrown />,
      },
      {
        name: 'Majed Elqossari',
        role: 'Chapter Vice-President',
        imgSrc: dir_2025_2026 + 'vicepresident.jpg',
        quote: '',
        email: 'mailto:vicepresident+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <CgCrown />,
      },
      {
        name: 'Htet Htwe',
        role: 'Chapter Secretary',
        imgSrc: dir_2025_2026 + 'secretary.jpg',
        quote: '',
        email: 'mailto:secretary+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <PiFeatherDuotone />,
      },
      {
        name: 'Alberto Estrada',
        role: 'Capital Treasurer',
        imgSrc: dir_2025_2026 + 'treasurer.jpg',
        quote: '',
        email: 'mailto:treasurer+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <GrMoney />,
      },
      {
        name: 'To Be Announced',
        role: 'Software Projects Manager',
        imgSrc: dir_2025_2026 + 'projects_manager.jpg',
        quote: '',
        email: 'mailto:projectmanager+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <LuConstruction />,
      },
      {
        name: 'To Be Announced',
        role: 'Chapter Technologist',
        imgSrc: dir_2025_2026 + 'technologist1.jpg',
        quote: '',
        email: 'mailto:technologists+website@skycs.club',
        discord: '',
        github: '',
        icon: <BsLightningCharge />,
      },
    ],
    minor: [
      {
        title: 'Web Master',
        label: 'To Be Announced',
        color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
        icon: <AiOutlineGlobal />,
      },
      {
        title: 'SOCC Deputy',
        label: 'Tommy Zheng',
        color_complex: 'from-[#651e94] shadow-[#651e94]',
        icon: <PiHandshakeBold />,
      },
      {
        title: 'Quality Control',
        label: 'To Be Announced',
        color_complex: 'from-[#9c710c] shadow-[#9c710c]',
        icon: <MdOutlineEmojiEvents />,
      },
    ],
  },
  {
    title: '2024 — 2025',
    major: [
      {
        name: 'Lance Ruiz',
        role: 'Chapter Lead President',
        imgSrc: dir_2024_2025 + 'lance.jpg',
        quote: '"Anyone who has never made a mistake has never tried anything new." - Albert Einstein',
        email: 'mailto:president+website@skycs.club',
        linktree: 'https://www.linktr.ee/devalto',
        instagram: '',
        discord: 'https://discordapp.com/users/168406210687533056',
        github: 'https://www.github.com/dev-alto',
        linkedin: 'https://www.linkedin.com/in/lance-ruiz',
        website: 'https://lanceruiz.com',
        icon: <BiCrown />,
      },
      {
        name: 'Jonnald Hernandez',
        role: 'Chapter Vice-President',
        imgSrc: dir_2024_2025 + 'jonnald.png',
        quote: '',
        email: 'mailto:vicepresident+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/188163620826382336',
        github: '',
        linkedin: '',
        website: '',
        icon: <CgCrown />,
      },
      {
        name: 'Yuting Duan',
        role: 'Chapter Secretary',
        imgSrc: dir_2024_2025 + 'yuting.png',
        quote: '',
        email: 'mailto:secretary+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/1068781129370439720',
        github: '',
        linkedin: '',
        website: '',
        icon: <PiFeatherDuotone />,
      },
      {
        name: 'Oscar Meza',
        role: 'Capital Treasurer',
        imgSrc: dir_2024_2025 + 'oscar.jpeg',
        quote: '',
        email: 'mailto:treasurer+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/312818081229701124',
        github: '',
        linkedin: '',
        website: '',
        icon: <GrMoney />,
      },
      {
        name: 'Assem Alghaithi',
        role: 'Software Projects Manager',
        imgSrc: dir_2024_2025 + 'sam.jpg',
        quote: '"The human brain, such an enigma." - Majed',
        email: 'mailto:projectmanager+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/853343486756388944',
        github: '',
        linkedin: '',
        website: '',
        icon: <LuConstruction />,
      },
      {
        name: 'Majed Elqossari',
        role: 'Associate Project Manager',
        imgSrc: dir_2024_2025 + 'majed.png',
        quote: '"Strive always to excel in virtue and truth." - Prophet Muhammed',
        email: 'mailto:assocprojectmanager+website@skycs.club',
        linktree: '',
        instagram: 'https://www.instagram.com/majidali.77',
        discord: 'https://discordapp.com/users/928831417734004746',
        github: 'https://www.github.com/CptnMaj',
        linkedin: 'https://www.linkedin.com/in/majedelqossari/',
        website: '',
        icon: <LuConstruction />,
      },
      {
        name: 'Amapola Garcia-Gomez',
        role: 'Social Outreach Coordinator',
        imgSrc: dir_2024_2025 + 'amapola.png',
        quote:
          '"You can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future." - Steve Jobs',
        email: 'mailto:skylinecompsciclub+website@gmail.com',
        linktree: '',
        instagram: 'https://www.instagram.com/amapolabear_/',
        discord: 'https://discordapp.com/users/711984995387965513',
        github: '',
        linkedin: 'https://www.linkedin.com/in/amapolagarcia', // fixed missing https
        website: '',
        icon: <IoShareSocialOutline />,
      },
      {
        name: 'Denise Hum',
        role: 'Chapter Faculty Advisor',
        imgSrc: dir_2023_2024 + 'denisehumport.png',
        quote:
          'Data are summaries of thousands of stories. Tell a few of those stories to help make the data meaningful.',
        email: 'mailto:humd+website@smccd.edu',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/735277805662765066',
        github: '',
        linkedin: 'https://www.linkedin.com/in/denisehum/',
        website: '',
        icon: <PiHandshakeBold />,
      },
      {
        name: 'Lynn Aung',
        role: 'Chapter Technologist',
        imgSrc: dir_2024_2025 + 'lynn.png',
        quote: '"The only time I look down is when I tie my shoe." - Lynn Aung',
        email: 'mailto:technologists+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/1134930369230147685',
        github: 'https://github.com/loofsan',
        linkedin: '',
        website: '',
        icon: <BsLightningCharge />,
      },
      {
        name: 'Rea Angela Vera Cruz',
        role: 'Chapter Technologist',
        imgSrc: dir_2024_2025 + 'raeangela.webp',
        quote: '',
        email: 'mailto:technologists+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/115633349237669890',
        github: '',
        linkedin: '',
        website: '',
        icon: <BsLightningCharge />,
      },
      {
        name: 'Michael Tse',
        role: 'Chapter Technologist',
        imgSrc: dir_2024_2025 + 'michael.png',
        quote: '',
        email: 'mailto:technologists+website@skycs.club',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/396563683255517194',
        github: '',
        linkedin: '',
        website: '',
        icon: <BsLightningCharge />,
      },
    ],
    minor: [
      {
        title: 'Web Master',
        label: 'Lance Ruiz',
        color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
        icon: <AiOutlineGlobal />,
      },
      {
        title: 'SOCC Deputy',
        label: 'Oscar Meza',
        color_complex: 'from-[#651e94] shadow-[#651e94]',
        icon: <PiHandshakeBold />,
      },
      {
        title: 'Quality Control',
        label: 'To Be Announced',
        color_complex: 'from-[#9c710c] shadow-[#9c710c]',
        icon: <MdOutlineEmojiEvents />,
      },
    ],
  },

  {
    title: '2023 — 2024',
    major: [
      {
        name: 'Tyler Kuwada',
        role: 'The President',
        imgSrc: dir_2023_2024 + 'tylerkuwadaport.png',
        quote: (
          <p>
            Oh, these weren&apos;t homemade, they were made in a factory. A bomb
            factory. They&apos;re bombs.
          </p>
        ),
        email: '',
        linktree: '',
        instagram: 'https://www.instagram.com/tyler_kuwada/',
        discord: 'https://discordapp.com/users/227633077545992192',
        github: '',
        linkedin: '',
        website: '',
        icon: <BiCrown />,
      },
      {
        name: 'Jonas Quiballo',
        role: 'The Vice President',
        imgSrc: dir_2023_2024 + 'jonasquiballoport.png',
        quote: <p>Told myself I was gonna lock-in. Still locking-in.</p>,
        email: '',
        linktree: '',
        instagram: 'https://www.instagram.com/_.waffly._/',
        discord: '',
        github: 'https://github.com/Waffly10',
        linkedin: '',
        website: '',
        icon: <CgCrown />,
      },
      {
        name: 'Kaila Bautista',
        role: 'The Club Secretary',
        imgSrc: dir_2023_2024 + 'kailabautistaport.png',
        quote: (
          <p className='font-bold'>
            {`  ㅤㅤㅤㅤ／l、ㅤmow
                （ﾟ､ ｡ ７
                ⠀ l、ﾞ ~ヽ
                  じしf_, )ノ
            `}
          </p>
        ),
        email: '',
        linktree: '',
        instagram: 'https://instagram.com/kqilamae',
        discord: '',
        github: '',
        linkedin: '',
        website: '',
        icon: <PiFeatherDuotone />,
      },
      {
        name: 'Jayan Pintor',
        role: 'The Club Treasurer',
        imgSrc: dir_2023_2024 + 'jayanpintorport.png',
        quote: (
          <p>
            We all live in a coded world of if-statements... never knowing the
            conditions of each until interpretation.
          </p>
        ),
        email: '',
        linktree: '',
        instagram: 'https://www.instagram.com/0p_photos/',
        discord: '',
        github: 'https://github.com/CoderLearnerTime',
        linkedin: 'https://www.linkedin.com/in/jayanthony-pintor/',
        website: 'https://www.jayanthonypintor.study',
        icon: <GrMoney />,
      },
      {
        name: 'Lance Ruiz',
        role: 'The Projects Manager',
        imgSrc: dir_2023_2024 + 'lanceruizport.jpg',
        quote: (
          <p>
            This is for the record. History is written by the victor. History is
            filled with liars.
            <br />- Captain $
          </p>
        ),
        email: '',
        linktree: 'https://www.linktr.ee/devalto',
        instagram: '',
        discord: 'https://discordapp.com/users/168406210687533056',
        github: 'https://www.github.com/dev-alto',
        linkedin: 'https://www.linkedin.com/in/lance-ruiz',
        website: 'https://the-devalto-experiments.000webhostapp.com/',
        icon: <LuConstruction />,
      },
      {
        name: 'Chris Tse',
        role: 'Club SOCC Deputy',
        imgSrc: dir_2023_2024 + 'christseport.png',
        quote: <p>A true Isaiah Rashad fan.</p>,
        email: '',
        linktree: 'https://linktr.ee/isaiahrashadfan',
        instagram: 'https://www.instagram.com/cchristse',
        discord: 'https://discordapp.com/users/85194740890337280',
        github: '',
        linkedin: 'https://www.linkedin.com/in/chris-tse-irf/',
        website: 'https://chrisrtse.com',
        icon: <FaRegHandPeace />,
      },
      {
        name: 'Denise Hum',
        role: 'Club Co-Advisor',
        imgSrc: dir_2023_2024 + 'denisehumport.png',
        quote:
          'Data are summaries of thousands of stories. Tell a few of those stories to help make the data meaningful.',
        email: '',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/735277805662765066',
        github: '',
        linkedin: 'https://www.linkedin.com/in/denisehum/',
        website: '',
        icon: <PiHandshakeBold />,
      },
      {
        name: 'Bryan Swartout',
        role: 'Club Co-Advisor',
        imgSrc: dir_2023_2024 + 'bryanswartoutport.png',
        quote: '',
        email: '',
        linktree: '',
        instagram: '',
        discord: 'https://discordapp.com/users/316816595668172800',
        github: '',
        linkedin: 'https://www.linkedin.com/in/swartoutbryan/',
        website: '',
        icon: <PiHandshakeBold />,
      },
    ],
    minor: [
      {
        title: 'Web Master',
        label: 'Lance Ruiz',
        color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
        icon: <AiOutlineGlobal />,
      },
      {
        title: 'Social Outreach',
        label: 'Chris Tse & Kaila Bautista',
        color_complex: 'from-[#651e94] shadow-[#651e94]',
        icon: <PiHandshakeBold />,
      },
      {
        title: 'Event Planners',
        label: 'Tyler Kuwada & Lance Ruiz',
        color_complex: 'from-[#9c710c] shadow-[#9c710c]',
        icon: <MdOutlineEmojiEvents />,
      },
    ],
  },
] as const

export default leadership
