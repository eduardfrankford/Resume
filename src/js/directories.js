import { openChatBot, openNotes, openResume } from './resumeViewer';

export default {
    '~': {
        items: [ 'about', 'projects', 'resume', 'contact', 'site-info'],
        about: {
            contents: '#about'
        },
        projects: {
            items: [ 'DSCP', 'Surfsktown', 'FrankfordTaewkondo', 'CodeAbility' ],
            dscp: {
                contents: '#project-fahrschulvergleich'
            },
            surfsktown: {
                contents: '#project-surfsktown'
            },
            frankfordtaewkondo: {
                contents: '#project-frankfordtaekwondo'
            },
            codeability: {
                contents: '#project-codeability'
            }
        },
        notes: {
            execute: openNotes
        },
        resume: {
            execute: openResume
        },
        chatbot: {
            execute: openChatBot
        },
        contact: {
            contents: '#contact'
        },
        ['site-info']: {
            contents: '#site-info'
        },
    }
};
