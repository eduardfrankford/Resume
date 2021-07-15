import { openResume } from './resumeViewer';

export default {
    '~': {
        items: [ 'about', 'projects', 'resume', 'contact', 'site-info'],
        about: {
            contents: '#about'
        },
        projects: {
            items: [  'frankfordtaewkondo', 'codeability' ],
            frankfordtaewkondo: {
                contents: '#project-frankfordtaekwondo'
            },
            codeability: {
                contents: '#project-codeAbility'
            }
        },
        notes: {
            items: [  'erasmussevilla', 'erasmusnorway' ],
            erasmussevilla: {
                contents: '#erasmussevilla'
            },
            erasmusnorway: {
                contents: '#erasmusnorway'
            }
        },
        resume: {
            execute: openResume
        },
        contact: {
            contents: '#contact'
        },
        ['site-info']: {
            contents: '#site-info'
        },
    }
};
