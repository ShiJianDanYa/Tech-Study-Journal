module.exports = async (params) => {
  // 初始化 Templater 工具（确保能调用模板相关功能）
  const tp =
    params.app.plugins.plugins["templater-obsidian"].templater
      .current_functions_object;
  if (!tp) {
    new Notice("❌ 未找到 Templater 插件，请先安装并启用！");
    return;
  }

  // 获取当前日期信息
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从0开始，+1转为实际月份
  const day = now.getDate();
  const dayOfWeek = now.getDay(); // 0=周日，1-6=周一到周六
  const quarter = Math.ceil(month / 3); // 计算当前季度（1-4）

  // 判断是否是月末/季末/年末
  const lastDayOfMonth = new Date(year, month, 0).getDate(); // 当月最后一天
  const isLastDayOfMonth = day === lastDayOfMonth;
  const isLastDayOfQuarter = [3, 6, 9, 12].includes(month) && isLastDayOfMonth;
  const isLastDayOfYear = month === 12 && day === 31;

  // 配置笔记存放路径和模板路径（和你之前的模板结构完全匹配）
  const baseFolder = "日记/";
  const folderConfig = {
    daily: baseFolder + "每日/",
    weekly: baseFolder + "每周/",
    monthly: baseFolder + "每月/",
    quarterly: baseFolder + "季度/",
    yearly: baseFolder + "年度/",
  };
  const templateConfig = {
    daily: "模板/日记模板/Daily Notes.md",
    weekly: "模板/日记模板/Weekly Notes.md",
    monthly: "模板/日记模板/Monthly Notes.md",
    quarterly: "模板/日记模板/Quarterly Notes.md",
    yearly: "模板/日记模板/Yearly Notes.md",
  };

  // 初始化变量：存放路径、文件名、模板路径、笔记类型
  let targetFolder, fileName, templatePath, noteType;

  // 按优先级判断要创建的笔记类型（年末>季末>月末>周日>工作日）
  if (isLastDayOfYear) {
    targetFolder = folderConfig.yearly;
    fileName = `${year}年`;
    templatePath = templateConfig.yearly;
    noteType = "年度";
  } else if (isLastDayOfQuarter) {
    targetFolder = folderConfig.quarterly;
    fileName = `${year}年第${quarter}季度`;
    templatePath = templateConfig.quarterly;
    noteType = "季度";
  } else if (isLastDayOfMonth) {
    targetFolder = folderConfig.monthly;
    fileName = `${year}年${String(month).padStart(2, "0")}月`;
    templatePath = templateConfig.monthly;
    noteType = "月度";
  } else if (dayOfWeek === 0) {
    targetFolder = folderConfig.weekly;
    // 计算当月第几周
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const weekNum = Math.ceil((day + firstDayOfMonth) / 7);
    fileName = `${year}年第${weekNum}周`;
    templatePath = templateConfig.weekly;
    noteType = "周度";
  } else {
    targetFolder = folderConfig.daily;
    fileName = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    templatePath = templateConfig.daily;
    noteType = "每日";
  }

  // 拼接完整文件路径
  const fullFilePath = `${targetFolder}${fileName}.md`;

  try {
    // 1. 如果文件夹不存在，自动创建
    if (!tp.vault.getAbstractFileByPath(targetFolder)) {
      await tp.vault.createFolder(targetFolder);
    }

    // 2. 如果笔记文件不存在，基于模板创建
    if (!(await tp.file.exists(fullFilePath))) {
      // 检查模板文件是否存在
      const templateFile = tp.vault.getAbstractFileByPath(templatePath);
      if (!templateFile) {
        new Notice(`❌ 模板文件不存在：${templatePath}，请检查路径！`);
        return;
      }
      // 读取模板内容并创建新笔记
      const templateContent = await tp.vault.read(templateFile);
      await tp.vault.create(fullFilePath, templateContent);
      new Notice(`✅ 已创建${noteType}笔记：${fileName}`);
    }

    // 3. 打开创建好的笔记
    const noteFile = tp.vault.getAbstractFileByPath(fullFilePath);
    if (noteFile) {
      await tp.workspace.getLeaf(true).openFile(noteFile);
    }
  } catch (error) {
    new Notice(`❌ 创建笔记失败：${error.message}`);
    console.error("日记调度脚本错误：", error);
  }
};
