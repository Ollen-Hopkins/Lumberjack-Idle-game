
$(document).ready(function(){
    let logs = 0;
    let money = 0;
    let logPlus = 1;
    let autoLogPlus = 0;
    let autoChopperPrice = 100;
    let logPrice = 1;
    let menu;

    setInterval(function(){
        logs += autoLogPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#chop").click(function(){
        logs += logPlus;
        changeInventory();
        changeMarket();
    });

    $('#sellOne').click(function(){
        logs--;
        money += logPrice;
        changeInventory();
        changeMarket();
    });
    $('#sellTen').click(function(){
        logs-= 10;
        money += logPrice * 10;
        changeInventory();
        changeMarket();
    });
    $('#sellAll').click(function(){
        money += logPrice * logs;
        logs = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        money -= autoChopperPrice;
        autoLogPlus++;
        changeInventory();
        changeMarket();
    });


    $('#visit').click(function(){
        menu = switchMenu('marketplace');
        changeMarket();
    });


    $('#return').click(function(){
        menu = switchMenu('main');
    });

    function changeInventory(){
        $("#money").html("Money: $" + money);
        if (logs === 1) {
            $("#logs").html('You now own ' + logs + ' log.');
        }
        else{
            $("#logs").html('You now own ' + logs + ' logs.');
                
        }
    }

    function changeMarket(){
        if (logs > 0){
            $('#sellAll').css('display', 'block');
        }
        else{
            $('#sellAll').css('display', 'none');
        }
        if (logs >= 1){
            $('#sellOne').css('display', 'block');
        }
        else{
            $('#sellOne').css('display', 'none');
        }
        if (logs >= 10){
            $('#sellTen').css('display', 'block');
        }
        else{
            $('#sellTen').css('display', 'none');
        }
        if(money >= autoChopperPrice){
            $('#autoChopper').css('display', 'block');
        }
        else{
            $('#autoChopper').css('display', 'none');
        }
    }

    function switchMenu(menu){
        $('.menus').children().css('display', "none");
        $('.' + menu).css('display', 'block');
        return menu;
    }

});