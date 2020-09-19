window.onload = () => {

    var itemClasssName = 'active'
        items = document.getElementsByClassName(itemClasssName),
        totalItems = items.length,
        prev = 0,
        curr = 1,
        next = 2;
        console.log(totalItems);
    
    setInitialClasses();

    function setInitialClasses() {
        items[prev].classList.add("prev");
        items[curr].classList.add('middle');
        items[next].classList.add('next');
    }    

    function move() {
        if (next === 0) {
            next = totalItems - 1;
            curr--;
            prev--;
        } 
        else if(curr === 0) {
            curr = totalItems - 1;
            next--;
            prev--;
        }
        else if(prev === 0) {
            prev = totalItems - 1;
            next--;
            curr--;
        }
        else {
            next--;
            curr--;
            prev--;
        }
        Array.prototype.forEach.call(items, items => {
            if(items.classList.contains('prev'))
                items.classList.remove('prev');
            if(items.classList.contains('middle'))
                items.classList.remove('middle');   
            if(items.classList.contains('next'))
                items.classList.remove('next');  
        });  
         console.log(items);
        // Move carousel to updated slide
        moveCarouselTo(prev, curr, next);
    }

    function moveCarouselTo(prev, curr, next) {  

        items[prev].classList.add('prev');
        items[curr].classList.add('middle');
        items[next].classList.add('next');    
    }
    
    setInterval(() => {
       move();  
    }, 5000);

}