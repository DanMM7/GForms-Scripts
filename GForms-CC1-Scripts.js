
/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
};



//////////////////////////////////// Ratings Value Filter & Change ////////////////////////////////////////////
setTimeout(function() { 
    const containerSelector = '[container=childResults]'; 
    const fieldSelector = 'td:first'; 
    const tarpLevelSelector = '#FORM_CC1_DataCtrlRating'; 
    const redText = 'Deficient'; 
    const orangeText = 'Weak'; 
    const yellowText = 'Moderate'; 
    const greenText = 'Good'; 
    let color = 4; 
    const startingFieldId = 13; 
    
    for (let i = 0; i < 5; i++) { 
        const fieldId = startingFieldId + i; 
        const fieldValue = $(`[fieldid=${fieldId}]`).text(); 
        
        if ($('#FORM_CC1_DesignDesignAdequacy').includes('Adequate')) 
            { color = 1; } 
        else if ($('#FORM_CC1_DesignDesignAdequacy').includes('Adequate') && $('#FORM_CC1_DesignOperatingEffect').includes('Effictive')  && color > 1) 
            { color = 2; } 
        else if ($('#FORM_CC1_DesignDesignAdequacy').includes('Adequate') && $('#FORM_CC1_DesignOperatingEffect').includes('Effictive')  && color > 2) 
            { color = 3; } 
        else if ($('#FORM_CC1_DesignDesignAdequacy').includes('Adequate') && $('#FORM_CC1_DesignOperatingEffect').includes('Effictive') && color > 3) 
            { color = 4; } 
    } 
    
    switch (color) { 
        case 1: 
            $(tarpLevelSelector).val(`${redText}`); 
            break; 
        case 2: 
            $(tarpLevelSelector).val(`${orangeText}`); 
            break; 
        case 3: 
            $(tarpLevelSelector).val(`${yellowText}`); 
            break; 
        case 4: 
            $(tarpLevelSelector).val(`${greenText}`); 
            break; 
        default: 
            console.error('Invalid color value'); 
    } 
            
    $('#FORM_CC1_DataCtrlRating').change() 
}, 1250);