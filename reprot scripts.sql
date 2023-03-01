-- FUNERAL UNDERTAKER --
-- Funeral Undertaker count --
SELECT 'Funeral Undertaker in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Inspections carried --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Inspections found --
SELECT '# of Inspections found to be satisfactory in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.Satisfactory 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID

-- R237 issued --
SELECT 'Funeral Undertaker in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID

-- total R237 certificate --
SELECT 'Funeral Undertaker in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID



-- FORMAL FOOD PREMISES --
-- Formal Food Premises count --
SELECT 'Funeral Undertaker in ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods 
UNION

-- Inspections count --
SELECT '# of Inspections carried out ' AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FormalFoods  
UNION

-- Complying Tobacco act count --
SELECT '# of Complying Tobacco act ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods i
INNER JOIN HealthInspections.dbo.LK_CertComp r on r.PK_ID=i.TobaccoControl 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID
UNION

-- Total Tobacco vending machines count --
SELECT 'Total Tobacco vending machines count ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods
WHERE TobaccoControl >= 0
UNION

-- Delivery vehicles inspected --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Delivery vehicles complying --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- R962 issued --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- total R962 count --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID



-- HOMES FOR THE AGED --
-- Homes for the the aged count --
SELECT '# Homes for the the aged ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_AgedHomeInspection 
UNION

-- Inspections count --
SELECT '# of Inspected ' AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_AgedHomeInspection  
UNION

-- Health Certificates issued --
SELECT '# Health Certificates issued ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods i
INNER JOIN HealthInspections.dbo.LK_CertComp r on r.PK_ID=i.TobaccoControl 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID
UNION

-- Total Health Certificates issued --
SELECT 'Total Health Certificates issued count ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods
WHERE TobaccoControl >= 0
UNION


-- R962 issued --
SELECT '# R962 issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Total R962 Certificates issued --
SELECT '# of Inspections carried out in ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID


-- CHILD CARE FACILITIES --
-- Child Care Facilities count --
SELECT '# Homes for the the aged ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_ChildCareServicesInspection 
UNION

-- Inspections count --
SELECT '# of Inspected ' AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_ChildCareServicesInspection  
UNION

-- Health Certificates issued --
SELECT '# Health Certificates issued ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods i
INNER JOIN HealthInspections.dbo.LK_CertComp r on r.PK_ID=i.TobaccoControl 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID
UNION

-- Total Health Certificates issued --
SELECT 'Total Health Certificates issued count ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_FormalFoods
WHERE TobaccoControl >= 0
UNION


-- R962 issued --
SELECT '# R962 issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Total R962 Certificates issued  --
SELECT 'Total R962 Certificates issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID


-- INFORMAL FOOD VENDORS --
-- Informal Food Vendors --
SELECT '# Informal Food Vendors ' AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_InformalFoodInspection 
UNION

-- Inspected count --
SELECT '# of Inspected ' AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_InformalFoodInspection 
UNION

-- R962 issued --
SELECT '# R962 issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Total R962 issued  --
SELECT 'Total R962 Certificates issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID


-- FORMAL EDUCATION PROGRAM FOR FOOD HANDLERS --
-- Food handlers formally educated from the target group --
SELECT '# Food handlers formally educated from the target group ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.LK_Approval r on r.PK_ID=i.Approved GROUP BY r.PK_ID
UNION
-- Targert Group Count --
SELECT '# Targert Group ' + MAX(r.EHPName)  AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.FORM_EHP r on r.PK_ID=i.EHP GROUP BY r.PK_ID;


-- VEHICLES EMISSION TESTS --
-- Vehicles tested for vehicle emissions --
SELECT '# Vehicles tested for vehicle emissions ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.LK_Approval r on r.PK_ID=i.Approved GROUP BY r.PK_ID
UNION
-- Vehicles complying Count --
SELECT '# Vehicles complying ' + MAX(r.EHPName)  AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.FORM_EHP r on r.PK_ID=i.EHP GROUP BY r.PK_ID;


-- SCHOOLS --
-- Schools count --
SELECT '# Schools ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_SchoolInspection 
UNION

-- Inspections count --
SELECT '# of Inspected ' AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_SchoolInspection  
UNION

-- Complying Health Standards --
SELECT '# Complying with Health standards ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_SchoolInspection i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.InspectionSatisfactory 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID
UNION

-- R962 issued --
SELECT '# R962 issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID
UNION

