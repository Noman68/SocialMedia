//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span")
var root = document.querySelector(':root');

const colorPallete = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const privacy = document.querySelectorAll("#post-privacy");

//COMMENT
const comments = document.querySelector('#comments');
const comment = document.querySelector('.comment-thread');
var commentflag = false;

//POST IMAGE UPLOAD
const uploaderModal = document.querySelector(".post-image-upload-after");
const uploaderButton = document.querySelector(".uploader-Icon");
var uploaderFlag = false;

//POST MODAL
const postModal = document.querySelector(".post-modal");
const postModalButton = document.querySelector(".post-Modal-Open");

// STORY MODAL
const storyModal = document.querySelector(".stories-modal");
const storyView = document.querySelector(".stories");
var closeButtonStory = false;
const storyButton = document.querySelector(".action-story")

// CHAT BOX
const chatBottom = document.querySelector(".message-bottom")
const chatBox = document.querySelector(".chat-box")
const minimizeChat = document.querySelector(".close-chat")

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notofications-popup').style.display = "none";
        }
        else{
            document.querySelector(".notofications-popup").style.display = "block";
            document.querySelector("#notifications .notifications-count").style.display = "none";
        }
    })
})


// MESSAGES

// HIGHLIGHT EMSSAGE CARD 
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})


// FILTER CHAT
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
}
 
messageSearch.addEventListener('keyup', searchMessage);

// CHAT BOX
const openChatBox = () => {
    chatBox.style.display = "block";
}
const minimizeChatBox = () =>{
    chatBox.style.display = "none";
}

chatBottom.addEventListener('click', openChatBox);
minimizeChat.addEventListener('click', minimizeChatBox);

//THEME CUSTOMIZATION

const OpenThemeModal = () => {
    themeModal.style.display = "grid";
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', OpenThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

//POST MODAL

const OpenPostModal = () => {
    postModal.style.display = "grid";
}

const closePostModal = (e) => {
    if(e.target.classList.contains('post-modal')){
        postModal.style.display = 'none';
        closeUploader();
    }
}

postModal.addEventListener('click', closePostModal);

postModalButton.addEventListener('click', OpenPostModal);


// STORIES MODAL

const openStories = () => {
    storyModal.style.display = "grid";
}

const closeStoryModal = (e) =>{
    closeButtonStory = true;
    if(e.target.classList.contains('stories-modal')){
        storyModal.style.display = "none";
    }
    else if(closeButtonStory){
        storyModal.style.display = "none";
    }
}

storyView.addEventListener('click', openStories);

storyButton.addEventListener('click',closeStoryModal)
storyModal.addEventListener('click', closeStoryModal);

// COMMENTS

const commentText = comments.innerHTML;

const OpenComment = () => {
    comment.style.display = "block";
    comments.innerHTML = "Comments";
}

const CloseComment = () =>{
    comment.style.display = "none";
    comments.innerHTML = commentText;
}

comments.addEventListener('click',() =>{
    if(!commentflag){
        OpenComment();
        commentflag = true;    
    }
    else{
        CloseComment();
        commentflag = false;
    }
});

//IMAGE UPLOADER

const openUploader = () =>{
    uploaderModal.style.display = "flex";
}

const closeUploader = () =>{
    uploaderModal.style.display = "none";
}

uploaderButton.addEventListener('click', () =>{
    if(!uploaderFlag){
        openUploader();
        uploaderFlag = true;
    }
    else{
        closeUploader();
        uploaderFlag = false;
    }
})

// FONT SIZES

fontSizes.forEach(size => {
   
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active');
    
        if(size.classList.contains('font-size-1')){
            fontSizes = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSizes = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSizes = '16px';
            root.style.setProperty('----sticky-top-left', '.2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSizes = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSizes = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
    
    document.querySelector('html').style.fontSize = fontSizes;
    })

}) 

// CHANGE COLOR

const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPallete.forEach(color =>{
    color.addEventListener('click', () =>{
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})


// CHANGE THEME BACKGROUND

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    document.getElementById("post-privacy").style.color = "white";
}

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})


// --primary-color-hue: 252;
// --dark-color-lightness: 17%;
// --light-color-lightness: 95%;
// --white-color-lightness: 100%;