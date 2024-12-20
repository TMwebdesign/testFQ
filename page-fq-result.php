<?php
/*
Template Name: Quiz Result Page
*/

get_header(); // Load the header template

// Retrieve the biological age and feedback message from the query parameters
$biological_age = isset($_GET['age']) ? intval($_GET['age']) : null;
$feedback_message = isset($_GET['feedback']) ? urldecode($_GET['feedback']) : null;
?>

<div id="quiz-result-container" style="text-align: center; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #edf4fb; border-radius: 8px; border: 1px solid #0a0935; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);">
    <?php if ($biological_age && $feedback_message): ?>
        <!-- Container for result and form with custom styling -->
        <div style="background-color: #edf4fb; padding: 20px; border-radius: 8px;">
            
            <!-- Display the feedback message -->
            <h3>La tua età biologica dentale</h3>
            <p><?php echo htmlspecialchars_decode($feedback_message); ?></p>

            <!-- Message above WPForms form -->
            <h4>Condividilo con i tuoi amici</h4>
            
            <!-- Embed the WPForms form with full-width styling -->
            <div id="wpform-container" style="width: 100%; margin: 0 auto; text-align: left;">
                <?php echo do_shortcode('[wpforms id="3712"]'); ?>
            </div>
        </div>
    <?php else: ?>
        <p>Nessun risultato da visualizzare. Si prega di completare prima il quiz.</p>
    <?php endif; ?>
</div>

<style>
    /* Make WPForms form fill the container fully */
    #wpform-container .wpforms-container {
        max-width: 100% !important; /* Force full width */
        padding: 0 !important; /* Remove padding */
        margin: 0 !important; /* Remove margin */
    }

    /* Set fields, labels, and input styles for full-width appearance */
    #wpform-container .wpforms-field,
    #wpform-container .wpforms-field-label,
    #wpform-container input[type="text"],
    #wpform-container input[type="email"],
    #wpform-container textarea,
    #wpform-container select {
        width: 100% !important; /* Full width for fields */
        box-sizing: border-box; /* Include padding in width */
    }

    /* Adjust submit button to align with full width */
    #wpform-container .wpforms-submit {
        width: 100% !important;
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #0a0935; /* Button color */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>

<?php get_footer(); ?>
