        
        //ДИВ. НИЖЧЕ НАПИСАНО НА JQuery


// // === 3-rd task =============================== 
                // const main = document.getElementById('main');
                // main.innerHTML = 'Hello World';
            //or 
                // const div = document.createElement('div');
                // div.id = 'main';
                // div.innerHTML = 'Hello World';
                // document.body.append(div);
// // === 4-th task ===============================
                // const scrollElem = document.querySelector('.scroll'),
                //     content = document.getElementById('content');

                // function scrollTo(element) {
                //     window.scroll({
                //         left: 0,
                //         top: element.offsetTop,
                //         behavior: "smooth" 
                //     }); 
                //   return false;
                // }
                // scrollElem.addEventListener('click', (e) => {
                //     scrollTo(content);
                // }); 

// //=== 5-th task ===============================  
                // const btn = document.getElementById('btn');

                // btn.addEventListener('click', (e)=>{
                //     window.location.href = 'https://www.google.com';
                // });

////=== 6-th task ===============================  
                // const form = document.getElementById('reg_form'),
                //     inputName = document.getElementById('input-name'),
                //     inputEmail = document.getElementById('input-email');

                // form.addEventListener('submit', (e)=>{ 
                //     if(inputEmail.value === '' || inputEmail.value === null ){
                //         e.preventDefault();
                //         inputEmail.style.border = '2px solid red';
                //     } else{
                //         inputEmail.style.border = '';
                //         const formObj = {
                //             name: inputName.value,
                //             email:inputEmail.value
                //         };

                //         console.log(formObj);
                //     }

                // });

        //=====jQuery=========
// // === 3-rd task =============================== 
                const main = $('#main')[0];
                main.innerHTML = 'Hello World';
// // === 4-th task ===============================  
                function slowScroll(id) {
                    const offset = 0;
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - offset
                    }, 500);
                    return false;
                }
                $('.scroll').on('click', function () {
                    slowScroll('#content');
                });
// //=== 5-th task ===============================    
                $('#btn').on('click', (e) => {
                    window.location.href = 'https://www.google.com';
                });

////=== 6-th task ===============================  

                const inputName = $('#input-name')[0],
                    inputEmail = $('#input-email')[0];

                $('#reg_form').on('submit', function (e) {
                    if (inputEmail.value === '' || inputEmail.value === null) {
                        e.preventDefault();
                        inputEmail.style.border = '2px solid red';
                    } else {
                        inputEmail.style.border = '';
                        const formObj = {
                            name: inputName.value,
                            email: inputEmail.value
                        };

                        console.log(formObj);
                    }

                });