////////////////////////////////////////// Hydro_Condition Button ////////////////////////////////////////////////
var click = 'click'; 

if($('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val().includes('Green')) 

    $('#FORM_GTI_HydrogeologicalConditions_Results').val('All Clear'); 

    $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val('Water observed in face or hanging wall? - ' + 
        $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall').val() + '' + 
        $('[field_dest=WaterInFaceHWall_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val() + '');

    $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val(
        $('#FORM_GTI_HydrogeologicalConditions_Results').val() + 'Excessive water ponding on crest? - ' + 
        $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest').val() + '' + 
        $('[field_dest=ExcessPondCrest_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val());


        
        $('#FORM_GTI_HydrogeologicalConditions_Results').val() == '' ? 
        $('#FORM_GTI_HydrogeologicalConditions_Results').val('All Clear') : 0; 

        $('#FORM_GTI_HydrogeologicalConditions_SubmitForm').trigger(click); 

setTimeout(function() { 
    const containerSelector = '[container=childResults]'; 
    const fieldSelector = 'td:first'; 
    const tarpLevelSelector = '#FORM_Geotechnical_Inspection_TarpLevel'; 
    const redText = '(Red)'; 
    const orangeText = '(Orange)'; 
    const yellowText = '(Yellow)'; 
    const greenText = '(Green)'; 
    let color = 4; 
    const startingFieldId = 13; 
    
    for (let i = 0; i < 5; i++) { 
        const fieldId = startingFieldId + i; 
        const fieldValue = $(`[fieldid=${fieldId}] ${fieldSelector}`).text(); 
        
        if (fieldValue.includes(redText)) { color = 1; } 
        else if (fieldValue.includes(orangeText) && color > 1) { color = 2; } 
        else if (fieldValue.includes(yellowText) && color > 2) { color = 3; } 
        else if (fieldValue.includes(greenText) && color > 3) { color = 4; } 
    } 
    
    switch (color) { 
        case 1: 
            $(tarpLevelSelector).val(`High - Stop and Fix ${redText}`); 
            break; 
        case 2: 
            $(tarpLevelSelector).val(`Medium - Fix within 24 Hours ${orangeText}`); 
            break; 
        case 3: 
            $(tarpLevelSelector).val(`Low - Fix Within Schedule ${yellowText}`); 
            break; 
        case 4: 
            $(tarpLevelSelector).val(`Normal Operating Conditions ${greenText}`); 
            break; 
        default: 
            console.error('Invalid color value'); 
    } 
            
    $('#FORM_Geotechnical_Inspection_TarpLevel').change()
}, 1250);