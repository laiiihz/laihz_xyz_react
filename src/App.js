import React, { Component } from 'react';
import M from 'materialize-css';
//import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css'



const webName='Laihz';
const webNavName='Laihz Navigator';
const webUrlMe='http://laihz.xyz';
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
console.log(websites);
console.log(websites.Website);
const Design=websites.Design;
console.log(Object.keys(websites.Design)[0]);
let Designq=new Component(0)[2];
function Designxx() {
    for(let i=0; i<2; i++){
        Designq[i]=<a href={Design[i]}></a>;
    }
}

function ListHref(props) {
    return <li><a href={props.webUrl} className="black-text">{props.webName}</a></li>;
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
                    <div className="nav-wrapper white">
                        <a href={webUrlMe} className="brand-logo right black-text">{webName}</a>
                        <ul id="nav-mobile" className="left ">
                            <GenerateNavUrl/>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function NavImage() {
    return <img src='res/1.jpg' alt='Navigator'/>;
}

function NavSpan() {
    return <span className="card-title " style={{fontSize:"50px"}}>{webNavName}</span>;

}

class CardNav extends Component{
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image ">
                            <NavImage/>
                            <NavSpan/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <CardNav/>

      </div>
    );
  }

  componentDidMount() {
      M.AutoInit();
  }
}

export default App;
