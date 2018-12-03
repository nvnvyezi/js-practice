class QuickSort {
  public static int divide(int []num, int left, int right) {
    int base = num[left];
    while (left < right) {
      while (left < right && num[right] > base) {
        right--;
      }
      if (left < right) {
        num[left++] = num[right];
      }
      while (left < right && num[left] < base) {
        left++;
      }
      if (left < right) {
        num[right--] = num[left];
      }
    }
    num[left] = base;
    return left;
  }
  public static void sort(int []num, int left, int right) {
    if (left > right) {
      return ;
    } else {
      int base = divide(num, left, right);
      sort(num, left, base - 1);
      sort(num, base + 1, right);
    }
  }
  public static void main(String[] args) {
    int num[] = {3, 5, 6, 1, 8, 2, 9};
    sort(num, 0, 6);
    for (int item : num) {
      System.out.println(item);
    }
  }
}