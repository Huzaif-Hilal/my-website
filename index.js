if(window.innerWidth < 800){
    document.querySelector('body').innerHTML = "";
    setTimeout(()=>{
        alert("This Webpage is Accessable from Desktops Only!");
    }, 100)
}

if(window.innerWidth < 1000){
    document.getElementById('info-text').style.fontSize = "16px"
}

// Adding Event Listners to every Nav Div
let navs = Array.from(document.getElementsByClassName('main-nav'))
navs.forEach((div, index) =>{   

    div.addEventListener("click", ()=>{
        document.getElementsByClassName('active')[0].classList.remove('active')
        div.classList.add('active')
        document.querySelector('body > div.title').innerHTML = div.dataset.value;
        
        if(navs[0].classList.contains('active')){
            let webs = Array.from(document.getElementsByClassName('web'))
            let status = "No Website is Running!";
            webs.forEach((web)=>{
                if(web.classList.contains('selected')){
                    status = `Website Running!`;
                    return;
                }
            })
            if(status === "No Website is Running!"){
                document.getElementById('home').style.display = "grid";
                document.getElementById('website').style.display = "none";
                document.getElementById('contact').style.display = "none";
            } else {
                document.getElementById('home').style.display = "none";
                document.getElementById('website').style.display = "block";
                document.getElementById('contact').style.display = "none";
                document.querySelector('body > div.title').innerHTML = document.querySelector('body > div.navigation > div.webs > div.selected').dataset.value;
            }
        }
        
        if(navs[1].classList.contains('active')){
            document.getElementsByClassName('webs')[0].style.height = "450px";
        }
        else{
            document.getElementsByClassName('webs')[0].style.height = "0px";
        }

        if(navs[2].classList.contains('active')){
            document.getElementById('home').style.display = "none";
                document.getElementById('website').style.display = "none";
                document.getElementById('contact').style.display = "block";

                animate_contact_page()
               

        }

    })    
    })

// Adding Event Listners to every web Div
let webs = Array.from(document.getElementsByClassName('web'))
webs.forEach((web)=>{
    web.addEventListener("click", (e)=>{
        try{
            document.getElementsByClassName('selected')[0].classList.remove('selected')
        } catch (err) {}
        web.classList.add('selected')
        document.getElementById('website').style.display = "block";
        document.querySelector('body > div.title').innerHTML = web.dataset.value;
                document.querySelector('body > div.preview > main#website > embed.website').src = web.dataset.link;
                document.querySelector('body > div.preview > main#website > a#weblink').href = web.dataset.link;
                document.getElementById('home').style.display = "none";
                document.getElementById('contact').style.display = "none";
    })
})


//Welcome Animation
setTimeout(()=>{
    let welcome_ele = document.getElementById('welcome-text')
    let welcome_str = "Welcome...!"
    let welcome_alphabet = 0
    let welcome_animation = setInterval(()=>{
        try{
    welcome_ele.parentElement.classList.toggle('border')
    setTimeout(()=>{
        welcome_ele.parentElement.classList.toggle('border')
    }, 150)
    welcome_ele.innerHTML += welcome_str[welcome_alphabet]
    welcome_alphabet++
    if(welcome_alphabet==welcome_str.length)
    {
        clearInterval(welcome_animation)
    }

} catch(err){clearInterval(welcome_animation)}
} , 300)

}, 1000)


//No Preview Animation
setTimeout(()=>{
    let no_preview_ele = document.getElementById('no-preview-text')
    let no_preview_str = `No Preview Available!`;
    let no_preview_alphabet = 0;
    
    let no_preview_animation = setInterval(()=>{
        try{
        no_preview_ele.parentElement.classList.toggle('border')
        setTimeout(()=>{
            no_preview_ele.parentElement.classList.toggle('border')
        },100)
        no_preview_ele.innerHTML += no_preview_str[no_preview_alphabet]
        no_preview_alphabet++
        if(no_preview_alphabet==no_preview_str.length){
            clearInterval(no_preview_animation)
        }
    } catch(err){ clearInterval(no_preview_animation)}
    }, 200)
}, 4800)


// Information Animation
setTimeout(()=>{
    let info_ele = document.getElementById('info-text')
    let info_str = `Choose a Website from 'Websites' setion to see it's preview.`;
    let info_alphabet = 0;
    
    let info_animation = setInterval(()=>{
        try{
        info_ele.parentElement.classList.toggle('border')
        setTimeout(()=>{
            info_ele.parentElement.classList.toggle('border')
        },50)
        info_ele.innerHTML += info_str[info_alphabet]
        info_alphabet++
        if(info_alphabet==info_str.length){
            clearInterval(info_animation)
        }
    } catch(err){clearInterval(info_animation)}
    }, 100)
}, 9000)


//Contact Page Animation
const animate_contact_page = ()  =>{

    let row = document.querySelectorAll('body > div.preview > main#contact > div.row')
    //Contact Heading
    setTimeout(()=>{
        document.querySelector('body > div.preview > main#contact > h1').style.transform = "translateY(-30px)"
        document.querySelector('body > div.preview > main#contact > h1').style.color = "black"
    }, 0)

    //Email
    setTimeout(()=>{
       row[0].querySelector('h2#email').style.transform = "translateY(-30px)"
       row[0].querySelector('h2#email').style.color = "black"
    
       setTimeout(()=>{
           row[0].querySelector('h3#emaila').style.transform = "translateY(-30px)"
           row[0].querySelector('h3#emaila').style.color = "black";
           row[0].querySelector('h3#emaila').style.textDecorationColor = "orange";

        }, 500)
    }, 500)

    //Instagram
    setTimeout(()=>{
       row[1].querySelector('h2#instagram').style.transform = "translateY(-30px)"
       row[1].querySelector('h2#instagram').style.color = "black"
    
       setTimeout(()=>{
           row[1].querySelector('h3#instagrama').style.transform = "translateY(-31px)"
           row[1].querySelector('h3#instagrama').style.color = "black";
           row[1].querySelector('h3#instagrama').style.textDecorationColor = "orange";

        }, 500)
    }, 1500)

    //Twitter
    setTimeout(()=>{
       row[2].querySelector('h2#twitter').style.transform = "translateY(-32px)"
       row[2].querySelector('h2#twitter').style.color = "black"
    
       setTimeout(()=>{
           row[2].querySelector('h3#twittera').style.transform = "translateY(-32px)"
           row[2].querySelector('h3#twittera').style.color = "black";
           row[2].querySelector('h3#twittera').style.textDecorationColor = "orange";

        }, 500)
    }, 2500)


    //LinkedIn
    setTimeout(()=>{
       row[3].querySelector('h2#linkedin').style.transform = "translateY(-33px)"
       row[3].querySelector('h2#linkedin').style.color = "black"
    
       setTimeout(()=>{
           row[3].querySelector('h3#linkedina').style.transform = "translateY(-33px)"
           row[3].querySelector('h3#linkedina').style.color = "black";
           row[3].querySelector('h3#linkedina').style.textDecorationColor = "orange";

        }, 500)
    }, 3500)

}