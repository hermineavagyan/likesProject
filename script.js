let likes  = [9, 12, 9];
let spans = [
            document.querySelector("#likeOne"),
            document.querySelector("#likeTwo"),
            document.querySelector("#likeThree")
        ];

function add(id){
    likes[id]++;
    spans[id].innerText = likes[id] + " likes"
    


}

