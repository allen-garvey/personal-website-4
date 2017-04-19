<?php 
	function projects(){
		$projects = [];
		$projects[] = ['title'=> 'H-News', 'completion_date'=> '2015-06-28', 'github'=> 'h-news', 'url'=> 'http://hnews.co', 'logo_url'=> 'h-news-icon.svg', 'description'=> 'A redesign of <a href="https://news.ycombinator.com/">Hacker News</a> with an emphasis on mobile first design and usability. Uses the official Hacker News API for story data and jQuery to populate the page with stories using AJAX.'];
		$projects[] = ['title'=> 'Earscape', 'completion_date'=> '2015-08-22', 'github'=> 'earscape', 'url'=> 'https://allen-garvey.github.io/earscape/', 'logo_url'=> 'earscape-icon.png', 'description'=> 'One of my interests is the intersection of music with technology (particularly algorithmic composition), so I created this web app to generate random twelve tone melodies, using the band.js and vex-tab libraries to playback the melodies and generate the sheet music.'];


		return $projects;
	}
 ?>