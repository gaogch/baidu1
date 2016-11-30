$(function(){
    var clientW = $(window).width();
    var clientH = $(window).height();
    // $(".box").css({width:clientW+"px"})
    var num = 0;
    var flag = true;
     $(".list ul li a").eq(0).css({
        background:"rgba(0,0,0,0.5)"
    })
    $("section").mousedown(function(e){
        e.preventDefault();
    })
    $("section").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num = $("section").length-1;
            return;
        }
        flag = false;
        $(".list ul li a").css({
            background:"rgba(0,0,0,0)"
        })
        $(".list ul li a").eq(num).css({
            background:"rgba(0,0,0,0.5)"
        })
        $("#fullpage").css("marginTop",-num*clientH);
    });
    touch.on("body","swipedown","#fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num = 0;
            return;
        }
        flag = false;
        $(".list ul li a").css({
            background:"rgba(0,0,0,0)"
        })
        $(".list ul li a").eq(num).css({
            background:"rgba(0,0,0,0.5)"
        })
        $("#fullpage").css("marginTop",-num*clientH);
    });


    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag = true;
        if(num !== 0){
            $("section").each(function(index,obj){
                if(index == 0){
                    return;
                }
                if(index == num){
                    $(obj).find(".title").css({
                        transform:"translate(0,0)",opacity:1
                    })
                    $(obj).find(".aa").css({
                        transform:"translate(0,0)",opacity:1
                    })
                }else{
                    $(obj).find(".title").css({
                        transform:"translate(-50px,0)",opacity:0
                    })
                    $(obj).find(".aa").css({
                         transform:"translate(50px,0)",opacity:0
                    })
                }
            })
        }
    })

    var flag2 = true;
    $(".menu-option").click(function(){
        if(flag2){
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })
            $(".menu").css({
                // display:"block"
                border:"0"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotateX(90deg)",
                    animation:"menu 3s linear "+(index*0.2)+"s forwards"
                })
            })

            flag2 = false;
        }else{
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 3s linear "+(1.2-(index*0.2))+"s forwards"
                })
            })
            flag2 = true;
        }
        

    })

    $(window).resize(function(){
        clientH = $(window).height();
        clientW = $(window).width();
        $("#fullpage").css({
            "marginTop":clientH*-num
        })
        if(clientW>1000){
             $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(90deg)"
            })
             $(".menu-option-tline,.menu-option-bline").css({
                transform:"translate(0,0) rotate(0deg)"
             })
             flag2 = true;
        }
       
    })
})