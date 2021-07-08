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
