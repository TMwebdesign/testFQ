jQuery(document).ready(function ($) {
    $('#ohsa-quiz-form').on('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const responses = {};
        $('#ohsa-quiz-form .quiz-step').each(function (index) {
            const question = $(this).find('label').text().trim();
            const answer = $(this).find('input:checked, input[type="number"]').val();
            responses[question] = answer || "N/A";
        });

        // Send AJAX request
        $.ajax({
            url: ohsaQuiz.ajax_url,
            type: 'POST',
            data: {
                action: 'ohsa_send_quiz_results',
                security: ohsaQuiz.nonce,
                responses: responses
            },
            success: function (response) {
                if (response.success) {
                    $('#quiz-result').text(response.data);
                } else {
                    $('#quiz-result').text('Errore durante l\'invio dei risultati.');
                }
            },
            error: function () {
                $('#quiz-result').text('Errore di connessione.');
            }
        });
    });
});
