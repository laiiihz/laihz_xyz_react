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
    }

};
/*TODO some class to const*/

class Design {
    static unsplash='https://unsplash.com/';
    static iconFont='http://www.iconfont.cn/';

}

class Website {
    static otpTool='https://otp.landian.la/zh-cn/';
    static appinn='https://www.appinn.com/';
    static iplaysoft='https://www.iplaysoft.com/';
    static coolapk='http://www.coolapk.com/';
    static zimuzu='http://www.zimuzu.tv/';
}

class OJ {
    static PAT='https://www.patest.cn/';
    static leetcodeCN='https://www.leetcode-cn.com/';
    static luogu='https://www.luogu.org/';
}

class spirit {
    static offTheAir='https://www.adultswim.com/videos/off-the-air';
    static chromeEx='https://experiments.withgoogle.com/';
}

class Goods{
    static ikea='https://www.ikea.cn/cn/zh/';
    static decathlon='https://www.decathlon.com.cn/';
    static mi='https://www.mi.com/';
}

function ListHref(props) {
    return <li><a href={props.webName}>{props.webName}</a></li>;
}

class NavBar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">Logo</a>
                        <ul id="nav-mobile" className="left ">
                            <ListHref webName='laihzGithub'/>
                            <li><a href={DeveloperWeb.android}>Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
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
