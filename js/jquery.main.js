jQuery(function() {
   
    var urlData = 'question.json';
    var baseImgUrl = 'https://www.passarnocodigo.com/content/resources/images/';

    $.getJSON(urlData, function(response) {
        let questions = response.questions;
        let content = '';

        $.each(questions, function(i, item) {
            let questionBlock = item;

            imagePrev = questionBlock.imageHash;
            ansA = questionBlock.optionA;
            ansB = questionBlock.optionB;
            ansC = questionBlock.optionC;
            ansD = questionBlock.optionD;
            correctAns = questionBlock.correct;
            question = questionBlock.question;


            content += '<div class="question-section card mb-5">'
            + '<a data-fancybox href="' + baseImgUrl + imagePrev + '" class="image-holder"><img class="card-img-top" src="' + baseImgUrl + imagePrev + '" alt="image description"></a>' 
            + '<div class="card-body">'
            + '<h2>' + question + '</h2>'
            + '<ul class="list-group">';
            content += ansA?'<li class="list-group-item ' + (correctAns=='A'?'correct':'wrong') + '">A: <span class="answer">' + ansA + '</span></li>':'';
            content += ansB?'<li class="list-group-item ' + (correctAns=='B'?'correct':'wrong') + '">B: <span class="answer">' + ansB + '</span></li>':'';
            content += ansC?'<li class="list-group-item ' + (correctAns=='C'?'correct':'wrong') + '">C: <span class="answer">' + ansC + '</span></li>':'';
            content += ansD?'<li class="list-group-item ' + (correctAns=='D'?'correct':'wrong') + '">D: <span class="answer">' + ansD + '</span></li>':'';
            content +='</ul></div></div>';

        })
        $('#questionBlock').append(content);

        // console.log($('.list-group-item'));

        let answerList = $('.list-group-item');

        $.each(answerList, function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                let currentAns = $(this);
                if (currentAns.hasClass('correct')) {
                    $(this).addClass('bg-success text-white');
                } else {
                    $(this).addClass('bg-danger text-white');
                }
            })
        })

    })
    .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Request Failed: " + err);
    });


})

