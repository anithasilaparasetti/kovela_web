import type { MyFormProps } from '@/components/core/form';

import { css } from '@emotion/react';
import { useEffect } from 'react';

import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { useLocale } from '@/locales';
import { blueButtonStyle, yellowButtonStyle } from '@/stores/utils';

interface SearchProps<T> extends MyFormProps<T> {
  onSearch: (values: T) => void;
  onCreate: () => void;
  onReport: () => void;
  dontShowReport: true;
}

const BaseSearch = <T extends object>(props: SearchProps<T>) => {
  const { children, searchString, onSearch, onCreate, onReport, dontShowReport, ...rest } = props;
  const [form] = MyForm.useForm<T>();
  const { formatMessage } = useLocale();

  const onSubmit = async () => {
    const values = await form.validateFields();

    console.log('here', values);

    if (values) {
      onSearch(values);
    }
  };

  useEffect(async () => {
    const values = await form.validateFields();

    if (values) {
      onSearch(values);
    }
  }, [searchString]);

  return (
    <div css={styles}>
      <MyForm {...rest} form={form} layout="inline">
        {children}
        <MyForm.Item>
          {/* <MyButton type="primary" onClick={onSubmit}>
            {formatMessage({ id: 'component.search.request' })}
          </MyButton> */}

          {/* <MyButton onClick={() => form.resetFields()}>{formatMessage({ id: 'component.search.reset' })}</MyButton> */}

          {onCreate && (
            <MyButton style={blueButtonStyle} onClick={() => onCreate()}>
              {formatMessage({ id: 'component.search.create' })}
            </MyButton>
          )}
          {!dontShowReport && (
            <MyButton style={blueButtonStyle} onClick={() => onReport()}>
              {formatMessage({ id: 'component.search.report' })}
            </MyButton>
          )}
        </MyForm.Item>
      </MyForm>
    </div>
  );
};

const MySearch = Object.assign(BaseSearch, {
  Item: MyForm.Item,
});

export default MySearch;

const styles = css`
  padding: 20px;
  .ant-form-item {
    margin-bottom: 20px;
  }
`;
