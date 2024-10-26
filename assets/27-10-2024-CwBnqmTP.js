const e=`<h1>Building my website</h1>
<h2>Project Aims</h2>
<p>To build this website! The goal is to create a simple portfolio/blog that showcases who I am. This project will allow me to post individual articles and display them in an easy-to-use layout, and there will also be components that lead to my LinkedIn and GitHub profiles, as well as a page that gives visitors a background into who I am.</p>
<p>The project needs to be scalable, allowing me to add new features in the future without affecting the rest of the website, and also needs to have a responsive design, meaning it is viewable on all browsers, as well as pc's, phones, and tablets.</p>
<h2>Technology and Reasoning</h2>
<p>This website is built using:</p>
<ul>
<li><strong>JavaScript</strong>:
During my web development modules at university, we learnt JavaScript, so I'm using it here because I am comfortable with it and it is also one of the most popular languages used for building websites.</li>
<li><strong>React</strong>:
A JavaScript library that I used at university which provides an easy way of building a UI. React allows me to design components of a page which can update without needing to reload the entire page. With this component base structure, I can easily follow <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">OOP</a> principles by keeping components separate and can add or adjust them as needed. This also lets me follow <a href="https://en.wikipedia.org/wiki/SOLID">SOLID</a> principle of single responsibility.</li>
<li><strong>Vite</strong>:
Pronounced &quot;Veet&quot;, Vite is a framework that I used alongisde React at university which helps set up and run web projects quickly. It makes working with tools like React faster and easier, and quickly builds and displays projects in the browser as you work on it, so any changes can be seen instantly, which helps speed up the creation process.</li>
<li><strong>Tailwind</strong>:
A CSS framework for styling websites. Rather than traditional CSS, where you need to write the styling rules for each element, Tailwind provides pre-made classes to style components directly. This makes it very fast to style components on the fly, and it is very customisable.</li>
<li><strong>Markdown</strong>:
Rather than typing out these articles directly into HTML or fetching from a database/API (which GitHub Pages doesn't support), I wanted to be able to write articles with very little hassle. After a bit of research, I learnt about Markdown, a super simple way to format text into HTML using plain characters, and after writing a simple JavaScript plugin for Vite, I can now convert .md files into what you're reading now!</li>
<li><strong>GitHub Pages</strong>:
I'm a poor, unemployed graduate, so I wasn't really willing to spend money on server hosting. I originally looked into using a Raspberry Pi as a web server, until I came across <a href="https://pages.github.com/">GitHub Pages</a>. It's free and easy to use, although there are drawbacks such as not being able to run any server side code (so PHP was out of the question).</li>
</ul>
`;export{e as default};
