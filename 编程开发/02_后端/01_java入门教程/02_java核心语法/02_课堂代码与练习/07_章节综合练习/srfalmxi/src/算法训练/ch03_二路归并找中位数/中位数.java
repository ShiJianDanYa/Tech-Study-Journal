package 算法训练.ch03_二路归并找中位数;

/**
 * ClassName: 中位数
 * Package: 算法训练.ch03_二路归并找中位数
 * Description:
 *
 * @Author:锏澹
 * @Create: 2026/5/1 - 17:50
 * @Version: v1.0
 *
 */
public class 中位数 {
	public static void main(String[] args){
		/*
		给定两个正序数组arr1和arr2，请先合并数组，并找出合并之后数组的中位数。举例:
		1 2 3 4 5 6 7 8 9
		中位数：5
		1 2 3 4 5 6
		中位数：（3+4）/ 2
		*/
		//定义两个数组
		int[] arr1 = new int[] {1,3,5,7,9};
		int[] arr2 = {2,4,6};
		//合并方法
		merge(arr1,arr2);


	}
	public static int[] merge(int[] arr1,int[] arr2){
		//创建新数组,用来存储两个数组的数据
		int[] arr3 = new int[arr1.length+arr2.length];
		//循环遍历数组


	}
}
