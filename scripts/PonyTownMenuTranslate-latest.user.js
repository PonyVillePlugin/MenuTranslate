// ==UserScript==
// @name         PonyTownMenuTranslate
// @name:en      PonyTownMenuTranslate
// @name:zh      PonyTown界面翻译
// @name:zh-CN   PonyTown界面翻译
// @name:zh-TW   PonyTown界面翻譯
// @namespace    https://pony.town/
// @version      0.0.5-alpha
// @description        Translate almost all the UI text you can see.
// @description:en     Translate almost all the UI text you can see.
// @description:zh     翻译几乎所有你能看到的UI文本
// @description:zh-CN  翻译几乎所有你能看到的UI文本
// @description:zh-TW  翻譯幾乎所有你能看到的UI文本
// @author       Pony
// @tag          PonyTown
// @match        https://pony.town/*
// @match        https://*.pony.town/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEk0AABJNAfOXxKcAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAACiElEQVQ4T2VTz08TQRT+9kd36RZF2lAtUWkqIQoag6goVKOe1JMJF7141EQTT95N/Bs86AUlXozBqOFAYiIXNASbABpQE2OEisRWDKS23Xa3u+s3y1Yh/ZK3M2/mvW++92ZWWpm+5mEz6MmqBK1JRUhVYFVqqFZrwWYj5GD8B6NZw8T4F9y8MoqRe9NYzq4jFFKC3UY0ENhWDSdOdSC2XcMwCW5ffYYsScLhUBCxFf8JKD2kKahICuRYM+48GsKx9F4sr1dRsDwUhQqqEzEitg7V/3JBC6v4kSshOzoJe6kMI7ULRReIxQysjc1h5nEJiLcidbkXiXjE742A30SV7CurZfx+OI507wC051NYncohw4BtVN5HorADkAJve9rQMXwJrYoMx/E2SpB1FcuZRRx+n4dW1OB070BswMCFwQjSXU1QYipMCYjQogu/MP9mCXpEE6mQJUlijQ7k2SxaPgLm3aewXuZRyZgwM2WYnypw8pTLZJfHiZpnXnyGabsQub4C23EhFytBQ4jVNaDGxthBt4JWSyzlD0e1VkWVBAKy53mI8NHY0RaYIkgEC+OJvgUQSyXy5Tg5cDwBXZUhcn1uQ5agn0xhkXN90xVthk6bp+UTIXSe6YIWkPsEVsnCvtNJzBxNwCVBE9dEQn0M075x/QPH1rNJtHfGeY02vYDAZVaUktpu9OMB/SWWN8eE17Sv9Cfoj3EuxSUkLx70ianeh08gUKGKI/27oV7vw336kwx4R3vC5AX6Rguw59YgUj3tsEzLzxHY8jcqfBwen+qrkVkUZr9j56E4cj+rMAoFJM93ofvcfp5k+4rraPidZdFQvvkyr0kjoUyNpuVC53qNJ9elbwD4C/cI7P9NzQfEAAAAAElFTkSuQmCC
// @grant        none
// @license      MIT
// @source       https://github.com/PonyVillePlugin/MenuTranslate
// @updateURL    https://cdn.jsdelivr.net/gh/PonyVillePlugin/MenuTranslate@main/scripts/PonyTownMenuTranslate-latest.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/PonyVillePlugin/MenuTranslate@main/scripts/PonyTownMenuTranslate-latest.user.js
// ==/UserScript==

