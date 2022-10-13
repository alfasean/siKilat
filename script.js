var backToTop = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
        if ( this.scrollY >= 40 ) {
            backToTop.classList.add('show');

            backToTop.addEventListener('click', () => {
            window.scrollTo({top: 0});
            })
        } else {
            backToTop.classList.remove('show');
        }
        });

$(document).ready(function () {
    $.fakeLoader({
        bgColor: '#2B4865',
        spinner:"spinner6"
    });
});