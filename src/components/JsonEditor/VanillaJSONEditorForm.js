import { JSONEditor } from "vanilla-jsoneditor";
import { useEffect, useRef } from "react";
import "./VanillaJSONEditor.css";
import { Form } from "antd";

const FormItem = Form.Item;

function SvelteJSONEditor(props) {
  const { getFieldDecorator, formItemProps, onChange, value } = props;
  const refContainer = useRef(null);
  const refEditor = useRef(null);

  useEffect(() => {
    // create editor
    console.log("create editor", refContainer.current);
    refEditor.current = new JSONEditor({
      target: refContainer.current,
      props: {
        ...props,
        mode: "text",
        value,
      },
      onChange: (newValue) => {
        if (onChange) {
          onChange(newValue);
        }
      },
    });

    return () => {
      // destroy editor
      if (refEditor.current) {
        console.log("destroy editor");
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, []);

  // update props
  useEffect(() => {
    if (refEditor.current) {
      console.log("update props", props);
      refEditor.current.updateProps(props);
      refEditor.current.setValue(value);
    }
  }, [props, value]);

  return <div className="vanilla-jsoneditor-react" ref={refContainer}></div>;
}

const FormJSONEditor = ({ form, name, ...rest }) => {
  const { getFieldDecorator } = form;

  return (
    <FormItem>
      {getFieldDecorator(name, {
        initialValue: "",
      })(<SvelteJSONEditor {...rest} />)}
    </FormItem>
  );
};

export default Form.create()(FormJSONEditor);
