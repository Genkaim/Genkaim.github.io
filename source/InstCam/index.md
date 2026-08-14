---
title: InstCam
date: 2026-07-17 19:47:22
---

{% raw %}
<div class="instcam-wrapper">
    <style>
        /* ==========================================================================
           1. 屏蔽博客自带的顶栏和标题（只在此页面生效）
           ========================================================================== */
        header.header, 
        .post-title,
        .post__header,
        .post-side,
        #btn-toc {
            display: none !important;
        }

        /* 移除博客内容卡片的阴影和边框，使其与背景融为一体，且去掉多余的边距 */
        .content-card {
            background: transparent !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 auto !important;
        }

        /* ==========================================================================
           2. InstCam 核心排版样式
           ========================================================================== */
        .instcam-wrapper {
            --instcam-text-color: #4a3629;
            --instcam-accent-color: #8c431d;
            --instcam-accent-hover: #733514;
            --instcam-border-color: #d1cbbf;
            --instcam-card-bg: rgba(237, 233, 222, 0.85); /* 略带透明度，隐约透出博客背景 */
            
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: var(--instcam-text-color);
            line-height: 1.6;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            box-sizing: border-box;
        }

        .instcam-wrapper * {
            box-sizing: border-box;
        }

        /* Hero 主视觉区域 */
        .instcam-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 60px;
            gap: 40px;
        }

        /* 电脑端左右两栏布局 */
        @media (min-width: 768px) {
            .instcam-hero {
                flex-direction: row-reverse; 
                justify-content: space-between;
                align-items: center;
                text-align: left;
                margin-top: 40px;
            }

            .instcam-hero-content {
                flex: 1;
                text-align: left;
                padding-right: 40px;
            }

            .instcam-mockup-wrapper {
                flex: 1;
                display: flex;
                justify-content: center;
            }
        }

        /* 移动端上下布局 */
        @media (max-width: 767px) {
            .instcam-hero {
                text-align: center;
            }
            .instcam-hero-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        /* App 宣传图样式 */
        .instcam-app-image {
            max-width: 340px;
            width: 100%;
            height: auto;
            border-radius: 40px;
            box-shadow: 0 15px 35px rgba(74, 54, 41, 0.15);
            display: block;
            margin: 0 auto;
        }

        .instcam-wrapper h1.instcam-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: var(--instcam-text-color);
            margin: 0 0 12px 0 !important;
            border-bottom: none !important; 
            padding-bottom: 0 !important;
            line-height: 1.1;
        }

        .instcam-tagline {
            font-size: 1.4rem;
            color: var(--instcam-text-color);
            opacity: 0.85;
            margin: 0 0 36px 0;
            font-weight: 500;
        }

        /* 胶囊主按钮 */
        .instcam-btn {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            background-color: var(--instcam-accent-color) !important;
            color: white !important;
            text-decoration: none !important;
            padding: 14px 40px !important;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 50px !important;
            transition: all 0.22s ease;
            box-shadow: 0 6px 16px rgba(140, 67, 29, 0.25);
            border: none !important;
            cursor: pointer;
        }

        .instcam-btn:hover {
            background-color: var(--instcam-accent-hover) !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(140, 67, 29, 0.35);
            color: white !important;
        }

        /* 历史版本区域 */
        .instcam-history-section {
            margin-top: 40px;
            text-align: left;
            border-top: 1px solid var(--instcam-border-color);
            padding-top: 50px;
            width: 100%;
        }
    .post__license {
        display:none !important;
    }
        .instcam-wrapper h2.instcam-history-title {
            font-size: 1.6rem;
            margin: 0 0 28px 0 !important;
            font-weight: 700;
            position: relative;
            padding-left: 14px;
            border-bottom: none !important;
        }

        .instcam-history-title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 4px;
            bottom: 4px;
            width: 4px;
            background-color: var(--instcam-accent-color);
            border-radius: 2px;
        }

        .instcam-version-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0 !important;
            margin: 0 !important;
        }

        .instcam-version-item {
            background-color: var(--instcam-card-bg);
            border-radius: 20px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border: 1px solid transparent;
            transition: all 0.2s ease;
            list-style: none !important; 
        }

        @media (min-width: 576px) {
            .instcam-version-item {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        .instcam-version-item:hover {
            border-color: var(--instcam-border-color);
            box-shadow: 0 4px 12px rgba(74, 54, 41, 0.05);
        }

        .instcam-version-info {
            flex-grow: 1;
        }

        .instcam-version-meta {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }

        .instcam-version-name {
            font-size: 1.25rem;
            font-weight: 700;
        }

        .instcam-version-date {
            font-size: 0.9rem;
            opacity: 0.6;
        }

        .instcam-version-features {
            font-size: 0.95rem;
            opacity: 0.85;
            list-style-type: none !important;
            padding-left: 0 !important;
            margin: 0 !important;
        }

        .instcam-version-features li {
            position: relative;
            padding-left: 16px !important;
            margin-bottom: 4px !important;
            list-style: none !important;
        }

        .instcam-version-features li:last-child {
            margin-bottom: 0 !important;
        }

        .instcam-version-features li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--instcam-accent-color);
            font-weight: bold;
        }

        .instcam-btn-sm {
            padding: 10px 24px !important;
            font-size: 0.95rem;
            align-self: flex-start;
        }

        @media (min-width: 576px) {
            .instcam-btn-sm {
                align-self: center;
            }
        }
    </style>

    <!-- 主视觉区域 -->
    <section class="instcam-hero">
        <div class="instcam-mockup-wrapper">
            <img class="instcam-app-image" src="https://cdn.luogu.com.cn/upload/image_hosting/iwr9oxg5.png" alt="InstCam Preview">
        </div>

        <div class="instcam-hero-content">
            <h1 class="instcam-title">InstCam</h1>
            <p class="instcam-tagline">安卓的拍立得相机</p>
            <a href="#" class="instcam-btn">立即下载最新版</a>
        </div>
    </section>

    <!-- 历史版本列表区域 -->
    <section class="instcam-history-section">
        <h2 class="instcam-history-title">历史版本</h2>
        
        <div class="instcam-version-list">
            <!-- v1.0.0 -->
            <div class="instcam-version-item">
                <div class="instcam-version-info">
                    <div class="instcam-version-meta">
                        <span class="instcam-version-name">v1.0.0</span>
                        <span class="instcam-version-date">2026-03-01</span>
                    </div>
                    <ul class="instcam-version-features">
                        <li>InstCam 正式发布！</li>
                        <li>拟物化拍立得相机界面，带给你纯正的拍摄仪式感</li>
                    </ul>
                </div>
                <a href="#" class="instcam-btn instcam-btn-sm">下载</a>
            </div>
        </div>
    </section>
</div>
{% endraw %}