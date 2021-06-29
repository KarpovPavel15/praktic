document.addEventListener('DOMContentLoaded', function () {
    console.clear();


    let parent = document.body.children[0];
    let child = document.querySelector('mark');
    function isParent(parent) {
        if(parent.contains(child)){
           console.log(true);
        }
        else{
            Console.log(false);
        }
    }
    isParent(parent,child)


    const elem =document.querySelector('#q1');
    const text = elem.textContent;
    Console.log(text)




    let elem2 = document.getElementsByTagName('ul');
    elem.classList.add('list');
    console.log(elem2.classList);
 
  });