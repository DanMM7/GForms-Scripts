// Parent Child Scripts ****************  1 ****************************
if('{controlvalue}'.includes('(Green)')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Red)')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Orange)')) { 
    $('{this}').css('background-color', 'orange').css('color','black'); 
} 
else if('{controlvalue}'.includes('(Yellow)')) { 
    $('{this}').css('background-color', 'yellow').css('color','black'); 
}
else{
    $('{this}').css('background-color', 'white').css('color','black'); 
};  


$('#FORM_WD_Observation_PlatformCondAlertLevel').val() != 'No new tension cracks; no recent movement on old tension cracks.(Green)' &&
$('#FORM_WD_Observation_PlatformCondAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_Pltfrm_Condition_Anomaly_Class').parent().show() && 
$('#FORM_WD_Observation_PltfrmCondition_Scale').parent().show() && 
$('[field_dest=Platform_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_CrestCondition_Consequence').parent().show() && 
$('#FORM_WD_Observation_PltfrmCondition_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_Platform_Instability_Mitigate').parent().show() : 
$('#FORM_WD_Observation_Pltfrm_Condition_Anomaly_Class').parent().hide() && 
$('#FORM_WD_Observation_PltfrmCondition_Scale').parent().hide() && 
$('[field_dest=Platform_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_PltfrmCondition_Consequence').parent().hide() && 
$('#FORM_WD_Observation_PltfrmCondition_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_Platform_Instability_Mitigate').parent().hide();
$('#FORM_WD_Inspection_TarpLevel').val() && 
$('#FORM_WD_Inspection_TarpLevel').change();





// Parent Child Scripts  ****************  2  ****************************
if('{controlvalue}'.includes('(Green)')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Red)')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Orange)')) { 
    $('{this}').css('background-color', 'orange').css('color','black'); 
} 
else if('{controlvalue}'.includes('(Yellow)')) { 
    $('{this}').css('background-color', 'yellow').css('color','black');
}
else{
    $('{this}').css('background-color', 'white').css('color','black'); 
}; 

$('#FORM_WD_Observation_CFTCondAlertLevel').val() != 'Normal toe, face and crest geometry;  no toe spreading or heaving, face bulging, crest oversteepening or excessive ravelling. (Green)' && 
$('#FORM_WD_Observation_CFTCondAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_CrestCondition_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_CrestCondition_Scale').parent().show() && 
$('[field_dest=CrestCondition_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_CrestCondition_Consequence').parent().show() && 
$('#FORM_WD_Observation_CrestCondition_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_CrestCondition_Instability').parent().show() : 
$('#FORM_WD_Observation_CrestCondition_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_CrestCondition_Scale').parent().hide() && 
$('[field_dest=CrestCondition_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_CrestCondition_Consequence').parent().hide() && 
$('#FORM_WD_Observation_CrestCondition_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_CrestCondition_Instability').parent().hide();




// Parent Child Scripts  ****************  3  ****************************
if('{controlvalue}'.includes('(Green)')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Red)')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Orange)')) { 
    $('{this}').css('background-color', 'orange').css('color','black'); 
} 
else if('{controlvalue}'.includes('(Yellow)')) { 
    $('{this}').css('background-color', 'yellow').css('color','black'); 
}
else{
    $('{this}').css('background-color', 'white').css('color','black'); 
};  

$('#FORM_WD_Observation_WaterCondAlertLevel').val() != 'Normal operating conditions (Green)' && 
$('#FORM_WD_Observation_WaterCondAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_WaterCondition_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_WaterCondition_Scale').parent().show() && 
$('[field_dest=WaterCondition_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_WaterCondition_Consequence').parent().show() && 
$('#FORM_WD_Observation_WaterCondition_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_WaterCondition_Instability').parent().show() : 
$('#FORM_WD_Observation_WaterCondition_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_WaterCondition_Scale').parent().hide() && 
$('[field_dest=WaterCondition_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_WaterCondition_Consequence').parent().hide() && 
$('#FORM_WD_Observation_WaterCondition_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_WaterCondition_Instability').parent().hide();
$('#FORM_WD_Inspection_TarpLevel').val() && 
$('#FORM_WD_Inspection_TarpLevel').change();



// Parent Child Scripts  ****************  4  ****************************
if('{controlvalue}'.includes('Yes')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('No')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('[NULL]')) { 
    $('{this}').css('background-color', 'white').css('color','Grey'); 
}; 

$('#FORM_WD_Observation_LiftHeightAccordStandard').val() != 'Yes' && 
$('#FORM_WD_Observation_LiftHeightAccordStandard').val() != '[NULL]' ? 
$('#FORM_WD_Observation_LiftHeight_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_LiftHeight_Scale').parent().show() && 
$('[field_dest=LiftHeight_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_LiftHeight_Consequence').parent().show() && 
$('#FORM_WD_Observation_LiftHeight_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_LiftHeight_Instability').parent().show() : 
$('#FORM_WD_Observation_LiftHeight_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_LiftHeight_Scale').parent().hide() && 
$('[field_dest=LiftHeight_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_LiftHeight_Consequence').parent().hide() && 
$('#FORM_WD_Observation_LiftHeight_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_LiftHeight_Instability').parent().hide();
$('#FORM_WD_Inspection_TarpLevel').val('Normal opearting conditions (Green)') && 
$('#FORM_WD_Inspection_TarpLevel').change();




