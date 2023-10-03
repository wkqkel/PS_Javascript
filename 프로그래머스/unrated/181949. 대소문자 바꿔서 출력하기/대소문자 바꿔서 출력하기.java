import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String a = sc.next();
        int n = a.length();

        List<String> list = new ArrayList<String>();
   
        for(int i = 0; i<n; i++) {
            String letter = String.valueOf(a.charAt(i));
            if(letter.toUpperCase() == letter){
              list.add(letter.toLowerCase());
            } else {
              list.add(letter.toUpperCase());
            }
        }
        
        System.out.println(String.join("",list));
    }
}

// java 문자열 반복문 돌리기
// https://stackoverflow.com/questions/2772511/why-doesnt-the-string-class-in-java-implement-iterable

// java char -> string
// https://java119.tistory.com/106

// java 배열
// https://xianeml.tistory.com/39