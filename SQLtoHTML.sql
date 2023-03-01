SELECT 'output', '<table class="table  table-hover general-table">
					<thead>
						<tr>
							<th>Region</th>
							<th>Town</th>
							<th>Action</th>
						</tr>
					</thead>
	<tbody>' + 
	(
		SELECT
			(SELECT RegionDesc   AS 'td' FOR XML PATH(''), TYPE),
			(SELECT TownDesc   AS 'td' FOR XML PATH(''), TYPE),
			(SELECT '<button type="button" class="btn btn-primary" showMap="' + RegionDesc +'">Open Map</button>' AS 'td' FOR XML PATH(''), TYPE)
		FROM LU_Region r
		INNER JOIN  LU_Town t on  r.RegionID=t.RegionID

		FOR XML PATH('tr')
	) + '</tbody></table>'