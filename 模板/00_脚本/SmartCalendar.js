/*
Smart Calendar Script for Obsidian
功能：根据日期自动判断创建 每日/每周/每月/每季/每年 笔记
*/

module.exports = async (params) => {
  // 1. 获取日期 (从日历插件点击传入，或者默认为今天)
  const selectedDate = params.date
    ? window.moment(params.date)
    : window.moment();

  // 定义路径前缀，方便修改
  const folderBase = "日记";
  const templateBase = "模板/日记模板";

  let targetFolder = "";
  let targetTemplate = "";
  let fileName = "";

  // 2. 核心逻辑判断
  const day = selectedDate.date(); // 几号
  const month = selectedDate.month(); // 月份 (0-11)
  const year = selectedDate.year();
  const dayOfWeek = selectedDate.day(); // 星期几 (0是周日)
  const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const isEndOfMonth = day === daysInMonth[month];
  const isEndOfYear = month === 11 && day === 31;
  const isWeekend = dayOfWeek === 6; // 周六

  // --- 判断优先级：年 > 季 > 月 > 周 > 日 ---

  if (isEndOfYear) {
    // 年末逻辑
    targetFolder = `${folderBase}/年度`;
    targetTemplate = `${templateBase}/Yearly Notes`;
    fileName = `${year}年年度总结`;
  } else if (day === 1 && month % 3 === 0) {
    // 季初逻辑 (1月1日, 4月1日, 7月1日, 10月1日)
    // 注意：这里也可以改为季末逻辑，看你习惯
    targetFolder = `${folderBase}/季度`;
    targetTemplate = `${templateBase}/Quarterly Notes`;
    const quarter = Math.floor(month / 3) + 1;
    fileName = `${year}年Q${quarter}季度回顾`;
  } else if (isEndOfMonth) {
    // 月末逻辑
    targetFolder = `${folderBase}/每月`;
    targetTemplate = `${templateBase}/Monthly Notes`;
    fileName = `${year}年${month + 1}月月度总结`;
  } else if (isWeekend) {
    // 周末逻辑
    targetFolder = `${folderBase}/每周`;
    targetTemplate = `${templateBase}/Weekly Notes`;
    // 获取本周的周一日期作为文件名标识
    const monday = selectedDate.clone().startOf("week").add(1, "day");
    fileName = `${monday.format("YYYY-MM-DD")}_周记`;
  } else {
    // 普通每日逻辑
    targetFolder = `${folderBase}/每日`;
    targetTemplate = `${templateBase}/Daily Note`;
    fileName = selectedDate.format("YYYY-MM-DD");
  }

  // 3. 执行创建动作
  // 确保文件夹存在
  await this.app.vault.adapter.mkdir(targetFolder);

  // 生成完整路径
  const fullPath = `${targetFolder}/${fileName}.md`;

  // 检查文件是否已存在，避免覆盖
  if (await this.app.vault.adapter.exists(fullPath)) {
    new Notice(`📝 笔记已存在: ${fileName}`);
    // 打开已存在的文件
    const file = this.app.vault.getAbstractFileByPath(fullPath);
    await this.app.workspace.getLeaf().openFile(file);
  } else {
    // 创建新文件
    const templateFile = this.app.vault.getAbstractFileByPath(
      `${targetTemplate}.md`,
    );
    if (!templateFile) {
      new Notice(`❌ 找不到模板: ${targetTemplate}`);
      return;
    }
    const templateContent = await this.app.vault.read(templateFile);

    // 使用 Templater 语法渲染内容（如果需要）
    // 这里简单直接写入，如果需要复杂的 Templater 功能，需调用 Templater 插件 API
    const newFile = await this.app.vault.create(fullPath, templateContent);

    new Notice(`✅ 已创建: ${fileName}`);
    await this.app.workspace.getLeaf().openFile(newFile);
  }
};
