<?php
/**
 * Rishi Custom Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Rishi
 */

$theme_data = wp_get_theme();
if( ! defined( 'RISHI_VERSION' ) ) define( 'RISHI_VERSION', $theme_data->get( 'Version' ) );
if( ! defined( 'RISHI_NAME' ) ) define( 'RISHI_NAME', $theme_data->get( 'Name' ) );
if( ! defined( 'RISHI_TEXTDOMAIN' ) ) define( 'RISHI_TEXTDOMAIN', $theme_data->get( 'TextDomain' ) );   


// Customizer Builder directory.
defined( 'THEME_CUSTOMIZER_BUILDER_DIR_' ) || define( 'THEME_CUSTOMIZER_BUILDER_DIR_', get_template_directory() . '/customizer' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Google Fonts.
 */
require get_template_directory() . '/inc/typography/google-fonts.php';

/**
 * Custom Functions for the theme
 */
require get_template_directory() . '/inc/custom-functions.php';

/**
 * Extras Code
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
/**
 * Customizer Init Files
 */
require get_template_directory() . '/customizer/init.php';

/**
 * Dynamic Editor Styles
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Elementor Compatibility for the theme
 */
if ( rishi_is_elementor_activated() ) require get_template_directory() . '/inc/elementor-compatibility.php';

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) require get_template_directory() . '/inc/woocommerce.php';
/**
 * Load google fonts locally
 */
require get_template_directory() . '/inc/class-webfont-loader.php';

/** 
* Custom Dashboard Functions here
*/
require get_template_directory() . '/inc/classes/class-dashboard.php';

/**
 * Schema Markup here
 */
require get_template_directory() . '/inc/classes/class-microdata.php';

/**
 * Theme Updater
*/
require get_template_directory() . '/updater/theme-updater.php';

/**
 * Static CSS 
 *
 * Requires all the path of static_css folder
 *
 * @since 1.0.0
 */
foreach ( glob( get_template_directory() . '/inc/assets/css/static_css/*.php' ) as $file ) {
    require $file;
}

/**
 * Notices
 */
require get_template_directory() . '/updater/notice.php';


