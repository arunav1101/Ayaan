$("#nextPage").on("click",function(e){
    e.preventDefault();
    open("page1.html")
})

$("#prePage").on("click",function(e){
    e.preventDefault();
    open("index.html")
})

for(let i=1;i<=11;i++)
$('#myImages1').append(`<img src="assets/NewLinks/Images/${i}.jpeg" width=25%>`);


$("#prePage").on("click",function(e){
    e.preventDefault();
    open("index.html")
})

$("#page1").on("click",function(e){
    e.preventDefault();
    open("page1.html")
})

