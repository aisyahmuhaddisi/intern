import React, { Component } from 'react';

class Dropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choose: '',
            type: '',
            title:'',
            options: [
                {
                    name: 'buah',
                    value: 'buah',
                    subitems: [
                        {
                            name: 'melon',
                            value: 'melon',
                            subitems: [
                                {
                                    name: 'melon madu',
                                    value: 'melon madu'
                                },
                                {
                                    name: 'melon biasa',
                                    value: 'melon biasa'
                                }
                            ]
                        },
                        {
                            name: 'pisang',
                            value: 'pisang',
                            subitems: [
                                {
                                    name: 'pisang madu',
                                    value: 'pisang madu'
                                },
                                {
                                    name: 'pisang raja',
                                    value: 'pisang raja'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'hewan',
                    value: 'hewan',
                    subitems: [
                        {
                            name: 'kucing',
                            value: 'kucing',
                            subitems: [
                                {
                                    name: 'kucing persia',
                                    value: 'kucing persia'
                                },
                                {
                                    name: 'kucing scottishfold',
                                    value: 'kucing scottishfold'
                                }
                            ]
                        },
                        {
                            name: 'anjing',
                            value: 'anjing',
                            subitems: [
                                {
                                    name: 'anjing pom',
                                    value: 'anjing pom'
                                },
                                {
                                    name: 'anjing samoyed',
                                    value: 'anjing samoyed'
                                }
                            ]
                        }
                    ]
                }
            ],
            subs: [],
            subsubs: []
        }
        this.handleChange = this.handleChange.bind(this)
    };
    handleChange = (value,item,event) => {
        this.setState({ [value]: event.target.value })
        this.click(item, event.target.value);
    }
    click = (item, value) => {
        let temp = null
        if (item === '') {
            return false;
        }
        else if (item === 'option') {
            temp = this.state.options;
        }
        else if (item === 'subitems') {
            temp = this.state.subs;
        } 
        for (var i = 0; i < temp.length; i++) {
            console.log(temp.length)
            if (temp[i].value === value) {
                if (item === 'option') {
                    this.setState({ subs: temp[i].subitems })
                }
                else if (item === 'subitems') {
                    this.setState({ subsubs: temp[i].subitems })
                }
            }
        }
    };
    render() {
        return (
            <form>
                <div className="form">
                    <label htmlFor="choose">Choose</label>
                    <select id="option" value={this.state.choose} onChange={(e) => this.handleChange('choose','option', e)}>
                        <option style={{ display: 'none' }}>ALL</option>
                        {this.state.options.map((option, index) => (
                            <option key={index} value={option.value}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="type">Type</label>
                    <select id="option" value={this.state.type} onChange={(e) => this.handleChange('type', 'subitems', e)}>
                        <option style={{ display: 'none' }}>ALL</option>
                        {this.state.subs.map((sub, index) => (
                            <option key={index} value={sub.value}>{sub.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="type">Title</label>
                    <select id="option" value={this.state.title} onChange={(e) => this.handleChange('title', '', e)}>
                        <option style={{ display: 'none' }}>ALL</option>
                        {this.state.subsubs.map((subsub, index) => (
                            <option key={index} value={subsub.value}>{subsub.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        );
    }

}


export default Dropdown;