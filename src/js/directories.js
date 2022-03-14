import { openChatBot, openNotes, openResume } from './resumeViewer';

export default {
    '~': {
        items: [ 'about', 'projects', 'resume', 'contact', 'site-info'],
        about: {
            contents: '#about'
        },
        projects: {
            items: [  'frankfordtaewkondo', 'codeability' ],
            fahrschulpreisvergleich: {
                contents: '#project-fahrschul-preisvergleich'
            },
            surfSkTown: {
                contents: '#project-surf-sktown'
            },
            frankfordtaewkondo: {
                contents: '#project-frankfordtaekwondo'
            },
            codeability: {
                contents: '#project-codeAbility'
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
