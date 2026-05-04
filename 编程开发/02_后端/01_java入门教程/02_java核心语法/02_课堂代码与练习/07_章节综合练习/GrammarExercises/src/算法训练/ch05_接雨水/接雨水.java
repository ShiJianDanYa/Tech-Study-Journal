package 算法训练.ch05_接雨水;

/**
 * ClassName: 接雨水
 * Package: 算法训练.ch05_接雨水
 * Description:
 *
 * @Author:锏澹
 * @Create: 2026/5/4 - 21:15
 * @Version: v1.0
 *
 */
public class 接雨水 {
	public static void main(String[] args) {
		/*给定n个非负整数表示每个宽度为1的柱子的高度图，
		计算按此排列的柱子，下雨之后能接多少雨水
		输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
		输出：6

		思路 判断 指针移动 只有左右都有柱子时，才会留住雨水
		结束条件 当左右指针 超出 数组 时 结束

		*/

		//先创建数组
		int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};
		//先找到数组中 最大值方法
		int max = getMax(height);
		//定义两个指针
		 int left = 0;
		 int right = height.length - 1;



	}
	//求数组最大值方法
	public static int getMax(int[] height){
		int max = height[0];
		for (int i = 1; i < height.length; i++) {
			if (max < height[i]) {
				max = height[i];
			}
		}
		return max;
	}
}
