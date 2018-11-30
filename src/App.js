import React, { Component } from 'react';
//import M from 'materialize-css';
//import logo from './logo.svg';
import './App.css';

const webName='Laihz';
const webNavName='Laihz Navigator';

/*
* web
* */
const laihzGithub='https://github.com/laiiihz/';

const websites={
    DeveloperWeb:{
        android:'http://developers.android.google.cn/',
        vscode:'https://code.visualstudio.com/',
        vside:'https://visualstudio.microsoft.com/',
        jetbrains:'https://www.jetbrains.com/',
        stackOverFlow:'https://stackoverflow.com',
        github:'https://github.com/'
    },
    Design:{
        unsplash:'https://unsplash.com/',
        iconFont:'http://www.iconfont.cn/'
    },
    Website:{
        otpTool:'https://otp.landian.la/zh-cn/',
        appinn:'https://www.appinn.com/',
        iplaysoft:'https://www.iplaysoft.com/',
        coolapk:'http://www.coolapk.com/',
        zimuzu:'http://www.zimuzu.tv/'
    },
    OJ:{
        PAT:'https://www.patest.cn/',
        leetcodeCN:'https://www.leetcode-cn.com/',
        luogu:'https://www.luogu.org/'
    },
    spirit:{
        offTheAir:'https://www.adultswim.com/videos/off-the-air',
        chromeEx:'https://experiments.withgoogle.com/'
    },
    Goods:{
        ikea:'https://www.ikea.cn/cn/zh/',
        decathlon:'https://www.decathlon.com.cn/',
        mi:'https://www.mi.com/'
    }
};

function ListHref(props) {
    return <li><a href={props.webUrl}>{props.webName}</a></li>;
}
function GenerateNavUrl() {
    return(
        <div>
            <ListHref webUrl={laihzGithub} webName="Github" />
        </div>
    );
}

class NavBar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">{webName}</a>
                        <ul id="nav-mobile" className="left ">
                            <GenerateNavUrl/>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
      </div>
    );
  }
}

export default App;
