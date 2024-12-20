jQuery(document).ready(function ($) {
    $('.quiz-step').hide(); // Hide all steps initially
    $('#step-1').show(); // Show the first step

    let totalPoints = 0; // To store total score
    let userAge = 0; // To store user age
    let totalSteps = $('.quiz-step').length; // Total number of steps/questions
    let currentStepIndex = 1; // Track the current step

    // Function to update the progress bar and question counter
    function updateProgressBar() {
        let progress = (currentStepIndex / totalSteps) * 100;
        $('#progress-bar').css('width', progress + '%');
        $('#question-counter').text('Question ' + currentStepIndex + ' of ' + totalSteps);
    }
    // Initialize progress bar on page load
    updateProgressBar();

    // Function to show feedback message
    function showFeedbackMessage(message) {
        const feedbackDiv = $('<div class="feedback-message"></div>').text(message);
        $('body').append(feedbackDiv);
        feedbackDiv.fadeIn();

        setTimeout(function () {
            feedbackDiv.fadeOut(function () {
                feedbackDiv.remove(); // Remove the feedback message after fading out
            });
        }, 4000); // Display the message for 4 seconds
    }

    // Function to handle age input and provide feedback
    function validateAndGiveFeedback() {
        userAge = parseInt($('#user-age').val(), 10);
    
        // Check if the user age is a valid number and above 18
        if (isNaN(userAge) || userAge < 18) {
            $('#age-error').show(); // Display the error message for invalid age
            return false;
        } else {
            $('#age-error').hide(); // Hide the error message for valid age
            return true; // Allow moving to the next step without showing feedback
        }
    }    

    // Function to handle Question 2 feedback and point addition
function handleQuestion2Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q2"]:checked').val();
    
    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 2
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Ottimo! Le visite regolari dal dentista aiutano a mantenere i denti sani fin dalla giovane età.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Le visite regolari possono aiutare a prevenire problemi con l'avanzare dell'età.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Eccellente! Anche in età avanzata, i controlli regolari riducono il rischio di gravi problemi dentali.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Le visite regolari dal dentista sono essenziali per gestire le condizioni dentali croniche.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Va bene, ma cerca di visitare il dentista almeno una volta all'anno per prevenire problemi futuri.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Aumentare la frequenza delle visite potrebbe aiutare a mantenere la salute dentale con l'età.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Potrebbe essere utile visitare il dentista più spesso per mantenere una buona salute dentale.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Visite più frequenti aiutano a monitorare meglio la salute dentale in questa fase della vita.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}


    // Function to handle Question 3 feedback and point addition
function handleQuestion3Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q3"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 3
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Fantastico! Una buona routine di igiene orale proteggerà i tuoi denti per molti anni a venire.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Ottimo lavoro! Una routine di igiene costante aiuta a prevenire carie e gengivite.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Mantenere una buona routine a questa età è fondamentale per prevenire problemi alle gengive e ai denti.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Eccellente! Una routine costante aiuta a preservare la salute dentale anche in età avanzata.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Sei sulla buona strada, ma cerca di non saltare troppo spesso la tua routine.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Rendi la tua routine più costante per mantenere una buona salute dentale con l'età.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Saltare l'igiene può portare a problemi più significativi in futuro. Prova a migliorare la tua routine.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "A questa età, è importante non trascurare l'igiene quotidiana per evitare complicazioni.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Function to handle Question 4 feedback and point addition
function handleQuestion4Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q4"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 4
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Nessun dolore! I tuoi denti e le tue gengive sono in ottime condizioni.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Ottimo, l'assenza di dolore indica una buona salute dentale.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Non avere dolore a questa età è un segno molto positivo.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Eccellente! Senza dolore, le tue gengive e i tuoi denti sono in buone condizioni.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Potrebbe esserci un po' di sensibilità, considera di consultare il tuo dentista per un controllo.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Un po' di dolore può essere normale, ma tieni sotto controllo la situazione.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Se provi disagio, è sempre meglio fare un controllo per evitare problemi più seri.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Il dolore a questa età potrebbe essere normale, ma è meglio tenerlo sotto controllo.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Function to handle Question 5 feedback and point addition
function handleQuestion5Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q5"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 5
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Perfetto! Mantenere lo smalto sano proteggerà i tuoi denti a lungo termine.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Ottimo, il tuo smalto dentale è ancora in condizioni eccellenti.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Buona salute dello smalto, continua così!";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Mantenere lo smalto intatto a questa età è un ottimo risultato.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Potrebbero esserci segni minimi, cerca di proteggere il tuo smalto.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Segni minori sono normali, ma cerca di limitarli evitando cibi acidi.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Piccole macchie sono comuni a questa età, ma monitorale con il tuo dentista.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Macchie o usura potrebbero essere più comuni, ma cerca di proteggerle il più possibile.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}


    // Function to handle Question 6 feedback and point addition
function handleQuestion6Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q6"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 6
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Senza placca e tartaro, i tuoi denti sono in ottima salute!";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Fantastico, niente placca o tartaro ti protegge da problemi come carie e malattie gengivali.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Mantenere i denti puliti senza placca a questa età è eccellente.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Ottimo lavoro nel mantenere l'igiene orale senza accumulo di placca!";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Una leggera presenza di placca è normale, ma cerca di spazzolare più accuratamente o usare il filo interdentale.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Il tartaro moderato può essere trattato con una pulizia professionale. Considera di visitare il tuo dentista.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Se c'è un accumulo moderato di tartaro, una pulizia professionale può prevenire problemi futuri.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "La placca e il tartaro sono normali a questa età, ma è importante rimuoverli regolarmente per prevenire complicazioni.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Function to handle Question 7 feedback and point addition
function handleQuestion7Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q7"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 7
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Ottimo! Gengive sane senza sanguinamento sono un segno di buona salute orale.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Gengive senza sanguinamento sono un segno positivo. Continua la tua routine di igiene orale.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "A questa età, gengive sane senza sanguinamento sono molto importanti.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Ottimo! Gengive senza sanguinamento indicano una buona cura dentale.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Il sanguinamento occasionale può indicare gengivite. Assicurati di spazzolare e usare il filo interdentale regolarmente.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Il sanguinamento minore può essere risolto con una routine di pulizia più attenta.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Un lieve sanguinamento può essere normale, ma assicurati di fare controlli regolari.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "A questa età, il sanguinamento gengivale è più comune, ma dovrebbe essere monitorato attentamente.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Function to handle Question 8 feedback and point addition
function handleQuestion8Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q8"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 8
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Fantastico! Nessun segno di gonfiore o rossore significa che ti stai prendendo cura delle tue gengive.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Gengive sane sono un segno di buona igiene orale. Continua così!";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "A questa età, gengive sane senza gonfiore sono un segno di eccellente salute orale.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Eccellente! Nessun segno di gonfiore o rossore è un risultato positivo a questa età.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Un lieve gonfiore può indicare un'infiammazione, prova a spazzolare delicatamente e a programmare controlli regolari.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Un po' di gonfiore è normale con l'età, ma può essere gestito con una routine di pulizia più attenta.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Se il gonfiore persiste, considera di visitare il tuo dentista per prevenire problemi futuri.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Un po' di gonfiore può essere normale, ma è importante monitorarlo.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}
    // Function to handle Question 9 feedback and point addition
