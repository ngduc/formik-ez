import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DisplayFormikState from './DisplayFormikState';

import Form from './EzForm';
import Field from './EzField';
import Button from './EzButton';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  dob: Yup.string().required('Birthday is required!')
});

export default class extends React.Component {
  state: any = {};

  onSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 800);
    setSubmitting(true);
  }

  renderForm = (props: any) => (
    <Form use="spectre">
      <Field>Email | email</Field>
      <Field>Birthday | Date of birth (mm/dd/yyyy) | dob</Field>

      <Button type="submit" disabled={props.isSubmitting} />
      <Button gap={10} disabled>Cancel</Button>

      <DisplayFormikState {...props} />
    </Form>
  )

  renderHorizontalForm = (props: any) => {
    const css = {
      label: 'col-3 col-sm-12',
      control: 'col-9 col-sm-12',
      error: 'left25pct'
    }
    return (
      <Form use="spectre" css={css}>
        <Field>Email | email</Field>
        <Field>Birthday | Date of birth (mm/dd/yyyy) | dob</Field>

        <Button leftGap={'25%'} type="submit" disabled={props.isSubmitting} />
        <Button gap={10} disabled>Cancel</Button>

        <DisplayFormikState {...props} />
      </Form>
    )
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />

        <hr />
        <h3>Horizontal Form</h3>
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={this.onSubmit}
          render={this.renderHorizontalForm}
        />
      </div>
    );
  }
}
