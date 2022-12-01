$(document).ready( () => {
    let rate = 0;
    $('.rate').click( (el) => {
        let options = document.getElementsByClassName('rating')[0].children;

        for (let i = 0; i < options.length; i++)
        {
            if (options[i] == el.target)
            {
                rate = i + 1;
            }
            $(options[i]).css("background-color","var(--clr-Light-Blue)");
        }
        // el.target.style.background = 'var(--clr-Light-grey)';
        $(el.target).css("background-color","var(--clr-Light-grey)");
    });

    $('.submit').click(() => {
        if (rate > 0)
        {
            const container = document.getElementsByClassName('container')[0];
            container.parentNode.removeChild(container);
           $('.containerThank').css('display', 'flex');
            let text_content = document.createTextNode("You selected "+ rate +" out of 5");
            const text = document.getElementsByClassName('ratingMessage')[0];
            text.appendChild(text_content);
        }
    });
});