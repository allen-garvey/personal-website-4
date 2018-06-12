<header class="site-header">
    <a href="<?= BASE_URL ?>">
        <img src="<?= IMAGES_URL ?>allen-garvey.jpg" alt="Photo of Allen Garvey" class="author_img">
    </a>
    <h1 class="site-title">Allen Garvey</h1>
    <div class="nav-overlay-container">
        <div class="tagline">
            <div class="tagline-overlay"></div>
            <p class="tagline-text">Software developer, artist and musician</p>
        </div>
        <div class="nav-overlay"></div>
        <nav class="nav show-js">
            <ul>
                <?php foreach(['Contact', 'About', 'Projects'] as $sectionHeading): ?>
                    <li data-section="<?= strtolower($sectionHeading); ?>">
                        <a href="<?= BASE_URL.'#'.strtolower($sectionHeading); ?>"><h2><?= $sectionHeading; ?></h2></a>
                    </li>    
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</header>
