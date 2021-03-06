import $ from 'jquery';
import PDFObject from 'pdfobject';
import { deleteLastSavedCommand } from './commandSystem';

const $resumeContainer = $('#resume-viewer-container');
const $resumeContent = $('#resume-viewer-container .content');
const $resumeClose = $('#resume-close');
const $resumeViewer = $('#resume-viewer');

export const openResume = function() {
    $resumeClose.off('click').on('click', function() {
        $resumeContainer.fadeOut(250);
        deleteLastSavedCommand();
    });
    $resumeContent.css('height',$(window).width()+50);
    $resumeContainer.fadeIn(250);
    PDFObject.embed("eduard-frankford.pdf", "#resume-viewer", {
        fallbackLink: "<p>This browser does not support inline PDFs. <a href='[url]'>Click To View PDF &raquo;</a></p>"
    });
};

export const openNotes = function() {
    window.open("/blog.html", '_blank');
};

export const openChatBot = function() {
    window.open("/chatbot.html", '_blank');
};