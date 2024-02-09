// navigation btns

const prevBtns = document.querySelectorAll('.btn-prev')
const nextBtns = document.querySelectorAll('.btn-next')
const confirmBtns = document.querySelectorAll('.btn-confirm')
const pages = document.querySelectorAll('.pages')
const pagesNav = document.querySelectorAll('.pages-step')
const formSteps = document.querySelectorAll('.form-step')
const confirmPage = document.querySelectorAll('.confirmed-page')
const footerPage = document.querySelectorAll('.footer')

let formStepsNum = 0;

// nextbtn click event
nextBtns.forEach(btn => {
    
    btn.addEventListener('click', e => {
        
            formStepsNum++;
            updateFormSteps();
            displayPrevBtn();
            // updatePagesNav();
            updatePages();
        
        
        
        if(formStepsNum === 3){
            
            // displayConfirmBtn()
            
            nextBtns[0].classList.contains('active') && nextBtns[0].classList.remove('active')
            console.log(confirmBtns[0].classList.add('active'))
        }
        // console.log('formsteps', formStepsNum)
    })
    
    
    
})

// prevbtn click event
prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        // updatePagesNav();
        updatePages();
        
        if(formStepsNum === 0){
            prevBtns[formStepsNum].classList.remove('active')
        }
        if(formStepsNum < 3){
            confirmBtns[0].classList.remove('active')
            nextBtns[0].classList.add('active')
        }
    })
    
})

// display confirm btn
function displayConfirmBtn(){
    confirmBtns.forEach(prev => {
        prev.classList.add('active')
    })
}

// display prev btn
function displayPrevBtn(){
    prevBtns.forEach(prev => {
        
        prev.classList.add('active')
        // console.log(prev.classList)
    })
}

// display next/prev page
function updateFormSteps(){
    
    formSteps.forEach(formStep => {
        formStep.classList.contains('activate') &&
        formStep.classList.remove('activate')
        
        
        
    })
    formSteps[formStepsNum].classList.add('activate')
    // console.log("length",formSteps[formStepsNum].classList.length)
    // console.log(formSteps[formStepsNum].classList)
    
    
    // console.log(formSteps[formStepsNum].classList)
    
    // console.log("length",formSteps[formStepsNum].classList.length)
}


