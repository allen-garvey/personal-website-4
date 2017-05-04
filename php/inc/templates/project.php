 <li>
    <div class="project-logo">
        <a href="<?= $imageLinkUrl ?>">
            <img src="<?= ICONS_URL.$project['logo_url'] ?>" alt="<?= $project['title'] ?> logo">
        </a>
    </div>
    <div class="project-content">
        <h3 class="project-title"><a href="<?= $imageLinkUrl ?>"><?= $project['title'] ?></a></h3>     
        <div>
            <?= $project['description'] ?>
            <div class="project-links">
            <span class="project-source-link"><a href="https://github.com/<?= GITHUB_USER_URL ?>/<?= $project['github'] ?>">Source</a></span>
            <?php if(array_key_exists('url', $project)): ?>
                <span class="project-demo-link"><a href="<?= $project['url'] ?>">Demo</a></span>
            <?php endif; ?>
            </div>
        </div>
    </div>
</li>