// Parent Child Scripts  ****************  5  ****************************
if('{controlvalue}'.includes('Yes')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('No')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('[NULL]')) { 
    $('{this}').css('background-color', 'white').css('color','Grey'); 
}; 

$('#FORM_WD_Observation_AdvanceRateInLimit').val() != 'Yes' && 
$('#FORM_WD_Observation_AdvanceRateInLimit').val() != '[NULL]' ? 
$('#FORM_WD_Observation_AdvanceRate_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_AdvanceRate_Scale').parent().show() && 
$('[field_dest=AdvanceRate_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_AdvanceRate_Consequence').parent().show() && 
$('#FORM_WD_Observation_AdvanceRate_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_AdvanceRate_Instability').parent().show() : 
$('#FORM_WD_Observation_AdvanceRate_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_AdvanceRate_Scale').parent().hide() && 
$('[field_dest=AdvanceRate_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_AdvanceRate_Consequence').parent().hide() && 
$('#FORM_WD_Observation_AdvanceRate_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_AdvanceRate_Instability').parent().hide();
$('#FORM_WD_Observation_TarpLevel').val('Normal opearting conditions (Green)') && 
$('#FORM_WD_Observation_TarpLevel').change();




// Parent Child Scripts  ****************  6  **************************** //
if('{controlvalue}'.includes('Yes')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('No')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('[NULL]')) { 
    $('{this}').css('background-color', 'white').css('color','Grey'); 
}; 

$('#FORM_WD_Observation_ConstructMethodFollowed').val() != 'Yes' && 
$('#FORM_WD_Observation_ConstructMethodFollowed').val() != '[NULL]' ? 
$('#FORM_WD_Observation_ConstructMethod_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_ConstructMethod_Scale').parent().show() && 
$('[field_dest=ConstructMethod_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_ConstructMethod_Consequence').parent().show() && 
$('#FORM_WD_Observation_ConstructMethod_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_ConstructMethod_Instability').parent().show() : 
$('#FORM_WD_Observation_ConstructMethod_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_ConstructMethod_Scale').parent().hide() && 
$('[field_dest=ConstructMethod_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_ConstructMethod_Consequence').parent().hide() && 
$('#FORM_WD_Observation_ConstructMethod_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_ConstructMethod_Instability').parent().hide();
$('#FORM_WD_Observation_TarpLevel').val('Normal opearting conditions (Green)') && 
$('#FORM_WD_Observation_TarpLevel').change();




// Parent Child Scripts  ****************  7  **************************** //
if('{controlvalue}'.includes('Yes')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('No')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('[NULL]')) { 
    $('{this}').css('background-color', 'white').css('color','Grey'); 
}; 

$('#FORM_WD_Observation_SafetyBermsAccordStandard').val() != 'Yes' && 
$('#FORM_WD_Observation_SafetyBermsAccordStandard').val() != '[NULL]' ? 
$('#FORM_WD_Observation_SafetyBerms_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_SafetyBerms_Scale').parent().show() && 
$('[field_dest=SafetyBerms_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_SafetyBerms_Consequence').parent().show() && 
$('#FORM_WD_Observation_SafetyBerms_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_SafetyBerms_AnomalyClass').parent().show() : 
$('#FORM_WD_Observation_SafetyBerms_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_SafetyBerms_Scale').parent().hide() && 
$('[field_dest=SafetyBerms_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_SafetyBerms_Consequence').parent().hide() && 
$('#FORM_WD_Observation_SafetyBerms_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_SafetyBerms_AnomalyClass').parent().hide();
$('#FORM_WD_Observation_TarpLevel').val('Normal opearting conditions (Green)') && 
$('#FORM_WD_Observation_TarpLevel').change();






// Parent Child Scripts  ****************  8  **************************** //
if('{controlvalue}'.includes('(Green)')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Red)')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Orange)')) { 
    $('{this}').css('background-color', 'orange').css('color','black'); 
} 
else if('{controlvalue}'.includes('(Yellow)')) { 
    $('{this}').css('background-color', 'yellow').css('color','black'); 
}
else{
    $('{this}').css('background-color', 'white').css('color','black'); 
}; 


