//add all project h3 elements to an array
const projectArticlesH3Array = document.querySelectorAll('.projects-article-h3');

// add event listeners to all project h3 elements
projectArticlesH3Array.forEach(cur => {
    cur.addEventListener('click', (event) => {
        //display hidden element upon project text click
        const childNodes = event.target.parentNode.children;
        childNodes[1].classList.toggle('collapse');
        
        //select i element
        const iElement = event.target.children[0];

        if(iElement.style.transform === '') {
            //rotate project i element upon click
            iElement.style.transform = 'rotate(0deg)';      
        } else {
            //rotate element back to normal
            iElement.style.transform = '';
            iElement.style.transition = 'transform .75s';
        }
    })
});