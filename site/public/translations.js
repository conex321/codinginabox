/**
 * CodingInABox — Mandarin Translation Toggle
 * Adds an EN | 中文 toggle to the nav bar and translates all page text.
 * Persists language choice via localStorage.
 */
(function () {
    'use strict';

    // ─── Translation Dictionary ────────────────────────────────────────
    const dict = {
        // ── Nav & Common ──
        'Home': '首页',
        'Kits': '套件',
        'Courses': '课程',
        'Competitions': '竞赛',
        'About': '关于',
        'Contact': '联系我们',
        'Get Started': '立即开始',
        'GET STARTED': '立即开始',
        'Access Portal': '访问门户',
        'Initialize': '初始化',
        'INITIALIZE': '初始化',
        'View Gear': '查看装备',
        'VIEW GEAR': '查看装备',
        'Subscribe': '订阅',

        // ── Nav Dropdown ──
        'Robot Car V4': '机器人小车 V4',
        'Anti-Aircraft Gun': '防空炮',
        'Laser Shooting Target': '激光射击靶',
        'Smart Water Dispenser': '智能饮水机',
        'Solar Light Tracker': '太阳能追光器',
        'Titan Arm 6-Axis': '泰坦臂 6轴',
        'Mini Drone X-2': '迷你无人机 X-2',

        // ── Index Page – Hero ──
        'Build It.': '构建。',
        'Code It.': '编程。',
        'Compete.': '竞技。',
        'Deploying World-Wide': '全球部署中',
        'DEPLOYING WORLD-WIDE': '全球部署中',
        'Empowering the next generation of innovators world-wide with industry-leading STEM robotics kits and professional cyber-courses.': '以行业领先的STEM机器人套件和专业网络课程，赋能全球下一代创新者。',

        // ── Index Page – Sections ──
        'Tactical Gear Kits': '战术装备套件',
        '> Available hardware modules for development': '> 可用的开发硬件模块',
        'ACCESS ARCHIVE': '访问档案',
        'Robot Car V.01': '机器人小车 V.01',
        '6-Axis Manipulator': '6轴机械臂',
        'Laser Interface': '激光接口',
        'Initialize Purchase': '初始化购买',
        'Operational Sequence': '操作流程',
        '01. Selection': '01. 选择',
        'Download hardware specifications and choose your chassis.': '下载硬件规格并选择你的底盘。',
        '02. Assembly': '02. 组装',
        'Execute assembly protocols and deploy Python script logic.': '执行组装协议并部署Python脚本逻辑。',
        '03. Deployment': '03. 部署',
        'Enter the arena and compete for terminal dominance.': '进入竞技场，争夺终端主导权。',
        'Active Units': '活跃单元',
        'Users Linked': '已连接用户',
        'Sub-Nets': '子网络',
        'Cycles/Year': '年度周期',
        'Upcoming Trials': '即将到来的试炼',
        'Grand Prix [City-Grid]': '大奖赛 [城市网格]',
        '> Speed and autonomous pathfinding challenge.': '> 速度与自主寻路挑战。',
        'Register ID': '注册身份',
        'Sky High [Uplink]': '天际 [上行链路]',
        '> Aerial precision and visual recognition trial.': '> 空中精准与视觉识别试炼。',
        'Knowledge Modules': '知识模块',
        '> Boot up system proficiency': '> 启动系统能力',
        'Circuit Core': '电路核心',
        'Master hardware schematics, soldering protocols, and power management.': '掌握硬件原理图、焊接规范和电源管理。',
        'Logic Stream': '逻辑流',
        'Implement PID algorithms and multi-sensor fusion for autonomous agents.': '实现PID算法和多传感器融合，打造自主智能体。',
        'Neural Vision': '神经视觉',
        'Deploy object detection and real-time vision processing into your unit.': '将目标检测和实时视觉处理部署到你的单元中。',
        'Initiate': '启动',
        'Adept': '精通',
        'Overlord': '统领',
        '12.00 Hrs': '12.00 小时',
        '24.00 Hrs': '24.00 小时',
        '40.00 Hrs': '40.00 小时',
        'Schools Program': '学校计划',
        'Register Your School': '注册您的学校',
        'View Competitions': '查看竞赛',
        'Sign Up Your School': '注册您的学校',
        'Sign up your school for the': '为您的学校注册参加',
        '2026 World Robotics Championship': '2026世界机器人锦标赛',
        'Schools receive bulk kit discounts, curriculum resources, and dedicated competition support. Teams of up to 5 students per category.': '学校享有套件批量折扣、课程资源和专属竞赛支持。每个类别最多5名学生组队。',
        'Prize Pool': '奖金池',
        'Team Slots': '团队名额',
        'Competition Categories': '比赛类别',
        'Data Stream': '数据流',
        '> Receive hardware drops and competition Intel': '> 接收硬件更新和竞赛情报',
        'ENTER.CREDENTIALS': '输入.凭证',

        // ── Footer ──
        'Archive': '档案',
        'Nodes': '节点',
        'Protocols': '协议',
        '> Leading STEM ecosystem. Inspiring creators since 2021. End transmission.': '> 领先的STEM生态系统。自2021年起激励创造者。传输结束。',
        'About_Us': '关于我们',
        'Careers': '职业',
        'Press_Rel': '新闻稿',
        'Documentation': '文档',
        'Terminal_Support': '终端支持',
        'Uplink_Help': '上行帮助',
        'Privacy_Enc': '隐私加密',
        'Service_Terms': '服务条款',
        'Refund_P_01': '退款政策_01',
        '© 2026 CodingInABox Terminal. All rights reserved.': '© 2026 CodingInABox 终端。保留所有权利。',

        // ── About Page ──
        'Coding': '编程',
        'ABox': '盒中',
        '// INIT_PROTOCOL: EMPOWERING THE NEXT GEN OF INNOVATORS //': '// 初始协议：赋能新一代创新者 //',
        'Our Story': '我们的故事',
        'Started With a Simple Idea': '始于一个简单的想法',
        'System Mission': '系统使命',
        'System Vision': '系统愿景',
        'Core Values': '核心价值',
        'Providing hands-on & accessible STEM tools for all students, ensuring no node is left behind in the digital revolution.': '为所有学生提供实践型且易于获得的STEM工具，确保在数字革命中不落下任何人。',
        'To be the primary node for world-class robotics education, reaching every student across the global network.': '成为世界级机器人教育的主要节点，覆盖全球网络中的每一位学生。',
        'Hardware-first, absolute accessibility, decentralized competition, and global community synchronicity.': '硬件优先、绝对可及、去中心化竞赛、全球社区同步。',
        '// THE_ARCHITECTS': '// 架构师',
        'Meet the Founders': '创始人介绍',
        'Chief Executive Officer': '首席执行官',
        'Chief Technology Officer': '首席技术官',
        'Initialization': '初始化',
        'Founded in a high-density urban workshop. Compiled the first "Base Kit" prototype v1.0.': '在高密度城市工坊创立。编译了第一个"基础套件"原型 v1.0。',
        'Pilot_Sync': '试点同步',
        'Network expansion to 5 nodes. First 100 student entities successfully integrated into the system.': '网络扩展至5个节点。首批100名学生实体成功接入系统。',
        'Global_Expansion': '全球扩展',
        'Scaling operations to continental grid. Full curriculum stack deployed across multiple regions.': '运营扩展至大陆级网格。完整课程栈部署至多个地区。',
        'System_Log_History': '系统日志历史',
        'Scale_Up_Your_Domain?': '扩展您的领域？',
        'Execute_Contact': '执行联系',
        'View_Hardware': '查看硬件',
        'Directory': '目录',
        './hardware_kits': './硬件套件',
        './curriculum_db': './课程数据库',
        './team_nodes': './团队节点',
        './comms_uplink': './通讯上行',
        'Uplink': '上行链路',
        'Building the future of innovation through containerized robotics education. The network is growing. Join the protocol.': '通过容器化机器人教育构建创新未来。网络正在成长。加入协议。',
        'Privacy_Policy': '隐私政策',
        'Terms_Of_Service': '服务条款',
        '© 2026 CodingInABox EdTech_Core. All rights reserved.': '© 2026 CodingInABox 教育科技核心。保留所有权利。',

        // ── Products Page ──
        'System Ready // Hardware Catalog': '系统就绪 // 硬件目录',
        'STEM Kits Arsenal': 'STEM套件库',
        'Deploy high-performance robotics frameworks. Master the neural links between code and machine.': '部署高性能机器人框架。掌握代码与机器之间的神经链接。',
        'Compare Hardware': '比较硬件',
        'Full Database': '完整数据库',
        'All Units': '所有单元',
        'Robotics': '机器人',
        'Aviation': '航空',
        'Automation': '自动化',
        'Sort by Protocol': '按协议排序',
        'Robot Car': '机器人小车',
        'Anti-Air Sentinel': '防空哨兵',
        'Laser Target': '激光靶',
        'Water Automata': '饮水机器人',
        'Light Tracker': '追光器',
        'Titan Arm': '泰坦臂',
        'Neon Drone': '霓虹无人机',
        'Initialize Kit': '初始化套件',
        'NEW UNIT': '新单元',
        'POPULAR': '热门',
        'Neural-linked obstacle navigation & tracking system.': '神经链接障碍导航和追踪系统。',
        'Radar-guided target tracking array & rotation modules.': '雷达引导目标追踪阵列和旋转模块。',
        'Scoring matrix with ultra-sensitive light detection.': '超灵敏光检测计分矩阵。',
        'Touchless IR sensor array for automated distribution.': '无接触红外传感器阵列，用于自动分发。',
        'Dual-axis photonic orientation for max energy gain.': '双轴光子定向，最大能量增益。',
        '6-DOF precision assembly with inverse kinematics.': '6自由度精密装配，逆运动学控制。',
        'Compact flight core with stability matrix control.': '紧凑飞行核心，稳定矩阵控制。',
        'System Comparison': '系统对比',
        'Kit Identifier': '套件标识符',
        'Price (USD)': '价格 (美元)',
        'Target Age': '目标年龄',
        'Difficulty': '难度',
        'Primary Logic': '主要逻辑',
        'Comp Ready': '比赛就绪',
        '[ BEGINNER ]': '[ 初级 ]',
        '[ MID-RANGE ]': '[ 中级 ]',
        '[ ADVANCED ]': '[ 高级 ]',
        'Anti-Air Gun': '防空炮',
        'Core Components Payload': '核心组件载荷',
        'Every unit ships with a full tactical hardware and software suite.': '每个单元均配备完整的战术硬件和软件套件。',
        'Hardware Tier 1': '硬件一级',
        'Micro-controllers, wiring matrix, and precision alloy fasteners included.': '包含微控制器、接线矩阵和精密合金紧固件。',
        'Code Manual': '代码手册',
        'High-res encrypted technical blueprints and syntax guidelines.': '高分辨率加密技术蓝图和语法指南。',
        'Net Access': '网络访问',
        '24/7 uplink to premium encrypted video briefing platform.': '全天候连接高级加密视频简报平台。',
        'Arena Ready': '竞技就绪',
        'Standardized protocols for international bot-fighting leagues.': '国际机器人格斗联赛标准化协议。',
        'Empower Your Network': '赋能您的网络',
        "Special bulk deployment protocols for schools and academies. Secure your institution's tech lead.": '面向学校和学院的特殊批量部署协议。确保您机构的技术领先地位。',
        'Request Bulk Protocol': '申请批量协议',
        'Hardware': '硬件',
        'Directives': '指令',
        'Support': '支持',
        'Standard Units': '标准单元',
        'Alpha Projects': 'Alpha项目',
        'Sensor Modules': '传感器模块',
        'Subsystems': '子系统',
        'Protocol Guide': '协议指南',
        'Admin Uplink': '管理员上行',
        'Workshops': '研讨会',
        'Encrypted Funds': '加密资金',
        'Comms Center': '通讯中心',
        'Logistics': '后勤',
        'Security Policy': '安全策略',
        'Signal Us': '联系我们',
        'Operational Terms': '运营条款',
        'Neural Privacy': '神经隐私',

        // ── Competitions Page ──
        'Season 2026 // Active Arena': '2026赛季 // 活跃竞技场',
        'Combat': '格斗',
        'Arena': '竞技场',
        'Drone races, robot car challenges, and engineering combat tournaments.': '无人机竞速、机器人小车挑战和工程格斗锦标赛。',
        'Drone Competitions': '无人机竞赛',
        'Drone Flight': '无人机飞行',
        'Manual precision flight through obstacle courses. No coding required — master throttle, pitch and yaw control.': '通过障碍赛道的手动精准飞行。无需编程 — 掌握油门、俯仰和偏航控制。',
        'Solo or Team': '个人或团队',
        'Coded Drone Flight': '编程无人机飞行',
        'Program autonomous waypoint navigation. Highest accuracy and fastest completion wins.': '编程自主航点导航。最高精度和最快完成者获胜。',
        'Python Required': '需要Python',
        'Beam Speeder Race': '光束飞速赛',
        'High-speed racing through neon-lit beam gates. Combine manual control with coded assist modules.': '穿越霓虹光束门的高速竞赛。结合手动控制和编程辅助模块。',
        'Time-based Scoring': '计时评分',
        'Robot Car Competitions': '机器人小车竞赛',
        'Pick & Place': '抓取放置',
        'Autonomous object retrieval and precise placement challenges.': '自主物体检索和精确放置挑战。',
        'Speed Run': '极速奔跑',
        'Line-following and beam-tracking at maximum velocity.': '最高速度的循线和光束跟踪。',
        'NatCar': '智能导航车',
        'Navigation-autonomous technology challenge on unknown tracks.': '未知赛道上的自主导航技术挑战。',
        'Sumo Combat': '相扑格斗',
        'Push your opponent out of the ring. Strategy meets raw power.': '将对手推出擂台。策略与原始力量的碰撞。',
        'Soccer Bot': '足球机器人',
        'Team-based robotic soccer with autonomous coordination.': '基于团队的机器人足球，自主协调。',
        'How To Enter': '如何参赛',
        'Register': '注册',
        'Create your team profile on our portal.': '在我们的门户上创建您的团队资料。',
        'Form Team': '组建团队',
        'Build your squad of 2-5 members.': '组建2-5人小队。',
        'Build Bot': '建造机器人',
        'Prepare your robot for competition specs.': '按照比赛规格准备你的机器人。',
        'Compete': '竞赛',
        'Enter the arena and claim victory.': '进入竞技场，赢得胜利。',
        'Prizes & Recognition': '奖项与荣誉',
        'Gold': '金牌',
        '+ Trophy + Global Recognition': '+ 奖杯 + 全球认可',
        'Silver': '银牌',
        '+ Medal + Certificate': '+ 奖牌 + 证书',
        'Bronze': '铜牌',
        'Upcoming Competition': '即将到来的竞赛',
        'Live Event': '现场赛事',
        'Registration Open': '注册开放',
        'World Robotics Championship 2026': '2026年世界机器人锦标赛',
        'The ultimate global showdown. Teams from across the world compete in drone racing, robot car challenges, and sumo combat. Build your bot, sharpen your code, and claim the title.': '终极全球对决。来自世界各地的团队在无人机竞速、机器人小车挑战和相扑格斗中竞技。建造你的机器人，磨砺你的代码，赢取冠军。',
        'Date': '日期',
        'Location': '地点',
        'Teams': '团队',
        '256 Slots Available': '256个名额可用',
        '$50,000+ in Prizes': '超过$50,000奖金',
        'Drone Racing': '无人机竞速',
        'Register Your Team': '注册您的团队',
        'Secure your spot in the next CodingInABox competition season. Limited slots available per category.': '在下一个CodingInABox竞赛赛季中确保您的名额。每个类别名额有限。',
        'Register Now': '立即注册',
        'Privacy': '隐私',
        'Terms': '条款',
        '> Leading STEM ecosystem. Inspiring creators since 2026.': '> 领先的STEM生态系统。自2026年起激励创造者。',

        // ── Courses Page ──
        '10+ Active Modules // Updated Q1 2026': '10+ 活跃模块 // 2026年第一季度更新',
        'Knowledge': '知识',
        'Modules': '模块',
        'From zero-code novice to autonomous systems engineer. Professional-grade training paths for every skill level.': '从零代码新手到自主系统工程师。面向各技能水平的专业级培训路径。',
        'Online': '在线',
        'Self-paced video modules with interactive coding labs. Learn anywhere, anytime.': '自定进度的视频模块与交互式编程实验室。随时随地学习。',
        'In-Person': '面对面',
        'Hands-on workshops at partner schools and community centers near you.': '在您附近的合作学校和社区中心进行实践研讨会。',
        'Hybrid': '混合',
        'Combine online theory with in-person build sessions. Best of both worlds.': '将在线理论与面对面构建课程相结合。两全其美。',
        'Course Catalog': '课程目录',
        'Beginner': '初级',
        'Intermediate': '中级',
        'Advanced': '高级',
        'Robotics Foundations': '机器人基础',
        'Master electronics basics, soldering, and introductory Arduino programming.': '掌握电子基础、焊接和入门级Arduino编程。',
        'Start Course': '开始课程',
        'Python for Hardware': '硬件Python',
        'Learn Python basics with direct application to sensor control and motor logic.': '学习Python基础，直接应用于传感器控制和电机逻辑。',
        'Autonomous Logic': '自主逻辑',
        'PID control, sensor fusion, and advanced autonomous navigation algorithms.': 'PID控制、传感器融合和高级自主导航算法。',
        'Drone Flight Systems': '无人机飞行系统',
        'Understand quadcopter physics, PID tuning, and autonomous waypoint navigation.': '理解四旋翼物理学、PID调参和自主航点导航。',
        'AI Vision & Systems': 'AI视觉与系统',
        'Integrate computer vision, object detection, and neural networks into your robot.': '将计算机视觉、目标检测和神经网络集成到你的机器人中。',
        'Competition Mastery': '竞赛精通',
        'Tournament strategy, speed optimization, and advanced debugging for competitive robotics.': '锦标赛策略、速度优化和竞技机器人高级调试。',
        'Access Tiers': '访问层级',
        'Free Tier': '免费层级',
        'Access to 3 beginner modules': '访问3个初级模块',
        '3 Beginner courses': '3个初级课程',
        'Community forum': '社区论坛',
        'Certificate': '证书',
        'Pro Tier': '专业层级',
        'Most Popular': '最受欢迎',
        'Full access to all courses': '全部课程完整访问',
        'All 10+ courses': '全部10+课程',
        'Certificates': '证书',
        '1-on-1 mentoring': '一对一辅导',
        'School Tier': '学校层级',
        'Custom': '定制',
        'Bulk licensing for institutions': '机构批量许可',
        'All courses + admin panel': '全部课程 + 管理面板',
        'Teacher training': '教师培训',
        'Priority support': '优先支持',
        'Contact Sales': '联系销售',
        '> Leading STEM ecosystem since 2026.': '> 自2026年起领先的STEM生态系统。',

        // ── Contact / Sponsorship / Product Detail (common) ──
        'Contact Us': '联系我们',
        'Send Message': '发送消息',
        'Your Name': '您的姓名',
        'Your Email': '您的邮箱',
        'Message': '消息',
        'Submit': '提交',
        'Sponsors': '赞助商',
        'Back to Products': '返回产品',
        'Add to Cart': '加入购物车',
        'Specifications': '规格',
        'Features': '功能特点',
        "What's in the Box": '包装内容',
        'Related Products': '相关产品',

        // ── Product sub-pages ──
        'Assembly Time': '组装时间',
        'Difficulty Level': '难度等级',
        'Age Range': '适用年龄',
        'Kit Contents': '套件内容',
        'Curriculum': '课程',
        'Related Kits': '相关套件',
        'View Kit': '查看套件',
        'Order Now': '立即订购',
        'Buy Now': '立即购买',
        'Learn More': '了解更多',
        'Explore': '探索',

        // ── Sponsorship Page ──
        'Sponsorship': '赞助',
        'Partnership Tiers': '合作层级',
        'Become a Sponsor': '成为赞助商',
        'Why Sponsor': '为何赞助',
        'Benefits': '福利',
        'Sponsor Us': '赞助我们',
    };

    // ─── State ─────────────────────────────────────────────────────────
    var currentLang = localStorage.getItem('ciab-lang') || 'en';
    var originalTexts = new Map();

    // ─── Inject CSS ─────────────────────────────────────────────────
    function injectCSS() {
        var s = document.createElement('style');
        s.textContent = [
            '#lang-toggle{display:inline-flex;align-items:center;margin-left:12px;border:1px solid rgba(0,240,255,0.4);overflow:hidden;cursor:pointer;user-select:none;flex-shrink:0}',
            '.lang-btn{padding:6px 12px;font-size:11px;font-weight:800;letter-spacing:0.1em;transition:all 0.3s ease;font-family:"JetBrains Mono",monospace;background:transparent;color:rgba(0,240,255,0.6);box-shadow:none}',
            '.lang-btn.lang-active{background:#00F0FF!important;color:#050B1A!important;box-shadow:0 0 12px rgba(0,240,255,0.5)!important}'
        ].join('\n');
        document.head.appendChild(s);
    }

    // ─── Inject Toggle Button ──────────────────────────────────────────
    function injectToggle() {
        var nav = document.querySelector('nav');
        if (!nav) return;

        // Find the flex container inside nav
        var container = nav.querySelector('[class*="max-w-"]');
        if (!container) return;

        var toggle = document.createElement('div');
        toggle.id = 'lang-toggle';
        toggle.setAttribute('data-notranslate', 'true');

        var btnEN = document.createElement('span');
        btnEN.textContent = 'EN';
        btnEN.className = 'lang-btn';
        btnEN.id = 'lang-btn-en';

        var btnZH = document.createElement('span');
        btnZH.textContent = '中文';
        btnZH.className = 'lang-btn';
        btnZH.id = 'lang-btn-zh';
        btnZH.style.letterSpacing = '0.05em';

        toggle.appendChild(btnEN);
        toggle.appendChild(btnZH);

        // Insert before last child (CTA button or hamburger)
        var lastChild = container.lastElementChild;
        container.insertBefore(toggle, lastChild);

        btnEN.addEventListener('click', function (e) {
            e.stopPropagation();
            switchLang('en');
        });
        btnZH.addEventListener('click', function (e) {
            e.stopPropagation();
            switchLang('zh');
        });

        applyToggleHighlight();
    }

    function applyToggleHighlight() {
        var btnEN = document.getElementById('lang-btn-en');
        var btnZH = document.getElementById('lang-btn-zh');
        if (!btnEN || !btnZH) return;

        // Remove active from both first
        btnEN.classList.remove('lang-active');
        btnZH.classList.remove('lang-active');

        // Add active to the current language
        if (currentLang === 'zh') {
            btnZH.classList.add('lang-active');
        } else {
            btnEN.classList.add('lang-active');
        }
    }

    // ─── Text Translation Engine ───────────────────────────────────────
    function getTextNodes(root) {
        var nodes = [];
        var walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    var parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    var tag = parent.tagName;
                    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    // Skip lang toggle
                    if (parent.closest('[data-notranslate]')) return NodeFilter.FILTER_REJECT;
                    // Skip empty
                    if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        while (walker.nextNode()) nodes.push(walker.currentNode);
        return nodes;
    }

    function storeOriginals() {
        var textNodes = getTextNodes(document.body);
        for (var i = 0; i < textNodes.length; i++) {
            if (!originalTexts.has(textNodes[i])) {
                originalTexts.set(textNodes[i], textNodes[i].textContent);
            }
        }
    }

    function translateToZH() {
        storeOriginals();
        var textNodes = getTextNodes(document.body);
        var sortedKeys = Object.keys(dict).sort(function (a, b) { return b.length - a.length; });

        for (var i = 0; i < textNodes.length; i++) {
            var node = textNodes[i];
            var original = originalTexts.get(node) || node.textContent;
            var trimmed = original.trim();

            // Direct match
            if (dict[trimmed]) {
                var leading = original.match(/^(\s*)/)[0];
                var trailing = original.match(/(\s*)$/)[0];
                node.textContent = leading + dict[trimmed] + trailing;
                continue;
            }

            // Partial match
            var newText = original;
            for (var k = 0; k < sortedKeys.length; k++) {
                var key = sortedKeys[k];
                if (newText.indexOf(key) !== -1) {
                    newText = newText.split(key).join(dict[key]);
                }
            }
            if (newText !== original) {
                node.textContent = newText;
            }
        }

        // Translate input placeholders
        var inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
        for (var j = 0; j < inputs.length; j++) {
            var el = inputs[j];
            if (!el.dataset.origPlaceholder) {
                el.dataset.origPlaceholder = el.placeholder;
            }
            var ph = el.dataset.origPlaceholder.trim();
            if (dict[ph]) {
                el.placeholder = dict[ph];
            }
        }

        document.documentElement.lang = 'zh';
    }

    function restoreToEN() {
        originalTexts.forEach(function (original, node) {
            try { node.textContent = original; } catch (e) { /* removed */ }
        });

        var inputs = document.querySelectorAll('[data-orig-placeholder]');
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].placeholder = inputs[j].dataset.origPlaceholder;
        }

        document.documentElement.lang = 'en';
    }

    // ─── Language Switch ───────────────────────────────────────────────
    function switchLang(lang) {
        currentLang = lang;
        localStorage.setItem('ciab-lang', lang);

        if (lang === 'zh') {
            translateToZH();
        } else {
            restoreToEN();
        }

        // Apply highlight after DOM updates
        requestAnimationFrame(function () {
            applyToggleHighlight();
        });
    }

    // ─── Init ──────────────────────────────────────────────────────────
    function init() {
        injectCSS();
        injectToggle();
        if (currentLang === 'zh') {
            setTimeout(function () {
                translateToZH();
                applyToggleHighlight();
            }, 50);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