(function() {
    'use strict';
    const version = "0.0.5-alpha";
    const isasync = true;
    const ponybot = false;

    const PonyTranslateModule = (() => {
        const translationMap_ZH = {
            "Can't delete the sleeve layer from the a leg accessory tab. To delete this layer, change the chest accessory from the chest tab.": "无法从腿部配饰选项卡中删除袖子图层. 要删除此图层, 请在胸部选项卡中更改胸部配饰.",
            "Item already selected in a different layer.": "该物品已在其他的图层中被选择.",
            "example: with a hat #oc #winter": "示例: 戴帽子 #oc #winter",
            "don't flip mark on the right side": "不要把标志在右侧翻转",
            "No outline for this pattern color": "此图案颜色没有轮廓",
            "always respawn at spawn point": "永远在重生在出生点",
            "Locked outline darkness": "锁定轮廓线明暗",
            "allow custom outlines": "允许自定义轮廓",
            "Match back body pattern": "匹配背部样式",
            "for front and back legs": "前腿和后腿",
            "Match leg patterns": "匹配腿部样式",
            "for both front legs": "双前腿统一",
            "for both back legs": "双后腿统一",
            "Match butt marks": "匹配可爱标志",
            "Front legs pattern": "前腿样式",
            "Back legs pattern": "后腿样式",
            "Lock to base color": "锁定为基色",
            "Advanced options": "高级选项",
            "Match side horns": "匹配侧角",
            "Export all": "导出全部",
            "Export all characters": "导出全部角色",
            "Export character": "导出角色",
            "Import characters": "导入角色",
            "Export/Import": "导出/导入",
            "Export": "导出",
            "Image export": "图像导出",
            "Image export zoom": "图像导出缩放",
            "Image export settings": "图像导出设置",
            "Export as PNG": "导出为PNG",
            "Export as GIF": "导出为GIF",
            "Supporter tag": "支持者标签",
            "Show social": "显示社交",
            "Shows the selected social account next to your pony name.": "在你的小马名字旁显示所选的社交账户.",
            "Description": "描述",
            "Description and tags help you organize and search for your ponies.": "描述和标签可以帮助你整理和搜索你的小马.",
            "Use # tags to be able to quickly find specific ponies like #oc #winter or #unicorn": "使用 # 标签可以快速找到特定的小马, 例如 #oc #winter 或 #unicorn",
            "Use @ tags to sort your ponies. @top to put them at the start of the list, @bottom at the end,\nand @1 @2 @3 ... to order them manually.": "使用 @ 标签来整理你的小马. @top 将它们放在列表开头, @bottom 放在列表末尾,\n@1 @2 @3 ... 用于手动排序.",
            "Use this option to export your characters to the event servers.": "使用此选项将你的角色导出到活动服务器.",
            "When unlocked, overrides default preview background color for this pony.": "解锁后, 会覆盖此小马的默认预览背景颜色.",
            "You can change default preview background color by clicking the": "你可以更改默认预览背景颜色通过点击",
            "icon on the character options panel.": "角色选项面板上的图标.",

            "Toggle chat": "开关聊天",
            "Emojis (use Control + E to open)": "表情符号 (使用 Ctrl + E 打开)",
            "Send message (hold Shift to send without closing input)": "发送消息(按住 Shift 可在不关闭输入框的情况下发送)",
            
            "Search...": "搜索...",
            "Frequently used": "常用",
            "Emotes & Activities": "表情 & 动作",
            "Creatures & Nature": "生物 & 自然",
            "Food": "食物",
            "Objects": "物体",
            "Symbols": "符号",
            
            "All Objects": "所有物体",
            "Indoor": "室内",
            "Wall Items": "墙面物品",
            "Outdoor": "户外",
            "Food & Storage": "食品 & 储存",
            "Nature": "自然",
            "Gardening": "园艺",
            "Tools & Smithing": "工具 & 铁匠",
            "Lights": "灯",
            "Lantern posts": "灯柱",
            "Holiday": "假日",
            "Misc": "杂项",
            "Floors": "地面",
            "Walls": "墙体",

            "Dirt": "泥土",
            "Sand": "沙子",
            "Grass": "草地",
            "Water": "水面",
            "Ice": "冰面",
            "Wood": "木板",
            "Tiled wood": "木纹瓷砖",
            "Tile": "瓷砖",
            "Stone": "石头",
            "Stone brick": "石砖",
            "Brick": "砖块",
            "Brick dark border": "深色边框砖块",
            "Carpet": "地毯",
            "Fence": "栅栏",
            "Rope fence": "绳围栏",

            "Plain": "普通",
            "Striped": "条纹",
            "Wavy": "波浪",
            "Zigzag": "锯齿",
            "Moon": "月亮",
            "Dark forest": "黑暗森林",
            "Void": "虚空",
            "Void with eyes": "虚空之眼",
            "Bat cave": "蝙蝠洞穴",
            "Pumpkins": "南瓜",

            "Item stash": "物品收藏",
            "Toy stash": "玩具收藏",
            "House": "房屋",
            
            "Choose color variant": "选择颜色变体",
            "Choose wall variant": "选择墙体变体",

            "(last used)": "(上次使用)",
            "Map Settings": "地图设置",
            
            "Create new map": "创建新地图",
            "Save map": "保存地图",
            "Load map": "加载地图",
            "Delete map": "删除地图",
            "Reset map": "还原地图",
            "Clear map": "清空地图",
            "Auto season": "自动季节",
            "Spring": "春季",
            "Summer": "夏季",
            "Fall": "秋季",
            "Winter": "冬季",
            "Auto time": "自动时间",
            "Pause time": "暂停时间",
            "Night": "夜晚",
            "Sunset": "日落",
            "Sunrise": "日出",
            "Day (paused)": "白日 (暂停)",
            "Night (paused)": "夜晚 (暂停)",
            "Sunset (paused)": "日落 (暂停)",
            "Sunrise (paused)": "日出 (暂停)",
            "Tall walls": "高墙",

            "Confirm creating new map": "确认创建新地图",
            "Cancel creating new map": "取消创建新地图",
            "Confirm overwriting map": "确认覆盖地图",
            "Cancel overwriting map": "取消覆盖地图",
            "Confirm loading map": "确认加载地图",
            "Cancel loading map": "取消加载地图",
            "Confirm deleting map": "确认删除地图",
            "Cancel deleting map": "取消删除地图",

            "Save map into slot {x}": "保存地图到槽位 {x} ",
            "Load map from slot {x}": "从槽位 {x} 加载地图",

            "{x} out of {x} objects placed": "已放置 {x} 共 {x} 物体可放置",
            "{x} out of {x} walls placed": "已放置 {x} 共 {x} 墙体可放置",

            "Colors": "颜色",
            "Drag & drop colors here": "将颜色拖放到此处",
            "This menu allows you to store colors.": "此菜单允许你存储颜色.",
            "Stored colors can be quickly reused on any pony and any device.": "存储的颜色可以快速在任何小马和任何设备上复用.",
            "To copy colors you can also drag and drop color squares": "你也可以拖放颜色方块来复制颜色",
            "Delete all": "删除全部",

            "Characters": "角色",
            "Edit character": "编辑角色",
            "Create new character": "创建新角色",
            "Name of your character": "你的角色名称",
            "Delete pony": "删除小马",
            "No ponies": "无小马",
            "No matches": "无匹配项",

            "Character editor": "角色编辑",
            "Character editor {value}": "角色编辑 {value}",
            "Open character editor": "打开角色编辑",
            "Disable UI": "禁用UI",
            "Disable UI {value}": "禁用UI {value}",
            "Toggle showing game UI": "开关显示游戏UI",
            
            "Current zoom level": "当前缩放级别",
            "Zoom out (O)": "缩小 (O)",
            "Zoom in (P)": "放大 (P)",
            "Undo edit (Z)": "撤销编辑 (Z)",
            "Redo edit (Y)": "重做编辑 (Y)",

            "Preview zoom (O and P)": "预览缩放 (O 和 P)",
            "Change background": "更换背景",
            "Toggle name and tag (N)": "开关名称和标签 (N)",
            "Turn head (H)": "转头 (H)",
            "Flip preview (F)": "翻转预览 (F)",
            "Toggle color palette (K)": "开关调色板 (K)",
            "Toggle color panel (K)": "开关调色板 (K)",
            
            "friend":"好友",
            "Pinned in your friend list":"置顶在你的好友列表",
            "In your friend list":"在你的好友列表",
            "In your party":"在你的派对",
            "party":"派对",
            "blocked":"已屏蔽",
            "This player is hidden":"此玩家已隐藏",
            "You've blocked requests from this player":"你已屏蔽此玩家的请求",
            "You've blocked chat and requests from this player":"你已屏蔽此玩家的聊天和请求",
            
            "developer": "开发者",
            "moderator": "管理员",
            "dev designer": "开发设计师",
            "dev programmer": "开发程序员",
            "dev quality assurance": "开发质量保证员",
            "dev musician": "开发音乐家",
            "dev artist": "开发美术家",
            "builder": "建造者",
            "event staff": "活动员工",
            "Developer": "开发者",
            "Moderator": "管理员",
            "Dev Designer": "开发设计师",
            "Dev Programmer": "开发程序员",
            "Dev Quality assurance": "开发质量保证员",
            "Dev Musician": "开发音乐家",
            "Dev Artist": "开发美术家",
            "Builder": "建造者",
            "Event Staff": "活动员工",
            "supporter": "支持者",
            "Tier {x} Supporter": "{x} 级支持者",
            
            "Local":"本地",
            "Personal":"个人",
            "Party":"派对",
            "Whisper":"私聊",
            
            "Sort by":"排序方式",
            "Default":"默认",
            "Name":"名称",
            "Creation date":"创建日期",
            "Recently played":"最近使用",
            "Recycle bin": "回收站",
            "Select ponies...": "选择小马...",
            "Cancel delete pony": "取消删除小马",
            "Confirm delete pony": "确认删除小马",
            "Delete ponies": "删除小马",
            "Delete selected ponies": "删除选中小马",
            
            "Pending": "待处理",
            "Pending friend": "待处理好友",
            "Pinned": "置顶",
            "Pinned friend": "置顶好友",
            "General": "常规",
            "General friend": "常规好友",
            "Friend": "好友",
            
            "Seen {vaule}d ago": "{vaule}天前在线",
            "Seen {vaule}h ago": "{vaule}小时前在线",
            "Seen {vaule}m ago": "{vaule}分钟前在线",
            "Seen {vaule}s ago": "{vaule}秒前在线",
            "Seen {vaule}d ago on": "{vaule}天前在线于",
            "Seen {vaule}h ago on": "{vaule}小时前在线于",
            "Seen {vaule}m ago on": "{vaule}分钟前在线于",
            "Seen {vaule}s ago on": "{vaule}秒前在线于",
            
            /*"This friend is currently on the {x}": "这个朋友目前在 {x} 上",*/
            "Last seen online on {x} at {vaule}": "最后在线于 {x} 时间 {vaule}",
            "Last seen online {x}": "最后在线时间 {x}",

            "Incoming request": "收到请求",
            "Incoming friend request": "收到好友请求",
            "Outgoing request": "发出请求",
            "Outgoing friend request": "发出好友请求",

            "View profile": "查看资料",
            "Send whisper": "发送私信",
            "Send a private message to this player": "向此玩家发送私信",
            "Give item": "给予物品",
            "Cancel giving item": "取消给予物品",
            "Exchange items": "交换物品",
            "Cancel exchanging items": "取消交换物品",
            "Add friend note": "添加备注",
            "Edit friend note": "编辑备注",
            "Save note": "保存",
            "Pin in friend list": "设为置顶",
            "Add friend to pinned friends": "将好友添加到置顶好友",
            "Unpin in friend list": "解除置顶",
            "Remove friend from pinned friends": "将好友从置顶好友中移除",
            "Add to friends": "添加好友",
            "Add this player to the friend list": "将此玩家添加到好友列表",
            "Accept friend request": "同意好友请求",
            "Cancel friend request": "取消好友请求",
            "Cancel sent friend request": "取消已发送的好友请求",
            "Remove from friends": "删除好友",
            "Remove this player from the friend list": "将此玩家从好友列表中删除",
            "Invite to party": "邀请加入派对",
            "Cancel party invite": "取消派对邀请",
            "Hide for 15 minutes": "隐藏15分钟",
            "Hide this player for 15 minutes": "将此玩家隐藏15分钟",
            "Hide for 24 hours": "隐藏24小时",
            "Hide this player for 24 hours": "将此玩家隐藏24小时",
            "Block...": "屏蔽...",
            "Show detailed block options": "显示详细的屏蔽选项",

            "You aren't holding anything": "你未持有任何物品",
            "Target player is too far": "距离目标玩家太远",
            "Target player isn't holding anything": "目标玩家未持有任何物品",

            "Select a player and use ":"选择一个玩家并使用 ",
            " menu to add them to your friends":" 菜单以将他们添加为你的好友",
            "Show as offline":"显示为离线",
            "Show your status as offline in the friend list, and hide your friend tag and name color.":"在好友列表中显示为离线状态, 并隐藏你的好友标签和名称颜色",
            "Sort by status":"按状态排序",
            "Sort by account name":"按账户名排序",
            "Sort by character name":"按角色名排序",
            
            "Toggle hearts (Numpad Decimal)": "开关爱心 (小键盘小数点)",
            "Toggle blush (Numpad Enter)": "开关腮红 (小键盘回车)",
            "Toggle tears (Numpad Multiply)": "开关眼泪 (小键盘*号)",
            "Toggle cry (Numpad Divide)": "开关哭泣 (小键盘/号)",
            "Toggle sleep (Numpad 0)": "开关睡觉 (小键盘数字0)",
            "Toggle magic (U)": "开关魔法 (U)",
            "Need a horn for magic effect": "魔法效果需要独角",
            
            "Head only": "仅头部",
            "Eye blinking": "眼睛眨眼",
            "Name and tag": "名称与标签",
            "(PNG only)": "(仅PNG格式)",
            "Fixed image size": "固定图像大小",
            "Add border padding": "添加边框内边距",
            "Can't be enabled while using Fixed image size option": "使用固定图像大小选项时无法启用",
            "Perfect loop": "完美循环 (动画)",
            "Can't be enabled while using Head only option": "使用 '仅头部' 选项时无法启用",

            "Eternal Day": "永恒白日",
            "Eternal Sunset": "永恒日落",
            "Eternal Sunrise": "永恒日出",
            "Eternal Night": "永恒夜晚",

            "playing: ": "播放中: ",
            "loading: ": "加载中: ",

            "Focus camera on stage": "将摄像机对准舞台",
            "Play Stream": "暂停流",
            "Pause Stream": "暂停流",
            "Chatbox settings…": "聊天框设置…",
            "Recently closed whispers": "最近关闭的私聊",
            "Close whispers…": "关闭私聊…",
            "New unreads": "新的未读",
            "Local tab options": "本地标签选项",
            "Personal tab options": "个人标签选项",
            "Party tab options": "派对标签选项",
            "Show party chat": "显示派对聊天",
            "Show whispers": "显示私聊",
            "Show whispers from anyone": "显示来自任何人的私聊",
            "Show whispers from friends": "显示来自朋友的私聊",
            "Show public messages from friends ": "显示来自朋友的公共消息 ",
            
            "Close whispers": "关闭私聊",
            "You're about to close the following whispers.": "你即将关闭以下私聊.",
            "If you want to keep some, uncheck them from this list.": "如果你想保留一些, 请在此列表中取消勾选.",
            "Any unchecked whisper tabs will not be closed.": "任何未选中的私聊标签将不会被关闭.",
            "Last message {n}": "最后消息 {n}",

            "Opening link": "打开链接",
            "Are you sure you want to open the following website? External links can be unsafe.": "你确定要打开以下网站吗? 外部链接可能不安全.",
            "Trust ": "信任 ",
            " from now on": " 从现在起",
            "Visit site": "访问网站",

            "Donate collectables": "捐赠收藏品",
            "Donating collectables allows you to reduce your item counts.": "捐赠收藏品可以让你减少你的物品计数.",
            "Donate": "捐赠",
            "You need to choose at least one item to donate": "你需要至少选择一件物品进行捐赠",
            "You don't have any {value}": "你没有任何 {value}",

            "Manage maps": "管理地图",
            "Manage maps {value}": "管理地图 {value}",
            "Manage saved maps": "管理已保存地图",
            "Saved Maps": "已保存地图",
            "Locked supporter slots": "锁定的支持者槽位",
            "Name of your map": "你的地图名称",
            "These slots can be unlocked by supporting the game on Patreon": "通过在 Patreon 上支持游戏可以解锁这些槽位",
            "Join party": "加入派对",
            "Join party {value}": "加入派对 {value}",
            "You've been invited to join": "你已被邀请加入",
            "Successfully joined the party": "成功加入派对",
            "You're already in this party.": "你已经在这个派对中.",
            "Server: {value}": "服务器: {value}",
            "\nMembers: {value}": "\n成员: {value}",
            "Create a new party or join an existing party via an invite code": "创建一个新派对或通过邀请代码加入现有派对",
            "Create new party": "创建新派对",
            "Are you sure you want to create a new party?": "你确定要创建一个新派对吗?",
            "You are already in a party. Creating a new party will remove you from the current party. Are you sure?": "你已经在一个派对中. 创建新派对将把你从当前派对中移除. 你确定要继续吗?",
            'Another player can also invite you by selecting the "Invite to party" option on your player profile.': "其他玩家也可以通过在你的玩家档案上选择 '邀请加入派对' 选项来邀请你.",
            "Invite code": "邀请代码",
            "Invite link": "邀请链接",
            "Join via invite code": "通过邀请代码加入",
            "Join via invite link": "通过邀请链接加入",
            "Use party invite": "使用派对邀请",
            "Use party invite link": "使用派对邀请链接",
            "Enter party invite code": "输入派对邀请代码",
            "Enter party invite link": "输入派对邀请链接",
            "Error joining party": "加入派对时出错",
            "Invalid party invite code format, a valid code looks like 7AVxFSaJ": "无效的派对邀请代码格式, 有效的代码示例 7AVxFSaJ", 
            "Invalid party invite code": "无效的派对邀请代码", 
            "Invalid party invite": "无效的派对邀请", 
            "You're already in a party, using a party invite will remove you from the current party, are you sure?": "你已经在一个派对中, 使用派对邀请将会把你从当前派对中移除, 你确定要继续吗?", 
            "Confirm leaving party": "确认离开派对", 

            "Select toy": "选择玩具",
            "Select toy {value}": "选择玩具 {value}",
            "Select held toy": "选择头顶玩具",
            "Settings": "设置",
            "Settings {value}": "设置 {value}",
            "Open game settings": "打开游戏设置",
            "Leave game": "离开游戏",
            "Current server": "当前服务器",
            "Game time": "游戏时间",

            "Import Pony": "导入小马",
            "Export Pony": "导出小马",
            "Import Plush": "导入玩偶",
            "Export Plush": "导出玩偶",
            "Import settings": "导入设置",
            "Export settings": "导出设置",
        
            "Actions": "动作",
            "Actions {value}": "动作 {value}",
            "Manage actions": "管理动作",
            "Reset to default actions": "重置为默认动作",
            "Clear action bar": "清空动作栏",
            "Export actions": "导出动作",
            "Import actions": "导入动作",
            "Enable vertical action bar": "启用垂直动作栏",
            "Disable vertical action bar": "禁用垂直动作栏",
            "Show edit actions button": "显示编辑动作按钮",
            "Drag actions to the action bar": "将动作拖到动作栏",
            "Edit actions": "编辑动作",

            "Expressions": "表情",
            "Sleeping": "睡觉",
            "Crying": "哭泣",
            "Love": "爱心",
            "Use item / Interact": "使用物品 / 交互",
            "Stand up / Fly up": "站起 / 飞行",
            "Show full minimap": "显示完整小地图",
            "Disable blinking": "禁用眨眼",
            "Shocked": "震惊",
            "No blinking": "不眨眼",
            "Drag this ": "拖动这个 ",
            " icon ": " 图标 ",
            "to the action bar": "到动作栏",

            "Next tool": "下一个工具",
            "Previous tool": "上一个工具",
            "Next object": "下一个物体",
            "Previous object": "上一个物体",
            "Paint object": "绘制物体",
            "Rotate object": "旋转物体",
            "Change object season": "更改物体季节",
            "Move object": "移动物体",
            "Clone object": "克隆物体",
            "Remove object": "移除物体",
            "Next tile": "下一个图块",
            "Previous tile": "上一个图块",
            "Next wall": "下一面墙",
            "Previous wall": "上一面墙",
            "Remove wall": "移除墙体",
            "Change wall mode": "更改墙体模式",

            "Color pattern": "颜色样式",
            "Legs pattern": "腿部样式",
            "Pattern variant": "样式变体",
            "Variant": "变体",
            "Save & Play": "保存 & 游玩",
            "Match wings": "匹配翅膀",
            "Match hooves": "匹配蹄子",
            "Match ears": "匹配耳朵",
            "Base color": "基础颜色",
            "Base color ": "基础颜色",
            "Butt marks": "可爱标志",
            "Butt mark": "可爱标志",
            "Side horns": "侧角",
            "Background": "背景",
            "Front horn": "独角",
            "Front body": "胸前",
            "Back body": "后背",
            "Ponytail": "马尾",
            "Back mane": "背鬃",
            "Skirts": "裙子",
            "Match pants legs": "匹配双腿裤子",
            "Butt mark above pants": "可爱标志显示在裤子上方",
            "Pants": "裤子",
            "Pants leg (left)": "裤腿 (左)",
            "Pants leg (right)": "裤腿 (右)",
            "Tail accessories": "尾部配件",
            "Head accessories": "头部配饰",
            "Match ear accessories": "匹配双耳配饰",
            "Ear accessories": "耳朵配饰",
            "Ear accessories (left)": "耳朵配饰 (左)",
            "Ear accessories (right)": "耳朵配饰 (右)",
            "Forehead accessories": "额头配饰",
            "Eye accessories": "眼部配饰",
            "Mouth accessories": "嘴部配饰",
            "Pull down mask": "拉下口罩",
            "Neck accessories": "颈部配饰",
            "Chest accessories": "胸部配饰",
            "Match sleeves": "匹配双臂袖子",
            "Sleeve": "袖子",
            "Sleeves": "袖子",
            "Sleeve (left)": "袖子 (左)",
            "Sleeve (right)": "袖子 (右)",
            "Waist accessories": "腰部配饰",
            "left legs": "左腿",
            "right legs": "右腿",
            "forelegs": "前腿",
            "left foreleg": "左前腿",
            "right foreleg": "右前腿",
            "hindlegs": "后腿",
            "left hindleg": "左后腿",
            "right hindleg": "右后腿",
            "Leg accessories": "腿部配饰",
            "Use the same accessory": "使用相同的配饰",
            "No leg accessory selected": "未选择腿部配饰",
            "Adds a new leg accessories layer": "添加新的腿部配饰图层",
            "Maximum amount of leg accessories layers reached": "腿部配饰层数已达上限",
            "Removes selected leg accessories layer": "移除选中的腿部配饰图层",
            "Collectable toy": "收藏玩具",
            "You don't have any collectable toys.\nYou can find them during the Halloween and Winter Holiday events!": "你没有任何可收集的玩具.\n你可以在万圣节和冬季假日活动中找到它们!",
            "Editing plush": "编辑玩偶",
            "Duplicate plush": "复制玩偶",
            "Delete plush": "删除玩偶",
            "Save plush": "保存玩偶",
            "Edit plush": "编辑玩偶",
            "Open plush editor": "打开玩偶编辑",
            "Custom plush": "定制玩偶",
            "{current}/{max} Customizable plushies": "{current}/{max} 定制玩偶",
            "Customizable plushies": "定制玩偶",
            "Search plush list": "搜索玩偶列表",
            'Click "Edit" to customize me!': "点击编辑来自定义我!",
            "Can't duplicate this plush as it hasn't been saved yet": "无法复制这个玩偶,因为它还没有被保存",
            "The optional plush name lets you search for your plushies.": "可选的玩偶名称,可以让你搜索你的玩偶.",
            "Name of your character plush": "你的玩偶角色的名字",
            "Create new plush": "创建新玩偶",
            "Plush name": "玩偶名称",
            "Lock to plush base color": "锁定为玩偶基色",
            "Plush base color": "玩偶基色",
            "Plush base color ": "玩偶基色 ",
            "Plush front horn": "玩偶独角",
            "Plush side horns": "玩偶侧角",
            "Plush ears": "玩偶耳朵",
            "Plush head": "玩偶头部",
            "Plush eyes": "玩偶眼睛",
            "Plush body pattern": "玩偶身体样式",
            "Plush body accessory": "玩偶身体配饰",
            "Plush wings": "玩偶翅膀",
            "Plush mane": "玩偶鬃毛",
            "Plush back mane": "玩偶背鬃",
            "Plush ponytail": "玩偶马尾",
            "Plush tail": "玩偶尾巴",
            "Use the base color instead of mane color when the first tail color is locked": "当第一个尾巴颜色被锁定时使用基色而不是鬃毛颜色",
            "The character plush  has been modified.\nDo you want to save your changes or discard them?": `角色和玩偶已被更改.\n你想保存更改还是放弃它们?`,
            "Your plush has unsaved changes.": "你的玩偶有未保存的更改.",
            "Would you like to save your changes or discard them for the original from the server?": "你想保存更改,还是放弃更改以使用服务器上的原始内容?",
            "Are you sure you want to delete this plush?": "你确定要删除这个玩偶吗?",
            "Stored version:": "存储版本:",
            "Current unsaved changes:": "当前未保存的更改:",
            "Discard changes": "放弃更改",
            "Save changes": "保存更改",
            "Eyelashes": "睫毛",
            "Eyelashes (left)": "睫毛 (左)",
            "Eyelashes (right)": "睫毛 (右)",
            "Match eyelashes for both eyes": "匹配双眼睫毛",
            "Eyelash color": "睫毛颜色",
            "Eyelash color (left)": "睫毛颜色  (左)",
            "Eyelash color (right)": "睫毛颜色 (右)",
            "Blush color": "腮红颜色",
            "Custom blush color": "自定义腮红颜色",
            "Muzzle": "鼻子",
            "Eye color": "眼睛颜色",
            "Eye color (left)": "眼睛颜色 (左)",
            "Eye color (right)": "眼睛颜色 (右)",
            "Lock color for both eyes": "锁定双眼颜色",
            "Eye whites": "眼白",
            "Eye white (left)": "眼白 (左)",
            "Eye white (right)": "眼白 (右)",
            "Lock left eye white for both eyes": "锁定双眼眼白",
            "Left Eye": "左眼",
            "Right Eye": "右眼",
            "Match Eyes": "眼睛",
            "Eyes": "眼睛",
            "Eye (left)": "眼睛 (左)",
            "Eye (right)": "眼睛 (右)",
            "Lock both eyes": "锁定双眼",
            "Left Pupil": "左瞳孔",
            "Pupil (left)": "瞳孔 (左)",
            "Right Pupil": "右瞳孔",
            "Pupil (right)": "瞳孔 (右)",
            "Match Pupils": "匹配瞳孔",
            "Pupils": "瞳孔",
            "Lock both irises": "锁定双眼瞳孔",
            "Eye­shadow": "眼影",
            "Eye­shadow ": "眼影 ",
            "Use eye shadow": "使用眼影",
            "Head base color": "头部基色",
            "Head base color ": "头部基色 ",
            "Fangs": "尖牙",
            "Mouth": "嘴巴",
            "Mouth color": "嘴巴颜色",
            "Tongue color": "舌头颜色",
            "Teeth color": "牙齿颜色",
            "Facial hair": "胡子",
            "Maximum amount of markings layers reached": "脸纹层数已达上限",
            "Adds a new markings layer": "添加新的脸纹图层",
            "Add layer": "添加新图层",
            "Markings": "脸纹",
            "Layer": "图层",
            "Base layer": "基础层",
            "Can't remove base layer": "无法移除基础层",
            "Removes selected markings layer": "移除选中的脸纹图层",
            "Show more...": "显示更多...",
            "duplicate": "重复",
            "Duplicate": "复制",
            "Animation": "动画",
            "Preview": "预览",
            "Effects": "效果",
            "Game": "游戏",
            "Display": "显示",
            "Minimap": "小地图",
            "Messaging": "消息",
            "Chatbox": "聊天框",
            "Filters": "过滤器",
            "Controls": "控制",
            "Keybinds": "按键绑定",
            "Accessibility": "无障碍",
            
            "minutes": "分钟",
            "Custom...": "自定义...",
            "Unlimited": "无限制",
            "Always": "永远",
            "always": "永远",
            "Never": "永不",
            " never": " 永不",
            "Friends, Party and Whispers": "好友 派对 私聊",
            "Friends and Party": "好友和派对",
            "Friends": "好友",
            "Nobody": "没有人",
            "Everyone": "所有人",
            "All": "全部",
            "Private": "私人",
            "Public": "公共",
            "Public and Party": "公共和派对",

            "Language": "语言",
            "AFK timeout": "AFK 时长",
            "Preferred language for tips, system messages and notifications.": "提示, 系统消息和通知的首选语言.",
            "Preferred language for tips, system messages and notifications. Localization may be incomplete.": "提示, 系统消息和通知的首选语言. 本地化可能不完全.",
            "Preferred language for tips, system messages and notifications. Localization is incomplete.": "提示, 系统消息和通知的首选语言. 本地化尚未完成.",
            "How long you'd stay in game while being inactive": "在不活跃时你将在游戏中停留多久",
            "Show away status after": "显示离开状态在不活跃",
            "minutes of inactivity": "分钟后",
            "Automatically display away status when you're inactive (does not override busy status)": "当你不活跃时自动显示离开状态 (不会覆盖忙碌状态)",
            "Fall asleep after": "进入睡眠在不活跃",
            "Automatically fall asleep when you're inactive": "当你不活跃时自动进入休眠",
            "Allow party invites from": "允许派对邀请来自",
            "Useful when other players bother you with unwanted party invites": "当其他玩家用不必要的派对邀请打扰你时很有用",
            "Allow friend requests from": "允许好友请求来自",
            "Useful when other players bother you with unwanted friend requests": "当其他玩家用不必要的好友请求打扰你时很有用",
            "Allow give item requests from": "允许给予物品请求来自",
            "Useful when other players bother you with unwanted give item requests": "当其他玩家用不必要的给予物品请求打扰你时很有用",

            "Lighting quality": "光照质量",
            "Auto": "自动",
            "Low": "低",
            "Medium": "中",
            "High": "高",
            "No lights": "无光照",
            "center": "居中",
            "Reducing quality may improve performance": "降低质量可能会提升性能",
            "Show statistics": "显示统计信息",
            "Show rendering and network stats": "显示渲染和网络统计信息",
            "Show FPS": "显示帧率",
            "Show FPS counter": "显示帧率计数器",
            "See through obstacles": "透视障碍物",
            "Make obstacles transparent": "使障碍物半透明",
            "Make obstacles transparent {value}": "使障碍物半透明 {value}",
            "Disable building tooltips": "禁用建造提示",
            "Disable popping up messages with building controls tooltips": "禁用带有建筑控制工具提示的弹出消息",
            "View mode": "视图模式",
            "Time format display": "时间格式显示",
            "When set to Auto, use format determined by the system": "设置为自动时, 使用系统确定的格式",
            "Limit FPS": "限制帧率",
            "Reduce frame rate to extend battery life and reduce device heating": "降低帧率以延长电池续航时间并减少设备发热",
            "Camera follow sensitivity": "相机跟随灵敏度",
            "Change how sensitive the camera is when following the player": "更改相机跟随玩家时的灵敏度",

            "Minimap background opacity": "小地图背景不透明度",
            "Change minimap background to make it more readable or less obtrusive": "更改小地图背景以提高可读性或降低干扰性",
            "Icon size": "图标大小",
            "Change size of minimap icons used to indicate players and locations": "更改用于指示玩家和位置的小地图图标的大小",
            "Player icon color": "玩家自身图标颜色",
            "Change color of minimap icon indicating player position": "更改指示玩家自身位置的小地图图标的颜色",
            "Regular player icons color": "普通玩家图标颜色",
            "Change color of minimap icons indicating positions of players that aren't you, party or friends": "更改指示非你自己, 非派对成员或非好友的玩家位置的小地图图标的颜色",
            
            "messages":"消息",
            "Show chat bubbles from": "显示聊天气泡来自",
            "Disable chat bubbles of other players": "禁用其他玩家的聊天气泡",
            "Disable chat bubbles of other players {value}": "禁用其他玩家的聊天气泡 {value}",
            "Allow whispers from": "允许私聊来自",
            "Enable accepting whispers from other players": "启用接受来自其他玩家的私聊",
            "Make chatlog links clickable from": "使聊天记录链接可点击来自",
            "Allow clickable external links from": "允许可点击的外部链接来自",
            "Lets you click on links sent in chat from other players and yourself.": "允许你点击其他玩家和自己在聊天中发送的链接.",
            "Enable text expressions for": "启用文本表情为",
            "Enable showing your expressions for messages containing text expressions": "为包含文本表情的消息启用显示你的表情",
            "Disable chat bubble selection": "禁用聊天气泡选择",
            "Disable selecting players by their chat bubbles": "禁用通过聊天气泡选择玩家",
            "Enable typing indicators for": "启用输入状态显示为",
            "Enables showing indicators when players are typing in chat (also enables showing indicator of you typing from others)": "当玩家在聊天中输入时显示输入状态 (也会启用显示他人看到你正在输入的状态)",
            "Enable chat bubble stacks for": "启用聊天气泡堆叠为",
            "Disabling makes old chat bubble disappear immediately upon receiving a new message": "禁用后收到新消息时旧聊天气泡会立即消失",
            "Smooth chat bubbles": "平滑聊天气泡",
            "Display these chat bubbles with smooth text and system fonts": "使用平滑文字和系统字体显示这些聊天气泡",
            "When missing characters": "当缺失字符时",
            "When missing or complex characters": "当缺失或复杂字符时",
            "Smooth chat bubbles scale": "平滑聊天气泡缩放",
            "Change the font of smooth chat bubbles to be bigger or smaller": "将平滑聊天气泡的字体更改为更大或更小",
            "Chat bubbles range": "聊天气泡范围",
            "entire screen": "全屏",
            "Only show chat bubbles from players near you (doesn't affect private messages)": "仅显示来自附近玩家的聊天气泡 (不影响私聊消息)",
            "Chat bubble background opacity": "聊天气泡背景不透明度",
            "Change chat bubble background to make it more readable or less obtrusive": "更改聊天气泡背景以提高可读性或降低突兀感",

            "Additional chat tab settings can be found in the chatlog drop-down.": "更多聊天标签设置可以在聊天记录下拉菜单中找到.",
            "Disable chatlog timestamps": "禁用聊天记录时间戳",
            "Disable showing time when chatlog message was received": "禁用显示收到聊天记录消息的时间",
            "Chatbox background opacity": "聊天框背景不透明度",
            "Change chatbox background to make it more readable or less obtrusive": "更改聊天框背景以提高可读性或降低突兀感",
            "Highlighted message color": "高亮消息颜色",
            "Change color of highlighted chatlog messages": "更改高亮聊天记录消息的颜色",
            "Chatlog range": "聊天记录范围",
            "Only show messages in chatlog from players near you (doesn't affect private messages)": "仅在聊天记录中显示附近玩家的消息 (不影响私聊消息)",
            "Chatlog scale": "聊天记录缩放比例",
            "Change the font in the chatlog to be bigger or smaller": "将聊天记录中的字体调大或调小",

            "Show swears from": "显示咒骂消息来自",
            "Hide swear messages and names of other players (Everyone is not applicable to Safe servers)": "隐藏其他玩家的咒骂消息和名字 ('所有人'选项不适用于安全服务器)",
            "Custom public filter": "自定义公共过滤器",
            "Separate each word or sentence to filter with a new line. All public chat messages and names containing listed words or sentences will be hidden": "用换行分隔每个要过滤的单词或句子. 包含所列单词或句子的所有公共聊天消息和名字将被隐藏",
            "Custom friend and party filter": "自定义好友和派对过滤器",
            "Separate each word or sentence to filter with a new line. All friend/party member messages and names containing the listed words or sentences will be hidden": "用换行分隔每个要过滤的单词或句子. 包含所列单词或句子的所有好友/派对成员消息和名字将被隐藏",

            "Gamepad deadzone": "游戏手柄死区",
            "Increase to eliminate ghost inputs or stick drift, decrease for higher sensitivity": "增大以消除虚假输入或摇杆漂移, 减小以提高灵敏度",
            "Disable gamepad controls": "禁用游戏手柄控制",
            "Useful if gamepad controls are causing issues with the game": "如果游戏手柄控制导致游戏出现问题, 此选项很有用",
            "Disable function keys (F1-F24)": "禁用功能键 (F1 - F24)",
            "Useful if you're using function keys in a way that conflicts with game controls": "如果你使用功能键的方式与游戏控制冲突, 此选项很有用",
            "Allow map tool shortcuts on non-editable maps": "在不可编辑的地图上允许地图工具快捷键",
            "Allow using map tool key bindings outside of editable maps": "允许在可编辑地图之外使用地图工具快捷键",
            "Disable double click to look": "禁用双击改变视线",
            "Disable double click/tap changing eye direction": "禁用双击/轻触改变视角方向",
            "Disable double click/tap changing eye direction {value}": "禁用双击/轻触改变视角方向 {value}",
            "Prefer walking to running": "优先步行而非跑步",
            "Use walking speed by default and run when pressing shift key": "默认使用步行速度, 按下 Shift 键时跑步",
            "Control circle opacity": "控制圆圈的不透明度",
            "Change mobile control circle opacity to make it more apparent or less obtrusive": "更改移动控制圆圈的不透明度来使其更明显或更不显眼",
            
            "Some shortcuts used by the browser, such as closing the current tab, can't be used for keybinds.": "浏览器使用的一些快捷键, 例如关闭当前标签页的快捷键, 无法用于自定义快捷键.",
            "Cannot save with duplicate keybinds": "无法保存重复的快捷键",
            "Reset bindings": "重置绑定",
            "add new shortcut": "添加新快捷键",
            "remove shortcut": "删除快捷键",
            "auto detect": "自动检测",
            "Layout": "布局",
            "Not set": "未设置",

            "Chat": "聊天",
            "Start chatting": "开始聊天",
            "Quick command": "快速指令",
            "Toggle chat log": "开关聊天记录 (显示/隐藏)",
            "Toggle all chat bubbles": "开关所有聊天气泡 (显示/隐藏)",
            "Toggle public chat bubbles": "开关公共聊天气泡 (显示/隐藏)",
            "Toggle selecting chat bubbles": "开关聊天气泡选择",

            "Game display": "游戏显示",
            "Center camera": "摄像机居中",
            "See through objects": "穿透物体",
            "Toggle brighter darkness": "开关更亮的黑暗区域",

            "UI display toggles": "UI显示开关",
            "All UI": "所有UI",
            "Vertical action bar": "垂直动作栏",
            "Party list": "派对列表",
            "Offline party members": "离线派对成员",
            "FPS": "帧率",
            "Statistics": "统计信息",
            
            "Menus": "菜单",
            "Swap character": "切换角色",
            "Friend list": "好友列表",
            "Status box": "状态框",
            "Notifications list": "通知列表",
            "Toys": "玩具",
            "Settings dropdown": "设置下拉菜单",
            "World map": "世界地图",

            "Music": "音乐",
            "Play / pause": "播放 / 暂停",
            "Skip track": "跳过曲目",
            "Volume up": "音量增大",
            "Volume down": "音量减小",
            
            "Movement": "移动",
            "Move left": "向左移动",
            "Move right": "向右移动",
            "Move up": "向上移动",
            "Move down": "向下移动",
            "Walk / Run": "行走 / 奔跑",
            "Toggle walking": "切换行走模式",
            "Toggle sprinting": "切换疾跑模式",
            "Sit down / Land": "坐下 / 着陆",
            "Stand up / Fly": "站起 / 飞行",

            "Interactions": "互动",
            "Use item or interact": "使用物品或交互",
            "Nom": "咀嚼",
            "Eat item": "吃下物品",
            "Drop item": "丢弃物品",
            "Drop dish": "丢弃盘子",
            "Drop food": "丢弃食物",
            "Drop toy": "丢弃玩具",
            "Lock held item": "锁定持有物品",
            "Toggle held light": "开关持有光源",
            "Pull mask down/up": "拉下/拉上面罩",
            "Magic": "魔法",

            "Emotes": "表情",
            "Toggle click to look": "开关点击改变视线",
            "Toggle blinking": "开关眨眼",
            "Reset expression": "重置表情",
            "Turn head": "转头",
            "Boop": "挥蹄",
            "Kiss": "亲吻",
            "Cry": "哭泣",
            "Tears": "眼泪",
            "Hearts": "爱心",
            "Blush": "脸红",
            "Sleep": "睡觉",
            "Shocked eyes": "震惊",
            "Blink": "眨眼",
            "Sneeze": "打喷嚏",
            "Yawn": "打哈欠",
            "Laugh": "大笑",
            "Giggle": "咯咯笑",
            "Roll eyes": "翻白眼",
            "Nod": "点头",
            "Nod with closed eyes": "闭眼点头",
            "Double nod": "双重点头",
            "Double nod with closed eyes": "闭眼双重点头",
            "Head shake": "摇头",
            "Head shake with closed eyes": "闭眼摇头",
            "Smiling head shake": "微笑摇头",
            "Happy wink": "开心眨眼",
            "Cheeky wink": "调皮眨眼",
            "Silly wink": "吐舌眨眼",

            "Look directions": "视线方向",
            "Look left": "向左看",
            "Look right": "向右看",
            "Look up": "向上看",
            "Look down": "向下看",
            "Look left down": "向左下看",
            "Look left up": "向左上看",
            "Look right down": "向右下看",
            "Look right up": "向右上看",
            "Look forward": "向前看",

            "Action bar slots": "动作栏槽位",

            "Building": "建造",
            "Building general": "常规建造",
            "Toggle building menu": "开关建造菜单",
            "Toggle building": "开关建造",
            "Toggle building {x}": "开关建造 {x}",
            "Search in menu": "在菜单中搜索",
            "Undo": "撤销",
            "Redo": "重做",
            "Change color/variant while placing": "放置时更改颜色/变体",
            "Toggle auto wall display mode": "开关自动墙体显示模式",

            "Move objects": "移动物体",
            "Remove objects": "删除物体",
            "Clone objects": "克隆物体",
            "Color objects": "物体颜色",
            "Change object seasons": "更改物体季节",
            "Rotate object": "旋转物体",
            "Remove walls": "删除墙体",
            "Toggle compact mode": "切换精简模式",
            
            "Building tools": "建造工具",
            "Hammer, Brush, Rake (place object, change object color/season)": "锤子, 刷子, 耙子 (放置物体, 更改物体颜色/季节)",
            "Crowbar, Wand (move/clone objects)": "撬棍, 魔杖 (移动/克隆物体)",
            "Wrench (rotate objects) / Rotate object while placing": "扳手 (旋转物体) / 放置时旋转物体",
            "Broom (remove objects)": "扫帚 (移除物体)",
            "Shovel (place floors)": "铲子 (放置地板)",
            "Saw, Sledgehammer (place/remove walls)": "锯子, 大锤 (放置/移除墙体)",

            "Contrast": "对比度",
            "Adjust overall game contrast": "调整游戏整体对比度",
            "Brightness": "亮度",
            "Adjust overall game brightness": "调整游戏整体亮度",
            "Saturation": "饱和度",
            "Adjust overall game saturation ": "调整游戏整体饱和度",
            "Brighter darkness": "更亮的黑暗区域",
            "Increase brightness of the game at night and in dark areas": "提高游戏在夜晚和黑暗区域的亮度",
            "Party color": "派对颜色",
            "Friend color": "好友颜色",
            "Whisper color": "私聊颜色",
            "Link color": "链接颜色",

            "No notifications": "无通知",
            "Swap": "切换",
            "Notifications": "通知",
            "Home": "主页",
            "Minimap (N)": "小地图 (N)",
            "Zoom in": "放大",
            "Zoom out": "缩小",
            "Hide public players": "隐藏公开玩家",
            "Show public players": "显示公开玩家",
            "Resize to fit map (available only when minimap window is very close to fit whole map)": "调整大小以适应地图 (仅当小地图窗口非常接近适应整个地图时可用)",
            "Toggle minimap": "开关小地图",
            "Maximize minimap (M)": "放大小地图 (M)",
            "Restore minimap size": "还原小地图大小",
            "Minimize minimap": "最小化小地图",
            
            "Status | Online": "状态 | 在线",
            "Status | Looking for chat": "状态 | 寻找聊天",
            "Status | Looking for roleplay": "状态 | 寻找角色扮演",
            "Status | Away": "状态 | 离开",
            "Status | Busy": "状态 | 忙碌",

            "Status:": "状态:",
            "online": "在线",
            "online ": "在线 ",
            "offlin": "离线",
            " close ": " 关闭 ",
            "Sign out": "退出登录",
            "Account name": "账户名称",
            "(visible to other players)": "(对其他玩家可见)",
            "Account settings": "账户设置",
            "Account details": "账户详情",
            "Date of birth": "出生日期",
            "Date of birth is not specified": "未指定出生日期",
            "Save and continue": "保存并继续",
            "Finish account setup": "完成账户设置",
            "Account info": "账户信息",
            "Account ID:": "账户ID:",
            "Copy account ID to clipboard": "复制账户ID到剪贴板",
            "Creation date:": "创建日期:",
            "Total playtime:": "总游戏时长:",
            "Update name": "更新名称",
            "Reveal all locations": "显示所有位置",
            "Connected social accounts": "已连接的社交账户",
            "Reveal all socials": "显示所有社交账户",
            "Connect a social account": "连接社交账户",
            "Account management": "账户管理",
            "Delete my account": "删除我的账户",
            "Sign out all other devices": "退出所有其他设备",
            "Blocked players": "已屏蔽的玩家",
            "No blocked players": "无已屏蔽的玩家",
            "Error loading blocked players": "加载已屏蔽的玩家时出错",
            "Remove temporary blocks": "移除临时屏蔽",
            "Remove all blocks": "移除所有屏蔽",
            "Devices": "设备",
            "Location:": "位置:",
            "Last visit:": "上次在线:",
            "Signed in with:": "登录方式:",

            "Social removed successfully": "社交已成功移除",
            "Select a social account to connect": "选择要连接的社交账户",
            "Do NOT connect any social accounts that ": "请勿连接任何社交账户如果它 ",
            "do not belong to you!": "不属于你!",
            "Connecting social accounts belonging to other people may result in an account merge and ": "连接属于他人的社交账户可能会导致账户合并并 ",
            "loss of one or both {x} accounts": "丢失一个或两个 {x} 账户",
            "Please contact {x} if you accidentally merged your account with someone else's.": "如果你不小心将自己的账户与他人的账户合并请联系 {x}.",
            
            "Are you sure you want to sign out?": "你确定要退出登录吗?",
            "Are you sure you want to sign out all other devices?": "你确定要在所有其他设备上退出登录吗?",

            "Are you absolutely sure?": "你确定吗?",
            "Be sure to read this before proceeding!": "请务必在继续操作前阅读此内容!",
            "Are you sure you want to request deletion of your {x} account?": "你确定要请求删除你的 {x} 账户吗?",
            "Deleting your current {x} account will mean ": "删除你当前的 {x} 账户将意味着",
            "you can no longer play {x}": "你不能再玩 {x} 了",
            " and you ": " 并且你 ",
            "will not": "将不",
            " be able to create a new account.": " 能够创建新账户.",
            "After requesting deletion you will have 30 days to cancel your request.": "在请求删除后你将有30天的时间来取消你的请求.",
            "If you are absolutely sure you want to request deletion of your {x} account, please type ": "如果你完全确定要请求删除你的 {x} 账户, 请输入 ",
            " into the text field.": " 到文本框",

            "Supporter info": "支持者信息",
            "You've successfully connected your Patreon account to Pony Town.\nIf you support Pony Town on Patreon your supporter info will show up here.": "你已成功将你的 Patreon 账户连接到 Pony Town.\n如果你在 Patreon 支持 Pony Town, 你的支持者信息将会显示在这里.",
            "It should take no longer than half an hour to register your Patreon pledges.\n": "注册你的 Patreon 赞助通常不会超过半小时.\n",

            "Activate": "激活",
            " code": " 代码",
            "Enter code": "输入代码",
            "Enter Boosty code you received to activate your supporter.\n": "输入你收到的 Boosty 代码以激活你的支持者.\n",
            "To activate Patreon benefits, ": "要激活 Patreon 福利, ",
            "follow these instructions": "按照指示操作",

            "You will be charged for this tier in your next billing cycle.": "你将在下个账单周期被收取这一等级的费用.",

            "Safe Chinese{x}": "安全中文{x}",
            "18+ server{x}": "18+服务器{x}",
            "Safe server{x}": "安全服务器{x}",
            "18+ Russian{x}": "18+俄语{x}",
            "Safe Russian{x}": "安全俄语{x}",
            "18+ Spanish/Portuguese{x}": "18+西班牙语/葡萄牙语{x}",
            "Safe Spanish/Portuguese{x}": "安全西班牙语/葡萄牙语{x}",
            "18+ Indonesian{x}": "18+印度尼西亚语{x}",
            "Safe Indonesian{x}": "安全印度尼西亚语{x}",
            "18+ Vietnamese{x}": "18+越南语{x}",
            "Safe Vietnamese{x}": "安全越南语{x}", 

            "another server": "其他服务器", 

            "Server rules": "服务器规则",
            "General rules": "通用规则",
            "Notice": "提示",
        
            "Day": "天",
            "Month": "月",
            "Year": "年",

            "Main map": "主地图",
			"Bakery map": "面包店",
			"Bakery": "面包店",
			"Cave map": "洞穴",
			"Cave": "洞穴",
			"Community map": "社区地图",
			"Library map": "图书馆",
			"Library": "图书馆",
			"Island map": "派对岛",
			"Islands map": "派对岛",
			"Island": "派对岛",
			"Islands": "派对岛",
			"Unknown": "未知",
            
            "House map": "房屋",
            
            "Loading": "加载中",
            "Loading...": "加载中...",
            "Updating": "更新中",
            "Updating...": "更新中...",
            "You can wait longer or ": "你可以等待更长时间或 ",
            "Reload": "重新加载",
            "Loading takes longer than expected, you can wait or try to ": "加载所需时间比预期长, 你可以等待或尝试 ",
            "to retry.": "以重试.",
            " to retry.": " 以重试.",
            " Updating is taking longer than expected.\n": "更新耗时比预期更长.\n",
            " Updating is taking longer than expected.": "更新耗时比预期更长.",

            " An internal server error occurred when connecting to the server.\n": " 连接服务器时发生内部服务器错误.\n",
            "Contact ponytownhelp@gmail.com if you keep experiencing this error.\n": "如果你持续遇到此错误, 请联系 ponytownhelp@gmail.com\n",

            "This Pony Town server and the Pony Town ": "这个 Pony Town 服务器 和 Pony Town ",
            "main game ": "主游戏 ",
            "have separate accounts. You can import your ponies from the main game if you have an account on it.": "拥有独立的账户. 如果你在主游戏中有账户, 你可以从主游戏导入你的小马.",
            
            "Reminder: you can gift a supporter to other players. Check out this post for details and links explaining how Patreon gifts work: https://www.patreon.com/posts/you-can-now-gift-118154684": "提醒: 你可以将支持者赠送给其他玩家. 查看这篇帖子了解具体详情及解释 Patreon 礼物如何运作的链接: https://www.patreon.com/posts/you-can-now-gift-118154684",

            "{x} uses essential cookies to ensure the game's core functionality.": "{x} 使用必要的Cookies以确保游戏的核心功能.",
            'I\u00A0understand': "我明白",

            "Sprites loading": "精灵加载中",
            "Loading: start main file": "加载中: 启动主文件",
            "Done: start main file": "已完成: 启动主文件",
            "Loading: waiting for account": "加载中: 等待账户",
            "Done: waiting for account": "已完成: 等待账户",
            "Loading: start retry main file": "加载中: 开始重试主文件",
            "Done: start retry main file": "已完成: 开始重试主文件",
            "Loading: start re-retry main file": "加载中: 开始再次重试主文件",
            "Done: start re-retry main file": "已完成: 开始再次重试主文件",
            "Loading: start uncached file": "加载中: 启动未缓存文件",
            "Done: start uncached file": "已完成: 启动未缓存文件",
            "Loading: start fallback file": "加载中: 启动回退文件",
            "Done: start fallback file": "已完成: 启动回退文件",

            "Failed to create WebGL context": "创建WebGL上下文失败",
            "Failed to initialize WebGL": "初始化WebGL失败",
            "Access denied": "访问被拒绝",
            "Request limit reached, please wait and try again": "已达到请求限制, 请稍后再试",
            "Cannot access account": "无法访问账户",
            "Invalid account": "无效账户",
            "Server is offline": "服务器离线",
            "No connection": "无网络连接",
            "You need to revalidate your browser, reload to continue": "需要重新验证浏览器, 请刷新页面继续",
            "Invalid game version": "无效的游戏版本",
            "Account pending deletion": "账户待删除",
            "Higher supporter required": "需要更高等级的支持者权限",
            "Timed out": "操作超时",
            "Joining canceled": "加入已取消",
            "Account name cannot be empty": "账户名称不能为空",
            "Invalid account name": "无效的账户名称",
            "Invalid character name": "无效的角色名称",
            "Invalid date": "无效的日期",
            "Changes saved": "更改已保存",
            "Nothing changed": "更改无变化",
            "By playing on this server you confirm that you are over 18 years old and you take no issue\nwith seeing adult topics.": "通过游玩此服务器, 即表明你确认自己已年满18周岁,\n且对浏览成人主题内容无异议.",
            "Failed to load game assets (All sprites image loaders failed).\n": "加载游戏资源失败 (所有精灵图加载器均失败).\n",
            "Try reloading the page, and if it doesn't help try clearing page data.\n": "尝试重新加载页面, 如果无效, 尝试清除页面数据.\n",
            "No Internet connection with the server.\n": "无法与服务器建立网络连接.\n",
            "Make sure your Internet connection is working.": "请确保你的网络连接正常.\n",
            "Selected server is currently closed as there's no ongoing event, try again later.": "所选服务器当前已关闭, 因为没有正在进行的活动, 请稍后再试.",
            "Selected server is offline, try again later.": "所选服务器离线, 请稍后再试.",
            "Cannot connect to the server.": "无法连接到服务器.",
            "Cannot connect to the server.\n": "无法连接到服务器.\n",
            "You appear to be offline.": "你似乎处于离线状态.",
            "You appear to be offline.\n": "你似乎处于离线状态.\n",
            " Server is under heavy load. Retrying, please wait": " 服务器负载过重. 正在重试, 请稍候",
            " Cannot connect to the server. Retrying, please wait": " 无法连接到服务器. 正在重试, 请稍候",
            "Please check your internet connection.": "请检查你的网络连接.",
            "Failed to load game assets {x}.": "加载游戏资源 {x} 失败.",
            "Make sure you have the latest version installed.": "确保你安装了最新版本.",
            "Try reloading the page, and if it doesn't help try clearing ": "尝试重新加载页面, 如果没有帮助, 请尝试清除 ",
            "Your GPU is not recognized, the game may run slowly.\n": "你的 GPU 未被识别, 游戏可能会运行缓慢.\n",
            "Try reinstalling video driver.": "尝试重新安装显卡驱动.",
            "Your GPU doesn't run a native video driver, the game may run slowly.\nTo fix this install an appropriate video driver.": "你的 GPU 没有运行原生视频驱动程序, 游戏可能会运行缓慢.\n要解决此问题请安装合适的视频驱动程序.",
            "Your permissions have been updated.": "你的权限已更新.",
            "Your client version is outdated.": "你的客户端版本已过时.",
            "Your client version is outdated.\n": "你的客户端版本已过时.\n",
            " to be able to play.": "以继续游玩.",
            "Kicked for swearing, spamming or inappropriate language on a safe server": "因在安全服务器内谩骂或刷屏或言语不当, 您已被踢出", 

            "Left due to inactivity": "因不活跃而离开",
            "Left due to inactivity": "挂机时间过长, 已自动退出",
            "Left due to joining from another browser or tab": "您已从另一浏览器或标签页加入游戏",
            "Left due to game server restart": "由于服务器重启, 您已断开连接",
            "Left due to getting stuck": "因被困住而退出游戏",
            "Left due to losing connection to the server": "您与服务器的连接已丢失",
            "Left due to server error": "服务器端发生错误, 已强制断线",
            "Left due to unstable connection to the server": "与服务器的连接不稳定, 已自动断开连接",
            "Left due to triggering server action rate limits": "动作过于频繁, 触发服务器端速率限制, 已强制断线",
            
            "Invalid join token. Try refreshing the page.": "无效的加入令牌. 请尝试刷新页面.",
            "Join token has expired. Try joining again. If you continue getting the same error, try refreshing the page and checking your Internet connection. If you're using a VPN, try disabling it or switching to a different VPN provider.": "加入令牌已过期. 请重新尝试加入. 如果你继续收到相同的错误, 请尝试刷新页面并检查你的网络连接. 如果你正在使用 VPN, 请尝试禁用它或切换到其他 VPN 提供商.",
            "Too many reconnect attempts. Try checking your Internet connection.": "重连尝试次数过多. 请检查你的网络连接.",
            "Failed to establish socket connection. Try refreshing the page and check your Internet connection if that didn't help. If you're using a VPN, try disabling it or switching to a different VPN provider.": "无法建立套接字连接. 如果没有帮助, 请尝试刷新页面并检查你的网络连接. 如果你正在使用 VPN, 请尝试禁用它或切换到其他 VPN 提供商.",
            "Unexpected connection error ({x}). Try refreshing the page.": "意外的连接错误 ({x}). 请尝试刷新页面.",

            "Your browser is known to have issues running {x}.\n": "已知你的浏览器在运行 {x} 时存在问题.\n",
            "Try using a different browser for better experience.": "尝试使用不同的浏览器以获得更好的体验.",
            "You're no longer signed-in.": "你已不在登录状态.",
            "Please report this issue to the game's developers": "请将此问题报告给游戏开发者",
            "Cloudflare needs to check your browser.": "Cloudflare 需要检查你的浏览器.",
            "Failed to initialize local storage.": "初始化本地储存失败.",
            "Local changes will not be preserved.": "本地更改将不会被保留.",
            "Cannot connect to the server, reload the page to retry. Check your Internet connection if reloading didn't help": "无法连接到服务器, 请重新加载页面重试. 如果重新加载无效请检查你的网络连接",
            "Your browser is outdated, make sure you have the latest version installed.": "你的浏览器版本过旧, 请确保已安装最新版本.",
            "Try reloading the page. If that doesn't help, try restarting and updating your browser.": "尝试重新加载页面. 如果无效, 试着重启并更新你的浏览器.",

            "Try updating your browser and video driver.": "请尝试更新你的浏览器和显卡驱动程序.",
            "Hardware acceleration is disabled, the game will run slowly.\n": "硬件加速已禁用, 游戏将缓慢运行.\n",
            "Check": "检查",
            "our Help page": "我们的帮助页面",
            "to see a full list of possible solutions.": "了解所有可能的解决方案列表.",

            "Info": "信息",
            "sign-in": "登录",
            "sign in": "登录",
            "sign up": "注册",
            "Sign in": "登录",
            "Sign in or sign up": "登录或注册",
            "Sign in only": "仅登录",
            "Sign in or sign up with your social account": "使用你的社交账户登录或注册",
            "These socials can only be used to sign in to an existing Pony Town account.": "这些社交账号只能用于登录已有的 Pony Town 账户.",

            "Visit Pony Town main server!": "访问 Pony Town 主服务器!",
            "Follow us on Twitter!": "在 Twitter 上关注我们!",
            "Visit current event!": "访问当前 Event!",
            "Support us on Patreon!": "在 Patreon 上支持我们!",
            "Add ": "添加 ",
            " to desktop": " 到桌面",
            " to home screen": " 到屏幕",

            "Set your date of birth": "设置你的出生日期",
            "Please fill-in your ": "请填写你的 ",
            "date of birth": "出生日期",
            "Date is not selected": "未选择日期",
            " in order to not lose access to the game in future updates.": " 以免在未来更新中失去对游戏的访问权限.",
            
            "Select server to play": "选择游戏服务器",
            "Select server to ": "选择服务器进行",
            "No available servers": "无可用服务器",

            "Adult topics are allowed": "允许成人话题",
            "No swearing or adult topics are allowed": "不允许使用脏话或讨论成人话题",

            "Be kind to others": "善待他人",
            "Don't spam": "不要发送垃圾消息",
            "Don't create more than one account": "不要创建多个帐户",
            "Don't use hacks, scripts, macros or autoclickers": "不要使用黑客程序, 脚本, 宏或自动点击器",
            "Don't encourage behaviour violating the rules": "不要鼓励违反规则的行为",
            "Violation of the rules may result in temporary or permanent ban": "违反规则可能导致暂时或永久封禁",

            "For more details about the rules, see our ": "有关规则的更多详情, 请参阅我们的 ",
            "Help page": "帮助页面",
            "This game is a ": "这款游戏仍在 ",
            "work in progress": "开发中",
            ". There might be bugs and occasional downtimes.": ". 可能会存在一些漏洞, 并且偶尔会出现停机的情况.",

            "Join Pony Town Team": "加入 Pony Town 团队",
            "Are you a talented programmer, pixel artist, UI/UX or game designer and want to join our project as a full-time or part-time developer?": "你是一名有才华的程序员, 像素艺术家, UI/UX 或游戏设计师并希望作为全职或兼职开发者加入我们的项目吗?",
            "Send us your resume": "请将你的简历发送给我们",
            " with portfolio and we'll get back to you if your skills fit well.\n": " 请附上作品集, 如果你的技能合适, 我们会与你联系.\n",
            "Apply now": "立即申请",

            "version ": "版本 ",
            "changelog": "更新日志",
            "Changelog": "更新日志",
            
            "Welcome to {value}!": "欢迎来到 {value}!",
            "Here's the list of changes:": "以下是更改列表:",
            "See the ": "查看 ",
            "about page": "关于页面",
            " for the full changelog.": " 以获取完整的更新日志",

            "jobs": "工作",
            "privacy policy": "隐私政策",
            "terms of service": "服务条款",
            
            "Help": "帮助",
            "Common Issues": "常见问题",
            "Common issues": "常见问题",

            "App view mode": "应用视图模式",
            "The game is in Fullscreen mode by default.": "游戏默认处于全屏模式.",
            "You can change this in the Display settings under\n": "你可以在显示设置中更改此项\n",
            "Settings -> Display -> View mode": "设置 -> 显示 -> 视图模式",

            "Mouse and keyboard controls": "鼠标和键盘控制",
            "You can change these in the keybindings settings under\n": "你可以在按键绑定设置中更改此项\n",
            "Settings -> Keybinds": "设置 -> 按键绑定",

            "Touch controls": "触摸控制",

            "movement": "移动",
            "chat": "聊天",
            "selection": "选择",
            "player selection": "玩家选择",
            "expression": "表情",
            " - use ": " - 用 ",
            "Use\n": "使用 ",
            "Use ": "使用 ",
            "use ": "使用 ",
            "\nUse ": "使用 ",
            "Use keys ": "使用按键 ",
            "\nHold ": "按住 ",
            "Hold ": "按住 ",
            "hold ": "按住 ",
            " - Hold	": " - 按住	",
            "Click using ": "点击使用 ",
            "\nClick using ": "点击使用 ",
            "touch and drag": "触摸并拖动",
            "two finger tap": "双指轻触",
            " to move.": " 进行移动.",
            " to move.\n": " 进行移动.\n",
            "\nor\n": "\n或\n",
            "or": "或",
            " or ": " 或 ",
            " and ": " 和 ",
            " with ": " 与 ",
            " to walk slowly.": " 来慢慢走.",
            " to open chat box or submit its message.\n": " 打开聊天框或发送消息.\n",
            " to cancel sending a message and close chat box.\n": " 取消发送消息并关闭聊天窗口.\n",
            " to open emoji picker when chat box is open.": " 在聊天框打开时打开 emoji 选择器.",
            " on another player to open their profile.\n": " 以打开其他玩家的资料.\n",
            " on another player to open their context menu.": " 以打开其他玩家的交互菜单.",
            " to change eye direction.\n": " 改变眼睛的方向.\n",
            " to toggle tears.\n": " 开关泪花.\n",
            " to toggle crying.\n": " 开关哭泣.\n",
            " to toggle sleeping.\n": " 开关睡觉.\n",
            " to toggle blush.\n": " 开关脸红.\n",
            " to toggle hearts.\n": " 开关爱心.\n",
            " to toggle shocked eyes.\n": " 开关震惊眼神.\n",
            " to blink.": " 眨眼.",
            " to be able to click on ground and items behind other players": " 能够点击地面和其他玩家身后的物品",
            ' or "Boop" action': ' 或 "Boop" 动作',
            "interact": "交互",
            "use item": "使用物品",
            ' or "Use item / Interact" action{n}': ' 或 "Use item / Interact" 动作{n}',
            ' or "Stand up / Fly up" action{n}': ' 或 "Stand up / Fly up" 动作{n}',
            ' or "Sit down / Land" action{n}': ' 或 "Sit down / Land" 动作{n}',
            ' or "Turn head" action{n}': ' 或 "Turn head" 动作{n}',
            ' - "Use item / Interact" action{n}': ' - "Use item / Interact" 动作{n}',
            ' - "Stand up / Fly up" action{n}': ' - "Stand up / Fly up" 动作{n}',
            ' - "Sit down / Land" action{n}': ' - "Sit down / Land" 动作{n}',
            ' - "Turn head" action{n}': ' - "Turn head" 动作{n}',
            ' - tap on another player to select them.': ' - 轻触其他玩家以选择他们.',
            'zoom in / out': '视野放大 / 缩小',
            "center camera on player": "摄像机居中玩家",
            "open character editor": "打开角色编辑",
            "undo map edit": "撤销地图编辑",
            "redo map edit": "重做地图编辑",
            "toggle chat box": "开关聊天框",
            "toggle sleeping": "开关睡觉",
            "toggle floor (shovel) tool": "切换地面 (铲子) 工具",
            "toggle place (hammer) tool - ": "切换放置 (锤子) 工具 - ",
            " to clone objects.\n": "以克隆物体.\n",
            " to move objects.": " 以移动物体.",
            "toggle remove (broom) tool": "切换移除 (扫帚) 工具",
            "toggle between move (crowbar) and clone (wand) tool": "切换移动 (撬棍) 和克隆 (魔杖) 工具",
            "toggle walls (saw) tool": "切换墙体 (锯子) 工具",
            "toggle rotate (wrench) tool": "切换旋转 (扳手) 工具",
            "switch tool": "切换工具",
            " and use Mouse wheel": " 和使用鼠标滚轮",
            "hide all chats": " 隐藏所有聊天",
            "see through obstacles": "透视障碍物",
            "enable/disable showing game UI": "启用/禁用 显示游戏UI",
            "switch walls between short and tall mode": "在短墙和高墙模式之间切换",
            "enable/disable double click to look": "启用/禁用 双击改变视线",
            "fullscreen": "全屏",
            "Fullscreen": "全屏",
            "No status bar": "无状态栏",
            "Normal": "普通",
            
            "Gamepad controls": "游戏手柄控制",
            "move": "移动",
            "eye direction": "眼睛方向",
            "turn head": "转头",
            "toggle magic": "开关魔法",
            "sit up": "坐起来",
            "stand up": "站起来",
            "fly up": "飞起来",
            "land": "降落",
            "sit down": "坐下",
            "lie down": "趴下",
            "eat": "吃",
            "nom": "咀嚼",
            "zoom out": "视野缩小",
            "zoom in": "视野放大",

            "Chat expressions": "聊天表情",
            "Change your pony facial expression when sending messages:": "发送消息时更改你的小马表情:",
            "type any emote in the chat ": "在聊天中输入任何表情 ",
            "end your message with an emote ": "在你的消息末尾加一个表情 ",
            "change expression ": "更改表情 ",
            "without saying": "无需发言",
            " anything, by writing the emote as a chat command ": " 只需将表情作为聊天指令输入 ",
            "make the expression permanent using ": "使表情永久化可以使用 ",
            " command and use ": " 命令和使用 ",
            " to get your default expression back": " 恢复你的默认表情",
            "use both horizontal and vertical emotes: ": "同时使用水平和垂直表情符号: ",
            "use emotes with blushies like ": "使用带有害羞表情的表情符号, 比如 ",

            "Chat commands": "聊天命令",
            "Command arguments:": "命令参数:",
            "{x} - required argument": "{x} - 必填参数",
            "{x} - optional argument": "{x} - 可选参数",
            "{x} - splits potential command arguments, ": "{x} - 分割潜在的命令参数, ",
            " means you can provide either hours and minutes ": " 意味着你可以提供 hours 和 minutes ",
            ", or auto ": ", 或 auto ",
            "Using commands:": "使用命令:",
            " has an optional ": " 有一个可选的 ",
            " argument. You can use ": " 参数. 你可以使用 ",
            " to drop currently held item, and you can also use ": " 丢弃当前持有物品, 并且你也可以使用 ",
            " to drop while making a temporary facial expression.": " 丢弃物品并做临时面部表情.",
            "Following chat commands are available in the game chat:": "游戏聊天中可用的聊天指令如下:",
            "{x} - list all available commands{n}": "{x} - 列出所有可用命令{n}",
            "{x} - randomize a number{n}": "{x} - 随机生成一个数字{n}",
            " to roll a number between 1 and 10": " 掷出一个介于1到10之间的数字",
            " to roll a number between 5 and 10": " 掷出一个介于5到10之间的数字",
            " to roll two 6-sided dice": " 掷出两颗六面骰",
            " to roll two 6-sided dice and add 10 to the result": " 掷出两颗六面骰并在结果上加10",
            " to roll two 6-sided dice and add a name to the result": " 掷出两颗六面骰并将一个名字加到结果上",
            "{x} - show time spent in game since 3rd October 2020": "{x} - 显示自2020年10月3日以来在游戏中游玩的时间",
            "{x} - show time spent in game since 3rd October 2020, formatted by days": "{x} - 显示自2020年10月3日以来在游戏中游玩的时间, 以天为单位显示",
            "{x} - show account creation date{n}": "{x} - 显示账户创建日期{n}",
            "{x} - show how many gifts you have": "{x} - 显示你有多少圣诞节礼物",
            "{x} - show how many candies you have": "{x} - 显示你有多少万圣节糖果",
            "{x} - show how many eggs you have": "{x} - 显示你有多少复活节彩蛋",
            "{x} - show how many clovers you have": "{x} - 显示你有多少四叶草",
            "{x} - show how many pearls you have": "{x} - 显示你有多少珍珠",
            "{x} - show number of collected toys": "{x} - 显示收集的玩具数量",

            "{x} - say in public chat (can be used to switch from party chat){n}": "{x} - 在公共聊天中说话 (可用于从派对聊天切换){n}",
            "{x} - say in party chat{n}": "{x} - 在派对聊天中说话{n}",
            "{x} - say in thinking bubble{n}": "{x} - 在思考泡泡中说话{n}",
            "{x} - whisper to player (you can also click on player name in chatlog){n}": "{x} - 对玩家私聊 (你也可以在聊天日志中点击玩家名字){n}",
            "{x} - reply to last incoming whisper{n}": "{x} - 回复最后收到的私聊{n}",
            "{x} - set permanent expression, no arguments to reset expression{n}": "{x} - 设置永久表情, 无参数时重置表情{n}",
            "{x} - send shrug text message to current chat ¯\\_(ツ)_/¯": "{x} - 向当前聊天发送耸肩文本消息 ¯\\_(ツ)_/¯",
            "{x} - clear all chat log messages": "{x} - 清除所有聊天日志消息",
            "{x} - clear general chat log messages": "{x} - 清除公共聊天日志消息",
            "{x} - clear party chat log messages": "{x} - 清除派对聊天日志消息",
            "{x} - clear whisper chat log messages": "{x} - 清除私聊日志消息",
            "{x} - turn head{n}": "{x} - 转头{n}",
            "{x} - boop action{n}": "{x} - 挥蹄{n}",
            "{x} - drop held item, even if the item is locked{n}": "{x} - 丢弃持有物品, 即使物品已锁定{n}",
            "{x} - drop held toy{n}": "{x} - 丢弃持有玩具{n}",
            "{x} - drop held dish, pan, or stick, even if the item is locked, keeping the food if any{n}": "{x} - 丢弃持有的盘子, 锅或木棍, 即使物品已锁定, 如有食物则保留{n}",
            "{x} - drop held dish or stick, even if the item is locked, keeping the food if any{n}": "{x} - 丢弃持有的盘子或木棍, 即使物品已锁定, 如有食物则保留{n}",
            "{x} - drop held food on a dish or stick, even if the item is locked, keeping the dish or stick{n}": "{x} - 丢弃持有的盘子或木棍上的食物, 即使物品已锁定, 保留盘子或木棍{n}",
            "{x} - eat held item": "{x} - 吃掉持有物品",
            "{x} - locks held item to prevent losing it or accidentally picking up another item{n}": "{x} - 锁定持有物品以防止丢失或意外拾取其他物品{n}",
            "{x} - unlocks held item{n}": "{x} - 解锁持有物品{n}",
            "{x} - open gift{n}": "{x} - 打开礼物{n}",
            "{x} - sit down or stand up": "{x} - 坐下或站起来",
            "{x} - lie down or sit up{n}": "{x} - 趴下或坐起来{n}",
            "{x} - stand up": "{x} - 站起来",
            "{x} - fly up or fly down": "{x} - 飞起来或降落",
            "{x} - nom on held item{n}": "{x} - 咀嚼持有物品{n}",
            "{x} - pull mask down or up": "{x} - 拉下或拉上面罩",
            "{x} - magic action": "{x} - 魔法",
            "{x} - toggle held light on and off": "{x} - 开关持有光源",
            "{x} - show friend limits": "{x} - 显示好友上限",
            "{x} - show party member limits for the current leader": "{x} - 显示当前队长的派对成员限制",
            "{x} - leave the game": "{x} - 离开游戏",
            "{x} - swap to a character": "{x} - 切换至一个角色{n}",
            "{x} - sends a notification to online party members": "{x} - 向在线派对成员发送通知",
            "{x} - sends a notification to online party members{n}": "{x} - 向在线派对成员发送通知{n}",
            "{x} - join party using party link": "{x} - 使用派对链接加入派对",
            "{x} - lock leader to prevent it from changing when current leader goes offline": "{x} - 锁定队长, 防止当前派对队长离线时派对队长变更",
            "{x} - unlock leader to allow it to change when current leader goes offline": "{x} - 解锁队长, 允许当前派对队长离线时变更派对队长",
            "{x} - hold toy, number of a collectable toy or 0 to drop current toy": "{x} - 持有玩具, 输入可收集玩具的编号, 或输入0以丢弃当前玩具",
            "{x} - respawn at spawn point": "{x} - 在出生点重生",
            "{x} - display amount of players on the current server{n}": "{x} - 显示当前服务器上的玩家数量{n}",
            "{x} - toggles sprinting{n}": "{x} - 开关疾跑{n}",
            
            "Emotes and expressions": "表情和动作",
            "{x} - happy expression{n}": "{x} - 开心表情{n}",
            "{x} - frowning expression{n}": "{x} - 皱眉表情{n}",
            "{x} - angry expression{n}": "{x} - 生气表情{n}",
            "{x} - sad expression{n}": "{x} - 悲伤表情{n}",
            "{x} - thinking expression{n}": "{x} - 思考表情{n}",
            "{x} - toggle shocked eyes{n}": "{x} - 开关震惊眼神{n}",
            "{x} - toggles blinking{n}": "{x} - 开关眨眼状态{n}",
            "{x} - blink action{n}": "{x} - 眨眼动作{n}",
            "{x} - blush action{n}": "{x} - 脸红动作{n}",
            "{x} - love action{n}": "{x} - 爱心动作{n}",
            "{x} - sleep action{n}": "{x} - 睡觉动作{n}",
            "{x} - cry action{n}": "{x} - 哭泣动作{n}",
            "{x} - tears action{n}": "{x} - 流泪动作{n}",
            "{x} - yawn action{n}": "{x} - 打哈欠动作{n}",
            "{x} - laugh action{n}": "{x} - 大笑动作{n}",
            "{x} - giggle action{n}": "{x} - 咯咯笑动作{n}",
            "{x} - annoyed eyeroll action{n}": "{x} - 厌烦地翻白眼动作{n}",
            "{x} - nod action while keeping eyes open{n}": "{x} - 睁眼点头动作{n}",
            "{x} - double nod action while keeping eyes open{n}": "{x} - 睁眼双重点头动作{n}",
            "{x} - head shake action while keeping eyes open{n}": "{x} - 睁眼摇头动作{n}",
            "{x} - nod action{n}": "{x} - 点头动作{n}",
            "{x} - double nod action{n}": "{x} - 双重点头动作{n}",
            "{x} - head shake action{n}": "{x} - 摇头动作{n}",
            "{x} - smiling head shake action{n}": "{x} - 微笑摇头动作{n}",
            "{x} - happy wink action{n}": "{x} - 开心眨眼动作{n}",
            "{x} - cheeky wink action{n}": "{x} - 调皮眨眼动作{n}",
            "{x} - silly wink action{n}": "{x} - 吐舌眨眼动作{n}",
            "{x} - sneeze action{n}": "{x} - 打喷嚏动作{n}",
            "{x} - kiss action{n}": "{x} - 亲吻动作{n}",

            "Map editing": "地图编辑",
            "{x} - save current map to specified slot": "{x} - 将当前地图保存到指定槽位",
            "{x} - load saved map from specified slot": "{x} - 从指定槽位加载已保存的地图",
            "{x} - reset map to original state": "{x} - 将地图重置为原始状态",
            "{x} - make map empty": "{x} - 清空地图",
            "{x} - enter season name to change map season or auto to set it to match world": "{x} - 输入季节名称以更改地图季节或输入 auto 使其与世界季节匹配",
            "{x} - set map time": "{x} - 设置地图时间",
            "{x} - pause map time": "{x} - 暂停地图时间",
            "{x} - unpause map time": "{x} - 取消暂停地图时间",
            "{x} - prevent other players from editing map": "{x} - 防止其他玩家编辑地图",
            "{x} - allow other players to edit the map": "{x} - 允许其他玩家编辑地图",
            "{x} - prevent other players from placing or picking held items on the map": "{x} - 防止其他玩家在地图上放置或拾取持有的物品",
            "{x} - allow other players to place and pick up held items on the map": "{x} - 允许其他玩家在地图上放置和拾取持有的物品",
            "{x} - prevent other players from changing map": "{x} - 防止其他玩家更改地图",
            "{x} - allow other players to change map": "{x} - 允许其他玩家更改地图",
            "{x} - lists all saved maps{n}": "{x} - 列出所有已保存的地图{n}",
            "{x} - show saved map limits": "{x} - 显示已保存地图的限制",
            "{x} - show object limits for the current map": "{x} - 显示当前地图的物体限制",
            "{x} - show wall limits for the current map": "{x} - 显示当前地图的墙体限制",

            "Supporter-only": "仅限支持者",
            "{x} - use supporter colored text": "{x} - 使用支持者彩色文本",
            "{x} - disable using supporter colored text{n}": "{x} - 禁用支持者彩色文本{n}",
            "{x} - use tier 1 supporter colored text{n}": "{x} - 使用1级支持者彩色文本{n}",
            "{x} - use tier 2 supporter colored text{n}": "{x} - 使用2级支持者彩色文本{n}",
            "{x} - use tier 3 supporter colored text{n}": "{x} - 使用3级支持者彩色文本{n}",
            "{x} - use tier 4 supporter colored text{n}": "{x} - 使用4级支持者彩色文本{n}",

            "Hardware acceleration is disabled": "硬件加速已禁用",
            "If you see this warning, your browser has hardware acceleration disabled. This will cause the game to stutter heavily and run much slower than it should.": "如果你看到此警告说明你的浏览器已禁用硬件加速. 这会导致游戏严重卡顿并且运行速度远低于正常水平.",
            "Try updating your browser. If your browser is up-to-date and hardware acceleration is enabled in your browser settings, but you still get the warning,\nit means your GPU and video driver configuration is not supported by your browser. In this case try updating your video driver.\nIf it didn't help, check the Internet to see if there are any other solutions.\n": "尝试更新你的浏览器. 如果你的浏览器已是最新版本并且浏览器设置中已启用硬件加速, 但仍然收到警告,\n这意味着你的 GPU 和视频驱动配置不被浏览器支持. 在这种情况下请尝试更新你的视频驱动.\n如果仍未解决问题, 请上网查看是否有其他解决方案.\n",
            "Page not loading or stuck updating": "页面无法加载或卡在更新中",
            "Try reloading and clearing your browser data.\nIf that doesn't help you should check if any of the extensions are causing the issue,\nyou can check that by using incognito mode of your browser.\n": "尝试重新加载并清除浏览器数据.\n如果仍然无法解决问题, 你应该检查是否有某些扩展程序导致了问题,\n你可以通过使用浏览器的隐身模式来进行检查.\n",
            "Mobile keyboard is covering the chat box when the game is installed on mobile device": "当游戏安装在手机上时手机键盘会遮住聊天框",
            "Try re-installing the game.\n": "尝试重新安装游戏.\n",
            "Graphical glitches, disappearing objects": "图形故障, 物体消失",
            "This is usually caused by outdated graphics drivers or browser.\nCheck if your browser is ": "这通常是由过时的图形驱动程序或浏览器引起的.\n检查你的浏览器是否是 ",
            "up to date": "最新的",
            " and check\nif there are new updates for your graphics driver or your device.": " 并检查你的图形驱动程序或设备是否有新更新.",
            "If your browser is already up to date, try installing different browser.\nWe recommend using ": "如果你的浏览器已经是最新版本, 请尝试安装其他浏览器.\n我们推荐使用 ",
            "Game slow or stuttering": "游戏卡顿或延迟",
            "This can be caused by outdated browser or some browser extensions.": "这可能是由浏览器过时或某些浏览器扩展引起的.",
            "Firefox is known to have issues with stuttering, we recommend\nusing ": "已知 Firefox 在播放时可能会出现卡顿, 我们建议\n使用 ",
            " for best performance.\n": " 以获得最佳性能.\n",
            "Why can't I create more than one account": "为什么我不能创建多个账户",
            "This restriction is in place to protect you and the game itself from other players in the game.": "此限制是为了保护你以及游戏本身免受游戏中其他玩家的影响.",
            "Allowing more than one account for single person invalidates ignore and hide systems that\nallow you to ignore and hide other players that are harassing or bothering you in any way.\nIt also invalidates mute and ban system that is in place to protect you from players breaking\nthe game rules to bother or harass others.": "允许一个人拥有多个账户会使忽略和隐藏系统失效,\n而这些系统可以让你忽略和隐藏那些以任何方式骚扰或打扰你的玩家.\n它还会使禁言和封禁系统失效, 而这些系统旨在保护你免受违反游戏规则和骚扰或打扰他人的玩家的影响",
            "Allowing use of more than one account at the same time would dramatically increase load on the\nserver and potentially make the game unplayable and laggy for everyone else. Increased amount\nof player characters in the game would also reduce rendering performance on slower computers,\nespecially on mobile devices to the point when a lot of players wouldn't be able to play the\ngame anymore.": "允许同时使用多个账户会大幅增加服务器负载, 可能导致游戏对其他玩家来说无法游玩或者很卡. 在游戏中玩家角色数量增加也会降低较慢电脑的渲染性能, 尤其是在移动设备上, 多到一定程度时很多玩家甚至可能无法再玩游戏.",
            "Use of more than one account also invalidates any limits (like character limit) that we put on the accounts.\nThe limits are in place to prevent large amount of players that we have at the moment from\nexhausting our limited server resources.\n": "使用多个账户也会使我们对账户设置的任何限制 (例如角色数量限制) 失效. 这些限制是为了防止我们目前大量的玩家耗尽我们有限的服务器资源.\n",
            "Why can't I modify the game with hacks or scripts": "为什么我不能使用修改程序或脚本来修改游戏",
            "Almost all third-party scripts used in-game were used to harass other players. Even when the\ncreator of the script did not intend it to be used in that way, the limited knowledge of the\ngame and security issues can lead to unintentionally creating a script that's harmful to other\nplayers in the game.": "几乎所有在游戏中使用的第三方脚本都用于骚扰其他玩家. 即使脚本的创建者并不打算这样使用, 由于对游戏的了解有限和安全问题, 也可能无意中创建出对其他玩家有害的脚本.",
            "Even in the case where the script doesn't seem to impact other players, it often causes performance\nissues for the server or other players. That forces us to work on putting more limits on player\ninteractions and takes development time away from adding new features to the game.": "即使在脚本似乎不会影响其他玩家的情况下, 它通常也会导致服务器或其他玩家的性能问题. 这迫使我们必须对玩家互动设置更多的限制, 从而减少了用于为游戏添加新功能的开发时间.",
            "Adding more limits on player interactions also makes the game less responsive and more limiting\nfor everyone, not only the players using scripts. This is especially bad for players on bad\ninternet connections where network issues can be misinterpreted as use of scripts or spam.\n": "对玩家互动增加更多限制也会使游戏对所有人来说反应更慢, 限制更多, 不仅仅是使用脚本的玩家. 这对网络连接不好的玩家尤其不利,\n因为网络问题可能会被误认为是使用脚本或刷屏.\n",
            "Why can't I use macros or autoclickers": "为什么我不能使用宏或自动点击器",
            "Macros and autoclickers are commonly used to gain an unfair advantage over players who don't\nuse them. They can also be used to bypass certain game features. These uses are not allowed.": "宏和自动点击器通常被用来获得相对于不使用它们的玩家的不公平优势. 它们也可以用来绕过某些游戏功能. 这些用途是不被允许的.",
            "Using macros and autoclickers strictly for accessibility reasons is allowed.\n": "仅出于辅助功能原因使用宏和自动点击器是允许的.\n",
            
            "About": "关于",
            "A game of ponies building a town\n": "一款小马建造一个小镇的游戏\n",
            "Contact": "联系",
            "Please see our ": "请查看我们的 ",
            " if you have questions or technical issues. ": " 如果你有任何问题或技术问题. ",
            "For everything else, send us an email at ": " 其他事项, 请给我们发送电子邮件至 ",

            "Support {x}": "支持 {x}",
            "If you'd like to help keep {x} running, and support future development of the project,	please consider ": " 如果你想帮助维持 {x} 的运行, 并支持项目的未来发展,	请考虑 ",
            "supporting us. You need to ": "支持我们. 你需要先 ",
            " first to start supporting.": " 才能开始支持.",
            "supporting us": "支持我们",
            "Patreon supporter rewards include:": "Patreon 支持者奖励包括:",
            "In-game supporter tag": "游戏内支持者标签",
            "Supporter chat color": "支持者聊天颜色",
            "More slots for ponies": "更多的小马槽位",
            "Supporter Discord chat access": "支持者 Discord 聊天权限",
            "And much more!": "以及更多!",
            "Note that in order to receive your rewards you need to connect your Patreon to your {x} account.": "请注意, 为了领取奖励, 你需要将 Patreon 账户与你的 {x} 账户关联.",
            "All of the game's music is composed by Wandering Artist.": "游戏中的所有音乐均由 Wandering Artist 创作.",

            "Listen to the music ": "听音乐在 ",
            "on Spotify": "Spotify 上",
            " or download it ": " 或下载自 ",
            "on Bandcamp": "Bandcamp 上",
            
            "Development team": "开发团队",
            "Main development": "主要开发",
            "Additional development": "额外开发",
            "Programmer": "程序员",
            "Artist": "美术",
            "Music Composer": "音乐作曲家",
            "Project Lead": "项目负责人",
            "Art & Design Lead": "美术 & 设计负责人",
            "Android Developer": "Android 开发者",

            "Quality Assurance team": "质量保证团队",
            "Main quality assurance": "主要质量保证",
            "Additional quality assurance": "额外的质量保证",
            "QA Lead": "QA 负责人",
            "QA Tester": "QA 测试员",
            "QA Helper": "QA 协助员",
            
            "Moderation team": "管理团队",
            "Main moderation": "主要管理",
            "Additional moderation helpers": "额外的管理协助员",
            "Admin": "管理员",
            "{x} Servers": "{x} 服务器",
            "In-game Moderator": "游戏内管理员",
            "Reporter": "举报审核员",
            "avatars by {x} and RJ": "头像由 {x} 和 RJ 提供",

            "Additional Contributors": "其他贡献者",
            "Programmers": "程序员",
            "Game designers": "游戏设计",
            "Artists": "美术",
            "Musicians": "音乐创作",
            "Map builders": "地图制作",
            "Former Moderators": "前管理员",
            "Former Testers": "前测试员",

            "Show all": "显示全部",
            
            "Promote to leader": "提升为队长",
            "You are party leader": "你是派对队长",
            "Notify party": "通知派对",
            "Rename party": "重命名派对",
            "Manage invite": "管理邀请",
            "Lock leader": "锁定队长",
            "Lock map editing": "锁定地图编辑",
            "Lock placing held": "锁定手持放置",
            "Use own map": "使用自己的地图",
            "Remove from party": "移出派对",
            "Hide offline members": "隐藏离线成员",
            "Hide party list": "隐藏派对列表",
            "Leave party": "离开派对",
            "Disband party": "解散派对",
            "Party leader": "派队队长",
            "Party permissions:": "派对权限",
            "Full permissions": "全部权限",
            "No permissions": "无权限",
            "Permissions:": "权限:",
            "Invite members": "邀请成员",
            "Remove members": "移除成员",
            "Send notifications": "发送通知",
            "Edit locked map": "编辑锁定地图",
            "Lock/unlock map": "锁定/解锁 地图",
            "Manage permissions": "管理权限",
            "All permissions": "所有权限",
            "Give all permissions": "授予所有权限",
            "Revoke all permissions": "撤销所有权限",
            "Give this player all permissions": "授予此玩家所有权限",
            "Revoke all permissions from this player": "撤销此玩家所有权限",
            "- Invite party members": "- 邀请派对成员",
            "- Send notifications": "- 发送邀请",
            "- Save maps": "- 保存地图",
            "- Load maps": "- 加载地图",
            "- Edit locked map": "- 编辑锁定地图",
            "- Lock/unlock map editing": "- 锁定/解锁 地图编辑",
            "All (you are party leader)": "全部 (你是队长)",
            "You don't have permission to send notifications": "你没有权限发送通知",
            "You don't have permission to rename party": "你没有权限重命名派队",
            "You don't have permission to manage invite": "你没有权限管理邀请",
            "You don't have permission to lock/unlock map editing": "你没有权限 锁定/解锁 地图编辑",
            "Locking party leader prevents automatically changing leader when current leader goes offline": "锁定派队队长可防止在当前派队队长离线时自动更换派队队长",
            "Only leader can lock party leader": "只有派队队长可以锁定派队队长",
            "Locking map editing prevents players from building without permission": "锁定地图编辑可以防止玩家在未经允许的情况下建造",
            "Locking placing held items prevents players from placing or picking up held items": "锁定手持放置物品可以防止玩家放置或拾取手持物品",
            "Party leader always uses own map": "派对队长永远使用自己的地图",
            "Use own party map instead of leader's when on the island": "进入派对岛时使用自己的派对地图而不是队长的",
            "You can't remove party leader from party": "你不能派对队长从派对中移除",
            "You need to be party leader to disband the party": "你需要成为派对队长才能解散派对",
            "Name and description are visible to other party members.": "名称和描述对其他派对成员可见.",
            "Notification text": "通知文本",
            "Notification sent to all online members.": "通知会发送给所有在线成员.",
            "Manage party invite": "管理派对邀请",
            "Manage party invite link": "管理派对邀请链接",
            "Delete invite": "删除邀请",
            "Share this invite link to allow other players join the party at any time. Players hidden by the current leader will be unable to use this invite link.": "分享此邀请链接以允许其他玩家随时加入派对. 当前队长隐藏的玩家将无法使用此邀请链接.",
            "Party invite does not exist": "派对邀请不存在.",
            "Share this code to allow other players join the party at any time. Players hidden by the current leader will be unable to use this code.": "分享此代码以允许其他玩家随时加入派对. 被当前队长隐藏的玩家将无法使用此代码.",
            "Confirm deleting invite": "确认删除邀请",
            "Are you sure you want to delete the current invite? The current code will no longer be valid even if you create a new invite.": "你确定要删除当前的邀请吗? 即使你创建新的邀请当前的代码也将不再有效.",
            "Expires in": "到期时间",
            "Expires:": "到期时限:",
            "Join limit:": "加入时限:",
            "Joined times:": "加入次数:",
            "Code:": "邀请代码:",
            "Confirm leave": "确认离开",
            "Copy invite code to clipboard": "将邀请代码复制到剪贴板",
            'Confirm disbanding party "\uFEFF': '确认解散派对 "\uFEFF',
            "This action cannot be reversed.": "此操作无法撤销.",
            "Are you sure you want to disband the whole party?": "你确定要解散整个派对吗?",

            "15 min": "15分钟",
            "30 minutes": "30分钟",
            "30 minutes 1 second": "30分钟1秒",
            "{m} minutes {s} second": "{m} 分钟 {s} 秒",
            "3 hours": "3 小时",
            "12 hours": "12 小时",
            "24 h": "24时",
            "{value} hours": "{value} 小时",
            "1 day": "1 天",
            "7 days": "7 天",
            "30 days": "30 天",
            "{value} day": "{value} 天",
            "Permanent": "永久",
            
            "{x}a few seconds ago": "{x}几秒前",
            "{x}a few secs ago": "{x}几秒前",
            "{x}20 seconds ago": "{x}20 秒前",
            "{x}20 secs ago": "{x}20 秒前",
            "{x}30 seconds ago": "{x}30 秒前",
            "{x}30 secs ago": "{x}30 秒前",
            "{x}45 seconds ago": "{x}45 秒前",
            "{x}45 secs ago": "{x}45 秒前",

            "a minute ago{x}": "1 分钟前{x}",
            "a min ago{x}": "1 分钟前{x}",
            "{value} a minute ago{x}": "{value} 1 分钟前{x}",
            "{value} a min ago{x}": "{value} 1 分钟前{x}",
            "{value} minutes ago{x}": "{value} 分钟前{x}",
            "{value} mins ago{x}": "{value} 分钟前{x}",

            "an hour ago{x}": "1 小时前{x}",
            "an hr ago{x}": "1 小时前{x}",
            "{value} an hour ago{x}": "{value} 1 小时前{x}",
            "{value} an hr ago{x}": "{value} 1 小时前{x}",
            "{value} hours ago{x}": "{value} 小时前{x}",
            "{value} hrs ago{x}": "{value} 小时前{x}",

            "a day ago{x}": "1 天前{x}",
            "{value} day ago{x}": "{value} 天前{x}",
            "{value} days ago{x}": "{value} 天前{x}",

            "a month ago{x}": "1 月前{x}",
            "{value} month ago{x}": "{value} 月前{x}",
            "{value} months ago{x}": "{value} 月前{x}",

            "a year ago{x}": "1 年前{x}",
            "a yr ago{x}": "1 年前{x}",
            "{value} year ago{x}": "{value} 年前{x}",
            "{value} yr ago{x}": "{value} 年前{x}",
            "{value} years ago{x}": "{value} 年前{x}",
            "{value} yrs ago{x}": "{value} 年前{x}",

            "{value} minutes and {valuex} seconds ago": "{value} 分钟 {valuex} 秒前",
            "{value} mins and {valuex} secs ago": "{value} 分钟 {valuex} 秒前",
            "{value} hours and {valuex} minutes ago": "{value} 小时 {valuex} 分钟前",
            "{value} hrs and {valuex} mins ago": "{value} 小时 {valuex} 分钟前",
            "{value} days and {valuex} hours ago": "{value} 天 {valuex} 小时前",
            "{value} months and {valuex} days ago": "{value} 月 {valuex} 天前",
            "{value} months and {valuex} weeks ago": "{value} 月 {valuex} 周前",
            "{value} years and {valuex} months ago": "{value} 年 {valuex} 月前",
            "{value} yrs and {valuex} months ago": "{value} 年 {valuex} 月前",

            "{x}in a few seconds": "{x}几秒后",
            "{x}in a few secs": "{x}几秒后",
            "{x}in 20 seconds": "{x}20 秒后",
            "{x}in 20 secs": "{x}20 秒后",
            "{x}in a minute": "{x}1 分钟后",
            "{x}in a min": "{x}1 分钟后",
            "{x}in an hour": "{x}1 小时后",
            "{x}in an hr": "{x}1 小时后",
            "{x}in a day": "{x}1 天后",
            "{x}in a month": "{x}1 月后",
            "{x}in a year": "{x}1 年后",
            "{x}in a yr": "{x}1 年后",
            "{x}in {value} minutes": "{x}{value} 分钟后",
            "{x}in {value} mins": "{x}{value} 分钟后",
            "{x}in {value} hours": "{x}{value} 小时后",
            "{x}in {value} hrs": "{x}{value} 小时后",
            "{x}in {value} days": "{x}{value} 天后",
            "{x}in {value} months": "{x}{value} 月后",
            "{x}in {value} years": "{x}{value} 年后",
            "{x}in {value} yrs": "{x}{value} 年后",
            "{x}in {value} hours and {valuex} minutes": "{x}{value} 小时 {valuex} 分钟后",
            "{x}in {value} hrs and {valuex} mins": "{x}{value} 小时 {valuex} 分钟后",
            "unblock": "解除屏蔽",
            "Unblock": "解除屏蔽",
            "Unblock player": "解除屏蔽玩家",
            "Block": "屏蔽",
            'Block\u00A0': '屏蔽\u00A0',
            "blocked requests": "屏蔽请求",
            "expires": "到期",
            "Timeout": "时长",
            "Note ": "备注 ",
            "Block requests": "屏蔽请求",
            "Block type": "屏蔽类型",
            "Block chat": "屏蔽聊天",
            "Hide fully": "完全隐藏",
            "fully hidden": "完全隐藏",
            
            "Change block type": "更改屏蔽类型",
            "Edit note": "编辑备注",
            "Cancel editing note": "取消编辑备注",
            "Confirm editing note": "确认编辑备注",
            "Cancel unhiding player": "取消解除玩家屏蔽",
            "Confirm unhiding player": "确认解除玩家屏蔽",
            
            "Prevents the player from sending requests.": "阻止玩家发送请求.",
            "Hides chat messages of the player and blocks their requests.": "隐藏玩家的聊天消息并阻止其请求.",
            "Hides the player and hides you from their screen as well.": "隐藏玩家并且也让你从他们的屏幕上消失.",
            "You can manage blocked players from your account settings.\n": "你可以在账户设置中管理被屏蔽的玩家.\n",
            "The note is only visible to you.": "这个备注只有你自己能看到",
            
            "Block change error": "屏蔽更改出错",
            "Failed to change player block type": "无法更改玩家屏蔽类型",
            "Player block does not exist, try refreshing the page": "玩家屏蔽不存在, 请尝试刷新页面",

            "Removing temporary blocked players": "移除临时屏蔽的玩家",
            "Are you sure you want to remove all temporary blocked players? This action cannot be undone.": "你确定要移除所有临时屏蔽的玩家吗? 此操作无法撤销.",
            "Removing all blocked players": "移除所有屏蔽的玩家",
            "Are you sure you want to remove all blocked players? This action cannot be undone.": "你确定要移除所有屏蔽的玩家吗? 此操作无法撤销.",

            "{value} tiles": "{value} 图块",
            "Action {value}": "动作 {value}",
            "Layer {value}": "图层 {value}",
            "Color {value}": "颜色 {value}",
            "Zoom {value}x": "缩放 {value}x",
            "{current} / {max} slots": "{current} / {max} 槽位",
            "Used slots: {current} / {max}": "已用槽位: {current} / {max}",
            "Search ({current} / {max} ponies)": "搜索 ({current} / {max} 小马)",
            "Search ({current} / {max} plushies)": "搜索 ({current} / {max} 玩偶)",
            "Search ({current} / {max} friends)": "搜索 ({current} / {max} 好友)",
            "Search ({current} / {max})": "搜索 ({current} / {max})",
            'Your character "{value}" has unsaved changes.': '你的角色 "{value}" 有未保存的更改.',
            'Your character "{value}': '你的角色 "{value}',
            '" has unsaved changes.': '" 有未保存的更改.',
            "The character {value} has been modified.\nDo you want to save your changes or discard them?": "角色 {value} 已被修改. \n你想保存更改还是丢弃它们?",
            "This binding conflicts with\n{value}": "与此绑定冲突\n{value}",
            "Editing {value} plush": "编辑 {value} 玩偶",
            
            "Are you sure you want to delete all ponies in this list?": "你确定要删除此列表中的所有小马吗?",
            "Are you sure you want to move this pony to the recycle bin?": "你确定要将这匹小马移动到回收站吗?",
            "Are you sure you want to move this pony to the recycle bin?\nThe recycle bin is full, this action will remove one of the ponies already in it.": "你确定要将这匹小马移动到回收站吗?\n回收站已满, 此操作将移除其中一只已存在的小马.",
            "Are you sure you want to delete {value} ponies from the recycle bin?": "你确定要从回收站删除这 {value} 匹小马吗?",
            "Are you sure you want to move {value} ponies to the recycle bin?": "你确定要将这 {value} 匹小马移动到回收站吗?",
            "Are you sure you want to move {value} pony to the recycle bin?": "你确定要将这 {value} 匹小马移动到回收站吗?",

            "Are you sure you want to move {vaule} ponies to the recycle bin?\nDue to the recycle bin limit, {vaule} ponies will be deleted permanently and {vaule} will be moved to the recycle bin.\nThe recycle bin will be filled and {value} pony will be deleted from within it.": "你确定要将这 {value} 匹小马移动到回收站吗?\n由于回收站容量限制, {vaule} 匹小马将被永久删除, {vaule} 匹将被移动到回收站.\n回收站将被填满并且其中的 {value} 匹小马将被删除.",
            "Are you sure you want to move {vaule} ponies to the recycle bin?\nDue to the recycle bin limit, {vaule} ponies will be deleted permanently and {vaule} will be moved to the recycle bin.": "你确定要将这 {value} 匹小马移动到回收站吗?\n由于回收站容量限制, {vaule} 匹小马将被永久删除, {vaule} 匹将被移动到回收站.",

            "Offline": "离线",
            "Online": "在线",
            "Looking for chat": "寻找聊天",
            "Highlight looking for chat": "高亮寻找聊天",
            "Looking for roleplay": "寻找角色扮演",
            "Highlight looking for roleplay": "高亮寻找角色扮演",
            "stand": "站立",
            "trot": "小跑",
            "boop": "挥蹄",
            "kiss": "亲吻",
            "kiss lift hoof": "抬蹄亲吻",
            "sit": "坐下",
            "boop sit": "坐下挥蹄",
            "kiss sit": "坐下亲吻",
            "lie": "趴下",
            "boop lie": "趴下挥蹄",
            "kiss lie": "趴下亲吻",
            "fly": "飞",
            "boop fly": "飞行挥蹄",
            "kiss fly": "飞行亲吻",
            "sneeze": "打喷嚏",
            "yawn": "打哈欠",
            "laugh": "大笑",
            "giggle": "咯咯笑",
            "annoyed": "厌烦",
            "nod": "点头",
            "nod with closed eyes": "闭眼点头",
            "double nod": "双重点头",
            "double nod with closed eyes": "闭眼双重点头",
            "head shake": "摇头",
            "head shake with closed eyes": "闭眼摇头",
            "happy wink": "开心眨眼",
            "cheeky wink": "调皮眨眼",
            "silly wink": "吐舌眨眼",
            "Reset value": "重置值",
            "Rejoined": "重新加入",
            "Continue": "继续",
            "Confirm": "确认",
            "Cancel": "取消",
            "Disband": "解散",
            "Revert": "还原",
            "Search": "搜索",
            "Shadow": "阴影",
            "Color": "颜色",
            "Notify": "通知",
            "Options": "选项",
            "Other": "其他",
            "Leave": "离开",
            "Zoom": "缩放",
            "Reset": "重置",
            "Unpin": "解除",
            "Edit": "编辑",
            "Away": "离开",
            "Busy": "忙碌",
            "In menu": "在菜单中",
            "Close": "关闭",
            "Manage": "管理",
            "Discard": "丢弃",
            "Dismiss": "关闭",
            "Restore": "恢复",
            "Delete": "删除",
            "Remove": "删除",
            "Create": "创建",
            "Paste": "粘贴",
            "Hide": "隐藏",
            "Copy": "复制",
            "Save": "保存",
            "Load": "加载",
            "Join": "加入",
            "Play": "游玩",
            "play": "游玩",
            "New": "新建",
            "OK": "确定",
            "Ok": "确定",
            "No": "不",
            "NO": "不",
            "None": "无",
            "Redeem ": "兑换 ",
            "(can't fly)": "(不能飞)",
            "(current)": "(当前)",
            "(optional)": "(可选)",
            "[empty]": "[空]",
            "Items": "部件",
            "Extra": "扩展",
            "Hooves": "蹄子",
            "Wings": "翅膀",
            "Body": "身体",
            "Mane": "鬃毛",
            "Tail": "尾巴",
            "Face": "面部",
            "Ears": "耳朵",
            "items": "部件",
            "extra": "扩展",
            "body": "身体",
            "mane": "鬃毛",
            "tail": "尾巴",
            "face": "面部",
            "head": "头部",
            "neck": "颈部",
            "chest": "胸部",
            "back": "背部",
            "legs": "腿部",
            "waist": "腰部",
            "code": "代码",
            "edit": "编辑",
            "new": "新建"
        };

        const dynamicTranslationCache = new Map();

        function translateDynamicString(text) {
            if (dynamicTranslationCache.has(text)) {
                return dynamicTranslationCache.get(text);
            }

            for (const [key, template] of Object.entries(translationMap_ZH)) {
                if (!/\{.*?\}/.test(template)) continue;

                let dynamicKeyPattern = key.replace(/[()?*+.|^$[\]\\]/g, '\\$&');
                dynamicKeyPattern = dynamicKeyPattern.replace(/\{x\}/g, '(.*)?'); // {x} 匹配任意可空内容
                dynamicKeyPattern = dynamicKeyPattern.replace(/\{n\}/g, '([\\s\\S]*?)'); // {n} 匹配任意可空内容包括换行
                dynamicKeyPattern = dynamicKeyPattern.replace(/\{([a-zA-Z]+)\}/g, '(.+?)'); // 其他 {word} 匹配非空内容

                const regex = new RegExp(`^${dynamicKeyPattern}$`);
                const match = text.match(regex);

                if (match) {
                    const values = match.slice(1);
                    let translated = template;
                    let placeholderIndex = 0;

                    translated = translated.replace(/\{([a-zA-Z0-9_]+)\}/g, (match, placeholder) => {
                        if (placeholder === 'x') {
                            return values[placeholderIndex++] || '';
                        } else if (placeholder === 'n') {
                            const value = values[placeholderIndex++];
                            return value === undefined ? '' : value.replace(/\\n/g, '\n');
                        } else {
                            return values[placeholderIndex++] || '';
                        }
                    });

                    dynamicTranslationCache.set(text, translated);
                    return translated;
                }
            }
            return null;
        }
            
        function normalizeText(text) {
            return text/*.trim()*/;
        }

        function shouldSkipNode(node, sub=false) {
            const DISALLOWED_TAGS = ['CODE','EMOJI-SPAN']; //要过滤的标签
            const DISALLOWED_PARENT_TAGS = ['SPAN']; //要过滤父级的标签
            const ALLOWED_PARENT_TAGS = ['LI']; //要通过的父级标签
            const DISALLOWED_CLASSES = ['chat-log-scroll-inner', 'chat-line', 'chat-box-type', 'chat-box-type-name', 'friends-item-name', 'friends-item-account', 'account-name', 'character-name', 'party-name'];
            const ALLOWED_PARENT_CLASSES = ['modal-title', 'changelog-short', 'plush-header', 'text-truncate'];

            if (node?.nodeType === Node.ELEMENT_NODE) {
                if (DISALLOWED_TAGS.includes(node.tagName)) {
                    const hasClass = ALLOWED_PARENT_CLASSES.some(cls => node?.matches(`.${cls}`));
                    const hasParentClass = ALLOWED_PARENT_CLASSES.some(cls => node?.parentElement?.matches(`.${cls}`));
                    const hasParentTAGS = ALLOWED_PARENT_TAGS.some(tag => node?.parentElement?.tagName === tag);
                    if(hasParentTAGS) return false;
                    if (!sub || (!hasClass && !hasParentClass && !hasParentTAGS)) {
                        return true;
                    }
                }

                if (node.className && typeof node.className === 'string') {
                    const classList = node.className.split(' ');
                    for (const cls of classList) {
                        if (DISALLOWED_CLASSES.some(keyword => cls.includes(keyword))) {
                            return true;
                        }
                    }
                }

                if (DISALLOWED_PARENT_TAGS.includes(node.tagName)) {
                    const parent = node.parentElement;
                    if (parent) {
                        return shouldSkipNode(parent, true)
                    }
                }
            }

            return false;
        }

        function translateDOMAsync(node, shouldSkipChildren = false) {
            if(isasync) {
                setTimeout(() => {
                    _translateDOM(node, shouldSkipChildren);
                }, 0);
            }
            else {
                _translateDOM(node, shouldSkipChildren);
            }
        }

        function _translateDOM(node, shouldSkipChildren = false) {
            if (node?.nodeType === Node.ELEMENT_NODE) {
                if (node.getAttribute('data-translated')) return;
            }
            else if (node?.nodeType === Node.TEXT_NODE) {
                if (skipTextNode(node)) return;
            }

            let skipCurrent = shouldSkipChildren || shouldSkipNode(node);
            const skipChildren = shouldSkipChildren || skipCurrent;

            if (!skipChildren && node?.nodeType === Node.TEXT_NODE) {
                const text = normalizeText(node.textContent);
                if (text) {
                    const translated = translationMap_ZH[text] || PonyChangelogModule.changelog.get("all")[text] || "";
                    if (translated) {
                        node._translated = true;
                        node.textContent = translated;
                        if (node.parentElement && !node.parentElement.classList.contains('dropdown-item')) {
                            node.parentElement.setAttribute('data-translated', 'true');
                        }
                        return;
                    } 
                    else {
                        const dynamicTranslated = translateDynamicString(text);
                        if (dynamicTranslated !== null) {
                            node._translated = true;
                            node.textContent = dynamicTranslated;
                            if (node.parentElement) {
                                node.parentElement.setAttribute('data-translated', 'true');
                            }
                            return;
                        }
                    }
                }
            }

            if (!ponybot && !skipChildren && node && node?.nodeType === Node.ELEMENT_NODE) {
                const attrsToCheck = ['placeholder', 'title', 'alt', 'button'];
                
                attrsToCheck.forEach(attr => {
                    if (node && typeof node.hasAttribute === 'function' && node.hasAttribute(attr)) {
                        const value = node.getAttribute(attr);
                        if (!value) return;
                        let translatedValue = null;
                        const translated = translationMap_ZH[value];
                        if (translated) {
                            translatedValue = translated;
                        } 
                        else {
                            translatedValue = translateDynamicString(value);
                        }
                        if (translatedValue !== null && translatedValue != value) {
                            node.setAttribute(attr, translatedValue);
                            if (!node.classList.contains('dropdown-item')) {
                                node.setAttribute('data-translated', 'true');
                            }
                        }
                    }
                });
            }

            if (!skipChildren && node?.childNodes && node?.childNodes?.length > 0) {
                node.childNodes.forEach(child => translateDOMAsync(child, skipChildren));
            }
        }

        function skipTextNode(node) {
            if (node._translated) {
                delete node._translated; 
                return true;
            }

            const text = node.textContent.trim();
            if (!text || /^[\d/:!-@[-_{-~\s]+$/.test(text)) {
                return true;
            }

            if (shouldSkipNode(node.parentElement)) {
                return true;
            }

            return false
        }

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'characterData') {
                    const node = mutation.target;
                    translateDOMAsync(node);
                }

                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            translateDOMAsync(node);
                        }
                        else if (node.nodeType === Node.TEXT_NODE) {
                            if(node.textContent == ' on ') node.textContent = ' ';
                            translateDOMAsync(node);
                        }
                    });
                }
            });
        });

        function startTranslate() {
            translateDOMAsync(document.body);

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }

        return { startTranslate, translateDOMAsync };
    })();

    const PonyChangelogModule = (() => {
        const changelog = new Map();
        changelog.set("all",{})
        const originalSet = changelog.set.bind(changelog);
        changelog.set = function(version, translations) {
            originalSet(version, translations);
            if (version === "all") return this;
            const currentAll = changelog.get("all") || {};
            const newAll = { ...currentAll, ...translations };
            originalSet("all", newAll);
            return this;
        };

        let changelogLoaded = false;
        let changelogObserver = null;
        
        function getGameVersion() {
            return document.body.getAttribute('data-version');
        }

        function getChangelogVersion() {
            const version = document.body.getAttribute('data-version');
            return 'v' + version.split('-')[0];
        }

        function getChangelogVersions() {
            const versiondom = document.querySelectorAll("changelog-modal div.modal-body h4");
            const versions = Array.from(versiondom).map(version => version.textContent.trim());
            const sliced = versions.slice(1);
            return [getChangelogVersion(), ...sliced];
        }

        function getChangelogUrls() {
            const versions = getChangelogVersions();
            const url = `https://cdn.jsdelivr.net/gh/PonyVillePlugin/MenuTranslate@main/changelog/`;
            const urls = Array.from(versions).map(version => url + `${version}.json`);
            return urls;
        }

        async function loadAllChangelogs() {
            const versions = getChangelogVersions();
            const urls = getChangelogUrls();
    
            urls.forEach(async (url, index) => {
                const version = versions[index];
                if (!version) return;
    
                try {
                    const res = await fetch(url);
                    if (!res.ok) return;
                    const trans = await res.json();
                    changelog.set(version, trans);
                    PonyTranslateModule.translateDOMAsync(document.querySelector("changelog-modal div.modal-body"))
                } catch (err) {}
            });
        }

        function watchChangelog() {
            PonyChangelogModule.loadAllChangelogs();

            changelogObserver = new MutationObserver(() => {
                const changelog = document.querySelector('changelog-modal div.modal-body');
                if (changelog && !changelogLoaded) {
                    PonyChangelogModule.loadAllChangelogs();
                    changelogLoaded = true;
                    changelogObserver.disconnect();
                }
            });

            changelogObserver.observe(document.body, {
                childList: true,
                subtree: false,
                characterData: false,
                attributes: false
            });
        }

        return { changelog, loadAllChangelogs, watchChangelog };
    })();

    const PonyVersionModule = (() => {
        function getScriptUrl() {
            const timestamp = Math.floor(Date.now() / 1000);
            const url = `https://raw.githubusercontent.com/PonyVillePlugin/MenuTranslate/main/index.html?_=${timestamp}`;
            return url;
        }

        async function getScriptVersion() {
            try{
                const response = await fetch(getScriptUrl());
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const fetchversion = doc.querySelector('meta[name="script-version"]').getAttribute('content');
                return fetchversion
                ;
            }
            catch {
                return version;
            }
        }

        function runAfterDOMLoaded(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        }
        
        function runScript() {
            runAfterDOMLoaded(function() {
                PonyTranslateModule.startTranslate();
                PonyChangelogModule.watchChangelog();
            });
        }

        return { runScript, getScriptUrl, getScriptVersion };
    })();

    PonyVersionModule.runScript();
})();