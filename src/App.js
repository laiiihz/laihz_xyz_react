import React, { Component } from 'react';
import {Button,Icon,Navbar,NavItem,Card,CardTitle,Footer,Collapsible,CollapsibleItem} from 'react-materialize';
//import logo from './logo.svg';
import './App.css';



const webName='Laihz';
const webNavName='Laihz Navigator';
const webUrlMe='http://laihz.xyz';

const BigNavName=<span style={{fontSize:'50px'}}>{webNavName}</span>;
/*
* web
* */
const laihzGithub='https://github.com/laiiihz/';

const websites={
    DeveloperWeb:{
        icon:'developer_mode',
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
console.log(Object.keys(websites.Design).length);
let Designq=new Component(0)[2];

class NavBarReact extends Component{
    render(){
        return (
            <Navbar brand={webName} left className="grey">
                <NavItem href={webUrlMe} >Github</NavItem>
            </Navbar>
        );
    }
}

class CardNavReact extends Component{
    render() {
        return (
            <div className='container'>
                <Card
                    header={<CardTitle image='res/1.jpg'>{BigNavName}</CardTitle>}>
                    <span>Laihz Navigator powered by <a href={laihzGithub}>Laihz</a></span>
                </Card>
            </div>
        );
    }
}

function WebGen()  {
    let result=<div></div>;
    for(let i=0;i<Object.keys(websites).length;i++){
        result+=(
            <CollapsibleItem header={Object.keys(websites)[i]} icon={Object.keys(Object.keys(websites)[i])[0]}>
                Lorem ipsum dolor sit amet.
            </CollapsibleItem>
        );
    }
    console.log();
    return result;
}
class WebItem extends Component{
    render(){
        return (
            <CollapsibleItem header={this.props.header} >
                Lorem ipsum dolor sit amet.
            </CollapsibleItem>
        );
    }
}
class WebsGen extends Component{
    render() {
        let item=[];
        for(let i=0;i<Object.keys(websites).length;i++){
            item.push(<WebItem  header={Object.keys(websites)[i]}
                                key={Object.keys(websites)[i]}/>);
        }
        return item;
    }
}

class NavWebs extends Component{
    render(){
        return (
            <div className='container'>
                <Collapsible accordion >
                    <WebsGen/>

                </Collapsible>
            </div>
        );
    }
}


class WebFooter  extends Component{
    render() {
        return (
            <Footer
                className="grey "
                moreLinks={
                    <a className="white-text  right" href={webNavName}>Laihz</a>
                }>
                <h5 className="white-text left">Laihz Navigator</h5>
            </Footer>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBarReact/>
          <CardNavReact/>
          <NavWebs/>
          <WebFooter/>
      </div>
    );
  }
}

export default App;
