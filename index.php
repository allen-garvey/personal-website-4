<?php 
    require_once('inc/config.php');
    require_once(MODELS_PATH.'projects.php');
    require(TEMPLATES_PATH.'head.php');
 ?>
    <body>
        <?php require(TEMPLATES_PATH.'header.php'); ?>
        <div class="page-content">
            <?php require(TEMPLATES_PATH.'homepage_text.php'); ?>
        </div>
        <?php require(TEMPLATES_PATH.'footer.php'); ?>
    </body>
</html>
