import java.util.*;
import java.lang.Math;

public class Tom{

public static void main(String args[]){

int distance;
double totalTime =0;
int hop = 0;

System.out.println("Enter a distance : ");
Scanner sc = new Scanner(System.in);
distance = sc.nextInt();
sc.close();

for(int d=distance, i=3, j=1; d>0; d=d-((2*i)-1), i--, j++){
hop++;

if(i == 0) { 
	i=3;
}

if((d-i)>1) {
totalTime = totalTime + (Math.pow(2,j) - j);


if(j == 3) {
	j=0;
}
}

}

System.out.println("Tom has hopped " + hop + " times");
System.out.println("Tom has taken " + totalTime + "s");

}
}