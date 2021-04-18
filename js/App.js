const inputs = document.querySelectorAll('#form-login input');
class UI{
    showEror(item){
        item.parentElement.classList.add('eror');
    }
    NotshowEror(item){
        item.parentElement.classList.remove('eror');
    }
}
class validator{
     verifyEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    verifyPassword(value,minLength){
        if(value.length>=minLength ){
            return true;
        }else{
            return false;
        }
    }

};
listeners();
function listeners(){
    document.querySelector('#submitBtn').addEventListener('click',validForm);
}
const ui = new UI();
const valid = new  validator();
function validForm(e){
    e.preventDefault();
    inputs.forEach((input)=>{
        if(!input.value){
            ui.showEror(input);
        }else{
            if(input.type =='email' ){
                if(valid.verifyEmail(input.value)){
                    ui.NotshowEror(input);
                }else{
                    ui.showEror(input);
                }
            }
            if(input.type =='password'){
                if(valid.verifyPassword(input.value,8)){
                    ui.NotshowEror(input);
                }else{
                    ui.showEror(input);
                }
            }
            ui.NotshowEror(input);
        }
    });
}