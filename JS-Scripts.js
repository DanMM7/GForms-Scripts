JS-Scripts


////////////////////////////////////////////////////////////////////////


var click = 'click'; 

setTimeout(function(){ 
    $('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val().includes('Green') && 
    $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val().includes('Green') ? 
    $('#FORM_GTI_GeotechnicalConditions_Results').val('All Clear'):0 
},80); 

setTimeout(function(){ 
    InstructionGTI_GC()
}, 99);

function InstructionGTI_GC() {
    $('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_GeotechnicalConditions_Results').val( 'Are observed structural defects accounted for in the slope design? - ' + 
        $('#FORM_GTI_GeotechnicalConditions_StructuralDefects').val() + '' + 
        $('[field_dest=StructuralDefects_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val() + ''); 
        
    $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_GeotechnicalConditions_Results').val( 
        $('#FORM_GTI_GeotechnicalConditions_Results').val() + 'Is slope monitoring for this area adequate and effective as per Slope Monitoring Strategy? - ' + 
        $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring').val() + '' + 
        $('[field_dest=SlopeMonitoring_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val() ); 
};

setTimeout(function() {
    $('#FORM_GTI_GeotechnicalConditions_Results').val() == '' ? 
    $('#FORM_GTI_GeotechnicalConditions_Results').val('All Clear') : 0
}, 100);

setTimeout(function() { 
    $('#FORM_GTI_GeotechnicalConditions_SubmitForm').trigger(click) 
},358); 
        
setTimeout(function() { 
    var color=4; 
    var selector = '[container=childResults] td:first'; 
    var iStart =15; 
            
    for(var i =0; i<9; i++){ 
        if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Red)'))
            color=1; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Orange)') && color>1) 
            color=2; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Yellow)') && color>2)    
            color=3; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Green)') && color>3)     
            color=4; 
    } 
            
    if(color==1) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('High - Stop and Fix (Red)') ;
    else if(color==2) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Medium - Fix within 24 Hours (Orange)') ; 
    else if(color==3) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Low - Fix Within Schedule (Yellow)') ; 
    else if(color==4) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Normal Operating Conditions (Green)');

},1500); 
        
setTimeout(function() { 
    $('#FORM_Geotechnical_Inspection_TarpLevel').change() 
},1503);




////////////////////////////////////////////////////////////////////////




var click = 'click'; 


setTimeout(function(){
    $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val().includes('Green') ? 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val('All Clear'):0
},80); 

setTimeout(function() {
    InstructionHGC()
}, 99);


function InstructionHGC() {
    $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val( 'Water observed in face or hanging wall? - ' + 
        $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall').val() + '' + 
        $('[field_dest=WaterInFaceHWall_Evidence][multiple=multiple]').val() + ''+ 
        $('#FORM_GTI_HydrogeologicalConditions_WaterInFaceHWall_Criticality').val() + ''); 
    
    $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val(
        $('#FORM_GTI_HydrogeologicalConditions_Results').val() + 'Excessive water ponding on crest? - ' + 
        $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest').val() + '' + 
        $('[field_dest=ExcessPondCrest_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HydrogeologicalConditions_ExcessPondCrest_Criticality').val()); 
};     

setTimeout(function() {
    $('#FORM_GTI_HydrogeologicalConditions_Results').val() == '' ? 
    $('#FORM_GTI_HydrogeologicalConditions_Results').val('All Clear') : 0
}, 100);


setTimeout(function() {
    $('#FORM_GTI_HydrogeologicalConditions_SubmitForm').trigger(click)
    },350);

setTimeout(function() {
     var color=4; 
     var selector = '[container=childResults] td:first'; 
     var iStart =15; 
     
     for(var i =0; i<9; i++){ 
        if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Red)')) color=1; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Orange)') && color>1) color=2; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Yellow)') && color>2) color=3; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Green)') && color>3) color=4; 
    } 
    
    if(color==1) $('#FORM_Geotechnical_Inspection_TarpLevel').val('High - Stop and Fix (Red)') ; 
    else if(color==2) $('#FORM_Geotechnical_Inspection_TarpLevel').val('Medium - Fix within 24 Hours (Orange)') ; 
    else if(color==3) $('#FORM_Geotechnical_Inspection_TarpLevel').val('Low - Fix Within Schedule (Yellow)') ;
     else if(color==4) $('#FORM_Geotechnical_Inspection_TarpLevel').val('Normal Operating Conditions (Green)');
},1500); 
    
setTimeout(function() {
    $('#FORM_Geotechnical_Inspection_TarpLevel').change()
},1503);



////////////////////////////////////////////////////////////////////////



var click = 'click'; 

