public class Question4 {
    public static boolean isPlaindrome(String s){
        int i = 0;
        int j = s.length()-1;
        while(i < j){
            if(s.charAt(i) != s.charAt(j))
            return false;
            i++;
            j--;
        }
        return true;
    }
    public static void main(String[] args) {
        String str = "nitin";
        int count = 0;
        for(int i = 0; i <str.length(); i++){
            for(int j=i+1; j <=str.length(); j++){
                if(isPlaindrome(str.substring(i,j)) == true){
                    System.out.println(str.substring(i,j)+ " ");
                    count++;
                }
            }
        }
        System.out.println("The number of palindrome substring are : "+count);
    }
}
