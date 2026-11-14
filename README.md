# Fan Zhang · 张藩

个人学术主页，目标地址：<https://fanz-666.github.io/>。

纯 HTML、CSS 和 JavaScript，无需安装依赖或构建。直接基于用户指定的 <https://kiyotakali.github.io/> 的 MIT 开源主题修改，使用原始样式、Space Grotesk 字体及动态波纹马赛克背景。原始许可见 `LICENSE`，来源见 `THIRD_PARTY_NOTICES.md`。

包含中英文切换、新闻动态、PGA-Stereo 出版物、荣誉与奖励、教育经历，以及邮箱、Google Scholar、GitHub 和微信二维码。手机号未加入。微信与 BibTeX 可在弹窗中查看，论文与代码按钮链接至 DOI 和作者仓库。

## 修改内容

- `index.html`：默认英文内容、结构、搜索引擎元信息。修改个人资料时，也同步更新此文件，确保禁用 JavaScript 时信息正确。
- `site.js`：英文与中文文案，浏览器会记住语言选择。
- `css/home.css`：颜色、字体、布局及手机样式。
- `assets/css/main.css`、`assets/css/latest-components.css`、`assets/js/custom-scripts.js`：沿用参考站的原始主题；动态背景位于后者。
- `assets/fonts/`：同款字体及其 OFL 许可，本地加载。
- `assets/img/profile.png`：用户提供的新照片，原文件完整保留；页面通过 CSS 以方形头像展示，点击可打开完整照片。
- `assets/img/wechat.jpg`：用户提供的微信二维码原图。

教育经历采用“斜体时间：加粗学校＋专业学位”的单行列表。本科时间为 **2020.09–2024.06**，硕士为 **2024.09 至今**，本硕专业为计算机科学与技术，硕士注明推免入学；博士预计于 **2027 年 9 月**开始。2026 年国家奖学金已由用户确认获奖。论文信息及尚需替换为公开个人页的 Scholar 地址详见 `CONTENT_NOTES.md`。

## 本地查看

直接在浏览器打开 `index.html`；也可以在本目录执行 `python -m http.server 8080` 后访问 <http://localhost:8080>。

## 发布到现有 GitHub Pages

1. 将本目录文件上传到 `fanz-666/fanz-666.github.io` 仓库的 `main` 分支，保留目录结构。首次在网页上传时，可上传 `index.html`、`site.js`、`css` 和 `assets`；`.nojekyll` 可通过 Add file → Create new file 单独创建。
2. 在仓库 **Settings → Pages** 中，Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/(root)**，保存。
3. 等待 Pages 部署完成后，访问 <https://fanz-666.github.io/>。

如仓库已经配置了其他 Pages 构建方式，请先确认现有配置，再调整。

官方说明：<https://docs.github.com/en/pages/quickstart>。

网页不使用第三方统计、外部字体或其他运行时依赖。
