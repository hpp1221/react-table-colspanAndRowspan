import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dependentVars: [],
            hidingCount: 0,
            hidingToOutput: {
                threshold: {},
                weight: {
                    calss: []
                }
            },
            independentVars: [],
            inputToHiding: {
                threshold: [],
                weight: [],
            }
        };
        this.getDataSource = this.getDataSource.bind(this);
    }

    componentWillMount() {
        this.getDataSource();
    }

    getDataSource() {
        fetch(`http://192.168.10.34:3000/dnndata`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log('res', res);
                this.setState({
                    dependentVars: res.dependentVars,
                    hidingCount: res.hidingCount,
                    hidingToOutput: {
                        threshold: res.hidingToOutput.threshold,
                        weight: res.hidingToOutput.weight
                    },
                    independentVars: res.independentVars,
                    inputToHiding: {
                        threshold: res.inputToHiding.threshold,
                        weight: res.inputToHiding.weight,
                    }
                });
            });

    }

    render() {
        const {independentVars,inputToHiding,hidingToOutput} = this.state;
        return (
            independentVars.length > 0 ?
                <div className="App">
                <span>

                </span>
                    <table border="1" cellSpacing="0" className="table">
                        <tbody>
                        <tr>
                            <td rowSpan={this.state.inputToHiding.weight.length + 2} style={{width: '80px'}}>权重=</td>
                            <td rowSpan='2'>
                            </td>
                            {this.state.independentVars.map((val, key) => {
                                return (
                                    <td key={key}>输入层节点{key + 1}</td>
                                )
                            })}
                            <td rowSpan={this.state.inputToHiding.weight.length + 2} style={{width: '30px'}}>

                            </td>
                            <td rowSpan={this.state.inputToHiding.weight.length + 2} style={{width: '80px'}}>
                                阈值=
                            </td>
                            <td rowSpan='2'>

                            </td>
                            <td rowSpan='2'>

                            </td>
                        </tr>
                        <tr>
                            {independentVars.map((val, key) => {
                                return (
                                    <td key={key}>{val}</td>
                                )
                            })}
                        </tr>
                        {inputToHiding.weight.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>隐藏节点{key + 1}</td>
                                    {val.map((value, k) => {
                                        return (
                                            <td key={k}>
                                                {value}
                                            </td>
                                        )
                                    })}
                                    <td>隐藏节点{key + 1}</td>
                                    {inputToHiding.threshold.map((valNew, keyNew) => {
                                        if (keyNew === key) {
                                            return (
                                                <td key={keyNew}>
                                                    {valNew}
                                                </td>
                                            )
                                        } else {
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
                            <td rowSpan={inputToHiding.weight.length + 2} style={{width: '80px'}}>权重=</td>
                            <td colSpan='2'>
                            </td>
                            {inputToHiding.weight.map((val, key) => {
                                return (
                                    <td key={key}>隐层节点{key + 1}</td>
                                )
                            })}
                            <td rowSpan={inputToHiding.weight.length + 2} style={{width: '30px'}}>

                            </td>
                            <td rowSpan={inputToHiding.weight.length + 2} style={{width: '80px'}}>
                                阈值=
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                        {
                            Object.keys(hidingToOutput.threshold).map(key => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            输出层节点
                                        </td>
                                        <td>
                                            {key}
                                        </td>
                                        {
                                            Object.keys(hidingToOutput.weight).map(k => {
                                                return (
                                                    key === k ?
                                                        hidingToOutput.weight[k].map((value, index) => {
                                                            return (
                                                                <td key={index}>
                                                                    {value}
                                                                </td>
                                                            )
                                                        }) : null

                                                )
                                            })
                                        }
                                        <td>
                                            {key}
                                        </td>
                                        <td>
                                            {hidingToOutput.threshold[key]}
                                        </td>

                                    </tr>
                                )
                            })
                        }


                        </tbody>
                    </table>
                </div> : null
        );
    }
}

export default App;
