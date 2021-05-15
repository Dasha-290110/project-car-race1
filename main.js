canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

GC_width=100;
GC_height=90;

RC_width=100;
RC_CAR_height=90;

console.log("background_image="+background_image);
GC_image="GREEN CAR.png";
RC_image="RED CAR.png";

RC_x=10;
RC_y=10;

GC_x=10;
GC_y=10;

GC_image="GREEN CAR.png";
RC_image="RED CAR.png";

function add() {
    background_image_tag=new Image();
    background_image_tag.onload=upload_background;
    background_image_tag.src=background_image;

    GC_image_tag=new Image();
    GC_image_tag.onload=upload_GC;
    GC_image_tag.src=GC_image;
}