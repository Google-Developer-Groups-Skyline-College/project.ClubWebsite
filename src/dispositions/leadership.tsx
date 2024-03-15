/*

    ! NOTICE: Per leader dict entry, follow this key order. Leave each string value empty if not applicable.
        'role': 'Projects Manager',
        'imgSrc': pfp_projectmanager,
        'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.</p>),
        SOCIALS START HERE
        'linktree': 'https://www.linktr.ee/devalto',
        'instagram': 'https://www.instagram.com/dev_alto',
        'discord': 'https://discordapp.com/users/168406210687533056',
        'github': 'https://www.github.com/dev-alto',
        'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
        'website': 'https://the-devalto-experiments.000webhostapp.com/'

*/
const dir_leaderPortraits = '/assets/home/leader_portraits/'

const pfp_president = dir_leaderPortraits +'tylerkuwadaport.png'
const pfp_vicepresident = dir_leaderPortraits + 'jonasquiballoport.png'
const pfp_secretary = dir_leaderPortraits + 'kailabautistaport.jpg'
const pfp_treasurer = dir_leaderPortraits + 'jayanpintorport.jpg'
const pfp_projectmanager = dir_leaderPortraits + 'lanceruizport.png'

const pfp_auxillary1 = dir_leaderPortraits + 'christseport.png'

const pfp_coadvisor1 = dir_leaderPortraits + 'denisehumport.png'
const pfp_coadvisor2 = dir_leaderPortraits + 'bryanswartoutport.png'

export const FALLBACK_QUOTE = (<p>That was no message. <i>This</i> is a message.</p>)

export const leadership = {
    'Tyler Kuwada': {
        'role': 'President',
        'imgSrc': pfp_president,
        'linktree': '',
        'instagram': 'https://www.instagram.com/tyler_kuwada/',
        'discord': 'https://discordapp.com/users/227633077545992192',
    },
    'Jonas Quiballo': {
        'role': 'Vice President',
        'imgSrc': pfp_vicepresident,
        'linktree': '',
        'github': 'https://github.com/Waffly10',
        'instagram': 'https://www.instagram.com/_.waffly._/'
    },
    'Kaila Bautista': {
        'role': 'Secretary',
        'imgSrc': pfp_secretary,
        'linktree': '',
        'instagram': 'https://instagram.com/kqilamae'
    },
    'Jayan Pintor': {
        'role': 'Treasurer',
        'imgSrc': pfp_treasurer,
        'linktree': '',
        'github': 'https://github.com/CoderLearnerTime',
        'instagram': 'https://www.instagram.com/0p_photos/'
    },
    'Lance Ruiz': {
        'role': 'Projects Manager',
        'imgSrc': pfp_projectmanager,
        'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.<br/>- Captain $</p>),
        'linktree': 'https://www.linktr.ee/devalto',
        'instagram': '',
        'discord': 'https://discordapp.com/users/168406210687533056',
        'github': 'https://www.github.com/dev-alto',
        'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
        'website': 'https://the-devalto-experiments.000webhostapp.com/'
    },
    'Chris Tse': {
        'role': 'SOCC Advisor',
        'imgSrc': pfp_auxillary1,
        'quote': (<p>True Isaiah Rashad fan.</p>),
        'linktree': 'https://linktr.ee/isaiahrashadfan',
        'discord': 'https://discordapp.com/users/85194740890337280',
        'instagram': 'https://www.instagram.com/cchristse/'
    },
    'Denise Hum': {
        'role': 'Co-Advisor',
        'imgSrc': pfp_coadvisor1,
        'linktree': '',
        'github': ''
    },
    'Bryan Swartout': {
        'role': 'Co-Advisor',
        'imgSrc': pfp_coadvisor2,
        'linktree': '',
        'discord': 'https://discordapp.com/users/316816595668172800',
        'github': ''
    }
}

export default leadership