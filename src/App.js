import React, { useEffect } from 'react';

import './index.css';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="desktop_1">
      <div className="div_27230_1">
        <div className="flexcontainer">
          <div className="mask_group">
            <img
              className="be5f182e5ab41b773b5cd8b7bf50ad26_1"
              src="/image/profile-photo-overlay.jpg"
            />
          </div>
          <span className="text">FangBoya</span>
          <div className="frame_3466408">
            <span className="text_1">作品集</span>
            <div className="frame_3466405">
              <span className="text_2">我的简历</span>
              <img
                className="arrow_18"
                src="/image/arrow-dropdown.png"
              />
            </div>
          </div>
        </div>
        <div className="hero-content-section">
          <span className="text_3">Hi，👋我是 用界面讲故事、逻辑与视觉间寻找平衡的UI设计师</span>
          <div className="frame_3465833">
            <div className="rectangle_3464450">
              <span className="text_4">关于我：</span>
            </div>
            <div className="rectangle_3464451">
              <span className="text_5">📢</span>
            </div>
            <div className="rectangle_3464449"></div>
            <img
              className="group_631969"
              src="/image/megaphone-icon.png"
            />
            <span className="text_6">不说"我觉得"</span>
            <div className="rectangle_3464454">
              <div className="div">
                <span className="text_7">只问</span>
                <span className="text_8">"用户要什么"</span>
              </div>
            </div>
            <div className="rectangle_3464452">
              <span className="text_9">让复杂</span>
            </div>
            <div className="ellipse_3466">
              <img
                className="arrow_1"
                src="/image/arrow-curved.png"
              />
            </div>
            <div className="rectangle_3464453"></div>
            <span className="text_10">变简单</span>
            <img
              className="image_48"
              src="/image/rational-analysis-icon.png"
            />
            <div className="rectangle_3464455"></div>
            <span className="text_11">理性分析派</span>
            <img
              className="image_49"
              src="/image/efficiency-icon.png"
            />
            <div className="rectangle_3464456"></div>
            <span className="text_12">高效执行者</span>
            <img
              className="image_50"
              src="/image/unknown-trait-icon.png"
            />
          </div>
        </div>
        <img
          className="vector_493"
          src="/image/click-indicator.png"
        />
        <span className="text_13">点击查看近期项目</span>
      </div>
      <div className="flexcontainer_1">
        <span className="text_14">健康管理系统(双端)</span>
        <span className="text_16">UI/UX</span>
      </div>
      <div className="rectangle_3464452_1">
        <span className="text_15">TO B</span>
      </div>
      <div className="flexcontainer_2">
        <span className="text_17">技能交换APP</span>
        <span className="text_18">UI/UX</span>
      </div>
      <div className="rectangle_3464480">
        <span className="text_19">TO C+AIGC应用</span>
      </div>
      <div className="frame_3466406">
        <div className="flexcontainer_3">
          <div className="flexcontainer_4">
            <div className="union">
              <span className="text_20">上海 | 善诊信息技术有限公司</span>
            </div>
            <div className="rectangle_3464457">
              <span className="text_21">UI设计师、B端交付团队设计负责人</span>
            </div>
          </div>
          <div className="flexcontainer_5">
            <span className="text_22">更</span>
            <img
              className="star_1"
              src="/image/star-icon.png"
            />
            <div className="rectangle_3464467"></div>
            <span className="text_23">信</span>
            <span className="text_24">我</span>
            <span className="text_25">多</span>
            <span className="text_26">的</span>
            <div className="rectangle_3464468"></div>
            <span className="text_27">息</span>
          </div>
        </div>
        <span className="text_28">2016.09-2020.06</span>
        <div className="flexcontainer_6">
          <div className="frame_3465839">
            <img
              className="vector_496"
              src="/image/timeline-dot.png"
            />
            <div className="line_47"></div>
          </div>
          <span className="text_29">西北工业大学 | 本科 | 产品设计</span>
        </div>
        <div className="flexcontainer_7">
          <div className="div_2023_2025_06_b">
            <span className="text_30">
              2023-2025.06 <br />
            </span>
            <span className="text_31">核心项目：B端体检系统 / 医院健康管理系统</span>
          </div>
          <div className="rectangle_3464470"></div>
        </div>
        <div className="flexcontainer_8">
          <div className="flexcontainer_9">
            <div className="ellipse_3468"></div>
            <div className="ellipse_3469"></div>
            <div className="ellipse_3470"></div>
            <div className="ellipse_3471"></div>
          </div>
          <span className="text_32">
            公司业务重心及组织架构调整，工作内容转至B端，期间主导B端商城及医院健康管理系统（双端）从0到1的UI体系搭建，完成并向30+医院交付核心模块；
            <br />
            建立可复用的组件库，统一设计规范，使团队协作效率提升30%，迭代周期缩短30%-50%；
            <br />
            深度参与业务场景，优化跨部门协作流程、项目管理，客户满意度提升至98%，并助力交付团队完成年度OKR；
            <br />
            针对20+KA企业定制设计需求，平衡品牌调性与员工操作体验，客户续签率近80%
          </span>
          <div className="flexcontainer_10">
            <div className="frame_3465840">
              <img
                className="vector_496_1"
                src="/image/timeline-dot.png"
              />
              <div className="line_47_1"></div>
            </div>
            <div className="flexcontainer_11">
              <div className="div_2020_07_2022_c">
                <span className="text_33">
                  2020.07-2022年底
                  <br />
                </span>
                <span className="text_34">核心项目：C端服务平台 / 运营活动</span>
              </div>
              <div className="rectangle_3464469"></div>
            </div>
            <ul className="work-experience-list flexcontainer_12">
              <li className="work-experience-item">
                负责主站、私域活动的全链路视觉/UI设计、关键页面改版设计；
              </li>
              <li className="work-experience-item">
                独立完成20+会场活动（含双11/618大促）；
              </li>
              <li className="work-experience-item">
                协同用户自增长团队改版活动详情页，UV提升48%。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flexcontainer_14">
        <span className="text_36">感谢观看，您可通过以下方式与我联系，我真诚期待进一步沟通･ᴗ･</span>
        <div className="frame_3466404">
          <div className="rectangle_3464446">
            <span className="text_37">联系方式：</span>
          </div>
          <span className="text_38">17792938908</span>
          <span className="text_39">fangboya366@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default App;
