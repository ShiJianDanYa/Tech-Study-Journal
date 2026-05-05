package 算法训练.ch06_大乐透;

//导包
import java.util.Random;
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

		//分两部分
		//1.彩票
		//前区
		int[] front = new int[5];
		//后区
		int[] back = new int[2];
		//调用方法去重 并打印
		front = removeElement(front,1,35);
		traverseTheArray(front);
		//分割线
		System.out.println();
		back = removeElement(back,1,12);
		traverseTheArray(back);


		//2.中奖
	}
	//去重方法
	public static int[] removeElement(int[] arr,int a,int b){
		Random rd = new Random();
		int[] newArr = new int[arr.length];
		//循环遍历添加数组元素(不重复)
		//定义变量存储添加的元素位置
		int j = 0;
		//第一次添加元素不用判断
		if(j == 0){
			newArr[j] = rd.nextInt(a,b);
			j++;
		}
		do {
			int temp = rd.nextInt(a,b);
			for(int i = 0; i < j; i++){//判断是否有重复的元素
				if(temp == newArr[i]|| j == arr.length){
					break;
				}
				newArr[j] = temp;
				j++;
			}
		}while(j<newArr.length);

		return newArr;
	}
	//方法遍历数组
	public static void traverseTheArray(int[] arr){
		for (int i = 0; i < arr.length; i++) {
			System.out.print("["+arr[i]+"]");
		}
	}
}
