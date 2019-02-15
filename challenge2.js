function areaOfTriangle(a,b,c){
	var semi;
	var area;
	var root;
	
	semi = 0.5 * ( a + b +c );
	root = (semi * ( semi -a) * (semi -b) * (semi -c));
	area = math.sqrt(root);
	console.long(area);
	
	return area ;
};
areaOfTriangle(7,8,9);