$('#FORM_WD_Observation_OperationCondAlertLevel').val() != 'Normal operating conditions (Green)' && 
$('#FORM_WD_Observation_OperationCondAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_OperationalCond_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_OperationalCond_Scale').parent().show() && 
$('[field_dest=OperationalCond_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_OperationalCond_Consequence').parent().show() && 
$('#FORM_WD_Observation_OperationalCond_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_OperationalCond_Instability').parent().show() : 
$('#FORM_WD_Observation_OperationalCond_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_OperationalCond_Scale').parent().hide() && 
$('[field_dest=OperationalCond_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_OperationalCond_Consequence').parent().hide() && 
$('#FORM_WD_Observation_OperationalCond_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_OperationalCond_Instability').parent().hide();
$('#FORM_WD_Inspection_TarpLevel').val() && 
$('#FORM_WD_Inspection_TarpLevel').change();





// Parent Child Scripts  ****************  9  **************************** //
////////////////////// FOR ON KEY CHANGE /////////////////////////////
if('{controlvalue}'.includes('(Green)')) { 
    $('{this}').css('background-color', 'green').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Red)')) { 
    $('{this}').css('background-color', 'red').css('color','white'); 
} 
else if('{controlvalue}'.includes('(Orange)')) { 
    $('{this}').css('background-color', 'orange').css('color','black'); 
} 
else if('{controlvalue}'.includes('(Yellow)')) { 
    $('{this}').css('background-color', 'yellow').css('color','black'); 
}
else if ('{controlvalue}'.includes('[NULL]')){
    $('{this}').css('background-color', 'white').css('color','black'); 
}; 


$('#FORM_WD_Observation_DeformRateAlertLevel').val() != 'Normal operating conditions (Green)' && 
$('#FORM_WD_Observation_DeformRateAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_DeformationRate_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Scale').parent().show() && 
$('[field_dest=DeformationRate_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Consequence').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Instability').parent().show() : 
$('#FORM_WD_Observation_DeformationRate_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Scale').parent().hide() && 
$('[field_dest=DeformationRate_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Consequence').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Instability').parent().hide();


/////////////////////// FOR AFTER BROWSER LOAD CHANGES ////////////////////////
setTimeout(function(){
$('#FORM_WD_Observation_DeformRateAlertLevel').val() != 'Normal operating conditions (Green)' && 
$('#FORM_WD_Observation_DeformRateAlertLevel').val() != '[NULL]' ? 
$('#FORM_WD_Observation_DeformationRate_AnomalyClass').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Scale').parent().show() && 
$('[field_dest=DeformationRate_Evidence][multiple=multiple]').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Consequence').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Threat_Prevent').parent().show() && 
$('#FORM_WD_Observation_DeformationRate_Instability').parent().show() : 
$('#FORM_WD_Observation_DeformationRate_AnomalyClass').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Scale').parent().hide() && 
$('[field_dest=DeformationRate_Evidence][multiple=multiple]').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Consequence').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Threat_Prevent').parent().hide() && 
$('#FORM_WD_Observation_DeformationRate_Instability').parent().hide();
}, 1500);









      
////////////////////////////////////////// WD_Observation Button ////////////////////////////////////////////////
var click = 'click'; 

if($('#FORM_WD_Observation_PlatformCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_CFTCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_WaterCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_OperationCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_DeformRateAlertLevel').val().includes('Green')) 

    $('#FORM_WD_Observation_Instructions').val('All Clear'); 

    $('#FORM_WD_Observation_PlatformCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val(
        $('#FORM_WD_Observation_Instructions').val() + 'Platform Conditions Alert Level - ' + 
        $('[field_dest=FORM_WD_Observation_Platform_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_PlatformCondAlertLevel').val() + ''); 

    $('#FORM_WD_Observation_CFTCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Crest, Face, Toe Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_CrestCondition_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_CFTCondAlertLevel').val() + ''); 

    $('#FORM_WD_Observation_WaterCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Water Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_WaterCondition_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_WaterCondAlertLevel').val() +'');
            
    $('#FORM_WD_Observation_OperationCondAlertLevel').val().includes('Green') ? 0 :  
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Operational Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_OperationalCond_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_OperationCondAlertLevel').val() +''); 
            
    $('#FORM_WD_Observation_DeformRateAlertLevel').val().includes('Green') ?  0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Deformation Rate Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_DeformationRate_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_DeformRateAlertLevel').val());


        
$('#FORM_WD_Observation_Instructions').val() == '' ? 
$('#FORM_WD_Observation_Instructions').val('All Clear') : 0; 

$('#FORM_WD_Observation_SubmitForm').trigger(click); 

setTimeout(function() { 
    const containerSelector = '[container=childResults]'; 
    const fieldSelector = 'td:first'; 
    const tarpLevelSelector = '#FORM_WD_Inspection_TarpLevel'; 
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
            
    $('#FORM_WD_Inspection_TarpLevel').change() 
}, 1250);




//////////////////////////////////// Hide ID and Auto Button elements ////////////////////////////////////////
setTimeout(function() { $('#FORM_WD_Observation_PK_ID').parent().hide() },150); 
setTimeout(function(){ $('#FORM_WD_Observation_Instructions').val('') },80);
setTimeout(function(){ 
    $('#FORM_WD_Observation_SubmitForm').hide() 
},80);












