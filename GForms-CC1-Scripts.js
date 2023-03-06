/////////////////////////////////////// CC1-Data Ratings ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_DataActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_DataActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC1_DataActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC1_DataActions').parent().show(); 
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC1_DataActions').parent().hide()
};


setTimeout(function () {
    if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Good');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
    else if ($('#FORM_CC1_DataDesignAdequacy').val() === "Adequate" && $('#FORM_CC1_DataOperatingEffect').val() === "Effective") {
        $('#FORM_CC1.DataCtrlRating').val('Deficient');
    }
    else {
        $('#FORM_CC1.DataCtrlRating').val('Normal opearting conditions (Green)');
    }
}, 1500);




//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.DataCtrlRating').val('Good')) { 
        $('#FORM_CC1_DataActions').parent().hide();
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_DataActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Weak')) { 
        $('#FORM_CC1_DataActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_DataActions').parent().show();  
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('[NULL]')){
        $('#FORM_CC1_DataActions').parent().hide(); 
    };
    
}, 1500);





////////////////////////////////////////// CC1-Verification Ratings /////////////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_VerificationActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_VerificationActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white'); 
    $('#FORM_CC1_VerificationActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white');
    $('#FORM_CC1_VerificationActions').parent().show();  
} 
else if ('{controlvalue}'.includes('[NULL]')){
    $('{this}').css('background-color', 'white').css('color','black');
    $('#FORM_CC1_VerificationActions').parent().hide(); 
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.VerificationCtrlRating').val('Good')) { 
        $('#FORM_CC1_VerificationActions').parent().hide();
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_VerificationActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Weak')) { 
        $('#FORM_CC1_VerificationActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_VerificationActions').parent().show();  
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('[NULL]')){
        $('#FORM_CC1_VerificationActions').parent().hide(); 
    };
    
}, 1500);




 ////////////////////////////////////////// CC1-Design Ratings /////////////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_DesignActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_DesignActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC1_DesignActions').parent().show();  
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC1_DesignActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('[NULL]')){
    $('{this}').css('background-color', 'white').css('color','black');
    $('#FORM_CC1_DesignActions').parent().hide(); 
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.DesignCtrlRating').val('Good')) { 
        $('#FORM_CC1_DesignActions').parent().hide();
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_DesignActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Weak')) { 
        $('#FORM_CC1_DesignActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_DesignActions').parent().show();  
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('[NULL]')){
        $('#FORM_CC1_DesignActions').parent().hide(); 
    };
    
}, 1500);




//////////////////////////////////// Ratings Value Filter & Change ////////////////////////////////////////////
function getSelectValue() {
    var selectedValue1 = '#FORM_CC1_DesignDesignAdequacy';
    var selectedValue2 = '#FORM_CC1_DesignOperatingEffect';

}