function handleQuestion9Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q9"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 9
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Ottimo! L'alito fresco è un segno di buona igiene orale e di una bocca sana.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Mantenere un alito fresco indica che ti stai prendendo cura della tua bocca.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "Eccellente! L'alito fresco a questa età è un segno di buona igiene.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "L'alito fresco in età avanzata è un ottimo indicatore di salute orale.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Avere occasionalmente l'alito cattivo è normale, ma migliorare la tua routine di pulizia potrebbe aiutare a risolvere il problema.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Se l'alito cattivo persiste, potrebbe essere un segno di problemi più profondi come l'accumulo di placca o gengivite.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "L'alitosi persistente potrebbe indicare la necessità di una pulizia più profonda.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "L'alito cattivo è più comune a questa età, ma può essere gestito con una pulizia regolare e accurata.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Function to handle Question 10 feedback and point addition
function handleQuestion10Feedback() {
    let ageGroup = ''; // Determine age group based on userAge
    let feedbackMessage = '';
    let selectedOption = $('input[name="q10"]:checked').val();

    // Determine the age group
    if (userAge >= 18 && userAge <= 30) {
        ageGroup = '18-30';
    } else if (userAge >= 31 && userAge <= 50) {
        ageGroup = '31-50';
    } else if (userAge >= 51 && userAge <= 70) {
        ageGroup = '51-70';
    } else if (userAge >= 71) {
        ageGroup = '71+';
    }

    // Add points based on the selected option for Question 10
    selectedOption = parseInt(selectedOption, 10); // Convert the selected value to an integer
    totalPoints += selectedOption;

    // Determine the feedback message based on the selected option
    if (selectedOption === 0 || selectedOption === 0) {
        // Feedback positivo (prime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Eccellente! Denti stabili indicano che le tue gengive e la tua mascella sono in ottima salute.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Denti stabili sono un segno di gengive sane e forti. Continua a prenderti cura della tua igiene orale.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "A questa età, mantenere denti stabili è un segno positivo di salute orale.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "Eccellente! Mantenere denti stabili a questa età è un ottimo segno.";
        }
    } else if (selectedOption === 1 || selectedOption === 2) {
        // Feedback neutro (ultime due opzioni)
        if (ageGroup === '18-30') {
            feedbackMessage = "Anche una lieve mobilità dei denti è anormale a questa età. Consulta il tuo dentista per prevenire problemi futuri.";
        } else if (ageGroup === '31-50') {
            feedbackMessage = "Una leggera mobilità potrebbe indicare gengivite o perdita ossea. È consigliabile un controllo dentistico.";
        } else if (ageGroup === '51-70') {
            feedbackMessage = "La mobilità dei denti è più comune, ma dovrebbe essere monitorata per evitare peggioramenti.";
        } else if (ageGroup === '71+') {
            feedbackMessage = "I denti allentati sono più comuni a questa età, ma è importante controllarli regolarmente per prevenire la perdita dei denti.";
        }
    }    

    // Show the feedback message
    showFeedbackMessage(feedbackMessage);
}

    // Handle next step button clicks
    $('.next-step').on('click', function () {
        let currentStep = $(this).closest('.quiz-step');
        let nextStep = $(this).data('next-step');

        // Validate age input in the first step
        if (currentStep.attr('id') === 'step-1') {
            if (!validateAndGiveFeedback()) {
                return; // If age is not valid, stop here
            }
        }

        // Handle Question 2
    if (currentStep.attr('id') === 'step-2') {
        handleQuestion2Feedback(); // Call the function to handle feedback for Question 2
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-3') {
        handleQuestion3Feedback(); // Call the function to handle feedback for Question 3
    }

        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-4') {
        handleQuestion4Feedback(); // Call the function to handle feedback for Question 4
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-5') {
        handleQuestion5Feedback(); // Call the function to handle feedback for Question 5
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-6') {
        handleQuestion6Feedback(); // Call the function to handle feedback for Question 6
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-7') {
        handleQuestion7Feedback(); // Call the function to handle feedback for Question 7
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-8') {
        handleQuestion8Feedback(); // Call the function to handle feedback for Question 8
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-9') {
        handleQuestion9Feedback(); // Call the function to handle feedback for Question 9
    }
        // Inside the next-step click handler
    if (currentStep.attr('id') === 'step-10') {
        handleQuestion10Feedback(); // Call the function to handle feedback for Question 10
    }




        // Check if a radio button is selected before moving to the next step (for questions other than age input)
        if (currentStep.find('input[type="radio"]').length > 0) {
            if (currentStep.find('input[type="radio"]:checked').length === 0) {
                alert('Please select an answer before proceeding.');
                return;
            }
        }

        // Add points for the current question
        // currentStep.find('input[type="radio"]:checked').each(function () {
        //     totalPoints += parseInt($(this).val(), 10);
        // });

        currentStep.hide(); // Hide current step
        $('#step-' + nextStep).show(); // Show next step

        // Update the progress bar and counter
        currentStepIndex++;
        updateProgressBar();
    });

    // Handle previous step button clicks
    $('.previous-step').on('click', function () {
        let currentStep = $(this).closest('.quiz-step');
        let previousStep = $(this).data('previous-step');

        currentStep.hide(); // Hide current step
        $('#step-' + previousStep).show(); // Show the previous step

        // Update the progress bar and counter
        currentStepIndex--;
        updateProgressBar();
    });

        // Inside the form submission handler to calculate and redirect to the results page
