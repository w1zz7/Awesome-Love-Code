$(function() {
    $('#yes').click(function(event) {
        modal('迟来的一点点浪漫~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('猥琐女！', A);
    });
});

function A() {
    modal('我爱你！', B);
}

function B() {
    modal('迟来的一点浪漫', C);
}

function C() {
    modal('花了好久编程这个呢~', D);
}

function D() {
    modal('你对我来说真的很重要', E);
}

function E() {
    modal('这辈子都不可能让你离开我的!!!', F);
}

function F() {
    modal('我好想见你~', G);
}

function G() {
    modal('但是你离我好远', H);
}

function H() {
    modal('我会做饭', I);
}
 function I() {
    modal('我会买很多东西给你', J)
}
function I() {
    modal('会好好疼你', J)
}
function I() {
    modal('会哄你睡觉', J)
}
function I() {
    modal('会唱歌给你听', J)
}
function I() {
    modal('会弹吉他给你听！', J)
}

function J() {
    modal('Love you pooks', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
