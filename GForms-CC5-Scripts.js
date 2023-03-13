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


//////////////////////////////////// Ratings Value Filter & Change ////////////////////////////////////////////
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



 setTimeout(function() {
    let adequacySelect = document.querySelector('#FORM_CC5_SORulesDesignAdequacy');
    let adequacyValue = adequacySelect.options[adequacySelect.selectedIndex].value;
    let effectiveSelect = document.querySelector('#FORM_CC5_SORulesOperatingEffect');
    let effectiveValue = effectiveSelect.options[effectiveSelect.selectedIndex].value;
    let ratingOptions = document.querySelectorAll('#FORM_CC5_SORulesCtrlRating option');
    for (let i = 0; i < ratingOptions.length; i++) {
       let ratingOption = ratingOptions[i];
       if (adequacyValue === 'Adequate' && effectiveValue === 'Effective') {
          if (ratingOption.value === 'Good') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Partially Adequate' && effectiveValue === 'Effective') {
          if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Partially Adequate' && effectiveValue === 'Partially effective') {
          if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Partially Adequate' && effectiveValue === 'Partially effective') {
          if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Partially Adequate' && effectiveValue === 'Ineffective') {
          if (ratingOption.value === 'Weak' || ratingOption.value === 'Deficient') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Adequate' && effectiveValue === 'Ineffective') {
          if (ratingOption.value === 'Weak' || ratingOption.value === 'Deficient') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else if (adequacyValue === 'Inadequate') {
          if (ratingOption.value === 'Deficient') {
             ratingOption.style.display = 'initial';
          } else {
             ratingOption.style.display = 'none';
          }
       } else {
          ratingOption.style.display = 'initial';
       }
    }
 },
 200);