import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    Radio,
    FormSelect,
    FormSelectOption
} from '@patternfly/react-core';

import './wizard.scss';

class Step3 extends Component {

    constructor () {
        super();
        this.state = {
            value: 'Select One',
        };
        this.onChangeexampleOptions = this.onChangeexampleOptions.bind(this);

        // TODO: Change these to actual example groups
        this.exampleOptions = [
            { value: 'Select One', label: 'Select One', disabled: true },
            { value: 'Value 1', label: 'Value 1', disabled: false },
            { value: 'Value 2', label: 'Value 2', disabled: false },
            { value: 'Value 3 - Disabled', label: 'Value 3 - Disabled', disabled: true }
        ];
    };

    onChangeexampleOptions(value) {
        this.setState({ value });
    };

    componentWillUnmount() {
        console.log(`[WIZARD] Select value: ${this.state.value}`);
    }

    render() {
        return (
            <React.Fragment>
                <h2> Select values for Example </h2>
                <Form className='example-wizard example-wizard__step-2'>
                    <FormGroup isRequired fieldId="select-example">
                        <Radio id="one-example" name="select-example" label="Example Select" aria-label="Example Select" />
                        <FormSelect value= { this.state.value } onChange={ this.onChangeexampleOptions } aria-label="Select Input">
                            { this.exampleOptions.map((option, index) => (
                                <FormSelectOption isDisabled={ option.disabled } key={ index } value={ option.value } label={ option.label } />
                            )) }
                        </FormSelect>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    };
};

export default Step3;
