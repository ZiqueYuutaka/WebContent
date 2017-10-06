$(document).ready(function() {
    !function(config) {
        $('.zique-tag').each(function() {
            var tagName = $(this).data('zique-tag');
            $(this).load(config.prefix + tagName + '.html?cb=' + (new Date().getTime()));
        });
    }({
        prefix: 'https://raw.githubusercontent.com/ZiqueYuutaka/WebContent/src/'
    });
});