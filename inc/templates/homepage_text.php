<main class="home wrapper">
    <section id="homepage-text" data-section="about">
        <?php require(TEMPLATES_PATH.'about_text.php'); ?>
    </section>
    <section class="home-section" data-section="projects">
        <h2 class="section-heading">Projects</h2>
        <ul class="projects-list">
            <?php 
                foreach (projects() as $project) {
                    (function($project){
                        if(array_key_exists('url', $project)){
                            $imageLinkUrl = $project['url'];
                        }
                        else{
                            $imageLinkUrl = 'https://github.com/'.GITHUB_USER_URL.'/'.$project['github'];
                        }
                        require(TEMPLATES_PATH.'project.php');
                    })($project);
                }
             ?>
        </ul>
    </section>
    <section class="home-section" data-section="contact">
        <h2 class="section-heading">Contact</h2>
        <?php require(TEMPLATES_PATH.'contact_section.php'); ?>
    </section>
</main>
