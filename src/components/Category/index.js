import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";

const dataSource = [
  [
    {
      name: "猫眼电影",
      src:
        "https://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png",
      keyword: "maoyan"
    },
    {
      name: "酒店",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png",
      keyword: "jiudian"
    },
    {
      name: "休闲娱乐",
      src: "https://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png",
      keyword: "xiuxian"
    },
    {
      name: "外卖",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203251waimai.png",
      keyword: "waimai"
    },
    {
      name: "火锅",
      src: "https://www.dpfile.com/sc/eleconfig/20160204172927huoguo.png",
      keyword: "huoguo"
    },
    {
      name: "美食",
      src: "https://www.dpfile.com/sc/eleconfig/20160126194705meishi.png",
      keyword: "meishi"
    },
    {
      name: "丽人",
      src: "https://www.dpfile.com/sc/eleconfig/20160126202946liren.png",
      keyword: "liren"
    },
    {
      name: "休闲娱乐",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203542ktv.png",
      keyword: "yule"
    },
    {
      name: "KTV",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png",
      keyword: "ktv"
    },
    {
      name: "婚纱摄影",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203830jiehun.png",
      keyword: "hunsha"
    }
  ],
  [
    {
      name: "生活服务",
      src:
        "https://www.dpfile.com/sc/eleconfig/20170308125500community_new.png",
      keyword: "shenghuo"
    },
    {
      name: "景点",
      src: "https://www.dpfile.com/sc/eleconfig/20160126205135jingguan.png",
      keyword: "jingdian"
    },
    {
      name: "爱车",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203742aiche.png",
      keyword: "aiche"
    },
    {
      name: "运动健身",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203617jianshen.png",
      keyword: "yundong"
    },
    {
      name: "购物",
      src: "https://www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png",
      keyword: "gowu"
    },
    {
      name: "亲子",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203905qinzi.png",
      keyword: "qinzi"
    },
    {
      name: "到家",
      src: "https://www.dpfile.com/sc/eleconfig/20160126203812daojia.png",
      keyword: "daojia"
    },
    {
      name: "家装",
      src: "https://www.dpfile.com/sc/eleconfig/20161213162031zhuangxiu.png",
      keyword: "jiazhuang"
    },
    {
      name: "学习培训",
      src: "https://www.dpfile.com/gp/cms/1455525720807.png",
      keyword: "xuexi"
    },
    {
      name: "医疗健康",
      src: "https://www.dpfile.com/sc/eleconfig/20160126204327yiliao.png",
      keyword: "yiliao"
    }
  ],
  [
    {
      name: "小吃快餐",
      src:
        "https://www.dpfile.com/sc/eleconfig/20160204173331xiaochikuaican.png",
      keyword: "xiaochi"
    },
    {
      name: "自助餐",
      src: "https://www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png",
      keyword: "zizhu"
    },
    {
      name: "日本菜",
      src: "https://www.dpfile.com/sc/eleconfig/20160415121719rihanliaoli.png",
      keyword: "rebencai"
    },
    {
      name: "美发",
      src: "https://www.dpfile.com/sc/eleconfig/20160316142804meifa.png",
      keyword: "meifa"
    },
    {
      name: "美甲美瞳",
      src: "https://www.dpfile.com/sc/eleconfig/20160316143047meijia.png",
      keyword: "meijia"
    },
    {
      name: "美容SPA",
      src: "https://www.dpfile.com/sc/eleconfig/20160316143239meirong.png",
      keyword: "meirong"
    },
    {
      name: "瘦身",
      src: "https://www.dpfile.com/sc/eleconfig/20160316143316shoushen.png",
      keyword: "shoushen"
    },
    {
      name: "亲子摄影",
      src: "https://www.dpfile.com/sc/eleconfig/20160316143612qinzisheying.png",
      keyword: "qinzi"
    },
    {
      name: "亲子娱乐",
      src: "https://www.dpfile.com/sc/eleconfig/20160316143656qinziyoule.png",
      keyword: "qinziyule"
    },
    {
      name: "全部分类",
      src: "https://www.dpfile.com/sc/eleconfig/20160125182200more.png",
      keyword: "quanbufenlei"
    }
  ]
];

class Category extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0
    };
  }
  render() {
    const opt = {
      auto: 2500,
      callback: index => {
        this.setState({
          index: index
        });
      }
    };
    return (
      <div id="category">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div>
            <ul className="carousel-item">
              {dataSource[0].map((item, index) => (
                <li key={index}>
                  <Link to={"/search/" + item.keyword}>
                    <img src={item.src} className="carousel-item-img" />
                    <p className="carousel-item-title">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="carousel-item">
              {dataSource[1].map((item, index) => (
                <li key={index}>
                  <Link to={"/search/" + item.keyword}>
                    <img src={item.src} className="carousel-item-img" />
                    <p className="carousel-item-title">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="carousel-item">
              {dataSource[2].map((item, index) => (
                <li key={index}>
                  <Link to={"/search/" + item.keyword}>
                    <img src={item.src} className="carousel-item-img" />
                    <p className="carousel-item-title">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ""} />
            <li className={this.state.index === 1 ? "selected" : ""} />
            <li className={this.state.index === 2 ? "selected" : ""} />
          </ul>
        </div>
      </div>
    );
  }
}
export default Category;
