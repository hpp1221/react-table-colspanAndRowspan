import React, {Component} from 'react';
import './App.css';

const dataObj = {
    title: ['MYCT', 'MMIN', 'MMAX', 'CACH', 'CHMI', 'CHMA','AAA','bbb'],
    weight: [
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [8.1921, 232.21, 8.5437, 2.0259, 70.7124, 3.2245,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [8.1921, 232.21, 8.5437, 2.0259, 70.7124, 3.2245,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
        [0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2],
    ],
    value:[-94.2603,92.5345,146.1454,97.1049,70.1302,58.756,-161.2842,111,2222],
    class:[0.6549, -159.6171, 1.1039, -12.106, -46.9917, -13.2275,1,2,3]
};
class App extends Component {
    render() {
        return (
            <div className="App">
                <span>

                </span>
                <table border="1" cellSpacing="0" className="table">
                    <tbody>
                    <tr>
                        <td rowSpan={dataObj.weight.length+2} style={{width:'80px'}}>权重=</td>
                        <td rowSpan='2'>
                        </td>
                        {dataObj.title.map((val, key) => {
                            return (
                                <td key={key}>输入层节点{key + 1}</td>
                            )
                        })}
                        <td rowSpan={dataObj.weight.length+2} style={{width:'30px'}}>

                        </td>
                        <td rowSpan={dataObj.weight.length+2} style={{width:'80px'}}>
                            阈值=
                        </td>
                        <td rowSpan='2'>

                        </td>
                        <td rowSpan='2'>

                        </td>
                    </tr>
                    <tr>
                        {dataObj.title.map((val, key) => {
                            return (
                                <td key={key}>{val}</td>
                            )
                        })}
                    </tr>
                    {dataObj.weight.map((val,key)=>{
                        return(
                            <tr key={key}>
                                <td>隐藏节点{key+1}</td>
                                {val.map((value,k)=>{
                                    return(
                                        <td key={k}>
                                            {value}
                                        </td>
                                    )
                                })}
                                <td>隐藏节点{key+1}</td>
                                {dataObj.value.map((valNew,keyNew)=>{
                                    if(keyNew === key){
                                        return(
                                            <td key={keyNew}>
                                                {valNew}
                                            </td>
                                        )
                                    }else{
                                        return false
                                    }
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <table border="1" cellSpacing="0" className="table">
                    <tbody>
                    <tr>
                        <td rowSpan={dataObj.weight.length+2} style={{width:'80px'}}>权重=</td>
                        <td>
                        </td>
                        {dataObj.weight.map((val, key) => {
                            return (
                                <td key={key}>隐层节点{key + 1}</td>
                            )
                        })}
                        <td rowSpan={dataObj.weight.length+2} style={{width:'30px'}}>

                        </td>
                        <td rowSpan={dataObj.weight.length+2} style={{width:'80px'}}>
                            阈值=
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            输出层节点
                        </td>
                        {dataObj.class.map((valClass,keyClass)=>{
                            return(
                                <td rowSpan='2' key={keyClass}>
                                    {valClass}
                                </td>
                            )
                        })}
                        <td>
                            输出层节点
                        </td>
                        <td rowSpan='2'>
                            aaaa
                        </td>
                    </tr>
                    <tr>
                        <td>
                            class
                        </td>
                        <td>
                            class
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