-- Total R962 Certificates issued  --
SELECT 'Total R962 Certificates issued ' + MAX(r.DESCRIPTION) AS 'header', COUNT(InspectionDate) AS header
FROM HealthInspections.dbo.FORM_FuneralUndertakerInspection i
INNER JOIN HealthInspections.dbo.LK_Regions r on r.PK_ID=i.LK_RegionID GROUP BY r.PK_ID


-- NOISE COMPLAINTS --
-- Noise complaints received --
SELECT '# Noise complaints received ' AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Complaints i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.ComplainantNotified 
WHERE i.ComplainantNotified = 1 AND i.ComplaintCategory = 6
GROUP BY r.PK_ID
UNION

-- Noise complaints resolved --
SELECT '# Noise complaints resolve ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_Complaints i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.ComplaintResolved 
WHERE i.ComplaintResolved = 1 AND i.ComplaintCategory = 6
GROUP BY r.PK_ID;


-- INFESTATION COMPLAINTS --
-- Infestation complaints received --
SELECT '# Infestation complaints received ' AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Complaints i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.ComplainantNotified 
WHERE i.ComplainantNotified = 1 AND i.ComplaintCategory = 22
GROUP BY r.PK_ID
UNION

-- Infestation complaints resolved --
SELECT '# Infestation complaints resolve ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_Complaints i
INNER JOIN HealthInspections.dbo.LK_YesNo r on r.PK_ID=i.ComplaintResolved 
WHERE i.ComplaintResolved = 1 AND i.ComplaintCategory = 22
GROUP BY r.PK_ID;


-- COMPLIANCE TO TAT --
-- Approved Building Plans --
SELECT 'Building plans ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.LK_Approval r on r.PK_ID=i.Approved GROUP BY r.PK_ID
UNION
-- Received Building Plans --
SELECT 'Building plans Received by ' + MAX(r.EHPName)  AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.FORM_EHP r on r.PK_ID=i.EHP GROUP BY r.PK_ID;


-- INITIATION SCHOOLS --
-- Initiation Schools count --
SELECT '# Initiation Schools ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_InitiationSchool 
UNION

-- Inspections count --
SELECT '# of Inspected ' AS 'header', COUNT(Date_of_Inspection) AS header
FROM HealthInspections.dbo.FORM_InitiationSchool  
UNION

-- Certificates issued --
SELECT '# Certificates issued ' AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_InitiationSchool i
INNER JOIN HealthInspections.dbo.LK_CertComp r on r.PK_ID=i.Health_Cert_Compliant 
WHERE r.PK_ID = 1
GROUP BY r.PK_ID


-- GENERAL INSPECTIONS --
-- General Inspections per Premises --
SELECT 'Inspection in ' + MAX(r.PremiseType)  AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Premises i 
INNER JOIN HealthInspections.dbo.FORM_PremisesTypes_LK r on r.PK_ID=i.LK_PremisesTypeID 
GROUP BY r.PK_ID;


-- SAMPLES --
-- Approved Building Plans --
SELECT 'Inspection in ' + MAX(r.PremiseType)  AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Premises i 
INNER JOIN HealthInspections.dbo.FORM_PremisesTypes_LK r on r.PK_ID=i.LK_PremisesTypeID 
GROUP BY r.PK_ID;


-- LICENCES --
-- Approved Building Plans --
SELECT 'Inspection in ' + MAX(r.PremiseType)  AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Premises i 
INNER JOIN HealthInspections.dbo.FORM_PremisesTypes_LK r on r.PK_ID=i.LK_PremisesTypeID 
GROUP BY r.PK_ID;


-- APS APPLICATIONS --
-- Approved Building Plans --
SELECT 'Inspection in ' + MAX(r.PremiseType)  AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_Premises i 
INNER JOIN HealthInspections.dbo.FORM_PremisesTypes_LK r on r.PK_ID=i.LK_PremisesTypeID 
GROUP BY r.PK_ID;



-- BUILDING PLANS --
CREATE TABLE BuildingPlans AS 
-- Received Building Plans --
SELECT 'Building plans Received '  AS 'header', COUNT(*) AS header
FROM HealthInspections.dbo.FORM_AddBuildingPlan
UNION
-- Approved Building Plans --
SELECT 'Building plans ' + MAX(r.DESCRIPTION) AS 'header', COUNT(*) AS header 
FROM HealthInspections.dbo.FORM_AddBuildingPlan i
INNER JOIN HealthInspections.dbo.LK_Approval r on r.PK_ID=i.Approved GROUP BY r.PK_ID







