/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black');
    $('#FORM_CC5_SORulesActions').parent().hide(); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC5_SORulesActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC5_SORulesActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC5_SORulesActions').parent().show(); 
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC5_SORulesActions').parent().hide();
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC5.SORulesCtrlRating').val('Good')) { 
        $('#FORM_CC5_SORulesActions').parent().hide();
    } 
    else if ($('#FORM_CC5.SORulesCtrlRating').val('Moderate')) { 
        $('#FORM_CC5_SORulesActions').parent().show(); 
    } 
    else if ($('#FORM_CC5.SORulesCtrlRating').val('Weak')) { 
        $('#FORM_CC5_SORulesActions').parent().show(); 
    } 
    else if ($('#FORM_CC5.SORulesCtrlRating').val('Deficient')) { 
        $('#FORM_CC5_SORulesActions').parent().show();  
    } 
    else if ($('#FORM_CC5.SORulesCtrlRating').val('[NULL]')){
        $('#FORM_CC5_SORulesActions').parent().hide(); 
    };
    
}, 1500);