setTimeout(function(){
    $('#FORM_GTI_HangingWallConditions_LooseRockCrest_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val().includes('Green') ?
    $('#FORM_GTI_HangingWallConditions_Results').val('All Clear'):0
},80);


setTimeout(function(){ 
    InstructionHWC()
}, 99);

function InstructionHWC() {   
    $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val( 'Loose rocks on crest? - ' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockCrest').val() + '' + 
        $('[field_dest=LooseRockCrest_Evidence][multiple=multiple]').val() + ''+ 
        $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Loose rocks in the hanging wall? - ' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockHWall').val() + '' + 
        $('[field_dest=LooseRockHWall_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val() + ''); 
        
    $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any ravelling observed or dust trails observed? - ' + 
        $('#FORM_GTI_HangingWallConditions_Ravelling').val() + '' + 
        $('[field_dest=Ravelling_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val() + ''); 
    
    $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
            $('#FORM_GTI_HangingWallConditions_Results').val() + 'Loose rocks at the toe? - ' + 
            $('#FORM_GTI_HangingWallConditions_LooseRockToe').val() + '' + 
            $('[field_dest=LooseRockToe_Evidence][multiple=multiple]').val() + '' + 
            $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val() + ''); 

    $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Rockfall retention adequate according to KPI? - ' + 
        $('#FORM_GTI_HangingWallConditions_RockfallRetention').val() + '' + 
        $('[field_dest=RockfallRetention_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val() + ''); 

    $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any overhang or undercut present? - ' + 
        $('#FORM_GTI_HangingWallConditions_OverhangUndercut').val() + '' + 
        $('[field_dest=OverhangUndercut_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val() + ''); 

    $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any cracks observed in the hanging wall? - ' + 
        $('#FORM_GTI_HangingWallConditions_CracksHangWall').val() + '' + 
        $('[field_dest=CracksHangWall_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val() + ''); 
};

setTimeout(function() {
    $('#FORM_GTI_HangingWallConditions_Results').val() == '' ? 
    $('#FORM_GTI_HangingWallConditions_Results').val('All Clear') : 0
}, 100);

setTimeout(function() {
    $('#FORM_GTI_HangingWallConditions_SubmitForm').trigger(click)
},350);


setTimeout(function() { 
    var color=4; 
    var selector = '[container=childResults] td:first'; 
    var iStart =15; 
            
    for(var i =0; i<9; i++){ 
        if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Red)'))
            color=1; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Orange)') && color>1) 
            color=2; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Yellow)') && color>2)    
            color=3; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Green)') && color>3)     
            color=4; 
    } 
            
    if(color==1) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('High - Stop and Fix (Red)') ;
    else if(color==2) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Medium - Fix within 24 Hours (Orange)') ; 
    else if(color==3) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Low - Fix Within Schedule (Yellow)') ; 
    else if(color==4) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Normal Operating Conditions (Green)');

},1500); 
        
setTimeout(function() { 
    $('#FORM_Geotechnical_Inspection_TarpLevel').change() 
},1503);




////////////////////////////////////////////////////////////////////////



var click = 'click'; 

setTimeout(function(){
    $('#FORM_GTI_PlatformConditions_TensionCrackCrest_Criticality').val().includes('Green') && 
    $('#FORM_GTI_PlatformConditions_StandOffZoneRules_Criticality').val().includes('Green') && 
    $('#FORM_GTI_PlatformConditions_BermsToStandard_Criticality').val().includes('Green') && 
    $('#FORM_GTI_PlatformConditions_RiskAssessment_Criticality').val().includes('Green') ? 
    $('#FORM_GTI_PlatformConditions_Results').val('All Clear'):0
},80); 


setTimeout(function(){ 
    InstructionGTI_PC()
}, 99);

function InstructionGTI_PC() {  
    $('#FORM_GTI_PlatformConditions_TensionCrackCrest_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_PlatformConditions_Results').val('Tension cracks at the crest? - ' + 
        $('#FORM_GTI_PlatformConditions_TensionCrackCrest').val() + '' + 
        $('[field_dest=TensionCrackCrest_Evidence][multiple=multiple]').val() + ''+ 
        $('#FORM_GTI_PlatformConditions_TensionCrackCrest_Criticality').val() + ''); 

    $('#FORM_GTI_PlatformConditions_StandOffZoneRules_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_PlatformConditions_Results').val(
        $('#FORM_GTI_PlatformConditions_Results').val() + 'Stand off / exclusion zone rules implemented according to standard? - ' + 
        $('#FORM_GTI_PlatformConditions_StandOffZoneRules').val() + '' + 
        $('[field_dest=StandOffZoneRules_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_PlatformConditions_StandOffZoneRules_Criticality').val() + ''); 

    $('#FORM_GTI_PlatformConditions_BermsToStandard_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_PlatformConditions_Results').val(
        $('#FORM_GTI_PlatformConditions_Results').val() + 'Berms according to standard? - ' + 
        $('#FORM_GTI_PlatformConditions_BermsToStandard').val() + '' + 
        $('[field_dest=BermsToStandard_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_PlatformConditions_BermsToStandard_Criticality').val() + ''); 

    $('#FORM_GTI_PlatformConditions_RiskAssessment_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_PlatformConditions_Results').val(
        $('#FORM_GTI_PlatformConditions_Results').val() + 'Any mining activities above this area? - ' + 
        $('#FORM_GTI_PlatformConditions_MiningActAboveArea').val() + '' + 
        $('[field_dest=RiskAssessment_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_PlatformConditions_RiskAssessment_Criticality').val() + ''); 
};

setTimeout(function() {
    $('#FORM_GTI_PlatformConditions_Results').val() == '' ? 
    $('#FORM_GTI_PlatformConditions_Results').val('All Clear') : 0
}, 100);


setTimeout(function() {
    $('#FORM_GTI_PlatformConditions_SubmitForm').trigger(click)
},350);

setTimeout(function() { 
    var color=4; 
    var selector = '[container=childResults] td:first'; 
    var iStart =15; 
            
    for(var i =0; i<9; i++){ 
        if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Red)'))
            color=1; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Orange)') && color>1) 
            color=2; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Yellow)') && color>2)    
            color=3; 
        else if($('[fieldid='+(iStart+i)+']' + selector).text().includes('(Green)') && color>3)     
            color=4; 
    } 
            
    if(color==1) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('High - Stop and Fix (Red)') ;
    else if(color==2) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Medium - Fix within 24 Hours (Orange)') ; 
    else if(color==3) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Low - Fix Within Schedule (Yellow)') ; 
    else if(color==4) 
        $('#FORM_Geotechnical_Inspection_TarpLevel').val('Normal Operating Conditions (Green)');

},1500); 
        
setTimeout(function() { 
    $('#FORM_Geotechnical_Inspection_TarpLevel').change() 
},1503);