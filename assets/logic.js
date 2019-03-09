
// var folder = '/assets/NewLinks/Images/';


// console.log(folder)
$("#nextPage").on("click",function(e){
    e.preventDefault();
    open("page1.html")
})

// $.ajax({
//     url : folder,
//     success: function (data) {
//         console.log(data);
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//                 $("body").append( "<img src='"+ folder + val +"'>" );
//             } 
//         });
//     }
// });
for(let i=1;i<=11;i++)
$('#myImages1').append(`<img src="assets/NewLinks/Images/${i}.jpeg" width=25%>`);


$("#prePage").on("click",function(e){
    e.preventDefault();
    open("index.html")
})
