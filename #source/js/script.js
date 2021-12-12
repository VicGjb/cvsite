// const spollersArray = document.querySelectorAll('[data-spollers]')
// if (spollersArray.length > 0) {
//     const spollersRegular = Array.from(spollersArray).filter(function(item, index, self){
//         return !item.dataset.spollers.split(",")[0];
//     });
    
// }

// function initSpollers(spollersArray){
//     spollersArray.forEach(spollesBlock =>{
//         spollesBlock = spollesBlock.item : spollesBlock;
//     })
// }

// let _slideUp = (target, duration = 50) =>{}

$(document).ready(function() {
    $('.skills_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});