$('#ohsa-quiz-form').on('submit', function (e) {
    e.preventDefault();

    // Step 1: Calculate biological age
    let biologicalAge = userAge + totalPoints;

    // Step 2: Generate final feedback
    let feedbackSummary = ''; // This will hold the summary of the issues and solutions
    let ageFeedback = ''; // Message about the calculated tooth age

    // Determine the biological age feedback message based on age
    if (biologicalAge <= userAge - 5) {
        ageFeedback = 'I tuoi denti sono biologicamente più giovani della tua età reale! Continua a mantenere un\'eccellente igiene orale.';
    } else if (biologicalAge <= userAge) {
        ageFeedback = 'I tuoi denti sono in linea con la tua età reale. Mantenere buone abitudini li manterrà sani.';
    } else if (biologicalAge <= userAge + 5) {
        ageFeedback = 'I tuoi denti mostrano segni di lieve invecchiamento. Piccoli cambiamenti nella tua routine di igiene orale possono fare una grande differenza.';
    } else {
        ageFeedback = 'I tuoi denti sembrano essere significativamente più vecchi della tua età reale. È consigliabile affrontare alcune aree della tua salute orale.';
    }

    // Step 3: Identify problematic areas based on responses
    if ($('input[name="q2"]:checked').val() >= 3) {
        feedbackSummary += '<p><strong>Visite dentistiche:</strong> I controlli dentali regolari sono fondamentali. Considera di programmare visite almeno una volta all\'anno per monitorare la tua salute orale.</p>';
    }
    if ($('input[name="q3"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Igiene orale:</strong> La tua routine attuale potrebbe necessitare di miglioramenti. Spazzolare e usare il filo interdentale quotidianamente può migliorare notevolmente la tua salute orale.</p>';
    }
    if ($('input[name="q4"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Dolore ai denti o alle gengive:</strong> Il dolore o la sensibilità possono indicare problemi sottostanti. Si consiglia di consultare il dentista per un esame professionale.</p>';
    }
    if ($('input[name="q5"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Smalto dei denti:</strong> I segni di usura dello smalto possono causare sensibilità. Usa un dentifricio protettivo per lo smalto ed evita cibi acidi per mantenere la forza dei denti.</p>';
    }
    if ($('input[name="q6"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Placca e tartaro:</strong> L\'accumulo di placca può causare malattie gengivali. È consigliata una pulizia professionale regolare.</p>';
    }
    if ($('input[name="q7"]:checked').val() >= 3) {
        feedbackSummary += '<p><strong>Gengive sanguinanti:</strong> Le gengive sanguinanti possono indicare una malattia gengivale. Assicurati di spazzolare e usare il filo interdentale delicatamente, e visita un dentista se i sintomi persistono.</p>';
    }
    if ($('input[name="q8"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Gengive gonfie:</strong> Il gonfiore o il rossore sono spesso un segno di infiammazione. Usa un collutorio antibatterico e consulta un dentista se necessario.</p>';
    }
    if ($('input[name="q9"]:checked').val() >= 3) {
        feedbackSummary += '<p><strong>Alito cattivo:</strong> L\'alito cattivo persistente può segnalare problemi dentali. I controlli dentali regolari possono aiutare a identificare e risolvere questi problemi.</p>';
    }
    if ($('input[name="q10"]:checked').val() >= 2) {
        feedbackSummary += '<p><strong>Denti mobili:</strong> La mobilità dei denti potrebbe suggerire malattie gengivali o perdita ossea. È altamente consigliata una valutazione dentale professionale.</p>';
    }

    // Step 4: Display final feedback and results
    let finalFeedback = `<p>La tua età biologica dentale calcolata è: ${biologicalAge} anni.</p>`;
    finalFeedback += `<p>${ageFeedback}</p>`;
    finalFeedback += `<h4>Aree di miglioramento</h4>${feedbackSummary || '<p>Nessuna area di miglioramento specifica individuata.</p>'}`;

    // Encode the feedback for URL and redirect
    const encodedFeedback = encodeURIComponent(finalFeedback);
    window.location.href = `https://rivos11.sg-host.com/fq-result/?age=${biologicalAge}&feedback=${encodedFeedback}`;
});

// Ensure the document ready function is properly closed
});


// Social share URL and message
const quizUrl = encodeURIComponent("https://rivos11.sg-host.com/fq-questions/");
const shareText = encodeURIComponent("Check out this quiz!");

// Set up Facebook share link
document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${quizUrl}`;

// Set up WhatsApp share link
document.getElementById('share-whatsapp').href = `https://wa.me/?text=${shareText}%20${quizUrl}`;
