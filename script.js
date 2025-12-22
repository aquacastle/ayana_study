$(function() {
const image = $("img");
console.log(image);
const title = $(".title");
console.log(title);
const text = $("#button-text");
text.css("color","red");
const imgalt = image.attr('alt');
console.log(imgalt);

image.each(function(){
    console.log($(this).attr('alt'));
})
});