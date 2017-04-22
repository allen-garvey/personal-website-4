<?php 
	function projects(){
		$projects = [];
		$projects[] = ['title'=> 'Artour', 'completion_date'=> '2017-03-10', 'github'=> 'artour', 'url'=> 'https://strangescenery.com', 'logo_url'=> 'artour-icon.svg', 'description'=> 'I needed something to organize and display my artwork and photographs, so I created a custom CMS and static site generator in <a href="http://elixir-lang.org/">Elixir</a> using the <a href="http://www.phoenixframework.org/">Phoenix Framework.</a> Some of its features include: custom url slugs for posts, easily add tags using AJAX, organize images in albums using drag-and-drop, and image carousels with optional captions and lazy asset loading.'];
		$projects[] = ['title'=> 'H-News', 'completion_date'=> '2015-06-28', 'github'=> 'h-news', 'url'=> 'http://hnews.co', 'logo_url'=> 'h-news-icon.svg', 'description'=> 'I love reading <a href="https://news.ycombinator.com/">Hacker News</a> for the latest software development and technology news, but the text is too small, and it is hard to use on mobile. I created a redesigned version to address these issues using the <a href="https://github.com/HackerNews/API">official API</a> to pull in the latest story and comment data through AJAX. I also added the ability for readers to pick a custom color theme that is saved using the browser localStorage.'];
		$projects[] = ['title'=> 'Earscape', 'completion_date'=> '2015-08-22', 'github'=> 'earscape', 'url'=> 'https://allen-garvey.github.io/earscape/', 'logo_url'=> 'earscape-icon.png', 'description'=> 'One of my interests is the intersection of music with technology (particularly algorithmic composition), so I created this web app to generate random twelve tone melodies. I used <a href="https://github.com/meenie/band.js">Band.js</a> to play the melodies and <a href="https://github.com/0xfe/vextab">VexTab</a> to output the sheet music.'];


		return $projects;
	}
 ?>