function enqueue_quiz_assets() {
    // Enqueue styles
    wp_enqueue_style('quiz-styles', get_template_directory_uri() . '/styles.css');
    
    // Enqueue scripts
    wp_enqueue_script('quiz-scripts', get_template_directory_uri() . '/scripts.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_quiz_assets');

function enqueue_fontawesome() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_fontawesome');

function ohsa_display_quiz() {
    ob_start();
    ?>
    <div id="ohsa-quiz-container">
        <form id="ohsa-quiz-form">
            <!-- Numerical Progress Display -->
        <div id="progress-container">
            <p id="question-counter">Question 1 of 10</p>
            <div id="progress-bar-container">
                <div id="progress-bar"></div>
            </div>
        </div>
            <!-- Question 1: Age input -->
            <div class="quiz-step" id="step-1">
                <label for="user-age">1. Qual è la tua età?</label>
                <input type="number" id="user-age" name="user-age" min="18" required>
                <p id="age-error" class="error-message">Per favore, inserisci un'età di 18 anni o superiore.</p>
                <button type="button" class="next-step" data-next-step="2">Avanti</button>
            </div>


            <!-- Question 2 -->
            <div class="quiz-step" id="step-2">
                <label>2. Come valuteresti la frequenza delle tue visite dal dentista negli ultimi 2 anni?</label><br>
                <input type="radio" name="q2" value="0" required> Vado dal dentista almeno una volta ogni 6 mesi<br>
                <input type="radio" name="q2" value="0"> Vado dal dentista una volta all'anno<br>
                <input type="radio" name="q2" value="1"> Vado dal dentista solo quando ho un problema<br>
                <input type="radio" name="q2" value="2"> Non sono stato dal dentista da più di due anni<br>
                <button type="button" class="previous-step" data-previous-step="1">Precedente</button>
                <button type="button" class="next-step" data-next-step="3">Avanti</button>
            </div>

            <!-- Question 3 -->
            <div class="quiz-step" id="step-3">
                <label>3. Quanto sei scrupoloso nella tua routine di igiene orale?</label><br>
                <input type="radio" name="q3" value="0" required> Mi lavo i denti e uso il filo interdentale due volte al giorno e uso il collutorio<br>
                <input type="radio" name="q3" value="0"> Mi lavo i denti due volte al giorno, ma a volte salto il filo interdentale<br>
                <input type="radio" name="q3" value="1"> Mi lavo i denti una volta al giorno e uso raramente il filo interdentale<br>
                <input type="radio" name="q3" value="2"> Spesso salto il lavaggio o l'uso del filo interdentale e non uso mai il collutorio<br>
                <button type="button" class="previous-step" data-previous-step="2">Precedente</button>
                <button type="button" class="next-step" data-next-step="4">Avanti</button>
            </div>

            <!-- Question 4 -->
            <div class="quiz-step" id="step-4">
                <label>4. Quanto spesso hai l'alito cattivo (alitosi)?</label><br>
                <input type="radio" name="q4" value="0" required> Mai, il mio alito è sempre fresco<br>
                <input type="radio" name="q4" value="0"> Occasionalmente, ma si risolve dopo essermi lavato i denti<br>
                <input type="radio" name="q4" value="1"> Frequentemente, e devo usare mentine o gomme<br>
                <input type="radio" name="q4" value="2"> Costantemente, anche dopo aver lavato i denti o usato il collutorio<br>
                <button type="button" class="previous-step" data-previous-step="3">Precedente</button>
                <button type="button" class="next-step" data-next-step="5">Avanti</button>
            </div>

            <!-- Question 5 -->
            <div class="quiz-step" id="step-5">
                <label>5. Quando hai cambiato lo spazzolino da denti per l'ultima volta?</label><br>
                <input type="radio" name="q5" value="0" required> Meno di 3 mesi fa<br>
                <input type="radio" name="q5" value="0"> Da 3 a 6 mesi fa<br>
                <input type="radio" name="q5" value="1"> Più di 6 mesi fa<br>
                <input type="radio" name="q5" value="2"> Non ricordo quando l'ho cambiato l'ultima volta<br>
                <button type="button" class="previous-step" data-previous-step="4">Precedente</button>
                <button type="button" class="next-step" data-next-step="6">Avanti</button>
            </div>


            <!-- Question 6 -->
            <div class="quiz-step" id="step-6">
                <label>6. Noti sensibilità nei denti quando consumi cibi caldi, freddi o dolci?</label><br>
                <input type="radio" name="q6" value="0" required> Nessuna sensibilità<br>
                <input type="radio" name="q6" value="0"> Leggera sensibilità ma gestibile<br>
                <input type="radio" name="q6" value="1"> Sensibilità moderata che richiede attenzione<br>
                <input type="radio" name="q6" value="2"> Sensibilità grave che rende difficile mangiare o bere<br>
                <button type="button" class="previous-step" data-previous-step="5">Precedente</button>
                <button type="button" class="next-step" data-next-step="7">Avanti</button>
            </div>

            <!-- Question 7 -->
            <div class="quiz-step" id="step-7">
                <label>7. Hai notato problemi alle gengive come sanguinamento, gonfiore o dolore?</label><br>
                <input type="radio" name="q7" value="0" required> No, le mie gengive sono sane e non sanguinano<br>
                <input type="radio" name="q7" value="0"> Occasionalmente, le mie gengive sanguinano leggermente durante la spazzolatura<br>
                <input type="radio" name="q7" value="1"> Le mie gengive sanguinano frequentemente e sono gonfie<br>
                <input type="radio" name="q7" value="2"> Le mie gengive sanguinano abbondantemente, sono gonfie e doloranti<br>
                <button type="button" class="previous-step" data-previous-step="6">Precedente</button>
                <button type="button" class="next-step" data-next-step="8">Avanti</button>
            </div>

            <!-- Question 8 -->
            <div class="quiz-step" id="step-8">
                <label>8. Noti scolorimento, macchie o usura superficiale sui tuoi denti?</label><br>
                <input type="radio" name="q8" value="0" required> No, i miei denti sono bianchi e lisci<br>
                <input type="radio" name="q8" value="0"> Lieve scolorimento o macchie su 1-2 denti<br>
                <input type="radio" name="q8" value="1"> Scolorimento moderato o usura su diversi denti<br>
                <input type="radio" name="q8" value="2"> Scolorimento o usura estesa su molti denti<br>
                <button type="button" class="previous-step" data-previous-step="7">Precedente</button>
                <button type="button" class="next-step" data-next-step="9">Avanti</button>
            </div>

            <!-- Question 9 -->
            <div class="quiz-step" id="step-9">
                <label>9. Hai mai sentito i tuoi denti spostarsi o qualcuno dei denti si sente allentato?</label><br>
                <input type="radio" name="q9" value="0" required> No, tutti i miei denti sono stabili<br>
                <input type="radio" name="q9" value="0"> Uno o due denti si sentono leggermente allentati<br>
                <input type="radio" name="q9" value="1"> Diversi denti si sentono allentati o si spostano<br>
                <input type="radio" name="q9" value="2"> Diversi denti sono molto allentati o instabili<br>
                <button type="button" class="previous-step" data-previous-step="8">Precedente</button>
                <button type="button" class="next-step" data-next-step="10">Avanti</button>
            </div>

            <!-- Question 10 -->
            <div class="quiz-step" id="step-10">
                <label>10. Con quale frequenza consumi cibi e bevande zuccherate o acide (es. soda, caramelle, agrumi)?</label><br>
                <input type="radio" name="q10" value="0" required> Raramente, meno di una volta a settimana<br>
                <input type="radio" name="q10" value="0"> Occasionalmente, alcune volte a settimana<br>
                <input type="radio" name="q10" value="1"> Frequentemente, una volta al giorno<br>
                <input type="radio" name="q10" value="2"> Più volte al giorno<br>
                <button type="button" class="previous-step" data-previous-step="9">Precedente</button>
                <button type="submit">Invia</button>
            </div>
        </form>
    <div id="quiz-result"></div>
    </div>
<div id="social-share-icons">
    <a href="#" id="share-facebook" target="_blank" title="Share on Facebook">
        <i class="fab fa-facebook-f"></i> Facebook
    </a>
    <a href="#" id="share-whatsapp" target="_blank" title="Share on WhatsApp">
        <i class="fab fa-whatsapp"></i> WhatsApp
    </a>
    <a href="https://www.instagram.com/yourprofile" id="share-instagram" target="_blank" title="Share on Instagram">
        <i class="fab fa-instagram"></i> Instagram
    </a>
</div>

    <?php
    return ob_get_clean();
}
add_shortcode('ohsa_quiz', 'ohsa_display_quiz');



