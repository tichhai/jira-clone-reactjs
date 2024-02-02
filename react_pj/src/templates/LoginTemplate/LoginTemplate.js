import React,{useState, useEffect} from "react";
import {Layout} from 'antd'


const {Sider, Content} = Layout;
function LoginTemplate({Component,children, ...restProps}) {
    const [size, setSize] = useState({width:Math.round(window.innerWidth), height:Math.round(window.innerHeight)})
    useEffect(() => {
        window.onresize = () => {setSize((prev) => {
            return {...prev, width: Math.round(window.innerWidth), height: Math.round(window.innerHeight)}
        })
    }}, [])
    return ( 
        <>
            <Layout>
                <Sider width={size.width/2} style={{height: size.height, backgroundImage: `url(https://picsum.photos/${Math.round(size.width/2)}/${size.height})`, backgroundSize: '100%'}}></Sider>
                
                <Content>
                    <Component/>
                </Content>
            </Layout>
        </>
     );
}

export default LoginTemplate;