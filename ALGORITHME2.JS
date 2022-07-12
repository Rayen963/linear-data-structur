ALGORITHME
var
   set1(3), set2(4) : INTEGER;
   i,J,sum, :INTEGER;
BEGIN
set1[3,1,7,9];
set2[2,4,1,9,3];
sum=0

  FOR i FROM 0 TO 2 STEP 1 DO 
  FOR J FROM 0 TO 3 STEP 1 DO 
    
  if (set1[i] != set2[J]){;
  sum = sum + set1[i];
  }

  

  FOR J FROM 0 TO 3 STEP 1 DO 
  FOR i FROM 0 TO 2 STEP 1 DO 
    
  if(set1[i] != set2[J]){
    sum=sum + set2[J];
  }
  


  ENDFOR
END    

