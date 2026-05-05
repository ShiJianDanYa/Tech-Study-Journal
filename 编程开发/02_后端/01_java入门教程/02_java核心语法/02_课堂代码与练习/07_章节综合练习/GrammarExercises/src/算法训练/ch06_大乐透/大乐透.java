package 算法训练.ch06_大乐透;

//导包
import java.util.Random;
import java.util.Scanner;
/**
 * ClassName: 大乐透
 * Package: 算法训练.ch06_大乐透
 * Description:
 *
 * @Author:锏澹
 * @Create: 2026/5/5 - 17:32
 * @Version: v1.0
 *
 */
public class 大乐透 {
	public static void main(String[] args){
		/*彩票规则：
		前区：1~35选5个号码（唯一）
		后区：1~12选2个号码（唯一）
		跨区可重复

		中奖规则：
			一等奖：5 + 2
			二等奖：5 + 1
			三等奖：5 + 0 / 4 + 2
			四等奖：4 + 1 / 3 + 2
			五等奖：4 + 0 / 3 + 1 / 2 + 2
			六等奖：3 + 0 / 1 + 2 / 2 + 1 / 0 + 2
			*/

		//分三部分
		//1.彩票
		//前区
		int[] front = new int[5];
		//后区
		int[] back = new int[2];
		//调用方法去重 并打印
		front = CreateLotteryNumber(front,1,35);
		traverseTheArray(front);
		//分割线
		System.out.println();
		back = CreateLotteryNumber(back,1,12);
		traverseTheArray(back);
		//2.用户输入彩票号码
		System.out.println("请输入你的彩票号码 7 位");


		//3.中奖判断
	}
	//去重方法
	public static int[] CreateLotteryNumber(int[] arr,int a,int b){
		Random rd = new Random();
		int[] newArr = new int[arr.length];
		//循环遍历添加数组元素(不重复)
		//定义变量存储添加的元素位置
		int i = 0,j = 0;
		while(i< arr.length){
			//生成随机数
			 int num = rd.nextInt(a,b);
			 //定义变量判断是否重复
			 boolean flag = true;
			 for (j = 0; j < i; j++) {
				 if(arr[j] == num){ //重复
					 flag = false;
					 break;
				 }
			 }
			 if(flag){ //只有不重复
				 //添加i 自加
				 newArr[i] = num;
				 i++;
			 }
		}

		return newArr;
	}
	//方法遍历数组
	public static void traverseTheArray(int[] arr){
		for (int i = 0; i < arr.length; i++) {
			System.out.print("["+arr[i]+"]");
		}
	}
	//用户输入方法
	public static int[] inputLotteryNumber(){
		//定义数组 7位
		int[] arr = new int[7];
		

	}


}