// function updatePagesNav(){
    //     pagesNav.forEach((page, idx) => {
        //         if(idx < formStepsNum + 1){
            //             console.log('1',page.classList)
            //             page.classList.add('active');
            //         }else{
                //             console.log('2',page.classList)
                //             page.classList.remove('active');
                //         }
                //     })
                // }
                
            // confirm btn click event   
                confirmBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        displayConfirmation()
                    })
                })
                
                
                function displayConfirmation(){
                    
                    
                    
                    confirmPage.forEach(cp => {
                        cp.classList.add('active')
                        formSteps[formStepsNum].classList.contains('activate') && formSteps[formStepsNum].classList.remove('activate')
                        footerPage[0].classList.add('active')
                    })
                    
                }
                
                function updatePages(){
                    
                    pagesNav.forEach(page => {
                        page.classList.contains('active') &&
                        page.classList.remove('active')
                        // console.log(page.classList.contains('active'))
                    })
                    pagesNav[formStepsNum].classList.add('active')
                }
                
                // jquery for checkbox appyling styles to addon plans
                
                $("[type=checkbox]").click(function(ev) {
                    $(this).closest("div").toggleClass("check", this.checked);
                    
                })
                
                // selecting plan subs monthly or yearly
                
                let radio1 = document.querySelector("#radio1");
                let radio2 = document.querySelector("#radio2");
                let monthly = document.querySelector('.monthly');
                let yearly = document.querySelector('.yearly');
                let body = document.body
                
                //monthly
                
                radio1.addEventListener("change", function () {
                    if(radio1.checked){
                        // console.log(monthly.classList[0].add('active'))
                        // console.log(monthly.classList);
                        
                        // monthly.classList[0].add("active");
                        // yearly.classList.remove("active")
                        
                        monthly.classList.replace("monthly", "active")
                        yearly.classList.replace("activated", "yearly")
                        console.log(monthly)
                    }
                    
                });
                
                radio2.addEventListener("change", function () {
                    if(radio2.checked){
                        
                        yearly.classList.replace("yearly", "active")
                        monthly.classList.replace("activated", "monthly")
                        console.log(yearly)
                        // console.log(yearly[0].classList[0].add("active"))
                        // monthly.classList.remove("active");
                        // yearly.classList.add("active")
                    }
                    
                });
                
                
                // form validation
                
                
                
                
                // function setSuccess(element){
                    //     const inputField = element.parentElement;
                    //     const inputControl = element.parentElement.parentElement;
                    //     const errorDisplay = inputControl.querySelector('.error');
                    
                    //     console.log(inputField)
                    //     console.log(inputControl)
                    //     errorDisplay.innerText = '';
                    //     inputField.classList.add('success');
                    //     inputField.classList.remove('error')
                    // }
                    
                    // function setError(element,message) {
                        //     const inputField = element.parentElement;
                        //     const inputControl = element.parentElement.parentElement;
                        //     const errorDisplay = inputControl.querySelector('.error');
                        
                        //     errorDisplay.innerText = message;
                        //     inputField.classList.remove('success');
                        //     inputField.classList.add('error')
                        // }
                        
                        // const isValidEmail = email => {
                            //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            //     return re.test(String(email).toLowerCase());
                            // }
                            
                            // const isValidPhoneno = phone => {
                                //     const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
                                
                                //     return re.test(phone)
                                // }
                                
                                // function validateInputs(){
                                    //     const firstNameValue = firstName.value.trim();
                                    //     const emailAddrValue = emailAddr.value.trim();
                                    //     const phoneNoValue = phoneNo.value.trim();
                                    
                                    
                                    //     if(firstNameValue === ""){
                                        //         setError(firstName, 'First name is required')
                                        //     }else{
//         setSuccess(firstName)
//     }

//     if(emailAddrValue === '') {
    //         setError(emailAddr, 'Email is required');
    //     } else if (!isValidEmail(emailAddrValue)) {
        //         setError(emailAddr, 'Provide a valid email address');
        //     } else {
            //         setSuccess(emailAddr);
            //     }
            // }
            
            
            // validation
            
            const firstName = document.getElementById('firstname')
            const emailAddr = document.getElementById('emailaddr')
            const phoneNo = document.getElementById('phoneno')
            const errorInput = document.querySelectorAll('.focus-border')
            
            const ereg =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            const preg =/(\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4}|\d{10})/

            function stoppedTyping(){
                if(firstName.value.length > 0 && emailAddr.value.match(ereg) && phoneNo.value.match(preg)) { 
                    document.querySelectorAll('.btn-next')[0].disabled = false; 
                    // console.log(emailAddr.value.match(ereg))
                    console.log(phoneNo.value.match(preg))

                    console.log(errorInput[0].classList.remove('active'))
                    console.log(errorInput[1].classList.remove('active'))
                    console.log(errorInput[2].classList.remove('active'))
                    // console.log(document.getElementById('firstname').value.length)
                    // console.log(document.querySelectorAll('.btn-next'))
                } else if(!firstName.value.length > 0) { 
                    console.log(errorInput[0].classList.add('active'))
                    document.querySelectorAll('.btn-next')[0].disabled = true;
                    // console.log(errorInput[2].classList.add('active'))
                }else if(!emailAddr.value.match(ereg)){
                    console.log(errorInput[1].classList.add('active'))
                    document.querySelectorAll('.btn-next')[0].disabled = true;
                    
                }
                else if(!phoneNo.value.match(preg)){
                    console.log(errorInput[2].classList.add('active'))
                    document.querySelectorAll('.btn-next')[0].disabled = true;
                    
                }else {

                    document.querySelectorAll('.btn-next')[0].disabled = true;

                    
                }
            }
            
            