$(document).ready(function () {
    let questions = $('.question-p').get();

    for (let i = 0; i < questions.length; i++) {
        $(questions[i]).click(() => {
            let answer = $('.answer-' + (i + 1))
            let arrow = $('.arrow-' + (i + 1))
            answer.slideToggle(500)
            arrow.toggleClass('rotate')
            $(questions[i]).toggleClass('clicked-question')
        })
    }

});