        let divImg1=document.querySelector('.divImg1');
        let divImg2=document.querySelector('.divImg2');
        let divImg3=document.querySelector('.divImg3');
        let divImg4=document.querySelector('.divImg4');
        

        let divSignup=document.querySelector('.divSignup');
        let divData=document.querySelector('.divData');
        let divDice=document.querySelector('.divDice');
        let divToken=document.querySelector('.divToken');

        let divGood=document.querySelector('.good');
        let divBad=document.querySelector('.bad');
        

        let formName=document.querySelector('#nameData');
        let formUsername=document.querySelector('#usernameData');
        let formToken=document.querySelector('#token');



        let sumTotal=document.querySelector('.sumTotal');
        let diceImage=document.querySelector('.diceImage');
        
        
        divImg1.addEventListener('click',()=>{
            
            divSignup.classList.remove('hide');
            divData.classList.add('hide');
            divDice.classList.add('hide');
            divToken.classList.add('hide');
            
        });

        
        let sum=0;
        let count=0;
        function data(){
            divImg2.addEventListener('click',()=>{
            divSignup.classList.add('hide');
            divData.classList.remove('hide');
            divDice.classList.add('hide');
            divToken.classList.add('hide');
            
            });
        }

        
            function dice(){
                divImg3.addEventListener('click',()=>{
                
                divSignup.classList.add('hide');
                divData.classList.add('hide');
                divDice.classList.remove('hide');
                divToken.classList.add('hide');

                
                
                if(count<3){
                    const play1 = Math.floor(Math.random() * 6) + 1;
                    const play1dice = `images/dice${play1}.jpg`;
                    document.getElementById('check1').setAttribute('src', play1dice);
                    sum=sum+play1;
                    sumTotal.innerText=sum;
                    if(sum>=10){
                        genarate();
                    }
                    
                }
                if(count==3 && sum<10){
                    alert(`Bad Luck, Next time try again!!`);
                    divBad.classList.remove('hide');
                    diceImage.classList.add('hide');
                    sumTotal.classList.add('hide');
                    
                    divDice.style.backgroundColor="white";
                    divDice.style.justifyContent="center"
                }
                count++;
                    
            });
        }
            

        // console.log("Dice Click "+clickCount+" many times");

        function genarate(){
            divImg4.addEventListener('click',()=>{
            divSignup.classList.add('hide');
            divData.classList.add('hide');
            divDice.classList.add('hide');
            divToken.classList.remove('hide');
            divGood.classList.remove('hide');
            formToken.innerText=genarateToken();
            setTimeout(function (){

                document.querySelector('.divImg3').disabled=true;
                document.querySelector('.divImg2').disabled=true;
                divDice.classList.add('hide');
                
            },100);
        });
    }



        
        //Form Fillup

        let sign_form=document.querySelector('.signup');
        let input_name=document.querySelector('#name');
        let input_email=document.getElementById('email');
        let input_password=document.getElementById('username');
        // let input_confirm_password=document.getElementById('confirm-password');
        let error=document.getElementById('error');
        sign_form.addEventListener('submit',validate);


        let arr=[];
        

        function validate(e){
            e.preventDefault();
            let name=input_name.value;
            let email=input_email.value;
            let password=input_password.value;
            // let confirm_password=input_confirm_password.value;

            if(countSpaces(name)<2){
                error.innerHTML="Name should be 2 words";
            }
            else if(email.includes('@')==false){
                error.innerHTML='Email must contain @';
            }
            else if(checkEmail(email)==false){
                error.innerHTML='Email already exist';
            }

            // if(!password.includes(name) && !password.includes(email)){
            //     error.innerHTML='should be not Name and email';
            // }   
            else if(!checkPassword(password)){
                error.innerHTML="Atleast 1 uppercase, lowercase, number, special";
            }
            else{
                error.innerHTML="Form Submitted Sucessfully";
                error.style.color="green";
                document.querySelector('.signup').reset();
                // document.querySelector('#submit').disabled=true;

                let obj={name,email,password}
                arr.push(obj)

                
                // console.log(arr);
                // console.log("My name is "+ arr[id-1][2]);

                

                setTimeout(function (){
                    document.querySelector('.divImg1').disabled=true;
                    divSignup.classList.add('hide');
                },1200);
                localStorage.setItem("data",JSON.stringify(arr));
                // window.location.href="./index.html";
                
                // setTimeout(() => {
                //     document.location.reload();
                // }, 3000);
                data();
                dataG=JSON.parse(localStorage.getItem('data'));
                formName.innerText=dataG[0].name
                formUsername.innerText=dataG[0].password;
                dice();


            }
        }
        function checkPassword(password,name,email){
            let cl=0,sl=0,n=0,sc=0;
            for(let t of password){
                if(t>="A" && t<="Z"){
                    cl++;
                }
                else if(t>="a" && t<="z"){
                    sl++;
                }
                else if(t>=0 && t<=9){
                    n++;
                }else{
                    sc++;
                }
            }
            if(cl>=1 && sl>=1 && n>=1 && sc>=1 && password!=name && password !=email){
                return true;
            }else{
                return false;
                
            }
        }

        function countSpaces(str){
            str=str.trim();
            // let c=0;
            // for(let t of str){
            //     if(t==' '){
            //         c++;
            //     }
            // }
            // return c;

            let arr=str.split(' ');
            return arr.length;
        }
        function checkEmail(email){
            for(t of arr){
                if(t.email==email){
                    return false;
                }
            }
        }
        // Form fillup End


        //Display Data

        // formName.innerHTML=arr[0]['name'];
        // formUsername.innerHTML=arr[0]['password'];
        // console.log("My name is "+ arr['email']);
        

        function genarateToken(){
            let capital_digit="ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //4
            let small_digit="abcdefghijklmnopqrstuvwxyz";    //4
            let number="0123456789";                         //1
            let special="!@#$%^&*()_+";                      //1

            let characters=capital_digit+small_digit+number+special;
            let token="";
            for(let i=0;i<12;i++){
                let random= Math.floor(Math.random()*characters.length);
                token=token+characters[random]
            }
            return token;   //store  the token in the person obbject who logged in

        }


