import React, { Component } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const eventOptions = [
    {
        value: 'General Cleaning',
        label: 'General Cleaning',
        default: true
    },
    {
        value: 'Wash Clothes',
        label: 'Wash Clothes',
        default: true
    },
    {
        value: 'Maintenance',
        label: 'Maintenance',
        default: true
    }
  ];

const Option = (props: any) => {
    console.log(props, 'pppppp')
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class SelectMultiple extends Component<any, any> {
  servicesOptions: any;
  constructor(props: any) {
    super(props);
    console.log(props, 'props SelectMultiple')
    this.servicesOptions = props.services;
    this.state = {
      optionSelected: props.selectedServices.length > 0 ? this.servicesOptions.filter((o: any)=> this.props.selectedServices.includes(o.value)):null,
    };
    this.props.servicesSelected(this.state.optionSelected);
  }

  handleChange = (selected: any) => {
    this.setState({
      optionSelected: selected
    });
    this.props.servicesSelected(selected);
  };

  render() {
    return (
      <span
        className="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={this.servicesOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          value={this.state?.optionSelected}
        />
      </span>
    );
  }
}
