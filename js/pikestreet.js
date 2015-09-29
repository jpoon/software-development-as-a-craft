Reveal.initialize({
    progress: true,
    history: true,
    center: true,
    controls: true,
    fragments: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{
        src: 'lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: 'plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/highlight/highlight.js',
        async: true,
        condition: function () {
            return !!document.querySelector('pre code');
        },
        callback: function () {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }]
});

// Ghetto Slideshow. Works though.
function advanceSlideshow() {
    var image = document.getElementById('slideshow');
        index = image.src.charAt(image.src.indexOf('.png') - 1),
        newIndex = parseInt(index) + 1;

    if (newIndex < 7) {
        image.src = image.src.replace(index + '.png', newIndex + '.png');
    } else {
        image.src = image.src.replace(index + '.png', '1.png');
    }
}

image = document.getElementById('slideshow');
image.onclick = advanceSlideshow;