jQuery(function() {
    // $('button').on('click', function (e) {
        // e.preventDefault();

        

        // var form = $(this);
        var urlData = 'question.json';
        var baseImgUrl = 'https://www.passarnocodigo.com/content/resources/images/';

        // $.ajax({
        //     type: 'GET',
        //     url: urlData,
        //     beforeSend: function () {
        //         // preloader.css('display', 'flex');
        //     },
        //     success: function (response) {
        //         console.log(response);
        //     },
        //     error: function (error) {
        //         // alert(error.responseText);
        //         // window.location.href = '/home-insurance-rater?e=1';
        //     }
        // });

        

        // translateEngine();

        // async function translateEngine(srcText) {

        //     // let srcText = prSrcText;
        //     // let resultText = prResultText;

        //     const settings = {
        //         async: true,
        //         crossDomain: true,
        //         url: 'https://swift-translate.p.rapidapi.com/translate',
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //             'X-RapidAPI-Key': '821ebc4e1fmsh0647c584bd90be3p1c7871jsn5e3e6fa8cae7',
        //             'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
        //         },
        //         processData: false,
        //         data: '{\n    "text": "' + srcText + '",\n    "sourceLang": "pt",\n    "targetLang": "en"\n}'
        //     };

        //     $.ajax(settings).done(function (translate) {
        //          console.log('translate');
        //         return translate.translatedText;
        //     });

        //     // setTimeout( () => {
        //     //     console.log('this');
        //     // }, 2000);

        // }


        // function translateEngine(srcText) {
        //     return new Promise((resolve, reject) => {
        //       $.ajax({
        //         url: 'https://swift-translate.p.rapidapi.com/translate',
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //             'X-RapidAPI-Key': '821ebc4e1fmsh0647c584bd90be3p1c7871jsn5e3e6fa8cae7',
        //             'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
        //         },
        //         data: '{\n    "text": "' + srcText + '",\n    "sourceLang": "pt",\n    "targetLang": "en"\n}',
        //         success: function(response) {
        //           resolve(response.translatedText);
        //         },
        //         error: function(error) {
        //           reject(error);
        //         }
        //       });
        //     });
        //     return srcText;
        //   }

          // Async function using the Promise
          // async function getData() {
          //   try {
          //     const result = await translateEngine('O sinal circular indica:');
          //     // console.log(result);
          //     // Do something with the result
          //   } catch (error) {
          //     console.error(error);
          //   }
          // }

          // Call the async function
          // $(document).ready(function() {
            // getData();
          // });

        


          $.getJSON(urlData, function(response) {
            // Handle the JSON data
            let questions = response.questions;
            let content = '';

            // let testQQQ = response.questions[0].question;

            // try {
            //   const result = await translateEngine(testQQQ);
            //   console.log(result);
            //   // Do something with the result
            // } catch (error) {
            //   console.error(error);
            // }

            

            // let queEn = await translateEngine(testQQQ);
            // console.log(queEn);


            $.each(questions, function(i, item) {
                // console.log(item);
                let questionBlock = item;

                // questionPt = questionBlock.question;

                // try {
                //     // const questionEn = await translateEngine(questionPt);

                //     imagePrev = questionBlock.imageHash;
                //     ansA =  await translateEngine(questionBlock.optionA);
                //     ansB =  await translateEngine(questionBlock.optionB);
                //     ansC =  await translateEngine(questionBlock.optionC);
                //     ansD =  await translateEngine(questionBlock.optionD);
                //     correctAns = questionBlock.correct;
                //     question = await translateEngine(questionBlock.question);

                //     // imagePrev = questionBlock.imageHash;
                // // ansA = questionBlock.optionA;
                // // ansB = questionBlock.optionB;
                // // ansC = questionBlock.optionC;
                // // ansD = questionBlock.optionD;
                // // correctAns = questionBlock.correct;
                // // question = questionBlock.question;

                //     content += '<div class="question-section card mb-5">'
                //     + '<a data-fancybox href="' + baseImgUrl + imagePrev + '" class="image-holder"><img class="card-img-top" src="' + baseImgUrl + imagePrev + '" alt="image description"></a>' 
                //     + '<div class="card-body">'
                //     + '<h2>' + question + '</h2>'
                //     + '<ul class="list-group">';
                //     content += ansA?'<li class="list-group-item ' + (correctAns=='A'?'active':'wrong') + '">A: <span class="answer">' + ansA + '</span></li>':'';
                //     content += ansB?'<li class="list-group-item ' + (correctAns=='B'?'active':'wrong') + '">B: <span class="answer">' + ansB + '</span></li>':'';
                //     content += ansC?'<li class="list-group-item ' + (correctAns=='C'?'active':'wrong') + '">C: <span class="answer">' + ansC + '</span></li>':'';
                //     content += ansD?'<li class="list-group-item ' + (correctAns=='D'?'active':'wrong') + '">D: <span class="answer">' + ansD + '</span></li>':'';
                //     content +='</ul></div></div>';

                    

                //     // console.log(question);
                // } catch (error) {
                //     console.error(error);
                // }

                // $('#questionBlock').append(content);

                // setTimeout(function() {
                    
                    // console.log(translateEngine(questionPt));
                // }, 1000);

                // $.ajax({
                //     type: 'POST',
                //     url: 'https://swift-translate.p.rapidapi.com/translate',
                //     headers: {
                //         'content-type': 'application/json',
                //         'X-RapidAPI-Key': '821ebc4e1fmsh0647c584bd90be3p1c7871jsn5e3e6fa8cae7',
                //         'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
                //     },
                //     data: '{\n    "text": "O sinal circular indica:",\n    "sourceLang": "pt",\n    "targetLang": "en"\n}',
                //     success: function(translate) {
                //         console.log(translate);
                //     }
                // })
                


                imagePrev = questionBlock.imageHash;
                ansA = questionBlock.optionA;
                ansB = questionBlock.optionB;
                ansC = questionBlock.optionC;
                ansD = questionBlock.optionD;
                correctAns = questionBlock.correct;
                question = questionBlock.question;

                // question += $('.question-block').find('h2').text(question);

                // console.log(questionBlock);

                content += '<div class="question-section card mb-5">'
                + '<div class="image-holder"><img class="card-img-top" src="' + baseImgUrl + imagePrev + '" alt="image description"></div>' 
                + '<div class="card-body">'
                + '<h2>' + question + '</h2>'
                + '<ul class="list-group">';
                content += ansA?'<li class="list-group-item ' + (correctAns=='A'?'active':'wrong') + '">A: <span class="answer">' + ansA + '</span></li>':'';
                content += ansB?'<li class="list-group-item ' + (correctAns=='B'?'active':'wrong') + '">B: <span class="answer">' + ansB + '</span></li>':'';
                content += ansC?'<li class="list-group-item ' + (correctAns=='C'?'active':'wrong') + '">C: <span class="answer">' + ansC + '</span></li>':'';
                content += ansD?'<li class="list-group-item ' + (correctAns=='D'?'active':'wrong') + '">D: <span class="answer">' + ansD + '</span></li>':'';
                content +='</ul></div></div>';
            })
            // console.log(content);
            $('#questionBlock').append(content);
          })
          .fail(function(jqxhr, textStatus, error) {
            // Handle errors
            var err = textStatus + ", " + error;
            console.error("Request Failed: " + err);
          });


    // });

})

