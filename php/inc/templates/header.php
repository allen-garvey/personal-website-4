<header class="site-header">
    <a href="<?= BASE_URL ?>">
        <img src="<?= IMAGES_URL ?>allen-garvey.jpg" alt="Photo of Allen Garvey" class="author_img">
    </a>
    <div class="header-text-container">
        <div class="header-text-overlay"></div>
        <div class="header-text">
            <h1 class="site-title">Allen Garvey</h1>
            <p class="tagline">Full-stack developer, artist, and musician</p>
            <div class="home-menu show-js">
                <ul>
                    <?php foreach(['Contact', 'About', 'Projects'] as $sectionHeading): ?>
                        <li data-section="<?= strtolower($sectionHeading); ?>">
                            <a href="<?= BASE_URL.'#'.strtolower($sectionHeading); ?>"><h2><?= $sectionHeading; ?></h2></a>
                        </li>    
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</header>
